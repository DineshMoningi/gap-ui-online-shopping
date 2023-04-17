import { useToast } from "@chakra-ui/react";
import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import IAxiosProvider from "../../interfaces/axios/IAxiosProvider";
import { getTokenExpirationService } from "../../services/token/getTokenExpirationService";

export const AxiosProvider = ({ children }: IAxiosProvider) => {
  const toast = useToast();
  const navigate = useNavigate();
  const [hasTokenExpired, setHasTokenExpired] = useState<boolean | undefined>(
    undefined
  );

  const getTokenExpiration = async () => {
    const tokenInformation = await getTokenExpirationService();
    const expDate = new Date(tokenInformation?.exp)?.getTime();
    const currentDate = new Date().getTime();
    const milisecondsToExpiration = expDate - currentDate;
    setHasTokenExpired(false);
    setTimeout(() => {
      setHasTokenExpired(true);
    }, milisecondsToExpiration);
  };

  useEffect(() => {
    axios.interceptors.response.use(
      (response) => response,
      (error) => {
        if (error.response?.status === 401) {
          setHasTokenExpired(true);
        } else {
          if (!!error.response?.data?.message?.length) {
            error.response.data.message.forEach((message: string) => {
              toast({
                description: message,
                status: "error",
                isClosable: true,
                duration: 6000,
              });
            });
          }
        }
        return error;
      }
    );
    const accessToken = JSON.parse(
      localStorage.getItem("token") || "{}"
    ).accessToken;
    axios.defaults.headers.common["Authorization"] = `Bearer ${accessToken}`;

    getTokenExpiration();
  }, []);

  if (hasTokenExpired === undefined) {
    return null;
  }

  if (hasTokenExpired) {
    return <div>"Token expired please relogin"</div>;
  }
  return <>{children}</>;
};
