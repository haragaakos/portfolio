import { CONTACT_MESSAGE_FIELDS } from './constants';

const generateEmailContent = (data) => {
  const stringData = Object.entries(data).reduce(
    (str, [key, val]) => (str += `${CONTACT_MESSAGE_FIELDS[key]}: \n${val} \n \n`),
    ""
  );

  const htmlData = Object.entries(data).reduce((str, [key, val]) => {
    return (str += `
      <tr>
        <td style="padding: 10px; border-bottom: 1px solid #eee;">${CONTACT_MESSAGE_FIELDS[key]}</td>
        <td style="padding: 10px; border-bottom: 1px solid #eee;">${val}</td>
      </tr>
    `);
  }, "");

  return {
    text: stringData,
    html: `
      <!DOCTYPE html>
      <html lang="en">
      <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <title>New Contact Message</title>
        <style>
          body { font-family: 'Arial', sans-serif; line-height: 1.6; color: #333; }
          .container { max-width: 600px; margin: 0 auto; padding: 20px; }
          h1 { color: #444; }
          table { width: 100%; border-collapse: collapse; }
          th, td { text-align: left; padding: 10px; border-bottom: 1px solid #eee; }
        </style>
      </head>
      <body>
        <div class="container">
          <h1>New Contact Message</h1>
          <table>
            <tbody>
              ${htmlData}
            </tbody>
          </table>
        </div>
      </body>
      </html>
    `,
  };
};

export default generateEmailContent;