import { Resend } from 'resend';
const resend = new Resend("re_JJA7VP3J_Q8nPgxQhsuTqwDDizEwWModF");

(async function() {
  try {
    const data = await resend.emails.send({
      from: 'Thais <onboarding@resend.dev>',
      to: ['ti.dosantos.pablo@gmail.com'],
      subject: 'Hello World',
      html: '<strong>It works!</strong>'
    });

    console.log(data);
  } catch (error) {
    console.error(error);
  }
})();
