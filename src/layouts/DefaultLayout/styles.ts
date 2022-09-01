import styled from "styled-components";

export const LayoutContainer = styled.div`
  height: calc(100vh - 1rem);
  margin: 0.5rem;
  padding: 2.5rem;

  background: ${(props) => props.theme["gray-300"]};
  border-radius: 8px;
`;

export const LayoutHeaderContainer = styled.div`
  margin: 2rem 0 2rem;
`;
