import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { sendContactFormEmail } from "@/lib/email";
import { useMutation } from "@tanstack/react-query";
import { Handshake } from "lucide-react";
import { useState } from "react";

export const ContactUs = () => {
  const { mutate, error, isPending } = useMutation({
    mutationFn: sendContactFormEmail,
    onSuccess: () => {
      setOpen(false);
    },
  });
  const [open, setOpen] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    message: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await mutate(formData);
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button className="bg-[#FF7171] hover:bg-[#FF7171]/90 text-white px-8 py-6 text-lg">
          <Handshake className="h-5 w-5" />
          Get in Touch
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px] bg-[#F8F8F8] dark:bg-[#1F1F1F]">
        <DialogHeader>
          <DialogTitle className="text-[#2D2D2D] dark:text-white">
            Get in Touch
          </DialogTitle>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid w-full gap-2.5">
            <Label htmlFor="fullName" className="text-[#2D2D2D] dark:text-white">Full Name</Label>
            <Input
              id="fullName"
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
            <Label htmlFor="email" className="text-[#2D2D2D] dark:text-white">Email</Label>
            <Input
              id="email"
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
            <Label htmlFor="message" className="text-[#2D2D2D] dark:text-white">Message</Label>
            <Textarea
              id="message"
              value={formData.message}
              onChange={(e) =>
                setFormData({ ...formData, message: e.target.value })
              }
              placeholder="Your message here..."
              required
              className="text-[#2D2D2D] dark:text-white"
            />
          </div>
          <Button type="submit" className="w-full bg-[#FF7171] hover:bg-[#FF7171]/90 text-white" disabled={isPending}>
            {isPending ? "Sending..." : "Send Message"}
          </Button>
          {error && <p className="text-red-500">Something went wrong, please try again.</p>}
        </form>
      </DialogContent>
    </Dialog>
  );
};
