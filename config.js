const nodemailer = require("nodemailer");

module.exports = formulario => {

  var transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "example123@gmail.com", // Cambialo por tu email
      pass: "password123" // Cambialo por tu password
    }
  });

  const mailOptions = {
    from: `”${formulario.nombre} 👻” <${formulario.email}>`,
    to: 'destinatario123@gmail.com', // Cambialo por el destinatario
    subject: formulario.asunto,
    html: `
 <strong>Nombre:</strong> ${formulario.nombre} <br/>
 <strong>E-mail:</strong> ${formulario.email} <br/>
 <strong>Asunto:</strong> ${formulario.asunto} <br/>
 <strong>Mensaje:</strong> ${formulario.mensaje}
 `
  };

  transporter.sendMail(mailOptions, function(err, info) {
    if (err) console.log(err);
    else console.log(info);
  });
};
