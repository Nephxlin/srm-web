import { Link } from "react-router-dom";
import styled from "styled-components";
import Logo from "../../_UI/Components/Atoms/Logo";

export default function BemVindo() {
  return (
    <Container>
      <Link to="/login" title="Entrar na Plataforma">
        <Logo />
      </Link>
    </Container>
  );
}

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;
