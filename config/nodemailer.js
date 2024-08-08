import nodemailer from "nodemailer";

const email = EMAIL;
const pass = EMAIL_PASS;

export const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: email,
    pass,
  },
});

export const mailOptions = {
  from: email,
  to: email,
};

// Tesztelési célból hozzáadhatjuk ezt a függvényt
export const verifyTransporter = async () => {
  try {
    await transporter.verify();
    console.log('A nodemailer transporter sikeresen konfigurálva.');
    return true;
  } catch (error) {
    console.error('Hiba a nodemailer transporter konfigurálása során:', error);
    return false;
  }
};
