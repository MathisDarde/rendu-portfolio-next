import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

const verifyRecaptcha = async (recaptchaValue: string) => {
  const secretKey = process.env.RECAPTCHA_SECRET_KEY;
  const url = `https://www.google.com/recaptcha/api/siteverify?secret=${secretKey}&response=${recaptchaValue}`;

  const res = await fetch(url, { method: "POST" });
  const data = await res.json();
  return data.success;
};

export async function POST(req: Request) {
  const { email, title, content, name, country, recaptchaValue } =
    await req.json();

  // Vérifier le token reCAPTCHA
  const isCaptchaValid = await verifyRecaptcha(recaptchaValue);
  if (!isCaptchaValid) {
    return NextResponse.json(
      { success: false, error: "Échec de la vérification du reCAPTCHA." },
      { status: 400 }
    );
  }

  // Si le captcha est valide, envoyer l'email
  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: Number(process.env.SMTP_PORT),
    secure: process.env.SMTP_SECURE === "true",
    auth: {
      user: process.env.MY_EMAIL,
      pass: process.env.MY_PASSWORD,
    },
  });

  try {
    await transporter.sendMail({
      from: `"${name}" <${email}>`,
      to: process.env.MY_EMAIL,
      subject: title,
      text: content,
      html: `
        <h2><strong>Title:</strong> ${title}</h2>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Country:</strong> ${country}</p>
        <p><strong>Message:</strong></p>
        <p>${content}</p>
      `,
    });

    return NextResponse.json(
      { success: true, message: "Email envoyé avec succès !" },
      { status: 200 }
    );
  } catch (error: unknown) {
    console.error("Erreur lors de l'envoi de l'email :", error); // Log détaillé

    // Type de garde pour vérifier si error est une instance d'Error
    if (error instanceof Error) {
      return NextResponse.json(
        {
          success: false,
          error: `Échec de l'envoi de l'email: ${error.message}`,
        },
        { status: 500 }
      );
    }

    // Si l'erreur n'est pas une instance d'Error, retourne un message générique
    return NextResponse.json(
      {
        success: false,
        error: "Échec de l'envoi de l'email: erreur inconnue",
      },
      { status: 500 }
    );
  }
}
