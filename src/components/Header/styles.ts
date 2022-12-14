import styled from "styled-components";

export const HeaderContainer = styled.div`
  position: fixed;
  top: 0;
  width: calc(100vw - 5rem);

  padding: 1rem 0;

  display: flex;
  align-items: center;
  justify-content: space-between;

  background: ${(props) => props.theme["gray-300"]};
`;

export const LogoContainer = styled.div`
  cursor: pointer;
`;

export const ShoppingCartContainer = styled.div`
  display: flex;
`;

export const MapContentContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  background: ${(props) => props.theme["purple-100"]};
  margin: 0 1rem;
  padding: 0.5rem;
  border-radius: 8px;

  svg,
  span {
    color: ${(props) => props.theme["purple-800"]};
  }
`;

export const CartButton = styled.button`
  position: relative;
  border: none;
  background-color: ${(props) => props.theme["yellow-100"]};
  padding: 0.5rem;
  border-radius: 8px;
  cursor: pointer;

  svg {
    color: ${(props) => props.theme["yellow-600"]};
  }

  p {
    position: fixed;
    top: 0;

    margin-top: 10px;
    margin-left: 30px;

    background: ${(props) => props.theme["yellow-600"]};
    color: ${(props) => props.theme.white};

    padding: 4px 8px;
    border-radius: 9999px;
  }
`;
