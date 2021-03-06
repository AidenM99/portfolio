import Avatar from "../Avatar/Avatar";
import Button from "../Button/Button";
import AvatarImg from "../../assets/images/avatar.png";
import GithubIcon from "../Icons/GithubIcon";
import DarkWavyBg from "../Backgrounds/DarkWavyBg";
import AboutMe from "./AboutMe";
import Skills from "./Skills";
import SectionHeading from "../SectionHeading/SectionHeading";

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
            <a
              className="button-container"
              href="https://drive.google.com/file/d/1Pr6fW4q_J95Cx5C22WbeVhQ7tkX3yTKS/view?usp=sharing"
              target="_blank"
              rel="noreferrer"
            >
              <Button type="button" text={"view my cv"} />
            </a>
            <GithubIcon />
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
