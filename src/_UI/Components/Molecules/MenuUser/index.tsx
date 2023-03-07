import { useEffect, useState } from "react";
import Avatar from "../../../Components/Atoms/Avatar";
import { IconLogout, MenuUserBase } from "./style";
import jwtDecode, { JwtPayload } from "jwt-decode";

interface MenuUserProps {
  logout: () => void;
}

interface UserJWT extends JwtPayload {
  perfis: string[];
  username: string;
  nome: string;
  avatar_url: string;
  email: string;
  cargo: string;
}

export default function MenuUser({ logout }: MenuUserProps) {
  const [userData, setUserData] = useState<UserJWT>();
  const decodeToken = (access_token: string): UserJWT => {
    const decoded = jwtDecode<UserJWT>(access_token);
    return decoded;
  };

  useEffect(() => {
    const token = localStorage.getItem("access_token");
    if (token) {
      const jsonToken = JSON.parse(token);
      const { access_token } = jsonToken;
      setUserData(decodeToken(access_token));
    }
  }, []);
  return (
    <MenuUserBase>
      <Avatar image={`${userData?.avatar_url}`} />
      <div className="user-menu">
        <div className="user-area">
          <div className="user-area-info">
            <Avatar image={`${userData?.avatar_url}`} />
            <div className="user-area-info-user">
              <p>Olá, {userData?.nome}</p>
              <span>
                {userData?.cargo} <br />
                {userData?.email}
              </span>
            </div>
          </div>
        </div>
        <div className="user-menu-logout" onClick={logout}>
          <IconLogout />
          <span>Sair da conta</span>
        </div>
      </div>
    </MenuUserBase>
  );
}
