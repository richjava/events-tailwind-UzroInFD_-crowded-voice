import React from "react";
import { getProps } from "@builtjs/site";
import Error from "next/error";
import { withRouter } from "next/router";
import SEO from "@/templates/head/seo/seo";
import Cards1 from "@/templates/cards/cards-1/cards-1";
import Layout from "@/layout/layout";

const Page = (props) => {
  if (props.error) {
    return <Error statusCode={props.error.code} />
  }
  return (
     <>
	<SEO content={props.eventsSeoContent} />
		<Layout headerContent={props.headerContent}  footerContent={props.footerContent} >
			 <Cards1 content={props.eventsLandingContent} />
			</Layout>
		</>
  );
};

export default withRouter(Page);

export async function getStaticProps() {
  let props = await getProps({pageSlug: 'event'});
  return {
    props: props,
    revalidate: 10
  };
}