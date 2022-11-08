import { ChakraProvider } from "@chakra-ui/react";
import { RouterProvider } from "react-router-dom";
import Router from "./Router";

const App = () => {
  return (
    <ChakraProvider>
      <RouterProvider router={Router} />
    </ChakraProvider>
  );
};

export default App;
