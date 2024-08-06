import Link from "@Components/elements/Link";

import { Sponsor, Title } from "./styles";
import { sponsorsList } from "./constants";

export default function Sponsors() {
  return (
    <div>
      <Title>
        Sponsors (
        <Link
          href="https://opencollective.com/bower"
          target="_blank"
          rel="nofollow noopener"
        >
          become one
        </Link>
        ):
      </Title>
      {sponsorsList.map(({ image, alt, link }) => (
        <Sponsor key={image} image={image} alt={alt} href={link} />
      ))}
    </div>
  );
}
