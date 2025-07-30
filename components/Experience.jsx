import Container from "@/components/Container";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import ExperienceArticle from "./ExperienceArticle";

const workArticles = [
  {
    logo: {
      src: "/logos/familysearch_logo.png",
      alt: "FamilySearch Logo",
      spacing: "p-2",
    },
    timeline: "Jan 2025 - May 2025",
    location: "Lehi, UT",
    heading: "FamilySearch",
    subHeading: "Web Developer Intern",
    listItems: [
      "Developed dynamic, interactive features in a large-scale React codebase, collaborating closely with UX designers and software developers to implement end-to-end solutions.",
      "Led accessibility efforts by auditing team pages for WCAG compliance, identifying issues, and implementing fixes to ensure inclusive design.",
      "Strengthened code quality by writing comprehensive Jest unit tests and contributing to CI/CD pipeline processes.",
    ],
    badges: ["React", "JavaScript", "Jest", "Accessibility"],
  },
  {
    logo: {
      src: {
        light: "/logos/weberstate_logo_light.png",
        dark: "/logos/weberstate_logo_dark.png",
      },
      alt: "Weber State University Logo",
      spacing: "pt-3 pb-2",
    },
    timeline: "Sep 2023 - May 2024",
    location: "Ogden, UT",
    heading: "Weber State University Projects",
    subHeading: "Software Engineer Intern",
    listItems: [
      "Contributed to two live, full-stack web applications supporting real-world clients and developing features including ERD diagrams, C# models, database seeding, and responsive UI using Razor Pages and Bootstrap.",
      "At Wildcat MicroFund, focused on late-stage development by fixing bugs, enhancing usability, and integrating APIs to improve site functionality.",
      "At Sunridge HOA, served as Project Manager for a team of 4 interns, using Jira to manage tasks and timelines while acting as co-liaison between client and development team.",
    ],
    badges: ["ASP.NET Core", "C#", "Bootstrap", "SASS"],
  },
  {
    logo: {
      src: "/logos/codeninjas_logo.png",
      alt: "Code Ninjas Logo",
      spacing: "p-0",
    },
    timeline: "May 2022 - Sep 2024",
    location: "South Ogden, UT",
    heading: "Code Ninjas",
    subHeading: "Lead Code Instructor/Sensei",
    listItems: [
      "Taught students aged 5-17 a wide range of technical and STEM skills, including programming in JavaScript, LUA, and C#.",
      "Directed summer camps, instructing kids in 3D modeling/printing, HTML/CSS, Scratch, and Minecraft coding.",
      "Trained and mentored new instructors to ensure high-quality teaching standards.",
    ],
    badges: ["HTML", "CSS", "JavaScript", "LUA", "C#"],
  },
];

const educationArticles = [
  {
    logo: {
      src: {
        light: "/logos/weberstate_logo_light.png",
        dark: "/logos/weberstate_logo_dark.png",
      },
      alt: "Weber State University Logo",
      spacing: "pt-3 pb-2",
    },
    timeline: "Aug 2018 - Apr 2025",
    location: "Ogden, UT",
    heading: "Weber State University",
    subHeading:
      "Bachelor of Science in Computer Science, Minor in Web Development",
    listItems: [
      "Graduated magna cum laude with a 3.88 GPA.",
      "Web Development Minor with emphasis on building full-stack applications and designing effective user interfaces.",
      "Competed on the university's Rocket League esports team — because every computer science major is a gamer at heart. :)",
    ],
  },
];

const Experience = () => {
  return (
    <Container id="experience" as="section" size="lg" className="py-8">
      <Tabs defaultValue="work" className="">
        <TabsList>
          <TabsTrigger value="work">Work</TabsTrigger>
          <TabsTrigger value="education">Education</TabsTrigger>
        </TabsList>
        <Card className="relative">
          <Separator
            orientation="vertical"
            className="absolute bottom-0 left-14 sm:left-23"
          />
          <CardContent>
            <TabsContent value="work">
              {workArticles.map((article, i) => (
                <ExperienceArticle key={i} {...article} />
              ))}
            </TabsContent>
            <TabsContent value="education">
              {educationArticles.map((article, i) => (
                <ExperienceArticle key={i} {...article} />
              ))}
            </TabsContent>
          </CardContent>
        </Card>
      </Tabs>
    </Container>
  );
};

export default Experience;
