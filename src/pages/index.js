import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import styles from './index.module.css';
import HomepageFeatures from '../components/HomepageFeatures';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <h1 className="hero__title">{siteConfig.title}</h1>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        {/* <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/docs/intro">
            Docusaurus Tutorial - 5min ⏱️
          </Link>
        </div> */}
      </div>
    </header>
  );
}

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title="Home"
      description="Personal website of Vincent Kuhlmann">
      <HomepageHeader />
      <main>
        <div style={{padding: "20px", display: "flex", flexFlow: "column nowrap",
                  alignItems: "center", textAlign: "justify" }}>
          <div style={{width: "min(calc(100vw - 5em), 40em)"}}>
            <p>
              I'm a mathematics and physics student, living in the Netherlands.
              I've also been doing software development as a hobby since my
              childhood.
            </p>
            <p>
              For now, this website is primarily a place where I explore website
              development.
            </p>
            <p>
              This website is mainly built using{` `}
              <Link to="https://docusaurus.io/">Docusaurus</Link>, which
              provides a website template using React and Webpack. The website
              is hosted by <Link to="https://pages.github.com/">GitHub Pages</Link>,
              with the repository for this site located at{` `}
              <Link to="https://github.com/vkuhlmann/vkuhlmann.github.io">github.com/vkuhlmann/vkuhlmann.github.io</Link>.
              Code highlighting on this website is done using <Link to="https://prismjs.com/">Prism</Link> and
              custom code.
            </p>
          </div>
        </div>
        {/* <HomepageFeatures /> */}
      </main>
    </Layout>
  );
}
