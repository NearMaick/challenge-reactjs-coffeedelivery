import { Outlet } from "react-router-dom";
import { Header } from "../../components/Header";

import { LayoutContainer, LayoutHeaderContainer } from "./styles";

export function DefaultLayout() {
  return (
    <LayoutContainer>
      <LayoutHeaderContainer>
        <Header />
      </LayoutHeaderContainer>
      <Outlet />
    </LayoutContainer>
  );
}
