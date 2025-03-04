import {
  Box,
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
  FormLabel,
  Text,
} from "@chakra-ui/react";
import { useState } from "react";
import Loading from "../molecules/Loading";

export default function ModalForm({
  title,
  formData,
  resetFormData,
  validateSchema,
  error,
  handleAdd,
  handleUpdate,
  handleChange,
  isOpen,
  onClose,
  action,
  inputs,
}) {
  const [loading, setLoading] = useState(false);

  async function handleSave(e) {
    e.preventDefault();
    
    const isValid = await validateSchema();
    if (!isValid) {
      return;
    }
    setLoading(true);
    switch (action) {
      case "add":
        await handleAdd();
        break;
      case "update":
        await handleUpdate(formData.id);
        break;
    }

    resetFormData();
    onClose();
    setLoading(false);
  }

  function handleClose() {
    resetFormData();
    onClose();
  }

  return (
    <Modal isOpen={isOpen} onClose={handleClose} isCentered>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader pb={error ? 0 : 4}>
          {action == "add" ? "Agregar" : "Editar"} {title}
          {error && (
            <Text mt={3} color="red.500" fontSize="sm">
              {error}
            </Text>
          )}
        </ModalHeader>
        <form onSubmit={handleSave}>
          {loading ? (
            <Box my={16}>
              <Loading />
            </Box>
          ) : (
            <>
              <ModalCloseButton />
              <ModalBody  maxH="70vh" overflowY="auto">
                {inputs.map((input, index) => {
                  return (
                    <Box
                      key={index}
                      mb={index == inputs.length - 1 ? 0 : 5}
                      style={
                        input.switch
                          ? {
                              display: "flex",
                              flexDirection: "row",
                              justifyContent: "space-between",
                              alignItems: "center",
                            }
                          : {}
                      }
                    >
                      <FormLabel htmlFor="name">{input.name}</FormLabel>
                      {input.element}
                    </Box>
                  );
                })}
              </ModalBody>
            </>
          )}
          <ModalFooter>
            <Button
              colorScheme="blue"
              mr={3}
              type="submit"
              isDisabled={loading}
            >
              Guardar
            </Button>
            <Button variant="ghost" onClick={onClose} isDisabled={loading}>
              Cancelar
            </Button>
          </ModalFooter>
        </form>
      </ModalContent>
    </Modal>
  );
}
