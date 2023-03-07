import { useNavigate } from "react-router-dom";
import Button from "../../Atoms/Button";
import { IconCancel } from "../../../Components/Atoms/Button/style";
import theme from "../../../Config/Theme";
import { IconLogout } from "../../Molecules/MenuUser/style";
import * as S from "./style";

interface ModalProps {
  close: () => void;
}

export default function ModalLogout({ close }: ModalProps) {
  const navigate = useNavigate();

  const logout = async () => {
    localStorage.removeItem("access_token");
    navigate("/login");
  };

  return (
    <S.ModalContainer data-testid="modalLogout">
      <S.ModalHeader>
        <button onClick={close}>
          <S.IconClose />
        </button>
      </S.ModalHeader>
      <S.ModalTitle>Sair</S.ModalTitle>
      <S.ModalContent>Tem certeza que deseja sair da sua conta?</S.ModalContent>
      <S.ModalFooter>
        <Button
          text="Cancelar"
          showIcon
          icon={<IconCancel />}
          textColor={theme.COLORS.BLUE_GRAY_900}
          borderColor={theme.COLORS.BLUE_GRAY_900}
          backgroundColor={theme.COLORS.WHITE_100}
          onClick={close}
        />
        odalContainer
        <Button
          text="Sair"
          showIcon
          icon={<IconLogout />}
          textColor={theme.COLORS.BLUE_GRAY_900}
          backgroundColor={theme.COLORS.PRIMARY_300}
          onClick={logout}
        />
      </S.ModalFooter>
    </S.ModalContainer>
  );
}
