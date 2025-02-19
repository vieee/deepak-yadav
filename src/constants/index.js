import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  reactjs,
  tailwind,
  nodejs,
  mongodb,
  git,
  docker,
  threejs,
} from "../assets";
import web_site from "../assets/web_site.png";
import resume_maker_pic from "../assets/works/resume_project.png";
import business_tracker_project from "../assets/works/business_project.png";
import classroom_connect_project from "../assets/works/classroom_project.jpg";
import python from "../assets/tech/python.png";
import r from "../assets/tech/r.png";
import tf from "../assets/tech/tf.png";

import tero from "../assets/company/tero.png";
import jpmc from "../assets/company/jpmc.png";
import tis from "../assets/company/tis.png";
import abstrct from "../assets/company/abstrct.png";
import rur from "../assets/company/rur.png";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Development",
    icon: web,
  },
  {
    title: "Quantitative Finance",
    icon: mobile,
  },
  {
    title: "Machine Learning",
    icon: backend,
  },
  {
    title: "Deep Learning",
    icon: creator,
  },
];

const technologies = [
  {
    name: "Python",
    icon: python,
  },
  {
    name: "R",
    icon: r,
  },
  {
    name: "Tensorflow",
    icon: tf,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Quant Risk Modeling",
    company_name: "JP Morgan Chase & Co.",
    icon: jpmc,
    iconBg: "#383E56",
    date: "Aug 2022 - Present",
    points: [
      "Led and managed the Backtesting process for over 150 simulation and pricing models within the scope of IMM and bespoke cases. Automated the reporting and data reconciliation, thereby reducing the overall process timeline by 35%.",
      "Worked on the Model Reviews and Scope Extensions for 6 models & 2 regulatory backtesting processes across multiple asset classes. Addressed 45 MRIs and 6 MLs as well as automated independent testing efforts for all CPG Simulation as well as FX and Commodity pricing models.",
      "Revamped the OPM and Model RAG Rating processes for all the models within the CPG space.",
      "Co-ordinated with the Strats and Software teams to automate several BAU processes for model performance testing. Developed multiple bob-jobs and data driven solutions, thereby enhancing the overall process efficiency.",
    ],
  },
  {
    title: "Quant Research",
    company_name: "JP Morgan Chase & Co.",
    icon: jpmc,
    iconBg: "#E6DEDD",
    date: "Jan 2022 - Jul 2022",
    points: [
      "Worked on the Model Review of Equity Forward, Future & Synthetic Asset Pricing Models & the Implementation Testing of Commodity Swap Vanilla Pricer.",
      "Successfully automated the generation of Review Tables for Quarterly FnO deals, reducing the overall process timeline by 80%.",
      "Analyzed Equity Swap MtMs as a part of Backtesting Support.",
      "Fixed a bug in the existing MtM Comparison script, thereby explaining the MtM Difference caused due to differing Variance Swap Curve data between Source & Internal systems, thereby explaining ~40% MtM Difference for mispricing deals.",
    ],
  },
  {
    title: "Software Programmer",
    company_name: "The Innovation Story",
    icon: tis,
    iconBg: "#383E56",
    date: "Oct 2021 - Jun 2022",
    points: [
      "Created custom Java Modules to program robots for FIRST Robotics Challenge & FIRST Tech Challenge.",
      "Applied Vision Processing, Autonomous Robot Path Planning & Object Detection using TensorFlow & PathWeaver.",
      "Mentored 7 student teams of Dhirubhai Ambani International School and several NGOs across Mumbai for FIRST Robotics Challenge & FIRST Tech Challenge.",
    ],
  },
  {
    title: "Junior Web Developer",
    company_name: "Tero (acquired by Coinis)",
    icon: tero,
    iconBg: "#E6DEDD",
    date: "Jul 2021 - Aug 2021",
    points: [
      "Developed innate MongoDB Analytics Mechanism, thereby reducing project dependencies and cutting operations cost by 24%.",
      "Updated Tree Saving Measurement Analysis Widget on the website.",
    ],
  },
  {
    title: "Web Developer",
    company_name: "Abstrct",
    icon: abstrct,
    iconBg: "#E6DEDD",
    date: "Dec 2020 - Mar 2021",
    points: [
      "Developed responsive components on the website, improving the page-load speed.",
      "Created Barcode, QR code & wish-list on the website. Implemented responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Technical Support Intern",
    company_name: "RUR Greenlife Pvt. Ltd.",
    icon: rur,
    iconBg: "#E6DEDD",
    date: "Jul 2019 - Feb 2020",
    points: [
      "Established a network to transfer feedback data for project to respective team assignees in Excel.",
      "Created a backend which ensures robust storage.",
      "Created a VBA layout for data entry task.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "Deepak's systematic approach to data sourcing and backtesting has significantly improved the efficiency and quality of regulatory reports, ensuring timely and submissions and enhanced team performance through persistent training efforts.",
    name: "Rohit Pethe",
    designation: "Quant",
    company: "JP Morgan",
    image: "https://randomuser.me/api/portraits/men/35.jpg",
  },
  {
    testimonial:
      "Deepak is a phenomenal engineer. He has a good grasp of the core concepts of Frontend development. He always takes initiative and completes the assigned work way before time. It was great working with Deepak. Hope we get to work together again...",
    name: "Eeshita Shukla",
    designation: "Developer",
    company: "Abstrct",
    image: "https://randomuser.me/api/portraits/women/19.jpg",
  },
  {
    testimonial:
      "Deepak has worked diligently on front-end programming during his tenure at Abstrct. He has a great hold on basics of programming and his work reflects impeccable quality. He is flexible and can switch smoothly through impromptu changes. I wish him all the best for his future endeavours.",
    name: "Aditya Shejwal",
    designation: "Co-Founder",
    company: "Abstrct",
    image: "https://randomuser.me/api/portraits/men/45.jpg",
  },
];

const projects = [
  {
    name: "Reactive Resume Maker",
    description:
      "Resume Maker is a free and open source resume builder that makes the mundane tasks of creating and updating resumes a lot simpler. With this app, we can create and save multiple resumes, style using various automized templates and print as PDF, available in multiple languages, all for free, no advertisements, without losing the integrity and privacy of your data.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "i18n",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: resume_maker_pic,
    code_logo: web_site,
    source_code_link: "https://rsmaker.netlify.app/",
  },
  {
    name: "Business Tracker",
    description:
      "Business Tracker is Demand Forecasting application used to display history and predictive analysis of business stock growth in a given period of time. It helps analyze the growth of stocks from the charts of stock performace in any period of time. It helps to judge sales and retail, with the principle of momentum investing, which returns 1% per month on average.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "scikit-learn",
        color: "green-text-gradient",
      },
      {
        name: "fusion-charts",
        color: "pink-text-gradient",
      },
    ],
    image: business_tracker_project,
    source_code_link: "https://github.com/vieee/Business_Tracker",
  },
  {
    name: "Classroom Connect",
    description:
      "Classroom helps students and teachers organize student work, boost collaboration, and foster better communication. Classroom makes it easy for learners and instructors to connect inside and outside of educational institutions. It saves time and paper and makes it easy to create classes, distribute assignments, communicate and stay organised.",
    tags: [
      {
        name: "electron",
        color: "blue-text-gradient",
      },
      {
        name: "firebase",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: classroom_connect_project,
    source_code_link: "https://github.com/vieee/classroom",
  },
];

export { services, technologies, experiences, testimonials, projects };
