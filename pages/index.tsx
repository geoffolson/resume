import Head from "next/head";
import { LinkedInIcon } from "./LinkedInIcon";
import { EmailIcon } from "./EmailIcon";
import { PhoneIcon } from "./PhoneIcon";

type Experience = {
  company: string;
  title: string;
  duration: string;
  accomplishments: React.ReactNode[];
};

const experiences: Experience[] = [
  {
    company: "Allbound",
    title: "Senior Software Engineer",
    duration: "August 2022 to January 2024",
    accomplishments: [
      "Architected and implemented remote development environments using AWS Lightsail, Node.js, and Docker, enhancing developer productivity",
      "Developed a new MDF feature in Typescript, Node, Nestjs, AWS lambda, RDS, Secrets Manager, React.js, and Redux directly contributing to the acquisition of new clients.",
      "Consulted and worked on new Nodejs architecture for future micro services using AWS EC2, Secrets Manager, Nest.js, MySQL, and MongoDB",
      "Architected and developed the front-end of Allbound's new payment module using Typescript, React.js, and Redux.",
      "Developed new UI components and documented with Storybook",
      "Engineered a client-side database solution for efficient local storage and data table management.",
    ],
  },
  {
    company: "Shard",
    title: "Software Engineer",
    duration: "May 2021 to August 2022",
    accomplishments: [
      "Designed and developed full-stack web applications in Typescript, React.js, Redux, Material-ui, AWS ECS, RDS, and Django(Python) or Express to meet the specific needs of clients.",
      "Oversaw maintenance and feature enhancements for existing applications in React.js, Redux, Material-ui, and Typescript.",
      "Optimized performance of a legacy application to support client's growing database, improving scalability.",
      "Collaborated with UI/UX designers and team members to build several successful MVPs using TypeScript, Material-ui, React.js with hooks and/or Redux, AWS EC2, RDS, Node or Django(Python), and PostgreSQL.",
    ],
  },
  {
    company: "Apcon",
    title: "Software Engineer",
    duration: "August 2019 to May 2021",
    accomplishments: [
      "Created a power consumption monitoring dashboard for lab devices in React.js, and Flask(python) providing vital statistics to users",
      "Migrated the company demonstration site to React.js from jQuery for improved performance and user experience. Back-end developed using ASP.NET and MongoDB.",
      "Developed full-stack applications using various technology stacks such as PHP, Python, MySQL, React.js, Mongodb, Flask, and Node improving system efficiency and performance.",
      "Engineered a remote power management microservice for lab equipment.",
      "Built a REST API for a demonstration site, allowing the sales team to showcase products and services to potential customers remotely.",
      "Developed a QA application to generate network traffic using PCAPs in Nodejs and React.js.",
    ],
  },
];

const Section = ({ company, duration, title, accomplishments }: Experience) => {
  return (
    <div style={{ display: "flex", justifyContent: "space-between", width: "100%" }}>
      <div>
        <h3>{company}</h3>
        <ul style={{ width: "40rem" }}>
          {accomplishments.map((curr, idx) => {
            return <li key={idx}>{curr}</li>;
          })}
        </ul>
      </div>
      <div style={{ width: "15rem", marginTop: "0.3rem" }}>
        <p style={{ margin: "0" }}>
          <strong>{title}</strong>
        </p>
        <p style={{ margin: "0", marginTop: "0.5rem" }}>
          <em>{duration}</em>
        </p>
      </div>
    </div>
  );
};

export default function Resume() {
  return (
    <div>
      <Head>
        <title>Geoffrey Olson Jr.</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="resume">
        <h1>Geoffrey Olson Jr.</h1>
        <div className="social-media">
          <div className="social-media-item">
            <EmailIcon size={14} />
            geoffrey.olson.jr@gmail.com
          </div>
          <div className="social-media-item">
            <LinkedInIcon size={14} />
            linkedin.com/in/geoffrey-olson-jr
          </div>
          <div className="social-media-item">
            <PhoneIcon size={14} />
            (503) 709-8277
          </div>
        </div>
        <h2>Technologies</h2>
        <p>
          <strong>Languages:</strong> TypeScript, JavaScript, Python, PHP, JSX, C, C++, C#, SQL,
          Java
          <br />
          <strong>Technologies:</strong> React.js, RESTful APIs, SASS, BASH, Express, Node.js,
          Flask, Docker, AWS EC2, S3, ECS, Lambda, and RDS,
          <br />
          <strong>Operating Systems:</strong> Linux/Unix, Windows
        </p>
        <h2>Summary</h2>
        <p>
          Software Engineer, specializing in designing and implementing software systems with a
          range of technologies. Proven ability to lead development teams and consult on
          enterprise-level projects, with a focus on optimizing performance and enhancing user
          experience.
        </p>
        <h2>Experience</h2>
        {experiences.map((experience, idx) => (
          <Section key={idx} {...experience} />
        ))}
        <h2>Activities and Projects</h2>
        <Section
          company="Viking Robotics Society (Portland State University)"
          duration="September 2016 to Summer 2020"
          title="Vice President"
          accomplishments={[
            "Developed software application in Python interfacing a rapsberry pi driven robotic arm in QA automation for testing PCB board distortion. ",
            "Developed several robotics projects using embedded C++",
            <>
              Built a .NET application in C# using Microsoft Kinect camera to control a robot
              remotely through gestures [
              <a href="https://github.com/pdx-robotics/KinectKHR1">Source Code</a>]
            </>,
          ]}
        />
        <h2>Education</h2>
        {[
          {
            company: "Portland State University",
            accomplishments: [
              "Bachelors in Computer Science",
              "Vice President of PSU’s Robotics Club",
            ],
            title: null,
            duration: "September 2016 to Summer 2020",
          },
          {
            company: "Mt. Hood Community college",
            accomplishments: [
              "Associate of Applied Science, with honors",
              // "Second in class",
              "3.92 GPA",
            ],
            title: null,
            duration: "Summer 2011",
          },
        ].map((education, idx) => (
          <Section key={idx} {...education} />
        ))}
      </div>
      <style jsx>{``}</style>
    </div>
  );
}
