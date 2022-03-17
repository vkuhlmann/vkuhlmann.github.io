import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import styles from './index.module.css';
import HomepageFeatures from '../components/HomepageFeatures';
import ShowEmail from "../components/ShowEmail";

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        {/* <h1 className="hero__title">{siteConfig.title}</h1> */}
        <h1 className="hero__title">vkuhlmann<span style={{userSelect:"none"}}>&#x200b;</span>.com</h1>
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
      title="CV"
      description="Curriculum Vitae of Vincent Kuhlmann">
      {/* <HomepageHeader /> */}
      <main>
        <div style={{padding: "20px", display: "flex", flexFlow: "column nowrap",
                  alignItems: "center", textAlign: "justify" }}>
          <div style={{width: "min(calc(100vw - 5em), 40em)"}}>
            <p>
              Name: Vincent Kuhlmann<br/>
              E-mail: <ShowEmail inline/><br/>
              Age: 22<br/>
              Gender: Male
            </p>
            <p>
                Student at Utrecht University. Mathematics and Physics. Hobbyist development experience: 10+ years (C++, C#, Python, Javascript, Java, ...)
            </p>
            <p>

            </p>
            Course of life:
            <ul>
                <li>September 2018 - 2022*: Bachelor of science Mathematics at Utrecht University.</li>
                <li>September 2018 - 2022*: Bachelor of science Physics at Utrecht University.</li>
                <li>September 2018 - 2022*: Bachelor of science minor informatics at Utrecht University.</li>
                <li>February 2020 - Present: Chairman LaTeX committee at study association A-Eskwadraat.</li>
                <li>September 2020 - February 2022: Teaching assistantships (2x).</li>
                <li>September 2021 - December 2021: Dutch Teacher and Secretary at Dutch Language Committee of ESN Utrecht.</li>
                <li>September 2012 - June 2018: High school at Sint-Jan Berchmanscollege Brussels.</li>
            </ul>
            <p>
                * Graduation expected in summer of 2022.
            </p>
          </div>
        </div>
        {/* <HomepageFeatures /> */}
      </main>
    </Layout>
  );
}
