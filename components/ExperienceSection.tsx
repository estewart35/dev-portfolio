import Container from "@/components/Container";
import {
  AnimatedTabs,
  AnimatedTabsContentList,
  AnimatedTabsContent,
  AnimatedTabsList,
  AnimatedTabsTrigger,
} from "@/components/ui/animated-tabs";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import ExperienceArticle from "@/components/ExperienceArticle";
import { workExperience, educationExperience } from "@/lib/data";

const ExperienceSection = () => {
  return (
    <Container
      id="experience"
      as="section"
      size="lg"
      bgClassName="scroll-mt-22"
      className="py-8"
    >
      <AnimatedTabs defaultValue="work">
        <AnimatedTabsList>
          <AnimatedTabsTrigger value="work">Work</AnimatedTabsTrigger>
          <AnimatedTabsTrigger value="education">Education</AnimatedTabsTrigger>
        </AnimatedTabsList>
        <Card className="relative">
          <Separator
            orientation="vertical"
            className="absolute bottom-0 left-14 sm:left-23"
          />
          <CardContent>
            <AnimatedTabsContentList mode="wait">
              <AnimatedTabsContent value="work">
                {workExperience.map((article) => (
                  <ExperienceArticle key={article.heading} article={article} />
                ))}
              </AnimatedTabsContent>
              <AnimatedTabsContent value="education">
                {educationExperience.map((article) => (
                  <ExperienceArticle key={article.heading} article={article} />
                ))}
              </AnimatedTabsContent>
            </AnimatedTabsContentList>
          </CardContent>
        </Card>
      </AnimatedTabs>
    </Container>
  );
};

export default ExperienceSection;
