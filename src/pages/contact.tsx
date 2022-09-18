import { NextPage } from "next";
import { AppTitle } from "src/components/atom/appTitle";
import { ContactForm } from "src/components/form";
import { Layout } from "src/layout";
import { metaData } from "src/metadata";

const ContactPage: NextPage = () => {
  return (
    <Layout>
      <AppTitle
        title="contact"
        description="お問合せページ"
        url={metaData.siteUrl + metaData.siteLogo}
      />

      <ContactForm />
    </Layout>
  );
};

export default ContactPage;
