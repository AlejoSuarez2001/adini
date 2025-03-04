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
  Flex,
  Heading,
  useDisclosure,
  Select,
  Image,
  Text,
  Icon,
} from "@chakra-ui/react";
import {
  EditIcon,
  DeleteIcon,
  AddIcon,
  ArrowBackIcon,
  ArrowForwardIcon,
} from "@chakra-ui/icons";
import { useCategory } from "../../contexts/CategoryContext";
import { useCatalog } from "../../contexts/CatalogContext";
import { useEffect, useState } from "react";
import Loading from "../molecules/Loading";
import ModalForm from "../organisms/ModalForm";
import * as Yup from "yup";
import ModalDelete from "../organisms/ModalDelete";
import { FiLayers } from "react-icons/fi";

export default function AdminCategories() {
  const {
    getCategories,
    addCategory,
    updateCategory,
    deleteCategory,
    categories,
  } = useCategory();
  const { getCatalogs, catalogs } = useCatalog();
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    imgPath: "",
    catalog_id: "",
  });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [action, setAction] = useState("false");
  const [term, setTerm] = useState("");
  const [page, setPage] = useState(10);
  const [filteredCategories, setFilteredCategories] = useState([]);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const {
    isOpen: isOpenDelete,
    onOpen: onOpenDelete,
    onClose: onCloseDelete,
  } = useDisclosure();

  const resetFormData = () => {
    setFormData({ name: "", description: "", imgPath: "", catalog_id: "" });
    setError(false);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleFileChange = (e) => {
    const { name, files } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: files[0] }));
  };

  const handleAdd = async () => {
    await addCategory(formData);
  };

  const handleUpdate = async (id) => {
    await updateCategory(id, formData);
  };

  const handleDelete = async (id) => {
    const res = await deleteCategory(id);
    return res;
  };

  const validationSchema = Yup.object({
    name: Yup.string().required("El nombre es obligatorio"),
    catalog_id: Yup.number()
      .typeError("El catálogo es obligatorio")
      .required("El catálogo es obligatorio"),
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
    await getCatalogs();
    const data = await getCategories();
    setFilteredCategories(data);
    setLoading(false);
  }

  function searchTerm(term = "") {
    const filter = categories.filter((category) =>
      category.name.toLowerCase().includes(term.toLowerCase())
    );
    setFilteredCategories(filter);
  }

  const filterByCatalogs = (catalogId) => {
    const filtered = categories.filter((category) =>
      catalogId ? category.catalog_id == catalogId : true
    );
    setFilteredCategories(filtered);
  };

  useEffect(() => {
    searchTerm(term);
  }, [categories]);

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
            name: "Imagen",
            element: (
              <Input
                py={1}
                type="file"
                name="image"
                onChange={handleFileChange}
                size="md"
              />
            ),
          },
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
          {
            name: "Descripción",
            element: (
              <Input
                name="description"
                value={formData?.description}
                onChange={handleChange}
                size="md"
              />
            ),
          },
          {
            name: "Catálogo",
            element: (
              <Select
                name="catalog_id"
                value={formData?.catalog_id}
                onChange={handleChange}
                size="md"
              >
                <option value="">Elige una opción</option>
                {catalogs.map((catalog, index) => {
                  return (
                    <option key={index} value={catalog.id}>
                      {catalog.name}
                    </option>
                  );
                })}
              </Select>
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
            <Icon as={FiLayers} boxSize={8} />
            <Heading mb={0}>Categorías</Heading>
          </HStack>
          <Box
            display="flex"
            flexDirection={{ base: "column", lg: "row" }}
            justifyContent={{ base: "start", lg: "space-between" }}
            alignItems={{ base: "start", lg: "center" }}
            width="100%"
            mb={{ base: 8, lg: 16 }}
          >
            <Box display="flex" flexDirection={{ base: "column", md: "row" }}>
              <Flex>
                <Box
                  display="flex"
                  flexDirection="column"
                  justifyContent="center"
                  mb={{ base: 5, lg: 0 }}
                >
                  <Input
                    placeholder="Buscar"
                    onChange={(e) => {
                      setTerm(e.target.value);
                      searchTerm(e.target.value);
                    }}
                    width={{ base: "200px", lg: "300px" }}
                    me={5}
                    mb={5}
                  />
                  <Select
                    placeholder="Filtrar por Catálogo"
                    onChange={(e) => filterByCatalogs(e.target.value)}
                    width={{ base: "200px", lg: "300px" }}
                  >
                    <option value="">Todas</option>
                    {catalogs.map((catalog) => (
                      <option key={catalog.id} value={catalog.id}>
                        {catalog.name}
                      </option>
                    ))}
                  </Select>
                </Box>
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
              </Flex>
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
                {page - 10} - {categories.length}
              </Text>
              <IconButton
                icon={<ArrowForwardIcon />}
                aria-label="Adelante"
                size="md"
                variant="ghost"
                onClick={() => {
                  if (categories.length > page) setPage((prev) => prev + 10);
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
                  <Th>Imagen</Th>
                  <Th>Nombre</Th>
                  <Th>Acciones</Th>
                </Tr>
              </Thead>
              <Tbody>
                {filteredCategories.map((category, index) => (
                  <>
                    {index + 1 > page - 10 && index + 1 <= page ? (
                      <Tr key={category.id}>
                        <Td width="20%">
                          <Image
                            src={`${process.env.REACT_APP_API_URL}/${category.imgPath}`}
                            alt="Imagen de la Categoria"
                            height={{
                              base: "40px",
                              md: "80px",
                              lg: "60px",
                              xl: "80px",
                            }}
                          />
                        </Td>
                        <Td width="60%">{category.name}</Td>
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
                                setFormData(category);
                                onOpen();
                              }}
                            />
                            <IconButton
                              icon={<DeleteIcon />}
                              aria-label="Eliminar"
                              size="md"
                              colorScheme="red"
                              onClick={() => {
                                setFormData(category);
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
            title="Categoria"
            handleDelete={() => handleDelete(formData.id)}
            resetFormData={resetFormData}
            isOpen={isOpenDelete}
            onClose={onCloseDelete}
            error={error}
            setError={setError}
            errorMsg="No puedes eliminar la categoria si aún tiene productos asociados."
          />
        </Box>
      )}
    </>
  );
}
