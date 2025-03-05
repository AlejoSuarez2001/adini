import { Box, Flex, Heading } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Service from "../molecules/Service";

const services = [
  {
    title: "Análisis Desarrollo",
    image: "/assets/1.svg",
    serviceList: [
      "Desarrollo de Aplicaciones Web",
      "Desarrollo de E-commerce",
      "Desarrollo Multiplataforma",
      "Mantenimiento de Aplicaciones Web",
      "Implementación de Soluciones Open-Source",
    ],
  },
  {
    title: "Business Intelligence",
    image: "/assets/2.svg",
    serviceList: [
      "Migración a la Nube",
      "Administración de Servidores",
      "Implementación de DevOps",
      "Monitoreo y Soporte",
      "Optimización de Costos en la Nube",
    ],
  },
  {
    title: "DevOps Infraestructura",
    image: "/assets/3.svg",
    serviceList: [
      "Asesoría en Transformación Digital",
      "Optimización de Procesos TI",
      "Seguridad Informática",
      "Arquitectura de Software",
      "Capacitación en Tecnologías",
    ],
  },
];

export default function Services() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 });

  return (
    <>
      <Heading fontSize={"3xl"} textAlign="center" mt={"50px"} mb={"140px"}>
        Servicios
      </Heading>
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 50 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <Flex justify="center" gap={{ lg: 10, xl: 20 }} wrap="wrap" mx={10}>
          {services.map((service, index) => (
            <Service
              key={index}
              title={service.title}
              image={service.image}
              serviceList={service.serviceList}
            />
          ))}
        </Flex>
      </motion.div>
    </>
  );
}
