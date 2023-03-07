import React from "react";
import { InputSearchContainer, SearchIcon, SideBarButton } from "./style";

export default function Search({ toggle = false }) {
  return (
    <>
      {toggle ? (
        <InputSearchContainer>
          <SearchIcon />
          <input type="search" placeholder="Busque no Sistema" />
        </InputSearchContainer>
      ) : (
        <SideBarButton>
          <SearchIcon />
        </SideBarButton>
      )}
    </>
  );
}
