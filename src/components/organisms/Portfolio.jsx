import { Box, Flex, Heading } from "@chakra-ui/react";
import Title from "../molecules/Title";
import WebProyect from "../molecules/WebProyect";
import MobileProyect from "../molecules/MobileProyect";
import credencial1 from "../../videos/credencial1.webm";
import credencial2 from "../../videos/credencial2.webm";
import ripApp1 from "../../videos/ripapp1.webm";
import ripApp2 from "../../videos/ripapp2.webm";
import amigosCole1 from "../../videos/amigoscole1.webm";
import amigosCole2 from "../../videos/amigoscole2.webm";
import sia from "../../videos/sia.webm";
import samay from "../../videos/samay.webm";
import pap from "../../videos/pap.webm";
import ripAdmin from "../../videos/ripadmin.webm";

const webProjects = [
    {
        video: sia,
        imgs: [
            '/assets/portfolio/sia/Home.png',
            '/assets/portfolio/sia/Home 2.png',
            '/assets/portfolio/sia/Alias.png',
            '/assets/portfolio/sia/Alta de Usuarios.png',
            '/assets/portfolio/sia/Areas.png',
            '/assets/portfolio/sia/Credencial.png',
            '/assets/portfolio/sia/Difusiones.png',
            '/assets/portfolio/sia/Ticketera.png',
            '/assets/portfolio/sia/Traducciones.png',
            '/assets/portfolio/sia/Usuarios.png',
            '/assets/portfolio/sia/VPN.png',
        ],
        title: "Sistema Integrado de Aplicaciones",
        summary: "El Sistema Integrado de Aplicaciones (SIA) de la UTN Buenos Aires gestiona procesos administrativos y académicos con una arquitectura de microservicios, garantizando escalabilidad y seguridad. Integra OAuth 2.0 para autenticación, segmentación de roles y acceso remoto mediante VPN. Sus módulos incluyen Credencial Estudiantil, Gestión de Usuarios y Áreas, Difusiones, Traducciones y Reporte de Incidencias, optimizando la administración y comunicación institucional.",
        description:
            (
                <div>
                    <p>
                        Es el sistema principal de la Universidad Tecnológica Nacional (UTN), Buenos Aires, Argentina. Diseñado para gestionar y optimizar diversos procesos administrativos y académicos. Construido sobre una moderna infraestructura de microservicios, el SIA combina escalabilidad, seguridad y flexibilidad para satisfacer las demandas de una institución de alto nivel.
                    </p>
                    <br />
                    <h4>Características principales:</h4>
                    <br />
                    <ul>
                        <li><strong>Integración con OAuth 2.0:</strong> Utiliza servicios de autenticación para la gestión de usuarios institucionales, asegurando una experiencia segura y centralizada.</li>
                        <li><strong>Segmentación de roles:</strong> Los usuarios se agrupan por roles, lo que permite una personalización detallada del acceso a recursos y funcionalidades.</li>
                        <li><strong>Escalabilidad controlada:</strong> El diseño modular y basado en microservicios permite que el sistema crezca de forma eficiente.</li>
                    </ul>
                    <br />
                    <h4>Módulos del Sistema:</h4>
                    <br />
                    <ul>
                        <li><strong>Credencial Estudiantil:</strong> Permite a los alumnos visualizar su información académica y generar un QR verificable.</li>
                        <li><strong>Gestión de Alias:</strong> Facilita la creación y eliminación de alias institucionales.</li>
                        <li><strong>Gestión de Áreas:</strong> Administra grupos institucionales con autenticación segmentada.</li>
                        <li><strong>Módulo de Traducciones:</strong> Optimiza los flujos de trabajo de traducción académica.</li>
                        <li><strong>Envío de Difusiones:</strong> Comunicación masiva con listas predefinidas de destinatarios.</li>
                        <li><strong>Gestión de Usuarios:</strong> Administración de usuarios, permisos y accesos.</li>
                        <li><strong>Módulo de VPN:</strong> Acceso remoto a recursos mediante VPN.</li>
                        <li><strong>Reporte de Incidencias:</strong> Seguimiento de problemas técnicos con la ticketera institucional.</li>
                    </ul>
                    <br />
                    <p>
                        El SIA es una herramienta clave para el funcionamiento eficiente de la UTN, diseñada para atender las necesidades de alumnos, docentes y personal administrativo.
                    </p>
                    <p>
                        Link al Sitio:
                        <a href="https://sia.frba.utn.edu.ar/" target="_blank" style={{ color: "blue" }}> sia.frba.utn.edu.ar</a>
                    </p>
                </div >
            )
    },
    {
        video: ripAdmin,
        imgs: [
            '/assets/portfolio/rip-admin/RIP Admin 1.png',
            '/assets/portfolio/rip-admin/RIP Admin 2.png',
            '/assets/portfolio/rip-admin/RIP Admin 3.png',
            '/assets/portfolio/rip-admin/RIP Admin 4.png',
            '/assets/portfolio/rip-admin/RIP Admin 5.png',
            '/assets/portfolio/rip-admin/RIP Admin 6.png',
            '/assets/portfolio/rip-admin/RIP Admin 7.png',
            '/assets/portfolio/rip-admin/RIP Admin 8.png',
            '/assets/portfolio/rip-admin/RIP Admin 9.png',
        ],
        title: "RIP Admin",
        summary: "Aplicación web para la administración de la aplicación móvil 'RIP Alive'. Permite a los administradores visualizar la información de los usuarios, gestionar el estado de las suscripciones y pagos, configurar catálogos de la aplicación, generar cupones de descuento, entre otras funcionalidades.",
        description: (<></>)
    },
    {
        video: pap,
        imgs: [
            '/assets/portfolio/pap/PAP 1.png',
            '/assets/portfolio/pap/PAP 2.png',
            '/assets/portfolio/pap/PAP 3.png',
            '/assets/portfolio/pap/PAP 4.png',
            '/assets/portfolio/pap/PAP 5.png',
            '/assets/portfolio/pap/PAP 6.png',
            '/assets/portfolio/pap/PAP 7.png',
            '/assets/portfolio/pap/PAP 8.png',
            '/assets/portfolio/pap/PAP 9.png',
            '/assets/portfolio/pap/PAP 10.png',
            '/assets/portfolio/pap/PAP 11.png',
            '/assets/portfolio/pap/PAP 12.png',
        ],
        title: "Paso a Paso",
        summary: "Aplicación web desarrollada para una empresa mayorista, permite visualizar los productos disponibles y añadirlos a un carrito para realizar consultas. Además, incluye un panel de administrador para gestionar productos y configurar aspectos generales de la página.",
        description: (<></>)
    },
    {
        video: samay,
        imgs: [
            '/assets/portfolio/samay/Samay 1.png',
            '/assets/portfolio/samay/Samay 2.png',
            '/assets/portfolio/samay/Samay 3.png',
            '/assets/portfolio/samay/Samay 4.png',
            '/assets/portfolio/samay/Samay 5.png',
            '/assets/portfolio/samay/Samay 6.png',
        ],
        title: "Samay Wayra",
        summary: "Página web desarrollada para una empresa de alquiler de cabañas. Incluye una galería de fotos y una sección de contacto para realizar reservas de alojamiento.",
        description: (<></>)
    }
];

