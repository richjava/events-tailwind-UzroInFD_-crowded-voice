import React from "react";
import { getProps } from "@builtjs/site";
import Error from "next/error";
import { withRouter } from "next/router";
import SEO from "@/templates/head/seo/seo";
import ContactForm from "@/templates/forms/contact-form/contact-form";
import Layout from "@/layout/layout";

const Page = (props) => {
  if (props.error) {
    return <Error statusCode={props.error.code} />
  }
  return (
     <>
	<SEO content={props.contactSeoContent} />
		<Layout headerContent={props.headerContent}  footerContent={props.footerContent} >
			 <ContactForm content={props.contactLandingContent} />
			</Layout>
		</>
  );
};

export default withRouter(Page);

export async function getStaticProps() {
  let props = await getProps({pageSlug: 'contact'});
  return {
    props: props,
    revalidate: 10
  };
}