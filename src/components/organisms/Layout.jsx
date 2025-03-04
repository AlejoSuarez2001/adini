import { Outlet } from "react-router-dom";
import NavBar from "./NavBar";
import { Box, useBreakpointValue } from "@chakra-ui/react";

export default function Layout() {

  return (
    <>
      <NavBar />
      <Outlet />
    </>
  );
}


