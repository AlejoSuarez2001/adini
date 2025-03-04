import AdminMobileNavBar from "./AdminMobileNavBar";
import AdminDesktopNavBar from "./AdminDesktopNavbar";
import { useBreakpointValue, Box, useEditable } from "@chakra-ui/react";
import { Outlet } from "react-router-dom";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function AdminLayout() {
  const [windowSize, setWindowSize] = useState(window.innerWidth);

  function handleResize() {
    setWindowSize(window.innerWidth);
  }

  useEffect(() => {
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      {windowSize <= 991 ? (
        <>
          <AdminMobileNavBar />
          <Box pt="75px" width="100%">
            <Outlet />
          </Box>
        </>
      ) : (
        <>
          <AdminDesktopNavBar />
          <Box
            display={{
              base: "none",
              lg: "flex",
            }}
            flexDirection="row"
          >
            <Box
              width={{ lg: "25%", xl: "20%", "2xl": "15%" }}
              height="100vh"
              bg="black"
            />
            <Box
              display="flex"
              width={{ lg: "75%", xl: "80%", "2xl": "85%" }}
            >
              <Outlet />
            </Box>
          </Box>
        </>
      )}
    </>
  );
}
