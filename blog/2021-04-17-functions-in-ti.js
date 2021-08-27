import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import {MDXProvider} from '@mdx-js/react'
//import styles from './index.module.css';
import CodeBlock from "../src/components/CodeBlock"
import OrigCodeBlock from "@theme/CodeBlock";

/* eslint-disable import/no-webpack-loader-syntax */
import FunctionInTi from "!babel-loader!@mdx-js/loader!../src/components/functions-in-ti.md"

const components = {
  pre: props => <div {...props} />,
  code: CodeBlock
}

export default props => {
  //const {siteConfig} = useDocusaurusContext();
  return (
    <MDXProvider components={components}>
      <FunctionInTi />
    </MDXProvider>
  );
  // return (
  //   <Layout
  //     title={`Hello from ${siteConfig.title}`}
  //     description="Description will go into a meta tag in <head />">
  //     <HomepageHeader />
  //     <main>
  //       <HomepageFeatures />
  //     </main>
  //   </Layout>
  // );
}
