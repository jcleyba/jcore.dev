import { Button } from "~/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "~/components/ui/dialog";
import { Input } from "~/components/ui/input";
import { Label } from "~/components/ui/label";
import { Textarea } from "~/components/ui/textarea";
import { useEffect, useState } from "react";
import { Form, useActionData, useNavigation } from "@remix-run/react";
import { action } from "~/routes/_index";

export const ContactDialog = ({
  title,
  icon,
}: {
  title: string;
  icon: React.ReactNode;
}) => {
  
  const [open, setOpen] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    message: "",
  });
  const actionData = useActionData<typeof action>();
  const navigation = useNavigation();
  const isPending = navigation.state === "submitting";

  useEffect(() => {
    if (actionData?.success) {
      setOpen(false);
    }
  }, [actionData]);

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button className="bg-[#FF7171] hover:bg-[#FF7171]/90 text-white px-4 sm:px-6 md:px-8 py-4 sm:py-5 md:py-6 text-base sm:text-lg flex items-center gap-2">
          {icon}
          {title}
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px] bg-[#F8F8F8] dark:bg-[#1F1F1F]">
        <DialogHeader>
          <DialogTitle className="text-[#2D2D2D] dark:text-white">
            {title}
          </DialogTitle>
        </DialogHeader>
        <Form method="post" className="space-y-6">
          <div className="grid w-full gap-2.5">
            <Label
              htmlFor="fullName"
              className="text-[#2D2D2D] dark:text-white"
            >
              Full Name
            </Label>
            <Input
              id="fullName"
              name="fullName"
              value={formData.fullName}
              onChange={(e) =>
                setFormData({ ...formData, fullName: e.target.value })
              }
              placeholder="John Doe"
              required
              className="text-[#2D2D2D] dark:text-white"
            />
          </div>
          <div className="grid w-full gap-2.5">
            <Label htmlFor="email" className="text-[#2D2D2D] dark:text-white">
              Email
            </Label>
            <Input
              id="email"
              name="email"
              type="email"
              value={formData.email}
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
              placeholder="john@example.com"
              required
              className="text-[#2D2D2D] dark:text-white"
            />
          </div>
          <div className="grid w-full gap-2.5">
            <Label htmlFor="message" className="text-[#2D2D2D] dark:text-white">
              Message
            </Label>
            <Textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={(e) =>
                setFormData({ ...formData, message: e.target.value })
              }
              placeholder="Your message here..."
              required
              className="text-[#2D2D2D] dark:text-white"
            />
          </div>
          <Button
            type="submit"
            className="w-full bg-[#FF7171] hover:bg-[#FF7171]/90 text-white"
            disabled={isPending}
          >
            {isPending ? "Sending..." : "Send Message"}
          </Button>
          {actionData?.success === false && (
            <p className="text-red-500">
              Something went wrong, please try again.
            </p>
          )}
        </Form>
      </DialogContent>
    </Dialog>
  );
};