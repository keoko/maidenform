const fetch = require('node-fetch');

async function main(params) {
  const { email, captchaToken } = params;

  if ((!email) || (!captchaToken)) {
    return { statusCode: 400 };
  }

  const response = await fetch('https://www.google.com/recaptcha/api/siteverify', {
    method: 'POST',
    body: new URLSearchParams({ secret: params.CAPTCHA_SECRET_KEY, response: captchaToken }),
  });
  const data = await response.json();

  if (!response.ok || !data.success) {
    console.log(data);
    return { statusCode: 500 };
  }

  return { statusCode: 200 };
}

exports.main = main;
