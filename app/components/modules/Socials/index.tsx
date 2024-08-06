import GithubLogo from "./Github";
import TwitterLogo from "./Twitter";
import { SocialsLink, SocialsWrapper } from "./styles";

export default function Socials() {
  return (
    <SocialsWrapper>
      <SocialsLink>
        <GithubLogo /> Bower on GitHub
      </SocialsLink>
      <SocialsLink>
        <TwitterLogo /> @bower
      </SocialsLink>
    </SocialsWrapper>
  );
}
