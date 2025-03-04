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

export default function ModalDelete({
  title,
  handleDelete,
  resetFormData,
  isOpen,
  onClose,
  error,
  setError,
  errorMsg,
}) {
  async function handleDeleteOption() {
    const res = await handleDelete();
    if (res?.status == "success") {
      handleClose();
    } else {
      setError(errorMsg);
    }
  }

  function handleClose() {
    resetFormData();
    setError(false);
    onClose();
  }

  return (
    <Modal isOpen={isOpen} onClose={handleClose} isCentered>
      <ModalOverlay />
      <ModalContent maxH="80vh">
        <ModalHeader pb={4}>
          Eliminar {title}{" "}
          {error && (
            <Text mt={3} color="red.500" fontSize="sm">
              {error}
            </Text>
          )}
        </ModalHeader>
        <ModalCloseButton />
        <ModalFooter>
          <Button colorScheme="red" mr={3} onClick={() => handleDeleteOption()}>
            Eliminar
          </Button>
          <Button variant="ghost" onClick={onClose}>
            Cancelar
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
}
