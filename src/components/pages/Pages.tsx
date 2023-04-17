import Home from "../pages/home/Home";
import Login from "../pages/login/Login";
import Register from "./register/Register";
import Screen from "../shared/screen/Screen";
import { Route, Routes } from "react-router-dom";
import { PageEnum } from "../../enums/PageEnum";

const Pages = () => {
  return (
    <Screen>
      <Routes>
        <Route path={PageEnum.ROOT} element={<Home />} />
        <Route path={PageEnum.HOME} element={<Home />} />
        <Route path={PageEnum.LOGIN} element={<Login />} />
        <Route path={PageEnum.REGISTER} element={<Register />} />
      </Routes>
    </Screen>
  );
};
export default Pages;
