import {
  ExperienceContainer,
  Title,
  Job,
  JobTitle,
  JobDescription,
  Company,
  JobPeriod,
  JobItem,
} from "../styles/components/ExperienceStyles";

const Experience = () => (
  <ExperienceContainer>
    <Title>Experience</Title>
    <Job>
      <JobTitle>Senior Software Engineer</JobTitle>
      <Company>KamPao.in</Company>
      <JobPeriod> 05/2024 - 12/2025 (Full Time)</JobPeriod>
      <JobDescription>
        <JobItem>
          Designed the backend architecture of the web and mobile application using Ruby on Rails
          to support an increased traffic of 250% due to new user acquisition and onboarding 
        </JobItem>
        <JobItem>
          Spearheaded the database design and architecture to support the increased load 
          ensuring high availability and low latency
        </JobItem>
        <JobItem>
          Implemented a CI/CD pipeline using best DevOps practices to ensure quick and smooth releases
          of new updates while ensuring 99.99% uptime
        </JobItem>
      </JobDescription>
    </Job>
    <Job>
      <JobTitle>Senior Software Engineer - Design Platform</JobTitle>
      <Company>Prolance Services Pvt Ltd</Company>
      <JobPeriod>12/2022 - 04/2024 (Full Time)</JobPeriod>
      <JobDescription>
        <JobItem>
          Architected and launched SketchUp plugin v2.0 for interior design platform, 
          improving UI/UX and adding 15+ new features, resulting in 250% increase in 
          user adoption and $2.5M annual revenue growth
        </JobItem>
        <JobItem>
          Engineered high-performance data transfer layer between React.js frontend 
          and C# backend using asynchronous callbacks, reducing API response time by 
          50% (from 3s to 1.5s) and supporting 10K+ concurrent users
        </JobItem>
        <JobItem>
          Optimized 3D rendering pipeline for quotations and BOQ generation, 
          decreasing processing time by 60% and enabling real-time collaboration 
          for 5,000+ active designers
        </JobItem>
        <JobItem>
          Implemented multi-tenant architecture with custom libraries deployment, 
          supporting 20+ enterprise clients with 99.95% uptime and reducing 
          deployment time from 4 hours to 15 minutes
        </JobItem>
      </JobDescription>
    </Job>
    <Job>
      <JobTitle>Software Engineer II</JobTitle>
      <Company>Indium Software</Company>
      <JobPeriod>05/2021 - 08/2022 (Full Time)</JobPeriod>
      <JobDescription>
        <JobItem>
          Developed RESTful APIs using Ruby on Rails for EdTech platform serving 
          50K+ special needs students, improving learning outcome tracking by 35% 
          and reducing teacher reporting time by 70%
        </JobItem>
        <JobItem>
          Implemented i18n internationalization supporting 12 languages in React.js 
          microservice, expanding platform reach to 8 new countries and increasing 
          user base by 40% (20K new users)
        </JobItem>
        <JobItem>
          Integrated Twilio and Crowdin APIs for real-time communication and 
          translation services, achieving 98% message delivery rate and reducing 
          translation costs by $50K annually
        </JobItem>
        <JobItem>
          Deployed containerized applications using Docker and Kubernetes on AWS EKS, 
          achieving auto-scaling for 3x traffic spikes and reducing infrastructure 
          costs by 30% ($8K monthly savings)
        </JobItem>
      </JobDescription>
    </Job>
    <Job>
      <JobTitle>Senior Ruby Developer</JobTitle>
      <Company>Decorpot</Company>
      <JobPeriod>08/2020 - 04/2021 (Full Time)</JobPeriod>
      <JobDescription>
        <JobItem>
          Spearheaded development of SketchUp Ruby API plugin from inception, 
          delivering MVP in 3 months that generated $500K revenue in first year 
          with 1,000+ active users
        </JobItem>
        <JobItem>
          Automated 3D modeling workflows with Ruby scripts, reducing design time 
          by 99% (from 1 week to 30 minutes) and improving designer productivity by 50x
        </JobItem>
        <JobItem>
          Built real-time synchronization between React frontend and Ruby backend 
          using WebSockets and AWS S3, enabling collaborative design for teams of 
          10+ members with less than 100ms latency
        </JobItem>
      </JobDescription>
    </Job>
    <Job>
      <JobTitle>Software Engineer</JobTitle>
      <Company>CognitiveClouds</Company>
      <JobPeriod>05/2019 - 04/2020 (Full Time)</JobPeriod>
      <JobDescription>
        <JobItem>
          Architected waste management SaaS platform using Ruby on Rails and 
          Elasticsearch, serving 200+ businesses and optimizing route efficiency 
          by 25%, saving $1.2M in operational costs annually
        </JobItem>
        <JobItem>
          Developed payment processing system using Stripe API for salon marketplace, 
          handling $3M+ in transactions with 99.99% accuracy and PCI compliance
        </JobItem>
        <JobItem>
          Built job portal connecting 10K+ job seekers with 500+ recruiters, 
          implementing ML-based matching algorithm that improved placement rate by 40%
        </JobItem>
        <JobItem>
          Led Rails 5 to Rails 6 migration for legacy application with 500K+ LOC, 
          improving performance by 35% and reducing memory usage by 40% through 
          Zeitwerk autoloading
        </JobItem>
        <JobItem>
          Created data scraping pipeline using Ruby HTTP fetchers and parsers,
          processing 10M+ records daily from 50+ television networks with 99.8% accuracy
        </JobItem>
      </JobDescription>
    </Job>
    <Job>
      <JobTitle>Software Engineer</JobTitle>
      <Company>Rently</Company>
      <JobPeriod>01/2018 - 04/2019 (Full Time)</JobPeriod>
      <JobDescription>
        <JobItem>
          Engineered IoT home automation platform using Ruby on Rails and AWS IoT Core, 
          supporting 100K+ smart devices with 99.99% uptime and less than 500ms response time
        </JobItem>
        <JobItem>
          Implemented serverless architecture using AWS Lambda, DynamoDB, and SQS, 
          reducing operational costs by 60% ($15K monthly) while handling 5M+ events daily
        </JobItem>
        <JobItem>
          Established CI/CD pipeline using Docker, GitHub Actions and AWS EC2, 
          reducing deployment time by 80% and enabling 20+ deployments per day with 
          zero downtime
        </JobItem>
      </JobDescription>
    </Job>
    <Job>
      <JobTitle>Software Engineer</JobTitle>
      <Company>Threadsol</Company>
      <JobPeriod>07/2017 - 12/2017 (Full Time)</JobPeriod>
      <JobDescription>
        <JobItem>
          Developed full-stack garment manufacturing ERP system using Ruby on Rails, 
          digitizing operations for 50+ factories and reducing production planning 
          time by 40% and overall fabric wastage by 85%
        </JobItem>
        <JobItem>
          Increased code coverage from 45% to 85% using RSpec and achieved 90% 
          reduction in production bugs through test-driven development practices
        </JobItem>
        <JobItem>
          Optimized deployment process using Mina and GitLab CI/CD, reducing release 
          cycles from 1 week to 2 days and improving team velocity by 50%
        </JobItem>
      </JobDescription>
      <JobPeriod>01/2017 - 06/2017 (Internship)</JobPeriod>
      <JobDescription>
        <JobItem>
          Migrated Java monolith module (30K LOC) to Ruby microservice, improving 
          performance by 25% and reducing maintenance overhead by 70%
        </JobItem>
        <JobItem>
          Mastered Ruby on Rails framework and contributed to 3 production features 
          serving 5K+ daily active users
        </JobItem>
      </JobDescription>
    </Job>
  </ExperienceContainer>
);

export default Experience;