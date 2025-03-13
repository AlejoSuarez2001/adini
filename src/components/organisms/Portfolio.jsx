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
                    <h4>Funcionalidades principales:</h4>
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
        description:
            (
                <div>
                    <p>
                        RIP Admin es una plataforma web diseñada para la gestión completa de los contenidos y usuarios de RIP Alive, ofreciendo a los administradores un control centralizado y eficiente sobre las funcionalidades y datos de la aplicación. Desarrollada con un enfoque en la productividad y la seguridad, RIP Admin asegura que la operación de la app sea fluida y adaptable a las necesidades de los usuarios finales.
                    </p>
                    <br />
                    <h4>Funcionalidades principales:</h4>
                    <br />
                    <ul>
                        <li><strong>Gestión de Usuarios:</strong> Control detallado de las cuentas de usuarios, incluyendo la verificación de perfiles, manejo de suscripciones y validación de códigos de invitación. Posibilidad de suspender, habilitar o modificar accesos según sea necesario.</li>
                        <li><strong>Control de Contenido:</strong> Administración de los datos y configuraciones disponibles para los usuarios en RIP Alive, incluyendo plantillas de legado, configuraciones de QR y preferencias de perfil.</li>
                        <li><strong>Gestión de Productos:</strong> Administración y seguimiento de la tienda integrada en la aplicación.</li>
                        <li><strong>Seguimiento de Actividades:</strong> Monitoreo de suscripciones activas, historial de pagos realizados a través de Mercado Pago, control del estado de los envíos de productos comprados desde la tienda y generación de reportes financieros.</li>
                        <li><strong>Personalización de la Experiencia:</strong> Gestión de notificaciones y comunicaciones directas con los usuarios de la app.</li>
                    </ul>
                    <br />
                    <p>
                        RIP Admin es el núcleo operativo que asegura el correcto funcionamiento de RIP Alive, ofreciendo a los administradores herramientas robustas y adaptables para mantener una experiencia de usuario óptima y un sistema escalable. Proporciona una visión centralizada de toda la actividad en RIP Alive, simplificando la toma de decisiones, la resolución de problemas y facilitando tareas administrativas para una gestión eficiente de los datos y funcionalidades.
                    </p>
                </div>
            )
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
        description:
            (
                <div>
                    <p>
                        Paso a Paso Distribuidora es una plataforma de comercio electrónico diseñada para optimizar la venta mayorista de productos de forma online. Desarrollada con React.js, combina un diseño moderno e intuitivo con funcionalidades avanzadas que simplifican tanto la experiencia del cliente como la gestión administrativa de la empresa.
                    </p>
                    <br />
                    <h4>Funcionalidades principales:</h4>
                    <br />
                    <ul>
                        <li><strong>E-commerce de Venta Mayorista:</strong> Una tienda online diseñada específicamente para satisfacer las necesidades del comercio mayorista, permitiendo a los clientes explorar y adquirir productos de forma rápida y eficiente.</li>
                        <li><strong>Gestión Integral:</strong> La plataforma incluye un panel de administración propio que permite a los administradores gestionar catálogos, categorías y productos (agregar, editar y eliminar), así como actualizar la información empresarial, como redes sociales y números de contacto.</li>
                        <li><strong>Optimización de Ventas:</strong> Paso a Paso Distribuidora simplifica el proceso de compra para los clientes mayoristas, mejorando la accesibilidad y visibilidad de los productos.</li>
                        <li><strong>Control Total:</strong> El panel de administración brinda herramientas fáciles de usar para mantener actualizada la tienda y la información de la empresa.</li>
                    </ul>
                    <br />
                    <p>
                        Paso a Paso Distribuidora es la solución perfecta para empresas mayoristas que buscan profesionalizar su presencia digital y maximizar sus ventas mediante una plataforma robusta, moderna y de fácil gestión.
                    </p>
                </div>
            )
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
        description: (
            <div>
                <p>
                    Samay Wayra es una web estática creada con el propósito de promocionar un exclusivo servicio de hospedaje vacacional. Diseñada para ofrecer una experiencia visual atractiva y funcional, permite a los visitantes conocer el complejo, sus características y los medios de contacto de manera clara y accesible.
                </p>
                <br />
                <h4>Características principales:</h4>
                <br />
                <ul>
                    <li><strong>Diseño minimalista y atractivo:</strong> La estética limpia y amigable de la web busca captar la atención del usuario, transmitiendo una sensación de tranquilidad y confort, alineada con la experiencia que ofrece el hospedaje.</li>
                    <li><strong>Información clara y organizada:</strong> Presenta detalles esenciales sobre el alojamiento, incluyendo imágenes, ubicación, comodidades y características clave para ayudar a los potenciales huéspedes a tomar una decisión informada.</li>
                    <li><strong>Formulario de contacto integrado:</strong> La web facilita la comunicación directa con el propietario del complejo mediante un formulario sencillo e intuitivo, permitiendo consultas rápidas y eficientes.</li>
                </ul>
                <br />
                <p>
                    Samay Wayra es la puerta de entrada para futuros huéspedes que buscan un destino acogedor y bien presentado en la web. Gracias a su enfoque visual y su facilidad de uso, permite que los interesados se informen y contacten con el dueño de manera rápida y sencilla.
                </p>
            </div>
        )
    }
];

