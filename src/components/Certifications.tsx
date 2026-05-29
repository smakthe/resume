import React from 'react';
import {
  CertificationsContainer,
  Title,
  CertificationItem,
  CertificationList,
  CertificationListContainer,
} from '../styles/components/CertificationsStyles';

const Certifications = (): React.JSX.Element => {
  return (
    <CertificationsContainer>
      <Title>Certifications</Title>
      <CertificationListContainer className="certification-list">
        <CertificationList>
          <CertificationItem>
            JavaScript: Understanding the Weird Parts
          </CertificationItem>
          <CertificationItem>
            NodeJS - The Complete Guide (MVC, REST APIs, GraphQL, Deno)
          </CertificationItem>
          <CertificationItem>
            Docker Mastery: with Kubernetes +Swarm from a Docker Captain
          </CertificationItem>
        </CertificationList>
      </CertificationListContainer>
    </CertificationsContainer>
  );
};

export default Certifications;
