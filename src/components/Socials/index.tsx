import { Icon } from "./Icon";
import { Root } from "./Root";

import { FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa";
import { SiCodewars } from "react-icons/si";

export const Socials = () => {
  return (
    <Root>
      <Icon text="LinkedIn" icon={FaLinkedin} href="https://www.linkedin.com/in/samuelastech/" />
      <Icon text="GitHub" icon={FaGithub} href="https://github.com/samuelastech" />
      <Icon text="E-mail" icon={FaEnvelope} textOnCopy="E-mail copiado" contentToCopy="samuel.araujo.souza@outlook.com" />
      <Icon text="CodeWars" icon={SiCodewars} href="https://www.codewars.com/users/samuelastech" />
    </Root>
  )
};
