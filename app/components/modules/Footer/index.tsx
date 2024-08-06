import { Fragment } from "react";

import { FooterContainer, FooterLink } from "./styles";
import { footerItems } from "./constants";

export default function Footer() {
  return (
    <FooterContainer>
      <p>
        <FooterLink href="https://github.com/bower/bower.github.io/issues">
          Help improve these docs. Open an issue or pull request.
        </FooterLink>
      </p>
      <p>
        <span>Our supporters: </span>
        {footerItems.map(({ text, link }, index) => (
          <Fragment key={`footerItem_${text}_${index}`}>
            {index > 0 && <span> | </span>}
            <FooterLink rel="sponsored" href={link}>
              {text}
            </FooterLink>
          </Fragment>
        ))}
      </p>
    </FooterContainer>
  );
}
