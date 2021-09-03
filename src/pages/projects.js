import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import styles from './index.module.css';

function ProjectsHeader() {
    return (
        <header className={clsx('hero hero--primary', styles.heroBanner)}>
            <div className="container">
                <h1 className="hero__title">Projects</h1>
                <p className="hero__subtitle">Open source side projects</p>
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

export default function Projects() {
    return (
        <Layout
            title="Projects"
            description="My personal open source projects">
            <ProjectsHeader />
            <main>
                <div style={{padding: "20px", display: "flex", flexFlow: "row wrap",
                justifyContent: "center"}}>
                    Contents have not been migrated yet.
                </div>
                {/* <HomepageFeatures /> */}
            </main>
        </Layout>
    );
}
