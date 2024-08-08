import { mailOptions, transporter } from '../../config/nodemailer';
import generateEmailContent from '../../config/utils/generateEmailContent';

const handler = async (req, res) => {
  if (req.method === "POST") {
    const data = req.body;
    if (!data || !data.name || !data.email || !data.subject || !data.message) {
      return res.status(400).json({ success: false, message: "Hibás kérés! Minden mező kitöltése kötelező." });
    }

    try {
      await transporter.sendMail({
        ...mailOptions,
        ...generateEmailContent(data),
        subject: data.subject,
      });

      return res.status(200).json({ success: true, message: "Üzenet sikeresen elküldve!" });
    } catch (err) {
      console.error("Hiba az email küldése során:", err);
      return res.status(500).json({ success: false, message: "Hiba történt az üzenet küldése során. Kérjük, próbálja újra később." });
    }
  }

  return res.status(405).json({ success: false, message: "Nem támogatott HTTP metódus." });
};

export default handler;