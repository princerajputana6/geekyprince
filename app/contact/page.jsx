import Breadcrumb from "@/components/Common/Breadcrumb";
import Contact from "@/components/Contact";

const ContactPage = () => {
  return (
    <>
      <Breadcrumb
        pageName="Contact Page"
        description="Our Contact Us page provides a way for visitors to get in touch with us for inquiries, support, or feedback. This includes contact information such as phone numbers, email addresses, and physical addresses, as well as a contact form that visitors can fill out to send us a message directly. The goal is to make it easy for people to reach out to us and connect with our business."
      />

      <Contact />
    </>
  );
};

export default ContactPage;