const mobileProjects = [
    {
        video1: credencial1,
        video2: credencial2,
        imgs: [
            '/assets/portfolio/credencial/Credencial 9.png',
            '/assets/portfolio/credencial/Credencial 10.png',
            '/assets/portfolio/credencial/Credencial 11.png',
            '/assets/portfolio/credencial/Credencial 12.png',
            '/assets/portfolio/credencial/Credencial 13.png',
            '/assets/portfolio/credencial/Credencial 14.png',
        ],
        title: "Credencial Estudiantil",
        summary: "Aplicación móvil diseñada como credencial digital para una universidad. Permite a los estudiantes validarse como alumnos mediante un código QR y facilita el acceso a información útil, como las materias en curso, el historial académico y una agenda detallada con los horarios de cada asignatura. También incluye una sección para descargar la constancia de alumno.",
        description: (<></>)
    },
    {
        video1: ripApp1,
        video2: ripApp2,
        title: "RIP Alive",
        imgs: [
            '/assets/portfolio/rip-app/RIP Alive App 1.png',
            '/assets/portfolio/rip-app/RIP Alive App 2.png',
            '/assets/portfolio/rip-app/RIP Alive App 3.png',
            '/assets/portfolio/rip-app/RIP Alive App 4.png',
            '/assets/portfolio/rip-app/RIP Alive App 5.png',
            '/assets/portfolio/rip-app/RIP Alive App 6.png',
            '/assets/portfolio/rip-app/RIP Alive App 7.png',
            '/assets/portfolio/rip-app/RIP Alive App 8.png',
            '/assets/portfolio/rip-app/RIP Alive App 9.png',
            '/assets/portfolio/rip-app/RIP Alive App 10.png',
            '/assets/portfolio/rip-app/RIP Alive App 11.png',
            '/assets/portfolio/rip-app/RIP Alive App 12.png',
            '/assets/portfolio/rip-app/RIP Alive App 13.png',
            '/assets/portfolio/rip-app/RIP Alive App 14.png',
        ],
        summary: "Aplicación móvil diseñada para permitir a los usuarios guardar su información importante en caso de fallecimiento, con el fin de informar a sus familiares sobre sus últimos deseos. Los usuarios pueden almacenar detalles sobre qué hacer con sus pertenencias, contactos clave, inversiones, información personal y de salud, entre otros. La app cuenta con un sistema de suscripción de pago y una tienda con productos.",
        description:
            (
                <div>
                    <p>
                        Es el sistema principal de la Universidad Tecnológica Nacional (UTN), Buenos Aires, Argentina. Diseñado para gestionar y optimizar diversos procesos administrativos y académicos. Construido sobre una moderna infraestructura de microservicios, el SIA combina escalabilidad, seguridad y flexibilidad para satisfacer las demandas de una institución de alto nivel.
                    </p>
                    <br />
                    <h4>Características principales:</h4>
                    <br />
                    <ul>
                        <li><strong>Integración con OAuth 2.0:</strong> Utiliza servicios de autenticación para la gestión de usuarios institucionales, asegurando una experiencia segura y centralizada.</li>
                        <li><strong>Segmentación de roles:</strong> Los usuarios se agrupan por roles, lo que permite una personalización detallada del acceso a recursos y funcionalidades.</li>
                        <li><strong>Escalabilidad controlada:</strong> El diseño modular y basado en microservicios permite que el sistema crezca de forma eficiente.</li>
                    </ul>
                    <br />
                    <h4>Módulos del Sistema:</h4>
                    <br />
                    <ul>
                        <li><strong>Credencial Estudiantil:</strong> Permite a los alumnos visualizar su información académica y generar un QR verificable.</li>
                        <li><strong>Gestión de Alias:</strong> Facilita la creación y eliminación de alias institucionales.</li>
                        <li><strong>Gestión de Áreas:</strong> Administra grupos institucionales con autenticación segmentada.</li>
                        <li><strong>Módulo de Traducciones:</strong> Optimiza los flujos de trabajo de traducción académica.</li>
                        <li><strong>Envío de Difusiones:</strong> Comunicación masiva con listas predefinidas de destinatarios.</li>
                        <li><strong>Gestión de Usuarios:</strong> Administración de usuarios, permisos y accesos.</li>
                        <li><strong>Módulo de VPN:</strong> Acceso remoto a recursos mediante VPN.</li>
                        <li><strong>Reporte de Incidencias:</strong> Seguimiento de problemas técnicos con la ticketera institucional.</li>
                    </ul>
                    <br />
                    <p>
                        El SIA es una herramienta clave para el funcionamiento eficiente de la UTN, diseñada para atender las necesidades de alumnos, docentes y personal administrativo.
                    </p>
                    <p>
                        Link al Sitio:
                        <a href="https://sia.frba.utn.edu.ar/" target="_blank" style={{ color: "blue" }}> sia.frba.utn.edu.ar</a>
                    </p>
                </div >
            )
    },
    {
        video1: amigosCole1,
        video2: amigosCole2,
        imgs: [],
        title: "Amigos del Cole",
        summary: "Aplicación móvil diseñada como billetera digital para estudiantes, en la que los padres pueden cargar dinero en las cuentas de sus hijos que asisten al colegio. La app permite a los estudiantes realizar compras en los buffets de las escuelas mediante un código QR. Incluye tres roles de usuario: cuentas de padres para administrar el saldo, cuentas de hijos para realizar las compras, y cuentas de buffet para gestionar los pagos recibidos.",
        description: (<></>)
    }
];

