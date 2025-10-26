import "react-social-icons/github";
import "react-social-icons/linkedin";
import { SocialIcon } from "react-social-icons";
import {
  ContactContainer,
  Title,
  ContactText,
  ContactInfo,
  Icon,
  FooterContainer,
  SocialIconContainer,
} from "../styles/components/ContactStyles";

const Contact = () => {
  return (
    <FooterContainer>
      <ContactContainer>
        <Title>Contact Information</Title>
        <ContactInfo>
          <Icon>📞</Icon>
          <ContactText>+91-9163689800</ContactText>
        </ContactInfo>
        <ContactInfo>
          <Icon>📧</Icon>
          <ContactText>smtp.connectmak@outlook.com</ContactText>
        </ContactInfo>
        <ContactInfo>
          <Icon>📍</Icon>
          <ContactText>Bengaluru, Karnataka, India</ContactText>
        </ContactInfo>
        <SocialIconContainer>
          <SocialIcon target="_blank" url="https://github.com/smakthe" />
          <SocialIcon
            target="_blank"
            url="https://www.linkedin.com/in/scmakra99"
          />
        </SocialIconContainer>
      </ContactContainer>
    </FooterContainer>
  );
};

export default Contact;