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
          Senior Software Engineer with 7+ years architecting scalable SaaS applications 
          serving 10K-10M users across finance, e-commerce, and home automation domains. 
          Specialized in Ruby on Rails, AWS cloud infrastructure, and microservices architecture, 
          with proven track record of reducing system latency by 40-67% and driving $1M+ revenue impact. 
          Led cross-functional teams of 5+ engineers while mentoring junior developers and implementing 
          DevOps best practices using Docker, Kubernetes, and CI/CD pipelines. 
          Expertise in full-stack development with React.js, PostgreSQL, and Redis, delivering 
          enterprise solutions with 99.9% uptime and 85% cost optimization.
        </p>
      </Description>
    </ProfileDetails>
  </ProfileContainer>
);

export default Profile;