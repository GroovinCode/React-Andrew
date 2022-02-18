import styled from 'styled-components';

export function PageTitle() {
  const PageTitle = styled.h1`
    color: blue;
    font-size: 2em;
    font-type: bold;
    font-style: italic;
    text-align: center;
  `;

  return (
    <PageTitle>Ghost Store:  Where you can't buy anything and nothing is real.</PageTitle>
  );
}