export default function Portfolio() {
    return (
        <>
            <Title title="Principales" subtitle="proyectos realizados" mt="130px" mb="40px" />

            <Box maxW="7xl" mx="auto" px={6}>
                <Heading textAlign="center" fontWeight={0} fontFamily="Poppins, sans-serif" fontSize={{ base: "2xl", xl: "3xl" }} my={12} color="primary.500">Aplicaciones Web</Heading>
                <Flex justify="center" wrap="wrap" gap={{ base: "40px", md: "60px" }}>
                    {webProjects.map((project, index) => (
                        <WebProyect key={index} video={project.video} imgs={project.imgs} title={project.title} description={project.description} summary={project.summary} />
                    ))}
                </Flex>

                <Heading textAlign="center" fontWeight={0} fontFamily="Poppins, sans-serif" fontSize={{ base: "2xl", xl: "3xl" }} my={12} color="primary.500">Aplicaciones Móviles</Heading>
                <Flex justify="center" wrap="wrap" gap={{ base: "40px", md: "60px" }}>
                    {mobileProjects.map((project, index) => (
                        <MobileProyect key={index} video1={project.video1} imgs={project.imgs} video2={project.video2} description={project.description} title={project.title} summary={project.summary} />
                    ))}
                </Flex>
            </Box>
        </>
    );
}
