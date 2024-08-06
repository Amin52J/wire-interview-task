import Link from "@Components/elements/Link";

import {
  HeaderContainer,
  Logo,
  Navigation,
  NavigationItem,
  Notification,
  Subtitle,
  Title,
  TitleContainer,
  Wrapper,
} from "./styles";
import { navItems, NotificationText } from "./constants";

export default function Header() {
  return (
    <>
      <Wrapper>
        <HeaderContainer>
          <TitleContainer>
            <Logo />
            <div>
              <Title>Bower Search</Title>
              <Subtitle>
                Powered by{" "}
                <Link href="https://libraries.io/">libraries.io</Link>
              </Subtitle>
            </div>
          </TitleContainer>
          <Navigation>
            {navItems.map(({ text, link }) => (
              <NavigationItem href={link} key={`navItem_${text}`}>
                {text}
              </NavigationItem>
            ))}
          </Navigation>
        </HeaderContainer>
      </Wrapper>
      <Notification>
        <NotificationText />
      </Notification>
    </>
  );
}