const mobileProjects = [
    {
        video1: credencial1,
        video2: credencial2,
        imgs: [
            '/assets/portfolio/credencial/Credencial 10.png',
            '/assets/portfolio/credencial/Credencial 11.png',
            '/assets/portfolio/credencial/Credencial 9.png',
            '/assets/portfolio/credencial/Credencial 12.png',
            '/assets/portfolio/credencial/Credencial 13.png',
            '/assets/portfolio/credencial/Credencial 14.png',
        ],
        title: "Credencial Estudiantil",
        summary: "Aplicación móvil diseñada como credencial digital para una universidad. Permite a los estudiantes validarse como alumnos mediante un código QR y facilita el acceso a información útil, como las materias en curso, el historial académico y una agenda detallada con los horarios de cada asignatura. También incluye una sección para descargar la constancia de alumno con su historial académico.",
        description:
            (
                <div>
                    <p>
                        La Credencial Estudiantil es una aplicación móvil desarrollada para funcionar como una credencial digital para los alumnos de la Universidad Tecnológica Nacional, Buenos Aires, Argentina. Su diseño moderno y funcional está orientado a simplificar la validación de identidad estudiantil y brindar acceso rápido a información académica clave.
                    </p>
                    <br />
                    <h4>Funcionalidades principales:</h4>
                    <br />
                    <ul>
                        <li><strong>Validación de Identidad con QR:</strong> Los estudiantes pueden generar un código QR dinámico y vencible que certifica su condición de alumno regular, garantizando un proceso seguro y confiable.</li>
                        <li><strong>Información Académica Centralizada:</strong> Permite la visualización de materias en curso, historial académico con acceso a un registro completo del desempeño y las asignaturas cursadas, y una agenda académica que organiza los horarios de cada asignatura, optimizando la gestión del tiempo.</li>
                        <li><strong>Descarga de Constancias:</strong> Permite descargar una constancia de alumno regular de manera rápida y eficiente.</li>
                        <li><strong>Acceso Rápido y Seguro:</strong> La credencial digital reemplaza el uso de documentos físicos, mejorando la practicidad y reduciendo riesgos de extravío o falsificación.</li>
                    </ul>
                    <br />
                    <p>
                        Credencial Estudiantil es un recurso integral para los estudiantes, diseñado para mejorar su experiencia académica y facilitar la interacción con los servicios de la universidad.
                    </p>
                </div>
            )
    },
    {
        video1: ripApp1,
        video2: ripApp2,
        title: "RIP Alive",
        imgs: [
            '/assets/portfolio/rip-app/RIP Alive App 2.png',
            '/assets/portfolio/rip-app/RIP Alive App 1.png',
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
                (
                    <div>
                        <p>
                            RIP Alive es una innovadora aplicación móvil desarrollada en React Native, diseñada para permitir que los usuarios dejen un legado claro y accesible para sus beneficiarios en caso de fallecimiento. Con un enfoque en la planificación y la seguridad, la aplicación ofrece un entorno organizado y personalizable para gestionar información crucial y deseos personales.
                        </p>
                        <br />
                        <h4>Funcionalidades principales:</h4>
                        <br />
                        <ul>
                            <li><strong>Legado Personalizado:</strong> Los usuarios pueden registrar toda la información relevante sobre sus datos y pretensiones, asegurando que sus beneficiarios tengan acceso a todo lo necesario de manera clara y estructurada.</li>
                            <li><strong>Identificación Única:</strong> Incluye un apartado con un QR personal que identifica al usuario de forma única, facilitando la validación de su identidad.</li>
                            <li><strong>Gestión de Suscripciones:</strong> Integración con la pasarela de pagos Mercado Pago para suscripciones automatizadas, incluyendo la generación de códigos de invitación para expandir el uso de la aplicación.</li>
                            <li><strong>Perfil:</strong> Control total desde el perfil del usuario para gestionar la suscripción, configuraciones y estado del perfil.</li>
                            <li><strong>Tienda Integrada:</strong> Una tienda dentro de la app permite a los usuarios realizar compras, con herramientas para hacer seguimiento del estado de los envíos.</li>
                        </ul>
                        <br />
                        <p>
                            La aplicación ha sido diseñada con un enfoque escalable y modular para Android e iOS, permitiendo la adición de nuevas funcionalidades según las necesidades futuras. Además, cuenta con una interfaz intuitiva que facilita la gestión de datos, suscripciones y compras desde un solo lugar. La integración con Mercado Pago asegura un flujo de pagos ágil y automático, simplificando la experiencia del usuario.
                        </p>
                    </div>
                )
            )
    },
    {
        video1: amigosCole1,
        video2: amigosCole2,
        imgs: [
            '/assets/portfolio/amigos-cole/Amigos Cole 5.png',
            '/assets/portfolio/amigos-cole/Amigos Cole 3.png',
            '/assets/portfolio/amigos-cole/Amigos Cole 4.png',
            '/assets/portfolio/amigos-cole/Amigos Cole 1.png',
            '/assets/portfolio/amigos-cole/Amigos Cole 2.png',
        ],
        title: "Amigos del Cole",
        summary: "Aplicación móvil diseñada como billetera digital para estudiantes, en la que los padres pueden cargar dinero en las cuentas de sus hijos que asisten al colegio. La app permite a los estudiantes realizar compras en los buffets de las escuelas mediante un código QR. Incluye tres roles de usuario: cuentas de padres para administrar el saldo, cuentas de hijos para realizar las compras, y cuentas de buffet para gestionar los pagos recibidos.",
        description:
            (
                <div>
                    <p>
                        Aplicación que actúa como billetera digital estudiantil desarrollada para simplificar y optimizar la gestión del dinero en el entorno escolar. Diseñada para brindar seguridad y control a los padres, permite realizar cargas de saldo en las cuentas de sus hijos, quienes pueden utilizarlo para comprar en los buffets de sus colegios a través de un sistema de pago con código QR.
                    </p>
                    <br />
                    <h4>Funcionalidades principales:</h4>
                    <br />
                    <ul>
                        <li><strong>Gestión de saldo familiar:</strong> Los padres pueden cargar dinero en las cuentas de sus hijos y monitorear en tiempo real los movimientos y gastos realizados dentro de la aplicación.</li>
                        <li><strong>Compras rápidas y seguras:</strong> Los estudiantes pueden pagar en los buffets escolares de forma ágil y sin necesidad de efectivo, simplemente escaneando un código QR.</li>
                        <li><strong>Administración eficiente de pagos:</strong> Los encargados del buffet pueden gestionar fácilmente las transacciones recibidas, verificando los pagos y manteniendo un registro de las compras.</li>
                        <li><strong>Sistema de roles diferenciados:</strong> La aplicación cuenta con tres tipos de usuarios:
                            <ul>
                                <li><strong>Padres:</strong> Administran el saldo y supervisan el uso del dinero.</li>
                                <li><strong>Estudiantes:</strong> Utilizan la billetera digital para realizar compras.</li>
                                <li><strong>Buffet:</strong> Gestiona los pagos y verifica las transacciones.</li>
                            </ul>
                        </li>
                    </ul>
                    <br />
                    <p>
                        Amigos del Cole transforma la manera en que los estudiantes realizan pagos en su colegio, proporcionando a los padres tranquilidad y control, y a los buffets una herramienta moderna para gestionar los cobros de manera eficiente.
                    </p>
                </div>
            )
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
