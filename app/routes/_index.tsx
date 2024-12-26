import type { ActionFunctionArgs, MetaFunction } from "@remix-run/node";
import { Code, DollarSign, Handshake, Users } from "lucide-react";
import { ContactDialog } from "~/components/contact-dialog";
import { ModeToggle } from "~/components/mode-toggle";
import { Card, CardContent, CardHeader, CardTitle } from "~/components/ui/card";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export const meta: MetaFunction = () => {
  return [
    { title: "JCore | by devs, for devs" },   
    { name: "description", content: "JCore is a company that helps developers find great jobs and build great products." },
  ];
};

export const action = async ({ request }: ActionFunctionArgs) => {
  try {
    const data = await request.formData();
    const { fullName, email, message } = Object.fromEntries(data);

    const response = await resend.emails.send({
      from: 'JCore.dev <billing@jcore.dev>',
      to: 'billing@jcore.dev',
      subject: `New Contact Form Message from ${fullName}`,
      replyTo: email as string,
      text: `
Name: ${fullName}
Email: ${email}

Message:
${message}
      `,
    });

    if (response.error) {
      return { success: false, error: response.error.message };
    }

    return { success: true };
  } catch (error) {
    return { success: false, error: error instanceof Error ? error.message : 'An unknown error occurred' };
  }
};

export default function Index() {

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
                src="/logo.png"
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
                and aspirations of high-performing engineers, we&apos;re building a
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
                We&apos;re not just another tech company. We&apos;re a team of passionate
                developers who understand that great software is built by great
                people. That&apos;s why we focus on creating an environment where
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
                  Honest feedback and recommendations, even when it&apos;s not what you
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
            <ContactDialog
              title="Join Our Team"
              icon={<Code className="h-5 w-5" />}
            />
            <ContactDialog
              title="Get in Touch"
              icon={<Handshake className="h-5 w-5" />}
            />
          </div>
        </div>
      </div>
  );
}
