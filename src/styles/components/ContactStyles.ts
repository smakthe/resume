import styled from 'styled-components';
import { containerStyles } from '../shared';

export const ContactContainer = styled.div`
  ${containerStyles}
`;

export const Title = styled.h2`
  border-bottom: 2px solid ${({ theme }) => theme.borderColor};
  padding-bottom: 5px;

  @media (max-width: ${({ theme }) => theme.mediaQueries.small}) {
    font-size: 20px;
  }
`;

export const ContactText = styled.span`
  font-size: 16px;

  a {
    color: ${({ theme }) => theme.textColor};
    text-decoration: none;
    transition: color 0.2s ease;

    &:hover {
      color: ${({ theme }) => theme.hoverColor};
    }
  }

  @media (max-width: ${({ theme }) => theme.mediaQueries.small}) {
    font-size: 14px;
  }
`;

export const ContactInfo = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
`;

export const Icon = styled.span`
  margin-right: 10px;
  font-size: 18px;
`;

export const FooterContainer = styled.footer`
  display: flex;
  flex-direction: column;
`;

export const SocialIconContainer = styled.div`
  display: flex;
  gap: 10px;
  margin-top: 10px;

  a {
    color: ${({ theme }) => theme.textColor};
    transition: color 0.2s ease;
    display: inline-flex;

    &:hover {
      color: ${({ theme }) => theme.hoverColor};
    }
  }
`;

