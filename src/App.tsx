import "./App.css";
import { BrowserRouter } from "react-router-dom";
import { ChakraProvider } from "@chakra-ui/react";
import ErrorBoundaryWrapper from "./components/shared/errorBoundaryWrapper/ErrorBoundaryWrapper";
import Pages from "./components/pages/Pages";
import Login from "./components/pages/login/Login";

function App() {
  return (
    <ChakraProvider>
      <BrowserRouter>
        {/* <AxiosProvider> */}
        {/* <ErrorBoundaryWrapper> */}
        <Pages />
        {/* </ErrorBoundaryWrapper> */}
        {/* </AxiosProvider> */}
      </BrowserRouter>
    </ChakraProvider>
  );
}

export default App;
