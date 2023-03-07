import { ReactNode } from "react";
import Header from "../../Organism/Header";
// import SideBar from './components/SideBar';
import SideBar2 from "../../Organism/SideBar";
import { Container, PageWrapper, Content } from "./style";

type Props = {
  children: ReactNode;
};
export default function Layouts({ children }: Props) {
  return (
    <Container data-testid="layout">
      <SideBar2 />
      <PageWrapper>
        <Header />
        <Content>
          {children}
        </Content>
      </PageWrapper>
    </Container>
  );
}
