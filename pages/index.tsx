import Head from "next/head";

const experiences: {
  company: string;
  title: string;
  duration: string;
  accomplishments: string[];
}[] = [
  {
    company: "Allbound",
    title: "Senior Software Engineer",
    duration: "August 2022 to Current",
    accomplishments: [
      "Architected and developed the front-end of Allbound's new payment module.",
      "Served as a principal consultant for the architecture of future Node APIs.",
      "Engineered a client-side database solution for efficient local storage and data table management.",
      "Developed a new MDF feature that directly contributed to the acquisition of new clients.",
    ],
  },
  {
    company: "Shard",
    title: "Software Engineer",
    duration: "May 2021 to August 2022",
    accomplishments: [
      "Designed and developed full-stack web applications to meet the specific needs of clients.",
      "Oversaw maintenance and feature enhancements for existing applications.",
      "Optimized performance of a legacy application to support client's growing database, improving scalability.",
      "Collaborated with UI/UX designers and team members to build several successful MVPs using TypeScript, React.js with hooks and/or Redux, Node or Django, and PostgreSQL.",
    ],
  },
  {
    company: "Apcon",
    title: "Software Engineer",
    duration: "August 2019 to May 2021",
    accomplishments: [
      "Developed full-stack applications using various technology stacks, improving system efficiency and performance.",
      "Engineered a remote power management microservice for lab equipment.",
      "Built a REST API for a demonstration site, allowing the sales team to showcase products and services to potential customers remotely.",
      "Migrated the demonstration site to React.js from jQuery for improved performance and user experience. Back-end developed using ASP.NET and MongoDB.",
      "Developed a QA application to generate network traffic using PCAPs.",
      "Created a power consumption monitoring dashboard for lab devices, providing vital statistics to users",
    ],
  },
];

export default function Home() {
  return (
    <div>
      <Head>
        <title>Geoffrey Olson Jr.</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="resume">
        <h1>Geoffrey Olson Jr.</h1>
        <div className="email">geoffrey.olson.jr@gmail.com</div>
        <h2>Summary</h2>
        <p>
          Accomplished Full-stack Software Engineer, specializing in designing and implementing
          software systems with a range of technologies. Proven ability to lead development teams
          and consult on enterprise-level projects, with a keen focus on optimizing performance and
          enhancing user experience.
        </p>
        <h2>Technologies</h2>
        <p>
          <strong>Languages:</strong> TypeScript, JavaScript, JSX, C, C++, C#, Python, SQL, PHP,
          Java
          <br />
          <strong>Technologies:</strong> React.js, RESTful APIs, SASS, BASH, Express, Node.js,
          Flask, Docker, jQuery
          <br />
          <strong>Operating Systems:</strong> Linux/Unix, Windows
        </p>
        <h2>Experience</h2>
        {experiences.map((experience) => {
          return (
            <>
              <h3>{experience.company}</h3>
              <p>
                <em>{experience.duration}</em>
              </p>
              <p>
                <strong>{experience.title}</strong>
              </p>
              <ul>
                {experience.accomplishments.map((curr) => (
                  <li>{curr}</li>
                ))}
              </ul>
            </>
          );
        })}
        <h2>Activities and Projects</h2>
        <h3>Viking Robotics Society (Portland State University)</h3>
        <p>
          <em>September 2016 to summer 2020</em>
        </p>
        <p>
          <strong>Vice President of PSU’s Robotics Club</strong>
        </p>
        <ul>
          <li>Major Code contributor and Collaborator</li>
          <li>Developed several robotics projects using embedded C++</li>
          <li>
            Built a .NET application in C# using Microsoft Kinect camera to control a robot remotely
            through gestures.
          </li>
          <li>
            <a href="https://robotics.ece.pdx.edu/projects/index.php?name=Humanoid%20Robot%20KHR-1">
              Site Link
            </a>
          </li>
          <li>
            C# code for the motion control:
            <a href="https://github.com/pdx-robotics/KinectKHR1">
              https://github.com/pdx-robotics/KinectKHR1
            </a>
          </li>
        </ul>
        <h2>Education</h2>
        <h3>Portland State University</h3>
        <p>
          <em>September 2016 to summer 2020</em>
        </p>
        <p>
          <strong>Bachelor of Science in Computer Science</strong>
        </p>
        <h3>Mt. Hood Community college</h3>
        <p>
          <em>Graduated summer 2011</em>
        </p>
        <p>
          <strong>Associate of Applied Science, with honors </strong>
        </p>
        <p>Graduated second in class with a 3.92 GPA</p>
      </div>

      <style jsx>{``}</style>
    </div>
  );
}
