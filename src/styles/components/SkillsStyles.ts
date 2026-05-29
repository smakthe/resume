import styled from 'styled-components';
import { containerStyles } from '../shared';

export const SkillsContainer = styled.div`
  ${containerStyles}
`;

export const Title = styled.h2`
  border-bottom: 2px solid ${({ theme }) => theme.borderColor};
  padding-bottom: 5px;

  @media (max-width: ${({ theme }) => theme.mediaQueries.small}) {
    font-size: 20px;
  }
`;

export const SkillList = styled.dl`
  list-style-type: none;
  padding: 0;
  margin-bottom: 20px;

  @media (max-width: ${({ theme }) => theme.mediaQueries.small}) {
    margin-bottom: 15px;
  }
`;

export const SkillItem = styled.dt`
  margin-bottom: 10px;

  @media (max-width: ${({ theme }) => theme.mediaQueries.small}) {
    font-size: 14px;
    margin-bottom: 8px;
  }
`;
