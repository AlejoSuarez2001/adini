import { Flex } from "@chakra-ui/react";
import Title from "../molecules/Title";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Service from "../molecules/Service";
import { useMemo } from "react";

const services = [
  {
    title: "Análisis y Desarrollo",
    image: "/assets/icons/dev.svg",
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
    image: "/assets/icons/bi.svg",
    serviceList: [
      "Monitoreo y Soporte",
      "Diseño e Implementación de ETL",
      "Control de Flujos de Datos",
      "Análisis de Datos Mediante Modelos Predictivos",
      "Creación de Tableros de Inteligencia Empresarial",
    ],
  },
  {
    title: "DevOps e Infraestructura",
    image: "/assets/icons/devops.svg",
    serviceList: [
      "Integración y Entrega Continua (CI/CD)",
      "Monitoreo de Sistemas y Aplicaciones",
      "Bases de datos SQL y NoSQL",
      "Alta Disponibilidad y Soluciones Escalables",
      "Administración de Servidores Linux y Windows",
    ],
  },
];

export default function Services() {
  const threshold = useMemo(() => (window.innerWidth < 768 ? 0.1 : 0.2), []);

  const { ref, inView } = useInView({ triggerOnce: true, threshold });

  return (
    <>
      <Title title="Soluciones" subtitle="a medida para tu negocio" mt="50px" mb="140px" />

      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 50 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <Flex justify="center" gap={{ base: 12, xl: 20 }} wrap="wrap" mx={10}>
          {services.map((service, index) => (
            <Service key={index} title={service.title} image={service.image} serviceList={service.serviceList} />
          ))}
        </Flex>
      </motion.div>
    </>
  );
}
