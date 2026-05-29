import React from 'react';
import {
  EducationContainer,
  Title,
  School,
  SchoolName,
  Degree,
} from '../styles/components/EducationStyles';

const Education = (): React.JSX.Element => (
  <EducationContainer>
    <Title>Education</Title>
    <School>
      <SchoolName>
        <strong>Banaras Hindu University</strong>
      </SchoolName>
      <Degree>
        Master of Science (MSc) in Computer Science | 2015 - 2017
      </Degree>
    </School>
    <School>
      <SchoolName>
        <strong>University of Calcutta</strong>
      </SchoolName>
      <Degree>
        Bachelor of Science (BSc) in Computer Science | 2012 - 2015
      </Degree>
    </School>
  </EducationContainer>
);

export default Education;