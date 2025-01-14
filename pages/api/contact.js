import { NextApiRequest, NextApiResponse } from "next";
import nodemailer from "nodemailer";

export default function sendGmail(req, res) {
  const transporter = nodemailer.createTransport({
    host: process.env.NEXT_PUBLIC_GHOST,
    port: process.env.NEXT_PUBLIC_GPORT,
    auth: {
      user: process.env.NEXT_PUBLIC_GMAILUSER,
      pass: process.env.NEXT_PUBLIC_GMAILPASSWORD,
    },
    tls: {
      rejectUnauthorized: false,
    },
  });

  const toHostMailData = {
    from: req.body.email,
    to: process.env.NEXT_PUBLIC_GMAILTO, // 送信先
    subject: `【お問合せ】${req.body.name}様より`, // タイトル
    text: `${req.body.message} Send from ${req.body.email}`,
    html: `
     <h4>【会社名】</h4>
     <p>${req.body.companyName}</p>
     <h4>【名前】</h4>
     <p>${req.body.name}</p>
     <h4>【メールアドレス】</h4>
     <p>${req.body.email}</p>
     <h4>【お問い合わせの種類】</h4>
     <p>${req.body.select}</p>
     <h4>【メッセージ内容】</h4>
     <p>${req.body.message}</p>
        `,
  };

  transporter.sendMail(toHostMailData, function (err, info) {
    if (err) console.log(err);
    else console.log(info);
  });
}