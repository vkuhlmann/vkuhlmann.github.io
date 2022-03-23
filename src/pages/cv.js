import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import styles from './index.module.css';
import HomepageFeatures from '../components/HomepageFeatures';
import ShowEmail from "../components/ShowEmail";
import _ from "lodash";
import MaterialTable from "material-table";
import {Grid, Box} from "theme-ui";
import Timeline from '../components/Timeline';
import Experiences from "../components/Experiences";
import Experience from "../components/Experience";

import CVData from "./cv.json";

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

  let personalDetailsRaw = `
    Name: Vincent Kuhlmann.
    Date of birth: 23 February 2000.
    Place of birth: Brussels, Belgium.
    Location of living: Utrecht, The Netherlands.
    Nationality: Dutch.
    Languages: English, Dutch, French (basic understanding), German (basic understanding).
    E-mail: .
    Gender: Male.
  `;

  let personalDetails = 
    _(personalDetailsRaw.trim().split("\n"))
    .map(entry => {
      let [header, value] = _.map(entry.split(":"), a => a.trim());
      if (header == "E-mail")
        value = <ShowEmail inline endwithdot/>;
      return {
        header,
        value
      };
    })
    .value()
    ;

  // console.log("Personal details:");
  // console.log(personalDetails);

  return (
    <Layout
      title="CV"
      description="Curriculum Vitae of Vincent Kuhlmann">
      {/* <HomepageHeader /> */}
      <main>
        <div style={{padding: "20px", display: "flex", flexFlow: "column nowrap",
                  alignItems: "center", textAlign: "justify" }}>
          <div style={{width: "min(calc(100vw - 5em), 60em)"}}>
            <h1>Curriculum vitae</h1>

            {/* <p>
              Name: Vincent Kuhlmann.<br/>
              Date of birth: 23 February 2000.<br/>
              Place of birth: Brussels, Belgium.<br/>
              Location of living: Utrecht, The Netherlands.<br/>
              Nationality: Dutch.<br/>
              Languages: English, Dutch, French (basic understanding), German (basic understanding).<br/>
              E-mail: <ShowEmail inline endwithdot/><br/>
              Gender: Male.
            </p> */}

            <div style={{maxWidth: "100%", marginBottom: "30px"}}>
            <Grid gap={"0px 20px"} columns={[2, "auto 1fr"]}>
              {_.map(personalDetails, (entry, index) => (
                <React.Fragment key={index}>
                  <Box><strong>{entry.header}:</strong></Box>
                  <Box>{entry.value}</Box>
                </React.Fragment>
              ))}
            </Grid>
            </div>
            {/* Student at Utrecht University. Mathematics and Physics. Hobbyist development experience: 10+ years (C++, C#, Python, Javascript, Java, ...) */}

            <h2>Education and experiences</h2>
            {/* <ul>
                <li>September 2018 - Present*: Bachelor of science Mathematics at Utrecht University.</li>
                <li>September 2018 - Present*: Bachelor of science Physics at Utrecht University.</li>
                <li>September 2018 - Present*: Bachelor of science minor Computer Science at Utrecht University.</li>
                <li>February 2020 - Present: Chairman LaTeX committee at study association A-Eskwadraat.</li>
                <li>September 2020 - February 2022: Teaching assistantships (2x).</li>
                <li>September 2021 - December 2021: Dutch Teacher and Secretary at Dutch Language Committee of ESN Utrecht.</li>
                <li>September 2012 - June 2018: High school at Sint-Jan Berchmanscollege Brussels.</li>
            </ul>
            <p>
                * Graduation expected in summer of 2022.
            </p> */}

            <Experiences>
              {/* <Experience 
                from="2018-09" to="present*"
                title="Bachelor of science Mathematics"
                organization="Utrecht University"
              /> */}
              {
                _(CVData.experiences).map((exp, index) => (
                  <Experience entry={exp}
                    from={exp.from}
                    to={exp.to}
                    title={exp.title}
                    organization={exp.organization}
                  />
                )).value()
              }
            </Experiences>
            <p>
                * Graduation expected in summer of 2022.
            </p>

            <p>
                <strong>Current availability:</strong>{' '}
                I plan on starting a master after graduating my bachelor. I have
                no plans of doing internships or part-time working during my
                master.
            </p>

            {/* <Timeline /> */}

            <h2>About me</h2>
            <p>
              <strong>Developer.</strong>{' '}
              Developer and scientist who likes analysis and systematic problem
              solving. Fascinated by technology since early childhood and
              software developing since age 11, I have constantly been learning
              new platforms, techniques, programming languages and keeping up to
              technology trends. I like to continually experiment with new
              technologies and challenge myself, and I am still learning.
              With more than 10 years of experience and learning every day,
              each year makes me more confident I can achieve just about any
              project I can imagine.
               {/* With more than 10 years of experience, in which
              I continually experimented with new technologies and challenged
              myself, 
              continually experimenting and challenging myself, each passing
              year, I gain confidence in being able to achieve any project I
              could imagine. */}
            </p>
            <p>
              <strong>Mathematician and scientist.</strong>{' '}
              Aside from my self-taught technology expertise, I have studied
              mathematics and physics at Utrecht University, providing me the
              mental framework to solve highly technical problems using a
              fundamental understanding and academic soundness. Anything in
              science can spark my interest, and whenever desired, I can
              self-teach myself new domains in the realm of science.
            </p>
            <p>
              <strong>Teaching.</strong>{' '}
              I have teached students at many occasions, as teaching assistant,
              as LaTeX teacher of my study association, as Dutch teacher to
              international students, and in private to individuals. Like
              everywhere in my life, I experiment with technology to
              continuously improve my way of teaching, a.o.{' '}
              {/* taking LaTeX to the next level and */}
              creating website pages used for reference material or exercises.
            </p>
            <p>
              <strong>Diversity.</strong>{' '}
              Each of these domains (i.e. mathematics, physics, technology,
              teaching) is already rich on itself in the ways of understanding
              and approaching problems, and all together, they provide an even
              more powerful toolset. I was raised in Brussels, a multicultural
              city where the vast majority of students at my school were native
              in speaking
              French, the teachers Flemish, and my parents Dutch, which created
              a wonderful junction of cultures and languages. I see diversity
              as important to finding new and inventive solutions to problems,
              and I am glad that even when working on my own, there is already
              a healthy amount of these different perspectives, boosting project
              success.              
              {/* and I am glad that even when working on my own, 

              as key to inventivity and effective solutions, and I am glad that
              even when working on my own, there is already a healthy amount of
              different perspectives, boosting project success. */}
            </p>
            <h2>Development skills</h2>
              <strong>Programming languages:</strong>
              <ul>
                <li>
                  Daily drivers (used several years in advanced projects):
                  C++, Python, LaTeX+TeX, C#, JavaScript, React, Java, HTML,
                  CSS+SCSS+SASS
                </li>
                <li>
                  Experienced (but I might need a refresher as for most of these
                  languages I have made less than 15 projects with them):
                  MATLAB, Mathematica, Arduino, Visual Basic, VBA, TI-BASIC,
                  C++/CLI.
                </li>
                <li>
                  Interested to learn or already basic understanding:
                  PHP, Assembly, F#, R.
                </li>
              </ul>

              <p>
                <strong>Experience developing with:</strong>{' '}
                Linux, Amazon Web Services, Sqlite3 databases.
              </p>
              <p>
                <strong>Experience developing for:</strong>{' '}
                Web, Flutter, Windows Win32, Android, command-line interfaces,
                Windows UWP.
              </p>

              {/* Experience with technologies: Sqlite3 database, Flutter, Windows Win32,
              Windows UWP, 
              <ul>
                <li>Sqlite3 databas</li>
              </ul>

              Notable technologies:


              Other notable experiences: Flutter, 

              Experience with technologies:
              <ul>
                <li>
                  Storage and parsing: JSON, Sqlite3 database, binary parsing and saving,
                  CSV, regex
                </li>
                <li>
                  Software platforms: Web, terminals,
                  Flutter, Windows Win32, Windows UWP, Android.
                </li>
                <li>
                  Productivity tools: Linux, Amazon Web Services.
                  ,
                  //Visual Studio, Visual Studio Code, Python,
                  //Windows (Windows XP through Windows 11), Microsoft Office.
                </li>
              </ul> */}
          </div>
        </div>
        {/* <HomepageFeatures /> */}
      </main>
    </Layout>
  );
}
