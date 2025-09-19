import Link from "next/link";
import Button from "@/components/ui/Button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Check } from "lucide-react";
import GradientText from "../ui/GradientText";

const cardData = [
  {
    id: 1,
    cardClassName: "relative md:top-14",
    heading: "Performance Marketing",
    headingClassName: "bg-white text-4xl",
    description:
      "Get the edge with our official partnerships, optimizing your paid ads across Meta, Google etc.",
    points: ["Meta Ads", "Google Ads", "LinkedIn Ads"],
    link: "",
  },
  {
    id: 2,
    cardClassName: "relative top-0",
    heading: "Micro-Influencer Marketing",
    headingClassName: "bg-gradient-to-l from-ut-orange to-orange-peel text-4xl",
    description:
      "Big impact, big-circle. Micro influencers bring your brand closer to real conversations.",
    points: [
      "10-20 Micro Influencer Marketing",
      "Precise Leads Generation",
      "Influencer Marketing Strategies",
    ],
    link: "",
  },
  {
    id: 3,
    cardClassName: "relative md:top-14",
    heading: "Organic Marketing",
    headingClassName: "bg-white text-4xl",
    description:
      "From memes to influencers, we create organic marketing that connect your brand with real audiences",
    points: [
      "Social Media Marketing",
      "Content Creation",
      "Meme Marketing",
      "PR Marketing",
    ],
    link: "",
  },
];

export default function About() {
  return (
    <section className="py-16 md:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mx-auto max-w-2xl space-y-6 text-center">
          <h2 className="text-center text-4xl font-semibold lg:text-5xl">
            <GradientText
              className={"bg-gradient-to-l from-ut-orange to-french"}
            >
              Level Up Your Brand
            </GradientText>{" "}
            With Next-Gen Marketing
          </h2>
        </div>

        <div className="mt-8 grid gap-6 md:mt-20 md:grid-cols-3">
          {cardData.map(
            ({
              id,
              cardClassName,
              heading,
              headingClassName,
              description,
              points,
              link,
            }) => (
              <Card key={id} className={`flex flex-col ${cardClassName}`}>
                <CardHeader>
                  <CardTitle className="font-medium">
                    <GradientText className={headingClassName}>
                      {heading}
                    </GradientText>
                  </CardTitle>
                  <CardDescription className="text-foreground text-lg mt-10 font-semi-bold">
                    {description}
                  </CardDescription>
                </CardHeader>

                <CardContent className="space-y-4">
                  <ul className="list-outside space-y-3 text-sm mt-10">
                    {points.map((item, index) => (
                      <li
                        key={index}
                        className="flex items-center text-lg gap-2"
                      >
                        <Check className="size-5" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </CardContent>

                <CardFooter className="mt-auto">
                  <Button asChild variant="outline" className="w-full">
                    <Link href={link}>Know more</Link>
                  </Button>
                </CardFooter>
              </Card>
            )
          )}
        </div>
      </div>
    </section>
  );
}
