import styled from 'styled-components';
import { containerStyles } from '../shared';

export const CertificationsContainer = styled.div`
  ${containerStyles}
`;

export const Title = styled.h2`
  font-size: 24px;
  border-bottom: 2px solid ${({ theme }) => theme.borderColor};
  padding-bottom: 5px;
  text-align: left;

  @media (max-width: ${({ theme }) => theme.mediaQueries.small}) {
    font-size: 20px;
  }
`;

export const CertificationItem = styled.li`
  font-size: 18px;
  margin: 5px 0;
  
  @media (max-width: ${({ theme }) => theme.mediaQueries.small}) {
    font-size: 16px;
  }
`;

export const CertificationList = styled.ul`
  list-style-type: none;
  padding: 0;
`;

export const CertificationListContainer = styled.div`
  a {
    color: ${({ theme }) => theme.textColor};
    text-decoration: none;
  }

  a:hover {
    color: ${({ theme }) => theme.hoverColor};
    text-decoration: none;
  }

  @media (max-width: ${({ theme }) => theme.mediaQueries.small}) {
    a {
      font-size: 14px;
    }
  }
`;
