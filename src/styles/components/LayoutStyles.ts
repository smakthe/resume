import styled from 'styled-components';

export const AppContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 20px;
  padding: 20px;
  max-width: 1200px;
  margin: 0 auto;

  @media (max-width: ${({ theme }) => theme.mediaQueries.medium}) {
    flex-direction: column;
    padding: 10px;
  }

  @media (min-width: ${({ theme }) => theme.mediaQueries.large}) {
    max-width: 1400px;
    gap: 40px;
  }
`;

export const LeftColumn = styled.aside`
  flex: 1 1 30%;
  padding: 20px;
  background-color: ${({ theme }) => theme.columnBackground};
  text-align: left;
  border-radius: 8px;

  @media (max-width: ${({ theme }) => theme.mediaQueries.medium}) {
    flex: 1 1 100%;
    width: 100%;
    padding: 10px;
  }

  @media (min-width: ${({ theme }) => theme.mediaQueries.large}) {
    padding: 30px;
  }
`;

export const RightColumn = styled.main`
  flex: 1 1 70%;
  padding: 20px;

  @media (max-width: ${({ theme }) => theme.mediaQueries.medium}) {
    flex: 1 1 100%;
    width: 100%;
    padding: 10px;
  }

  @media (min-width: ${({ theme }) => theme.mediaQueries.large}) {
    padding: 30px;
  }
`;

interface ThemeToggleProps {
  $isLight: boolean;
}

export const ThemeToggleButton = styled.button<ThemeToggleProps>`
  position: fixed;
  top: 16px;
  right: 16px;
  z-index: 1000;
  width: 36px;
  height: 36px;
  border: none;
  background: transparent;
  cursor: pointer;
  padding: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${({ theme }) => theme.textColor};
  border-radius: 8px;
  transition: color 0.3s ease, filter 0.3s ease;

  &:hover {
    filter: drop-shadow(0 0 6px ${({ $isLight }) =>
      $isLight ? 'rgba(100, 130, 255, 0.7)' : 'rgba(255, 200, 50, 0.7)'});
  }

  &:active {
    transform: scale(0.9);
  }

  &:focus-visible {
    outline: 2px solid #4a90d9;
    outline-offset: 2px;
  }

  @media print {
    display: none !important;
  }
`;

export const IconWrapper = styled.span<ThemeToggleProps & { $visible: boolean }>`
  position: absolute;
  width: 24px;
  height: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: ${({ $visible }) => ($visible ? 1 : 0)};
  transform: ${({ $visible, $isLight }) =>
    $visible
      ? 'rotate(0deg) scale(1)'
      : $isLight
        ? 'rotate(-90deg) scale(0.4)'
        : 'rotate(90deg) scale(0.4)'};
  transition: opacity 0.35s ease, transform 0.4s cubic-bezier(0.4, 0, 0.2, 1);

  svg {
    width: 24px;
    height: 24px;
  }
`;

