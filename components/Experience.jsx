import Container from "@/components/Container";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import ExperienceArticle from "@/components/ExperienceArticle";
import { workData, educationData } from "@/lib/data";

const Experience = () => {
  return (
    <Container
      id="experience"
      as="section"
      size="lg"
      bgClassName="scroll-mt-22"
      className="py-8"
    >
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
              {workData.map((article) => (
                <ExperienceArticle key={article.heading} article={article} />
              ))}
            </TabsContent>
            <TabsContent value="education">
              {educationData.map((article) => (
                <ExperienceArticle key={article.heading} article={article} />
              ))}
            </TabsContent>
          </CardContent>
        </Card>
      </Tabs>
    </Container>
  );
};

export default Experience;
