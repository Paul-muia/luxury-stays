import ContactSection from "@/components/contact/ContactSection";
import { Helmet } from "react-helmet";

const Contact = () => {
  return (
    <>
      <Helmet>
        <title>Contact Us | Perfect Luxury Stays</title>
        <meta name="description" content="Get in touch with Perfect Luxury Stays for inquiries about our luxury properties or to book your next stay in Nairobi." />
      </Helmet>
      <ContactSection />
    </>
  );
};

export default Contact;
