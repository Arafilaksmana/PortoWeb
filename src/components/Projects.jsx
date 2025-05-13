import { SiHtml5 } from "react-icons/si";
import { RiTailwindCssFill } from "react-icons/ri";
import { SiJavascript } from "react-icons/si";
import { SiCss3 } from "react-icons/si";

export const projects = {
  scholarium: {
    image: "/scholarium.webp",
    title: "Scholarium - Global Learning Excellence Journey",
    description:
      "This project was created as an educational platform for students who are looking for scholarships from various educational institutions around the world. Here, they can browse and apply for a wide range of scholarships offered by different institutions.",
    technologies: [<SiHtml5 key="html5" />, <RiTailwindCssFill key="tailwind" />, <SiJavascript key="js" />],
  },
  arte: {
    image: "/arte.webp", // 
    title: "Arte - One Stop Edu Art Platform",
    description:
      "This project aims to improve access to art and serve as an educational platform. In addition, Arte is designed to help artists—especially emerging ones—compete by showcasing their artworks.",
    technologies: [<SiHtml5 key="html5" />, <SiCss3 key="css"/>, <SiJavascript key="js" />],
  },
};
