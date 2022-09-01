import styled from "styled-components";

export const SuccessContainer = styled.div`
  height: calc(100vh - 10rem);

  display: flex;
  flex-direction: column;
  h2 {
    margin-top: 2rem;
    color: ${(props) => props.theme["yellow-600"]};
    font-weight: 800;
  }

  h2,
  h3 {
    padding: 0.25rem 0;
  }

  h3 {
    margin-bottom: 2rem;
  }
`;

export const TitleMainContainer = styled.main`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 4rem;
  place-items: center;

  div:first-child {
    border: 1px solid ${(props) => props.theme["purple-500"]};
    border-radius: 0 32px 0 32px;

    padding: 2rem 6rem;

    span {
      font-weight: 700;
    }
  }

  section {
    display: flex;
    align-items: center;

    margin: 1rem 0;

    svg {
      width: 2rem;
      height: 2rem;

      padding: 0.4rem;
      margin-right: 1rem;

      color: ${(props) => props.theme.white};
      background: ${(props) => props.theme["yellow-500"]};
      border-radius: 9999px;
    }
  }
`;
