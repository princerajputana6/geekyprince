import AboutSection from "@/components/About/index";
import Breadcrumb from "@/components/Common/Breadcrump.jsx";

const About = () => {
  return (
    <>
      <Breadcrumb
        pageName="About Page"
        description="Geeky Prince Pvt. Ltd. is dedicated to Website and CMS Development . We believe in making a positive impact and giving back to the clients we serve."
      />
      <br/>
      <br/>
      <AboutSection/>
      
    </>
  );
};

export default About;
