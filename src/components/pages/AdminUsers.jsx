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
  Select,
  Image,
  Switch,
  Text,
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
import { useUser } from "../../contexts/UserContext";
import { useEffect, useState } from "react";
import Loading from "../molecules/Loading";
import ModalForm from "../organisms/ModalForm";
import * as Yup from "yup";
import ModalDelete from "../organisms/ModalDelete";

export default function AdminUsers() {
  const { getUsers, addUser, deleteUser, users } = useUser();
  const [formData, setFormData] = useState({
    name: "",
    lastname: "",
    email: "",
    password: "",
  });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [action, setAction] = useState("false");
  const [term, setTerm] = useState("");
  const [page, setPage] = useState(10);
  const [filteredUsers, setFilteredUsers] = useState([]);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const {
    isOpen: isOpenDelete,
    onOpen: onOpenDelete,
    onClose: onCloseDelete,
  } = useDisclosure();

  const resetFormData = () => {
    setFormData({ name: "", lastname: "", email: "", password: "" });
    setError(false);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleAdd = async () => {
    await addUser(formData);
  };

  const handleDelete = async (id) => {
    const res = await deleteUser(id);
    return res;
  };

  const validationSchema = Yup.object({
    name: Yup.string().required("El nombre es obligatorio"),
    lastname: Yup.string().required("El apellido es obligatorio"),
    email: Yup.string().required("El email es obligatorio"),
    password: Yup.string()
      .required("La contraseña es obligatoria")
      .min(6, "La contraseña debe tener al menos 6 caracteres"),
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
    const data = await getUsers();
    setFilteredUsers(data);
    setLoading(false);
  }

  function searchTerm(term = "") {
    const filter = users.filter((user) =>
      user.name.toLowerCase().includes(term.toLowerCase())
    );
    setFilteredUsers(filter);
  }

  useEffect(() => {
    searchTerm(term);
  }, [users]);

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <ModalForm
        title="Usuario"
        formData={formData}
        resetFormData={resetFormData}
        validateSchema={validateSchema}
        error={error}
        handleAdd={handleAdd}
        handleUpdate={{}}
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
          {
            name: "Apellido",
            element: (
              <Input
                name="lastname"
                value={formData?.lastname}
                onChange={handleChange}
                size="md"
              />
            ),
          },
          {
            name: "Correo Electrónico",
            element: (
              <Input
                name="email"
                value={formData?.email}
                onChange={handleChange}
                size="md"
                type="email"
              />
            ),
          },
          {
            name: "Contraseña",
            element: (
              <Input
                name="password"
                value={formData?.password}
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
          <Heading mb={10}>Usuarios</Heading>
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
                {page - 10} - {page}
              </Text>
              <IconButton
                icon={<ArrowForwardIcon />}
                aria-label="Adelante"
                size="md"
                variant="ghost"
                onClick={() => {
                  if (users.length > page) setPage((prev) => prev + 10);
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
                  <Th>Correo</Th>
                  <Th>Acciones</Th>
                </Tr>
              </Thead>
              <Tbody>
                {filteredUsers.map((user, index) => (
                  <>
                    {index + 1 > page - 10 && index + 1 <= page ? (
                      <Tr key={index}>
                        <Td width="30%">
                          {user.name} {user.lastname}
                        </Td>
                        <Td width="50%">{user.email}</Td>
                        <Td width="20%">
                          <HStack spacing={2}>
                            <IconButton
                              icon={<DeleteIcon />}
                              aria-label="Eliminar"
                              size="md"
                              colorScheme="red"
                              onClick={() => {
                                setFormData(user);
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
            title="Usuario"
            handleDelete={() => handleDelete(formData.id)}
            resetFormData={resetFormData}
            isOpen={isOpenDelete}
            onClose={onCloseDelete}
            error={error}
            setError={setError}
            errorMsg="Error al intentar eliminar el usuario"
          />
        </Box>
      )}
    </>
  );
}
