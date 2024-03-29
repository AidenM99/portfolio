import Avatar from "../Avatar/Avatar";
import Button from "../Button/Button";
import AvatarImg from "../../assets/images/avatar.png";
import GithubIcon from "../Icons/GithubIcon";
import DarkWavyBg from "../Backgrounds/DarkWavyBg";
import AboutMe from "./AboutMe";
import Skills from "./Skills";
import SectionHeading from "../SectionHeading/SectionHeading";
import LinkedInIcon from "../Icons/LinkedInIcon";

const About = () => {
  return (
    <section className="section-dark">
      <a href="#" className="anchor" id="about"></a>
      <div className="content-section">
        <SectionHeading
          text={"about"}
          classDeclaration={"about-section-heading"}
        />
        <div className="about-container">
          <div className="about-left">
            <Avatar source={AvatarImg} />
            <div className="about-icons-container">
              <GithubIcon />
              <LinkedInIcon />
            </div>
          </div>
          <div className="about-right">
            <AboutMe />
            <Skills />
          </div>
        </div>
      </div>
      <DarkWavyBg />
    </section>
  );
};

export default About;
