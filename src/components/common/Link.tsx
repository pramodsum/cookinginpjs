import styled from "@emotion/styled";
// @ts-ignore
import bgy from "../../assets/bgyl.png";
import { Link } from "gatsby";

const LinkStyles = {
  padding: "8px 0",
  color: "black",
  textDecoration: "none",
  boxShadow: "none",
  transition: "color 0.4s",
  "&:hover": {
    background: `url(${bgy}) repeat`
  }
};

export const InternalLink = styled(Link)(LinkStyles);

export default styled.a(LinkStyles);
