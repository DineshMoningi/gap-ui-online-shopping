import { Flex, theme } from "@chakra-ui/react";
import { ReactNode } from "react";
import { useAppSelector } from "../../../hooks/useReduxDispatch";
import PageLoader from "../loader/PageLoader";
import { loading } from "../loader/loaderSlice";
import Header from "./Header";
import Footer from "./Footer";

const { colors } = theme;

const Screen = ({ children }: IScreen) => {
  const loadingStatus = useAppSelector(loading);

  return (
    <div>
      <Header />
      <Flex
        w="100vw"
        h="calc(100vh - 60px)"
        position="relative"
        overflowX="hidden"
        direction="row"
        borderBottom={`1px solid ${colors.gray[200]}`}
        background="white"
        paddingTop="60px"
        zIndex={0}
        id="body"
      >
        {loadingStatus ? <PageLoader /> : null}
        {children}
      </Flex>
      <Footer />
    </div>
  );
};

interface IScreen {
  children: ReactNode;
}

export default Screen;
