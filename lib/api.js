export const sendContactForm = async (data) =>
  fetch("../pages/api/contact.js", {
    method: "POST",
    body: JSON.stringify(data),
    headers: { "Content-Type": "application/json", Accept: "application/json" },
  }).then((res) => {
    if (!res.ok) throw new Error("Üzenet elküldése sikertelen!");
    return res.json();
  }); 
