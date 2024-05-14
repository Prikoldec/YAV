import styled from 'styled-components';
const globalStyles = styled("createGlobalStyle")`

  @font-face {
    font-family: 'South';
    font-style: normal;
    font-weight: 400;
    src: url('./../fonts/South.woff') format('woff');
  }

  @font-face {
    font-family: 'Helvetica_regular';
    font-style: normal;
    font-weight: 400;
    src: url('./../fonts/helvetica_regular.otf') format('otf');
  }

  @font-face {
    font-family: 'Helvetica_oblique';
    font-style: normal;
    font-weight: 400;
    src: url('./../fonts/helvetica_oblique.otf') format('otf');
  }

  @font-face {
    font-family: 'Helvetica_bold';
    font-style: normal;
    font-weight: 400;
    src: url('./../fonts/helvetica_bold.otf') format('otf');
  }
`;

export { globalStyles };
