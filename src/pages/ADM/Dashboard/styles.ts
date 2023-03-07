import styled from "styled-components";

export const ListContentArea = styled.div`
  gap: 8px;
  margin-top: 16px;
  max-height: 415px;
  overflow: scroll;
  overflow-x: hidden;
  ::-webkit-scrollbar {
    color: purple;
    width: 8px;
    background: #eaedef;
    border-radius: 8px;
  }
  ::-webkit-scrollbar-thumb {
    -webkit-border-radius: 8px;
    border-radius: 8px;
    background: #36e0a2;
  }

  @media (min-width: 750px) {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  }

  @media (min-width: 1045px) {
    display: grid;
    grid-template-columns: 1fr 1fr;
  }

  @media (min-width: 1300px) {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
  }

  @media (min-width: 2000px) {
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
  }
`;
