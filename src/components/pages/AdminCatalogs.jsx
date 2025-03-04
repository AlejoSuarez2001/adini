import {
  Box,
  IconButton,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  Input,
  HStack,
  Heading,
  useDisclosure,
  Text,
  Icon
} from "@chakra-ui/react";
import {
  EditIcon,
  DeleteIcon,
  AddIcon,
  ArrowBackIcon,
  ArrowForwardIcon,
} from "@chakra-ui/icons";
import { useCatalog } from "../../contexts/CatalogContext";
import { useEffect, useState } from "react";
import Loading from "../molecules/Loading";
import ModalForm from "../organisms/ModalForm";
import * as Yup from "yup";
import ModalDelete from "../organisms/ModalDelete";
import { FiBox, FiLayers, FiList, FiInfo, FiLogOut } from "react-icons/fi";

export default function AdminCatalogs() {
  const { getCatalogs, addCatalog, updateCatalog, deleteCatalog, catalogs } =
    useCatalog();
  const [formData, setFormData] = useState({ name: "" });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [action, setAction] = useState("false");
  const [term, setTerm] = useState("");
  const [page, setPage] = useState(10);
  const [filteredCatalogs, setFilteredCatalogs] = useState([]);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const {
    isOpen: isOpenDelete,
    onOpen: onOpenDelete,
    onClose: onCloseDelete,
  } = useDisclosure();

  const resetFormData = () => {
    setFormData({ name: "" });
    setError(false);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleAdd = async () => {
    await addCatalog(formData);
  };

  const handleUpdate = async (id) => {
    await updateCatalog(id, formData);
  };

  const handleDelete = async (id) => {
    const res = await deleteCatalog(id);
    return res;
  };

  const validationSchema = Yup.object({
    name: Yup.string().required("El nombre es obligatorio"),
  });

  const validateSchema = async () => {
    try {
      await validationSchema.validate(formData);
      return true;
    } catch (error) {
      setError(error.message);
      return false;
    }
  };

  async function fetchData() {
    const data = await getCatalogs();
    setFilteredCatalogs(data);
    setLoading(false);
  }

  function searchTerm(term = "") {
    const filter = catalogs.filter((catalog) =>
      catalog.name.toLowerCase().includes(term.toLowerCase())
    );
    setFilteredCatalogs(filter);
  }

  useEffect(() => {
    searchTerm(term);
  }, [catalogs]);

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <ModalForm
        title="Catálogo"
        formData={formData}
        resetFormData={resetFormData}
        validateSchema={validateSchema}
        error={error}
        handleAdd={handleAdd}
        handleUpdate={handleUpdate}
        handleChange={handleChange}
        isOpen={isOpen}
        onClose={onClose}
        action={action}
        inputs={[
          {
            name: "Nombre",
            element: (
              <Input
                name="name"
                value={formData?.name}
                onChange={handleChange}
                size="md"
              />
            ),
          },
        ]}
      />
      {loading ? (
        <Box
          display="flex"
          justifyContent="center"
          alignItems="center"
          width="100%"
          height={{ base: "80vh", lg: "auto" }}
        >
          <Loading />
        </Box>
      ) : (
        <Box
          display="flex"
          flexDirection="column"
          width={"100%"}
          m={{ base: 8, md: 16 }}
        >
          <HStack mb={10}>
            <Icon as={FiList} boxSize={8} />
            <Heading m={0}>Catálogos</Heading>
          </HStack>
          <Box
            display="flex"
            flexDirection={{ base: "column", lg: "row" }}
            justifyContent={{ base: "start", lg: "space-between" }}
            alignItems={{ base: "start", lg: "center" }}
            width="100%"
            mb={{ base: 8, lg: 16 }}
          >
            <Box display="flex" flexDirection="row">
              <Input
                placeholder="Buscar"
                onChange={(e) => {
                  setTerm(e.target.value);
                  searchTerm(e.target.value);
                }}
                width={{ base: "200px", lg: "300px" }}
                me={5}
                mb={{ base: 5, lg: 0 }}
              />
              <IconButton
                icon={<AddIcon />}
                aria-label="Agregar"
                size="md"
                colorScheme="green"
                onClick={() => {
                  setAction("add");
                  onOpen();
                }}
              />
            </Box>
            <Box
              display="flex"
              flexDirection="row"
              justifyContent="center"
              alignItems="center"
            >
              <IconButton
                icon={<ArrowBackIcon />}
                aria-label="Atras"
                size="md"
                variant="ghost"
                onClick={() => {
                  if (page > 10) setPage((prev) => prev - 10);
                }}
              />
              <Text m={0} mx={5}>
                {page - 10} - {catalogs.length}
              </Text>
              <IconButton
                icon={<ArrowForwardIcon />}
                aria-label="Adelante"
                size="md"
                variant="ghost"
                onClick={() => {
                  if (catalogs.length > page) setPage((prev) => prev + 10);
                }}
              />
            </Box>
          </Box>

          <Box
            display={{ base: "block", lg: "flex" }}
            justifyContent={{ base: "auto", lg: "center" }}
            alignItems={{ base: "auto", lg: "center" }}
            flexDirection="column"
          >
            <Table
              variant="striped"
              size="md"
              minWidth="300px"
              colorScheme="gray"
            >
              <Thead>
                <Tr>
                  <Th>Nombre</Th>
                  <Th>Acciones</Th>
                </Tr>
              </Thead>
              <Tbody>
                {filteredCatalogs.map((catalog, index) => (
                  <>
                    {index + 1 > page - 10 && index + 1 <= page ? (
                      <Tr key={index}>
                        <Td width="80%">{catalog.name}</Td>
                        <Td width="20%">
                          <HStack spacing={2}>
                            <IconButton
                              icon={<EditIcon />}
                              aria-label="Editar"
                              size="md"
                              variant="solid"
                              colorScheme="blue"
                              onClick={() => {
                                setAction("update");
                                setFormData(catalog);
                                onOpen();
                              }}
                            />
                            <IconButton
                              icon={<DeleteIcon />}
                              aria-label="Eliminar"
                              size="md"
                              colorScheme="red"
                              onClick={() => {
                                setFormData(catalog);
                                onOpenDelete();
                              }}
                            />
                          </HStack>
                        </Td>
                      </Tr>
                    ) : (
                      <></>
                    )}
                  </>
                ))}
              </Tbody>
            </Table>
          </Box>
          <ModalDelete
            title="Catálogo"
            handleDelete={() => handleDelete(formData.id)}
            resetFormData={resetFormData}
            isOpen={isOpenDelete}
            onClose={onCloseDelete}
            error={error}
            setError={setError}
            errorMsg="No puedes eliminar el catálogo si aún tiene categorias asociadas."
          />
        </Box>
      )}
    </>
  );
}
