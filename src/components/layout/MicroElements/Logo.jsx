import styled from "styled-components";

export default function SteamLogo() {
  return <Logo className="logo" src="https://help.bungie.net/hc/article_attachments/4405283629972/Steam.jpg" alt="logo" />;
}

const Logo = styled.img`
  width: 100%;
  border: var(--blue-border);
  border-radius: var(--border-radious-1);
`;
