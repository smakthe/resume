import styled from 'styled-components';

export const ExperienceContainer = styled.div`
  padding: 20px;

  @media (max-width: ${({ theme }) => theme.mediaQueries.small}) {
    padding: 10px;
  }
`;

export const Title = styled.h2`
  border-bottom: 2px solid ${({ theme }) => theme.borderColor};
  padding-bottom: 5px;

  @media (max-width: ${({ theme }) => theme.mediaQueries.small}) {
    font-size: 20px;
  }
`;

export const Job = styled.div`
  margin-bottom: 20px;

  @media (max-width: ${({ theme }) => theme.mediaQueries.small}) {
    margin-bottom: 15px;
  }
`;

export const JobTitle = styled.h3`
  margin: 0;

  @media (max-width: ${({ theme }) => theme.mediaQueries.small}) {
    font-size: 18px;
  }
`;

export const JobDescription = styled.ul`
  margin: 10px 0 0 20px;

  @media (max-width: ${({ theme }) => theme.mediaQueries.small}) {
    margin: 10px 0 0 15px;
  }
`;

export const Company = styled.p`
  margin: 5px 0;
  font-weight: bold;
`;

export const JobPeriod = styled.p`
  margin: 5px 0;
  color: #666;
`;

export const JobItem = styled.li`
  margin-bottom: 5px;
`;
