import styled from "styled-components";

export const StyledMenu = styled.nav`
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: #00a3e0;
  height: 100vh;
  text-align: left;
  padding: 0;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 10;
  transition: transform 0.3s ease-in-out;
  transform: ${({ open }) => (open ? "translateX(0)" : "translateX(-100%)")};

  @media (max-width: 900px) {
    width: 100%;
  }

  a {
    font-size: 2rem;
    text-transform: uppercase;
    padding: 2rem 0;
    font-weight: bold;
    letter-spacing: 0.5rem;
    color: white;
    text-decoration: none;
    transition: color 0.3s linear;

    @media (max-width: 900px) {
      font-size: 1.5rem;
      text-align: center;
    }

    &:hover {
      color: #845ec2;
    }
  }
`;
