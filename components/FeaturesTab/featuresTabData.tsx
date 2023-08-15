import { FeatureTab } from "@/types/featureTab";

const featuresTabData: FeatureTab[] = [
  {
    id: "tabOne",
    title: "Firstly analyse the project requirements and gather the releted data.",
    desc1: `The project team works closely with stakeholders to understand and define the requirements of the software. This involves capturing both functional and non-functional requirements, as well as understanding the business context and user needs.`,
    desc2: `Once the requirements are understood, the system's architecture and design are planned. It involves creating a blueprint for the software, determining how different components will interact, and designing the user interface. `,
    image: "/images/features/features-light-01.svg",
    imageDark: "/images/features/features-dark-01.svg",
  },
  {
    id: "tabTwo",
    title: "At this point we focus on coding and implementation along with testing also.",
    desc1: `Developers write the actual code for the software. This phase involves converting the design into executable code, integrating third-party libraries if needed, and ensuring coding best practices are followed.`,
    desc2: ` the software is rigorously tested to identify and fix defects, ensuring it meets the specified requirements and functions correctly. Various testing types, including unit testing, integration testing, and user acceptance testing, are performed`,
    image: "/images/features/features-light-01.svg",
    imageDark: "/images/features/features-dark-01.svg",
  },
  {
    id: "tabThree",
    title: "At the final stage we will make our software ready to release.",
    desc1: `It's deployed to the production environment, and users can start using it. Ongoing maintenance, updates, and enhancements are carried out based on user feedback and changing requirements.`,
    desc2: `Deploying the software to live servers and monitoring the software for performance and stability`,
    image: "/images/features/features-light-01.svg",
    imageDark: "/images/features/features-dark-01.svg",
  }
];

export default featuresTabData;
