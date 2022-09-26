import React from "react";
import { getProps } from "@builtjs/site";
import Error from "next/error";
import { withRouter } from "next/router";
import SEO from "@/templates/head/seo/seo";
import Cards1 from "@/templates/cards/cards-1/cards-1";
import HeroCover from "@/templates/covers/hero-cover/hero-cover";
import Layout from "@/layout/layout";

const Page = (props) => {
  if (props.error) {
    return <Error statusCode={props.error.code} />
  }
  return (
     <>
	<SEO content={props.homeSeoContent} />
		<Layout headerContent={props.headerContent}  footerContent={props.footerContent} >
			 <HeroCover content={props.eventsHeroContent} />
			 <Cards1 content={props.eventsListContent} />
			</Layout>
		</>
  );
};

export default withRouter(Page);

export async function getStaticProps() {
  let props = await getProps({pageSlug: 'home'});
  return {
    props: props,
    revalidate: 10
  };
}