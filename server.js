import express from "express";
import { Resend } from "resend";
import dotenv from "dotenv";
import cors from "cors";

dotenv.config();

const app = express();
const port = 3001;

const resend = new Resend(process.env.RESEND_API_KEY);

app.use(cors());
app.use(express.json());

app.post("/send-email", async (req, res) => {
  const { name, email, message } = req.body;

  try {
    const data = await resend.emails.send({
      from: "guillaume.porez@oclock.school",
      to: "guillaumeporez@orange.fr",
      subject: "New Contact Form Submission",
      html: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
    });

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
