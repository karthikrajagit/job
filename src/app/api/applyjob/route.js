import User from "@/lib/models/user.model";
import { connect } from "@/lib/mongodb/mongoose";
import nodemailer from "nodemailer";

export const POST = async (req) => {
    try {
        await connect();
        const data = await req.json();

        const userEmail= data.userEmail;
        const jobEmail = data.jobEmail;

        if (!userEmail || !jobEmail) {
            return new Response("Missing required fields", { status: 400 });
        }

        // Find the user in the database
        const user = await User.findOne({ email: userEmail });
        if (!user) {
            return new Response("User not found", { status: 404 });
        }

        // Configure the email transport
        const transporter = nodemailer.createTransport({
            service: "gmail", // Adjust if using a different email provider
            auth: {
                user: process.env.EMAIL, // Your email address
                pass: 'odno nddn vewc idfc', // Your email password or app-specific password
            },
        });

        // Email options
        const mailOptions = {
            from: process.env.EMAIL, // Sender email (your app's email)
            to: jobEmail, // Job poster's email
            subject: "Job Application",
            text: `Dear Sir/Madam, 
            
I am interested in the job you have posted. Please let me know the next steps.

Regards, 
${user.name}`, // Adjust message text if necessary
        };

        // Send the email
        await transporter.sendMail(mailOptions);

        return new Response(
            JSON.stringify({ message: "Job application email sent successfully" }),
            { status: 200 }
        );
    } catch (error) {
        console.error("Error processing job application:", error);
        return new Response("Error while processing job application", { status: 500 });
    }
};
