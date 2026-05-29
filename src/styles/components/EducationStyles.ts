import styled from 'styled-components';
import { containerStyles } from '../shared';

export const EducationContainer = styled.div`
  ${containerStyles}
`;

export const Title = styled.h2`
  border-bottom: 2px solid ${({ theme }) => theme.borderColor};
  padding-bottom: 5px;

  @media (max-width: ${({ theme }) => theme.mediaQueries.small}) {
    font-size: 20px;
  }
`;

export const School = styled.div`
  margin: 20px 0;

  @media (max-width: ${({ theme }) => theme.mediaQueries.small}) {
    margin: 15px 0;
  }
`;

export const SchoolName = styled.h3`
  margin: 0;

  @media (max-width: ${({ theme }) => theme.mediaQueries.small}) {
    font-size: 18px;
  }
`;

export const Degree = styled.p`
  margin-bottom: 20px;

  @media (max-width: ${({ theme }) => theme.mediaQueries.small}) {
    font-size: 14px;
    margin-bottom: 15px;
  }
`;
