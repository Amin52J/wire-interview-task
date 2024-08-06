"use client";

import { PropsWithChildren, useState } from "react";
import { ThemeProvider } from "styled-components";

import theme from "@/lib/theme";
import Header from "@Components/modules/Header";
import SideNav from "@Components/modules/SideNav";
import Sponsors from "@Components/modules/Sponsors";
import Socials from "@Components/modules/Socials";
import Footer from "@Components/modules/Footer";

import { Page, Main, MainContainer, Side, MenuButton } from "./styles";

export default function Layout({ children }: PropsWithChildren) {
  const [isMenuVisible, setIsMenuVisible] = useState(false);

  const toggleMenuVisibility = () => {
    setIsMenuVisible(!isMenuVisible);
  };

  return (
    <ThemeProvider theme={theme}>
      <Header />
      <Page>
        <MainContainer>
          <MenuButton onClick={toggleMenuVisibility}>Menu</MenuButton>
          <Side $isMenuVisible={isMenuVisible}>
            <SideNav />
            <Sponsors />
            <Socials />
          </Side>
          <Main>
            {children}
            <Footer />
          </Main>
        </MainContainer>
      </Page>
    </ThemeProvider>
  );
}
