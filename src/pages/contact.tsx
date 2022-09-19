import { NextPage } from "next";
import { useRouter } from "next/router";
import { AppTitle } from "src/components/atom/appTitle";
import { ContactForm } from "src/components/form";
import { Layout } from "src/layout";
import { metaData } from "src/metadata";

const ContactPage: NextPage = () => {
  const router = useRouter();

  return (
    <Layout>
      <AppTitle
        title="contact"
        description="お問合せページ"
        ImageUrl={metaData.siteUrl + metaData.siteLogo}
        ogUrl={metaData.siteUrl + router.pathname}
      />

      <ContactForm />
    </Layout>
  );
};

export default ContactPage;
