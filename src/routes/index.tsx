import * as React from "react";
import { createFileRoute } from "@tanstack/react-router";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Code, Users, Handshake, DollarSign } from "lucide-react";
import { ModeToggle } from "@/components/mode-toggle";
import { ContactUs } from "@/components/contact-us";
import { JoinUs } from "@/components/join-us";

const HomeComponent = () => {
  return (
    <div className="min-h-screen bg-background text-foreground dark:bg-gray-800 dark:text-white">
      {/* Theme Toggle */}
      <div className="fixed top-4 right-4">
        <ModeToggle />
      </div>

      <div className="container mx-auto px-4 py-12 space-y-12">
        {/* Header */}
        <div className="text-center space-y-4">
          <div className="flex justify-center mb-8">
            <img
              src="/assets/logo.png"
              alt="JCore Logo"
              width={300}
              height={80}
            />
          </div>
          <p className="text-xl text-muted-foreground">
            Built by developers, for developers
          </p>
        </div>

        {/* Mission Section */}
        <Card className="border border-gray-100 shadow-sm dark:border-none dark:bg-gray-900">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-[#FF7171]">
              <Code className="h-5 w-5" />
              Our Mission
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">
              At JCore, we believe exceptional engineers deserve exceptional
              opportunities. Founded by developers who understand the challenges
              and aspirations of high-performing engineers, we're building a
              company where technical excellence is celebrated and rewarded.
            </p>
          </CardContent>
        </Card>

        {/* Why JCore Section */}
        <Card className="border border-gray-100 shadow-sm dark:border-none dark:bg-gray-900">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-[#FF7171]">
              <Users className="h-5 w-5" />
              Why JCore?
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">
              We're not just another tech company. We're a team of passionate
              developers who understand that great software is built by great
              people. That's why we focus on creating an environment where
              engineers can do their best work and receive competitive
              compensation that reflects their expertise.
            </p>
          </CardContent>
        </Card>

        {/* Client Relationships Section */}
        <Card className="border border-gray-100 shadow-sm dark:border-none dark:bg-gray-900">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-[#FF7171]">
              <Handshake className="h-5 w-5" />
              Our Client Relationships
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground mb-4">
              Trust and transparency are the foundations of our client
              relationships. We believe in:
            </p>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground">
              <li>
                Clear communication and regular updates on project progress
              </li>
              <li>Upfront pricing with no hidden fees or surprises</li>
              <li>
                Direct access to our engineering team without unnecessary layers
              </li>
              <li>
                Honest feedback and recommendations, even when it's not what you
                might want to hear
              </li>
            </ul>
          </CardContent>
        </Card>

        {/* Commitments Section */}
        <Card className="border border-gray-100 shadow-sm dark:border-none dark:bg-gray-900">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-[#FF7171]">
              <DollarSign className="h-5 w-5" />
              Our Commitment
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground">
              <li>Competitive compensation aligned with expertise</li>
              <li>Work on challenging, innovative projects</li>
              <li>Developer-first culture</li>
              <li>Modern tech stack and best practices</li>
            </ul>
          </CardContent>
        </Card>

        <div className="text-center flex flex-row gap-4 justify-center">
          <JoinUs />
          <ContactUs />
        </div>
      </div>
    </div>
  );
};

export const Route = createFileRoute("/")({
  component: HomeComponent,
});
