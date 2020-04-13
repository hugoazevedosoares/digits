import styled from "styled-components";

export const List = styled.ul`
  background: transparent;
  transition: top 1s ease;
  color: white !important;
  list-style: none;
  display: flex;
  justify-content: space-between;
  margin-bottom: max(4.16%, 4em);
  padding: 0;
  margin-top: 0;
`;

export const ListItem = styled.li`
  display: block;
  position: relative;
  height: 30px;

  a {
    color: white !important;
    text-transform: uppercase;
    letter-spacing: 0.063em;
    font-size: 0.75em;
    padding-bottom: 0;

    &::before {
      transition: width 0.25s cubic-bezier(0.51, 0.18, 0, 0.88) 0.1s;
      background: #845ec2;
    }

    &::after {
      transition: width 0.2s cubic-bezier(0.29, 0.18, 0.26, 0.83);
      background: #2fffad;
    }

    &::after,
    &::before {
      content: "";
      position: absolute;
      top: calc(100% + 8px);
      width: 0;
      right: 0;
      height: 3px;
    }

    &.active:after {
      background: #2fffad;
      width: 100%;
      left: 0;
    }

    &:hover::after,
    &:hover::before {
      width: 100%;
      left: 0;
    }
  }
`;

export const Navigation = styled(ListItem)`
  li {
    margin-left: 2em;
    margin-right: 2em;
  }
`;
