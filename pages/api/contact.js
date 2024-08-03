import { NextApiRequest, NextApiResponse } from "next";
import nodemailer from "nodemailer";

export default function sendGmail(req, res) {
  const transporter = nodemailer.createTransport({
    host: process.env.GHOST,
    port: process.env.GPORT,
    auth: {
      user: process.env.GMAILUSER,
      pass: process.env.GMAILPASSWORD,
    },
    tls: {
      rejectUnauthorized: false,
    },
  });

  // const toHostMailData = {
  //   from: req.body.email,
  //   to: process.env.XMAILUSER, // 送信先
  //   subject: `【テスト環境】${req.body.name}様より`, // タイトル
  //   text: `${req.body.message} Send from ${req.body.email}`,
  //   html: `
  //       <p>【会社名】</p>
  //       <p>${req.body.companyName}</p>
  //       <p>【名前】</p>
  //       <p>${req.body.name}</p>
  //       <p>【メールアドレス】</p>
  //       <p>${req.body.email}</p>
  //       <p>【メッセージ内容】</p>
  //       <p>${req.body.message}</p>
  //       `,
  // };

  const toHostMailData = {
    from: req.body.email,
    to: process.env.GMAILTO, // 送信先
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