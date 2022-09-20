import styled from "styled-components";

export default function SteamLogo(props) {
  const { border } = props;
  const borderColor = border ? border: "var(--blue-border)";
  return (
    <Logo
      border={borderColor}
      className="logo"
      src="https://help.bungie.net/hc/article_attachments/4405283629972/Steam.jpg"
      alt="logo"
    />
  );
}

const Logo = styled.img`
  width: 100%;
  border: ${(props) => props.border};
  border-radius: var(--border-radious-1);
`;
