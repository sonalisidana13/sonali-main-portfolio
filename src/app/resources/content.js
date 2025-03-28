import { InlineCode } from "@/once-ui/components";

const person = {
  firstName: "Sonali",
  lastName: "Sidana",
  get name() {
    return `${this.firstName} ${this.lastName}`;
  },
  role: "Product Engineer",
  avatar: "/images/sonali-profile.jpeg",
  location: "Asia/Kolkata", // Expecting the IANA time zone identifier, e.g., 'Europe/Vienna'
  languages: [], // optional: Leave the array empty if you don't want to display languages
};

const newsletter = {
  display: true,
  title: <>Subscribe to {person.firstName}'s Newsletter</>,
  description: (
    <>
      I occasionally write about design, technology, and share thoughts on the
      intersection of creativity and engineering.
    </>
  ),
};

const social = [
  // Links are automatically displayed.
  // Import new icons in /once-ui/icons.ts
  {
    name: "GitHub",
    icon: "github",
    link: "https://github.com/sonalisidana13",
  },
  {
    name: "LinkedIn",
    icon: "linkedin",
    link: "https://www.linkedin.com/in/sonali-sidana-1310/",
  },
  {
    name: "X",
    icon: "x",
    link: "https://x.com/SonaliSidana",
  },
  {
    name: "Email",
    icon: "email",
    link: "sonalisidana13@gmail.com",
  },
];

const home = {
  label: "Home",
  title: `${person.name}'s Portfolio`,
  description: `Portfolio website showcasing my work as a ${person.role}`,
  headline: <>Design engineer and builder</>,
  subline: (
    <>
      I'm Sonali, a product engineer at <InlineCode>Digii</InlineCode>, where I
      craft intuitive
      <br /> user experiences. After hours, I build my own projects.
    </>
  ),
};

const about = {
  label: "About",
  title: "About me",
  description: `Meet ${person.name}, ${person.role} from ${person.location}`,
  tableOfContent: {
    display: true,
    subItems: false,
  },
  avatar: {
    display: true,
  },
  calendar: {
    display: true,
    link: "https://cal.com",
  },
  intro: {
    display: true,
    title: "Introduction",
    description: (
      <>
        I'm Sonali Sidana, a Senior Product Engineer at Digii, where I craft
        scalable systems and intuitive user experiences. Beyond work, I love
        exploring new technologies, optimizing system architectures, and working
        on my own projects to push creative and technical boundaries.
      </>
    ),
  },
  work: {
    display: true, // set to false to hide this section
    title: "Work Experience",
    experiences: [
      {
        company: "Digii",
        timeframe: "Jul 2022 - Present",
        role: "Senior Product Engineer",
        achievements: [
          <>
            Architected, designed, and scaled platforms to support high-traffic
            applications through robust engineering design, system architecture,
            on-call management, and incident resolution.
          </>,
          <>
            Led and mentored a team of 5+ engineers, improving code quality,
            technical expertise, and best practices.
          </>,
          <>
            Designed a multi-node Elasticsearch architecture, reducing search
            latency by 40% and enhancing system performance.
          </>,
          <>
            Implemented tenant migrations and resource optimizations, lowering
            infrastructure costs while improving scalability and reliability.
          </>,
          <>
            Worked with the team on creating tenant and hub creation using
            Terraform, streamlining infrastructure provisioning and reducing
            manual effort.
          </>,
          <>
            Developed Python scripts for AWS instance creation, significantly
            reducing deployment time and improving operational efficiency.
          </>,
        ],
        images: [
          // optional: leave the array empty if you don't want to display images
          {
            src: "/images/projects/project-01/cover-01.jpg",
            alt: "Once UI Project",
            width: 16,
            height: 9,
          },
        ],
      },
      {
        company: "Digii",
        timeframe: "Aug 2020 - Jun 2022",
        role: "Product Engineer",
        achievements: [
          <>
            Revamped the Mess Management System, improving operational
            efficiency by 98% .
          </>,
          <>
            Optimized the Academic Management System, reducing course
            registration time by 80% by enhancing query performance and caching
            with Redis.
          </>,

          <>
            Migrated the frontend codebase from ES5 to ES6, modernizing the
            stack for better maintainability.
          </>,
          <>
            Enhanced Campus Workflow Automation, increasing system adoption by
            50% in the campus.
          </>,
          <>
            Developed and deployed 15+ core modules using AngularJS, Java, and
            Spring Boot, enhancing system performance and user experience.
          </>,
        ],
        images: [],
      },
      {
        company: "Digii",
        timeframe: "Aug 2019 - Jul 2020",
        role: "Engineering Intern",
        achievements: [
          <>
            Developed a Gate Pass Management System automating record-keeping
            and reducing administrative workload by 90%.
          </>,
          <>
            Built Hostel & Staff Attendance Systems eliminating manual tracking
            and improving accuracy by 80%.
          </>,
          <>
            Designed reusable AngularJS components, enhancing development
            efficiency and accelerating feature rollout.
          </>,
        ],
        images: [],
      },
    ],
  },
  studies: {
    display: true, // set to false to hide this section
    title: "Studies",
    institutions: [
      {
        name: "Vellore Institute of Technology (VIT), Vellore",
        timeframe: "Jul 2018 - Jun 2020",
        description: <>Master of Computer Applications</>,
      },
      {
        name: "MCM DAV College For Women, Chandigarh",
        timeframe: "Jul 2015 - Jun 2018",
        description: <>Bachelor of Computer Applications</>,
      },
    ],
  },
  technical: {
    display: true, // set to false to hide this section
    title: "Technical skills",
    skills: [
      {
        title: "Programming & Frameworks",
        description: [
          <>Frontend: HTML, CSS, JavaScript, AngularJS, ReactJS, Bootstrap</>,
          <>Backend: Java, Spring Boot</>
        ],
        // optional: leave the array empty if you don't want to display images
        images: [],
      },
      {
        title: "Databases & Cloud Services",
        description: [
          <>Databases: MySQL, NoSQL, Elasticsearch</>,
          <>Cloud & DevOps: AWS (S3, Lambda, EC2, Athena, RDS, CloudWatch)</>
        ],
        // optional: leave the array empty if you don't want to display images
        images: [],
      },
      {
        title: "Other Tools & Expertise",
        description: [
          <>Git, REST APIs, System Architecture, Data Structures</>
        ],
        // optional: leave the array empty if you don't want to display images
        images: [],
      },
    ],
  },
};

const blog = {
  label: "Blog",
  title: "Writing about design and tech...",
  description: `Read what ${person.name} has been up to recently`,
  // Create new blog posts by adding a new .mdx file to app/blog/posts
  // All posts will be listed on the /blog route
};

const work = {
  label: "Work",
  title: "My projects",
  description: `Design and dev projects by ${person.name}`,
  // Create new project pages by adding a new .mdx file to app/blog/posts
  // All projects will be listed on the /home and /work routes
};

const gallery = {
  label: "Gallery",
  title: "My photo gallery",
  description: `A photo collection by ${person.name}`,
  // Images from https://pexels.com
  images: [
    {
      src: "/images/gallery/img-01.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/img-02.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-03.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/img-04.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-05.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-06.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/img-07.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-08.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/img-09.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-10.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-11.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/img-12.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-13.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-14.jpg",
      alt: "image",
      orientation: "horizontal",
    },
  ],
};

export { person, social, newsletter, home, about, blog, work, gallery };
