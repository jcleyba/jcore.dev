import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export type ContactFormData = {
  fullName: string;
  email: string;
  message: string;
};

export async function sendContactFormEmail(data: ContactFormData) {
  try {
    const { fullName, email, message } = data;

    const response = await resend.emails.send({
      from: 'JCore.dev <billing@jcore.dev>',
      to: 'billing@jcore.dev',
      subject: `New Contact Form Message from ${fullName}`,
      replyTo: email,
      text: `
Name: ${fullName}
Email: ${email}

Message:
${message}
      `,
    });

    if (response.error) {
      throw new Error(response.error.message);
    }

    return { success: true };
  } catch (error) {
    console.error('Error sending email:', error);
    throw error;
  }
}
