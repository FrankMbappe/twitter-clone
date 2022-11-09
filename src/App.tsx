import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import { RouterProvider } from "react-router-dom";
import Router from "./Router";

import "@fontsource/inter/400.css";
import "@fontsource/inter/500.css";
import "@fontsource/inter/600.css";
import "@fontsource/poppins/700.css";

const theme = extendTheme({
  fonts: {
    heading: `'Poppins', sans-serif`,
    body: `'Inter', sans-serif`,
  },
});

const App = () => {
  return (
    <ChakraProvider theme={theme}>
      <RouterProvider router={Router} />
    </ChakraProvider>
  );
};

export default App;
