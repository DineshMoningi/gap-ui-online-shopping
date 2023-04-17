import axios from "axios";
import { IToken } from "../../interfaces/token/IToken";

export const getTokenExpirationService = async () => {
  try {
    const { data: tokenInformation } = await axios.get<IToken>(
      `${process.env.PREPACK_MANAGER_PROXY}/user/token`
    );
    return Promise.resolve(tokenInformation);
  } catch (error) {
    return Promise.reject(error);
  }
};
