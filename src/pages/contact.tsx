import { NextPage } from "next";
import { AppTitle } from "src/components/atom/appTitle";
import { ContactForm } from "src/components/form";
import { Layout } from "src/layout";

const ContactPage: NextPage = () => {
  return (
    <Layout>
      <AppTitle
        title="contact"
        description="お問合せページ"
        url="/assets/favicons/android-chrome-512x512.png"
      />

      <ContactForm />
    </Layout>
  );
};

export default ContactPage;
