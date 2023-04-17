import { Button, ButtonGroup, Flex } from "@chakra-ui/react";
import { PageEnum } from "../../../enums/PageEnum";
import { useNavigate } from "react-router";
import { Icon } from "@chakra-ui/react";
import { MdHome } from "react-icons/md";
import "../../../css/header.css";

const Header = () => {
  const navigate = useNavigate();
  const onHomeClickHandler = () => {
    navigate(PageEnum.HOME);
  };
  return (
    <Flex
      direction="row"
      height="60px"
      width="100%"
      background="#2977b7"
      zIndex="100"
      display="block"
      float="right"
      position="absolute"
      right={0}
      top={0}
      id="header"
    >
      <div style={{ paddingLeft: "20px" }}>
        <Icon as={MdHome} className="home-icon" onClick={onHomeClickHandler} />
        <ButtonGroup gap="2" className="sign-login-in-buttons">
          <Button
            colorScheme="teal"
            onClick={() => navigate(PageEnum.REGISTER)}
          >
            Sign Up
          </Button>
          <Button colorScheme="teal" onClick={() => navigate(PageEnum.LOGIN)}>
            Log in
          </Button>
        </ButtonGroup>
      </div>
    </Flex>
  );
};

export default Header;
