import styled from 'styled-components';
import { containerStyles } from '../shared';

export const ProfileContainer = styled.header`
  &.profile {
    h4 {
      font-size: clamp(16px, 2vw, 20px);
      text-align: left;
    }

    p {
      text-align: justify;
    }

    @media (max-width: ${({ theme }) => theme.mediaQueries.small}) {
      h4, p {
        font-size: 14px;
      }
    }
  }
`;

export const ProfileDetails = styled.div`
  ${containerStyles}
`;

export const Name = styled.h1`
  margin: 0;
  @media (max-width: ${({ theme }) => theme.mediaQueries.small}) {
    font-size: 22px;
  }
`;

export const Title = styled.h2`
  margin: 5px 0;
  font-weight: normal;

  @media (max-width: ${({ theme }) => theme.mediaQueries.small}) {
    font-size: 18px;
  }
`;

export const Description = styled.p`
  margin: 10px 0;

  @media (max-width: ${({ theme }) => theme.mediaQueries.small}) {
    font-size: 14px;
  }
`;
