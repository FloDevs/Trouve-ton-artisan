const express = require("express");
const nodemailer = require("nodemailer");
const cors = require("cors");
const app = express();

app.use(cors());
app.use(express.json());

const transporter = nodemailer.createTransport({
  host: "localhost",
  port: 1025,
  ignoreTLS: true,
});

app.post("/send-email", (req, res) => {
  const { name, subject, message, email } = req.body;

  const mailOptions = {
    from: "no-reply@example.com",
    to: email,
    subject: `Message de ${name}: ${subject}`,
    text: message,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error(error);
      return res.status(500).send("Erreur lors de l’envoi de l’e-mail.");
    }
    res.status(200).send("E-mail envoyé avec succès.");
  });
});

const PORT = 5000;
app.listen(PORT, () => {
  console.log(
    `Serveur de messagerie en cours d'exécution sur http://localhost:${PORT}`
  );
});
