import {
  ProfileContainer,
  ProfileDetails,
  Name,
  Title,
  Description,
} from "../styles/components/ProfileStyles";

const Profile = () => (
  <ProfileContainer className="profile">
    <ProfileDetails>
      <Name>Somak Chakraborty</Name>
      <Title>
        <h4>Senior Software Engineer</h4>
      </Title>
      <Description>
        <p>
          Senior Software Engineer with 8+ years architecting scalable SaaS applications 
          serving 10K-10M users across finance, e-commerce, and home automation domains. 
          Specialized in MERN stack, AWS cloud infrastructure and microservices architecture, 
          with proven track record of reducing system latency by 40-60% and driving $1M+ revenue impact. 
          Led cross-functional teams of 5+ engineers while mentoring junior developers and implementing 
          DevOps best practices using Docker, Kubernetes, and CI/CD pipelines. 
          Expertise in database technologies like PostgreSQL and Redis, delivering 
          enterprise solutions with 99.9% uptime and 85% cost optimization.
        </p>
      </Description>
    </ProfileDetails>
  </ProfileContainer>
);

export default Profile;