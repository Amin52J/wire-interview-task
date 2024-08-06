import { Navigation, NavigationItem } from "./styles";
import { navigationItems } from "./constants";

export default function SideNav() {
  return (
    <Navigation>
      {navigationItems.map(({ text, link }) => (
        <NavigationItem href={link} key={`sideNavigationItem_${text}`}>
          {text}
        </NavigationItem>
      ))}
    </Navigation>
  );
}
