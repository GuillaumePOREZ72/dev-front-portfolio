//@ts-nocheck
import express from "express";
import { Resend } from "resend";
import dotenv from "dotenv";
import cors from "cors";
import Joi from "joi";

dotenv.config();

const app = express();
const port = 3001;

const resendSchema = Joi.object({
  name: Joi.string().required(),
  email: Joi.string().email().required(),
  message: Joi.string().required(),
});

const resend = new Resend(process.env.RESEND_API_KEY);

app.use(cors());
app.use(express.json());

app.post("/send-email", async (req, res) => {
  try {
    const { error } = await resendSchema.validateAsync(req.body);
    if (error) {
      console.error("Invalid request data:", error.message);
      return res.status(400).json({ error: "Invalid request data" });
    }

    const { name, email, message } = req.body;
    const toEmail = process.env.toEmail;

    if (!toEmail) {
      return res.status(500).json({ error: "Recipient email not configured" });
    }

    const data = await resend.emails.send({
      from: "guillaumeporez@orange.fr", // Added from email address
      to: toEmail,
      subject: "New Contact Form Submission",
      html: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
    });

    console.log("Email sent successfully:", data);
    res.status(200).json({ message: "Email sent successfully", data });
  } catch (error) {
    console.error("Error sending email:", error.message);
    let errorMessage = "Failed to send email";
    if (error.message.includes("Invalid API key")) {
      errorMessage = "Invalid Resend API key";
    } else if (error.message.includes("Email address not verified")) {
      errorMessage = "Sender email address not verified with Resend";
    } else if (error.message.includes("Invalid recipient email")) {
      errorMessage = "Invalid recipient email address";
    } else if (error.message.includes("Rate limit exceeded")) {
      errorMessage = "Resend API rate limit exceeded. Try again later.";
    }
    res.status(500).json({ error: errorMessage });
  }
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
