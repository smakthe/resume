import React from 'react';
import {
  SkillsContainer,
  Title,
  SkillList,
  SkillItem,
} from '../styles/components/SkillsStyles';

const Skills = (): React.JSX.Element => (
  <SkillsContainer>
    <Title>Skills</Title>
    <SkillList>
      <SkillItem>
        <strong>Compiled Low-level Languages:</strong> C, C++, Java, Go, Rust
      </SkillItem>
      <SkillItem>
        <strong>Interpreted High-level Languages:</strong> Ruby, JavaScript,
        TypeScript, Python, PHP
      </SkillItem>
      <SkillItem>
        <strong>Relational Databases:</strong> MySQL, PostgreSQL
      </SkillItem>
      <SkillItem>
        <strong>Non-relational Databases:</strong> MongoDB, Redis
      </SkillItem>
      <SkillItem>
        <strong>MVC Frameworks:</strong> Ruby on Rails, MERN stack
      </SkillItem>
      <SkillItem>
        <strong>Meta-Frameworks and Libraries:</strong> Next.js, Svelte, Qwik.js
      </SkillItem>
      <SkillItem>
        <strong>AWS Technologies:</strong> S3, EC2, Lambda, DynamoDB, SNS, SQS,
        Cognito
      </SkillItem>
      <SkillItem>
        <strong>CI/CD:</strong> Git, GitHub, GitHub Action
      </SkillItem>
      <SkillItem>
        <strong>DevOps:</strong> Shell Script, Docker, Kubernetes, Airflow,
        Ansible
      </SkillItem>
    </SkillList>
  </SkillsContainer>
);

export default Skills;
