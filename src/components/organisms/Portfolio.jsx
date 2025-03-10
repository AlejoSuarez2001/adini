import { Box, Flex, Heading } from "@chakra-ui/react";
import Title from "../molecules/Title";
import WebProyect from "../molecules/WebProyect";
import MobileProyect from "../molecules/MobileProyect";
import credencial1 from "../../portfolio/credencial/credencial1.webm";
import credencial2 from "../../portfolio/credencial/credencial2.webm";
import ripApp1 from "../../portfolio/rip-app/ripapp1.webm";
import ripApp2 from "../../portfolio/rip-app/ripapp2.webm";
import sia from "../../portfolio/sia/sia.webm";
import samay from "../../portfolio/samay/samay.webm";
import pap from "../../portfolio/pap/pap.webm";
import ripAdmin from "../../portfolio/rip-admin/ripadmin.webm";

const webProjects = [
    {
        video: sia,
        title: "Sistema Integrado de Aplicaciones",
        text: "El Frontend de SIA (Sistema Integrado de Aplicaciones) conecta los sistemas de la Facultad Tecnológica de Buenos Aires, ofreciendo una interfaz centralizada para estudiantes, docentes y administrativos. Desarrollado con tecnologías modernas como React y Material UI, el sistema garantiza navegación eficiente, accesibilidad y compatibilidad en múltiples dispositivos, integrando procesos académicos y administrativos en una sola plataforma."
    },
    {
        video: ripAdmin,
        title: "RIP Admin",
        text: "Aplicación web para la administración de la aplicación móvil 'RIP Alive'. Permite a los administradores visualizar la información de los usuarios, gestionar el estado de las suscripciones y pagos, configurar catálogos de la aplicación, generar cupones de descuento, entre otras funcionalidades."
    },
    {
        video: pap,
        title: "Paso a Paso",
        text: "Aplicación web desarrollada para una empresa mayorista, permite visualizar los productos disponibles y añadirlos a un carrito para realizar consultas. Además, incluye un panel de administrador para gestionar productos y configurar aspectos generales de la página."
    },
    {
        video: samay,
        title: "Samay Wayra",
        text: "Página web desarrollada para una empresa de alquiler de cabañas. Incluye una galería de fotos y una sección de contacto para realizar reservas de alojamiento."
    }
];

const mobileProjects = [
    {
        video1: credencial1,
        video2: credencial2,
        title: "Credencial Estudiantil",
        text: "Aplicación móvil diseñada como credencial digital para una universidad. Permite a los estudiantes validarse como alumnos mediante un código QR y facilita el acceso a información útil, como las materias en curso, el historial académico y una agenda detallada con los horarios de cada asignatura. También incluye una sección para descargar la constancia de alumno."
    },
    {
        video1: ripApp1,
        video2: ripApp2,
        title: "RIP Alive",
        text: "Aplicación móvil diseñada para permitir a los usuarios guardar su información importante en caso de fallecimiento, con el fin de informar a sus familiares sobre sus últimos deseos. Los usuarios pueden almacenar detalles sobre qué hacer con sus pertenencias, contactos clave, inversiones, información personal y de salud, entre otros. La app cuenta con un sistema de suscripción de pago y una tienda con productos."
    }
];

export default function Portfolio() {
    return (
        <>
            <Title title="Principales" subtitle="proyectos realizados" mt="130px" mb="40px" />

            <Box maxW="7xl" mx="auto" px={6}>
                <Heading textAlign="left" fontSize="3xl" my={12} color="purple.600">Desarrollo Web</Heading>
                <Flex justify="center" wrap="wrap" gap={{ base: "40px", md: "60px" }}>
                    {webProjects.map((project, index) => (
                        <WebProyect key={index} video={project.video} title={project.title} text={project.text} />
                    ))}
                </Flex>

                <Heading textAlign="left" fontSize="3xl" my={12} color="purple.600">Desarrollo Móvil</Heading>
                <Flex justify="center" wrap="wrap" gap={{ base: "40px", md: "60px" }}>
                    {mobileProjects.map((project, index) => (
                        <MobileProyect key={index} video1={project.video1} video2={project.video2} title={project.title} text={project.text} />
                    ))}
                </Flex>
            </Box>
        </>
    );
}
