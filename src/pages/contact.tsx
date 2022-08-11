import { NextPage } from "next";
import { ContactForm } from "src/components/form";
import { Layout } from "src/layout";

const ContactPage: NextPage = () => {
  return <Layout>
<ContactForm/>
  </Layout>;
};

export default ContactPage;
