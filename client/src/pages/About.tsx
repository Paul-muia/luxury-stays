import AboutSection from "@/components/about/AboutSection";
import { Helmet } from "react-helmet";

const About = () => {
  return (
    <>
      <Helmet>
        <title>About Us | Perfect Luxury Stays</title>
        <meta name="description" content="Learn about Perfect Luxury Stays, our mission, and our commitment to providing exceptional luxury accommodations in Nairobi." />
      </Helmet>
      <AboutSection />
    </>
  );
};

export default About;
