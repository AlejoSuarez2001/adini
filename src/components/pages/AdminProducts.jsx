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
  Flex,
  HStack,
  Heading,
  useDisclosure,
  Select,
  Image,
  Switch,
  Text,
  Icon,
  InputGroup,
  InputLeftElement,
  InputRightElement,
} from "@chakra-ui/react";
import {
  EditIcon,
  DeleteIcon,
  AddIcon,
  ArrowBackIcon,
  ArrowForwardIcon,
} from "@chakra-ui/icons";
import { useProduct } from "../../contexts/ProductContext";
import { useCategory } from "../../contexts/CategoryContext";
import { useEffect, useState } from "react";
import Loading from "../molecules/Loading";
import ModalForm from "../organisms/ModalForm";
import * as Yup from "yup";
import ModalDelete from "../organisms/ModalDelete";
import { FiBox } from "react-icons/fi";

export default function AdminProducts() {
  const { getProducts, addProduct, updateProduct, deleteProduct, products } =
    useProduct();
  const { getCategories, categories } = useCategory();
  const [formData, setFormData] = useState({
    imgPath: "",
    name: "",
    price: "",
    sku: "",
    isAvailable: true,
    isActive: true,
    description: "",
    category_id: "",
  });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [action, setAction] = useState("false");
  const [term, setTerm] = useState("");
  const [page, setPage] = useState(10);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const { isOpen, onOpen, onClose } = useDisclosure();

  const {
    isOpen: isOpenDelete,
    onOpen: onOpenDelete,
    onClose: onCloseDelete,
  } = useDisclosure();

  const resetFormData = () => {
    setFormData({
      imgPath: "",
      name: "",
      price: "",
      sku: "",
      isAvailable: true,
      isActive: true,
      description: "",
      category_id: "",
    });
    setError(false);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSwitchChange = (e) => {
    const { name, checked } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: checked }));
  };

  const handleFileChange = (e) => {
    const { name, files } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: files[0] }));
  };

  const handleAdd = async () => {
    await addProduct(formData);
  };

  const handleUpdate = async (id) => {
    await updateProduct(id, formData);
  };

  const handleDelete = async (id) => {
    const res = await deleteProduct(id);
    return res;
  };

  const validationSchema = Yup.object({
    name: Yup.string().required("El nombre es obligatorio"),
    price: Yup.number()
      .typeError("El precio debe ser un numero entero")
      .integer("El precio debe ser un número entero")
      .required("El precio es obligatorio"),
    sku: Yup.string().required("El SKU es obligatorio"),
    isAvailable: Yup.boolean()
      .typeError("Definir si el producto debe mostrarse es obligatorio")
      .required("Definir si el producto debe mostrarse es obligatorio"),
    isActive: Yup.boolean()
      .typeError("Definir el stock es obligatorio")
      .required("Definir el stock obligatorio"),
    category_id: Yup.number()
      .typeError("La categoria es obligatoria")
      .required("La categoria es obligatoria"),
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
    await getCategories();
    const data = await getProducts();
    setFilteredProducts(data);
    setLoading(false);
  }

  function searchTerm(term = "") {
    const filter = products.filter((product) =>
      product.name.toLowerCase().includes(term.toLowerCase())
    );
    setFilteredProducts(filter);
  }

  const filterByCategory = (categoryId) => {
    const filtered = products.filter((product) =>
      categoryId ? product.category_id == categoryId : true
    );
    setFilteredProducts(filtered);
  };

  useEffect(() => {
    searchTerm(term);
  }, [products]);

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <ModalForm
        title="Producto"
        formData={formData}
        resetFormData={resetFormData}
        validateSchema={validateSchema}
        error={error}
        setError={setError}
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
            name: "SKU",
            element: (
              <Input
                name="sku"
                value={formData?.sku}
                onChange={handleChange}
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
            name: "Precio",
            element: (
              <>
                <InputGroup>
                  <InputLeftElement>
                    <Text pt={3} fontSize="lg" color="gray.500">
                      $
                    </Text>
                  </InputLeftElement>
                  <Input
                    name="price"
                    value={formData?.price}
                    onChange={handleChange}
                    size="md"
                  />
                </InputGroup>
              </>
            ),
          },
          {
            name: "Categoria",
            element: (
              <Select
                name="category_id"
                value={formData?.category_id}
                onChange={handleChange}
                size="md"
              >
                <option value="">Elige una opción</option>
                {categories.map((category, index) => {
                  return (
                    <option key={index} value={category.id}>
                      {category.name}
                    </option>
                  );
                })}
              </Select>
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
            name: "Alto",
            element: (
              <>
                <InputGroup>
                  <InputRightElement>
                    <Text pt={3} fontSize="lg" color="gray.500">
                      cm
                    </Text>
                  </InputRightElement>
                  <Input
                    name="height"
                    value={formData?.height}
                    onChange={handleChange}
                    size="md"
                  />
                </InputGroup>
              </>
            ),
          },
          {
            name: "Ancho",
            element: (
              <>
                <InputGroup>
                  <InputRightElement>
                    <Text pt={3} fontSize="lg" color="gray.500">
                      cm
                    </Text>
                  </InputRightElement>
                  <Input
                    name="width"
                    value={formData?.width}
                    onChange={handleChange}
                    size="md"
                  />
                </InputGroup>
              </>
            ),
          },
          {
            name: "Profundidad",
            element: (
              <>
                <InputGroup>
                  <InputRightElement>
                    <Text pt={3} fontSize="lg" color="gray.500">
                      cm
                    </Text>
                  </InputRightElement>
                  <Input
                    name="depth"
                    value={formData?.depth}
                    onChange={handleChange}
                    size="md"
                  />
                </InputGroup>
              </>
            ),
          },
          {
            name: "Peso",
            element: (
              <>
                <InputGroup>
                  <InputRightElement>
                    <Text pt={3} fontSize="lg" color="gray.500">
                      kg
                    </Text>
                  </InputRightElement>
                  <Input
                    name="weight"
                    value={formData?.weight}
                    onChange={handleChange}
                    size="md"
                  />
                </InputGroup>
              </>
            ),
          },
          {
            name: "¿Hay Stock?",
            switch: true,
            element: (
              <Switch
                name="isAvailable"
                isChecked={formData.isAvailable}
                onChange={handleSwitchChange}
                size="md"
              />
            ),
          },
          {
            name: "¿Mostrar Producto?",
            switch: true,
            element: (
              <Switch
                name="isActive"
                isChecked={formData.isActive}
                onChange={handleSwitchChange}
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
          m={{ base: 8, lg: 16 }}
        >
          <HStack mb={10}>
            <Icon as={FiBox} boxSize={8} />
            <Heading m={0}>Productos</Heading>
          </HStack>
          <Box
            display="flex"
            flexDirection={{ base: "column", lg: "row" }}
            justifyContent={{ base: "start", lg: "space-between" }}
            alignItems={{ base: "start", lg: "center" }}
            width="100%"
            mb={{ base: 8, md: 16 }}
          >
            <Box display="flex" flexDirection={{ base: "column", md: "row" }} >
              <Flex>
                <Box display="flex" flexDirection="column" justifyContent="center" mb={{ base: 5, lg: 0 }}>
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
                    placeholder="Filtrar por Categoría"
                    onChange={(e) => filterByCategory(e.target.value)}
                    width={{ base: "200px", lg: "300px" }}
                  >
                    <option value="">Todas</option>
                    {categories.map((category) => (
                      <option key={category.id} value={category.id}>
                        {category.name}
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
                {page - 10} - {products.length}
              </Text>
              <IconButton
                icon={<ArrowForwardIcon />}
                aria-label="Adelante"
                size="md"
                variant="ghost"
                onClick={() => {
                  if (products.length > page) setPage((prev) => prev + 10);
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
                  <Th>SKU</Th>
                  <Th>Imagen</Th>
                  <Th>Nombre</Th>
                  <Th>Precio</Th>
                  <Th>Acciones</Th>
                </Tr>
              </Thead>
              <Tbody>
                {filteredProducts.map((product, index) => (
                  <>
                    {index + 1 > page - 10 && index + 1 <= page ? (
                      <Tr key={product.id}>
                        <Td width="10%" fontWeight="700">
                          {product.sku}
                        </Td>
                        <Td width="22.5%">
                          <Image
                            src={`${process.env.REACT_APP_API_URL}/${product.imgPath}`}
                            alt="Imagen del Producto"
                            height={{
                              base: "40px",
                              md: "80px",
                              lg: "60px",
                              xl: "80px",
                            }}
                          />
                        </Td>
                        <Td width="22.5%" fontWeight="500">
                          {product.name}
                        </Td>
                        <Td width="22.5%" fontWeight="600">
                          ${product.price}.00
                        </Td>
                        <Td width="22.5%">
                          <HStack spacing={2}>
                            <IconButton
                              icon={<EditIcon />}
                              aria-label="Editar"
                              size="md"
                              variant="solid"
                              colorScheme="blue"
                              onClick={() => {
                                setAction("update");
                                setFormData(product);
                                onOpen();
                              }}
                            />
                            <IconButton
                              icon={<DeleteIcon />}
                              aria-label="Eliminar"
                              size="md"
                              colorScheme="red"
                              onClick={() => {
                                setFormData(product);
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
            title="Producto"
            handleDelete={() => handleDelete(formData.id)}
            resetFormData={resetFormData}
            isOpen={isOpenDelete}
            onClose={onCloseDelete}
            error={error}
            setError={setError}
            errorMsg="Error al intentar eliminar el producto."
          />
        </Box>
      )}
    </>
  );
}
