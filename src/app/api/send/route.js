// // import { EmailTemplate } from "../../../components/EmailTemplate";
// import { Resend } from "resend";

// const resend = new Resend(process.env.RESEND_API_KEY);

// export async function POST() {
//   try {
//     const { data, error } = await resend.emails.send({
//       from: "Bridgit <bridgit.k.mutinda@gmail.com>",
//       to: ["bridgit.k.mutinda@gmail.com"],
//       subject: "Hello world",
//       // 
//     });

//     if (error) {
//       return Response.json({ error }, { status: 500 });
//     }

//     return Response.json(data);
//   } catch (error) {
//     return Response.json({ error }, { status: 500 });
//   }
// }
