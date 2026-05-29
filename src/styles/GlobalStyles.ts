import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  body {
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
      'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', Arial,
      sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    background: ${({ theme }) => theme.background};
    color: ${({ theme }) => theme.textColor};
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    line-height: 1.6;
    transition: background-color 0.3s ease, color 0.3s ease;
  }

  code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
      monospace;
  }

  *, *::before, *::after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  @media print {
    body {
      background: #fff !important;
      color: #000 !important;
      box-shadow: none;
      font-size: 12pt;
      line-height: 1.4;
    }

    /* Hide non-printable elements */
    button[aria-label="Toggle dark mode"] {
      display: none !important;
    }

    /* Optimize layout for A4 */
    * {
      break-inside: avoid;
    }

    a {
      color: #000 !important;
      text-decoration: underline;
    }

    a[href]::after {
      content: " (" attr(href) ")";
      font-size: 10pt;
      color: #555;
    }

    a[href^="tel:"]::after,
    a[href^="mailto:"]::after {
      content: none;
    }
  }
`;

export default GlobalStyles;
