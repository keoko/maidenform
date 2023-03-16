const fetch = require('node-fetch');

async function main(params) {
  const { email, captchaToken } = params;

  if ((!email) || (!captchaToken)) {
    return { statusCode: 400 };
  }

  // Validate Captcha
  const captchaResponse = await fetch('https://www.google.com/recaptcha/api/siteverify', {
    method: 'POST',
    body: new URLSearchParams({ secret: params.CAPTCHA_SECRET_KEY, response: captchaToken }),
  });
  const data = await captchaResponse.json();

  if (!captchaResponse.ok || !data.success) {
    console.log(data);
    return { statusCode: 400, body: 'Captcha Invalid' };
  }

  // Request sign up to newsletter
  const siteId = params.ZETA_SITE_ID;
  const password = params.ZETA_PASSWORD;
  const newsletterResponse = await fetch(`https://api.zetaglobal.net/ver2/${siteId}/activities`, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      Authorization: `Basic ${Buffer.from(`api:${password}`).toString('base64')}`,
    },
    body: JSON.stringify({
      activity: {
        subscriber: {
          uid: email,
        },
        event: 'email_registration',
        properties: {
          esite: 'mfb',
          registration_source: 'sitefooter',
        },
      },
    }),
  });

  if (!newsletterResponse.ok) {
    const responseStatus = newsletterResponse.status;
    const responseBody = await newsletterResponse.json();
    console.log(responseStatus, responseBody);
    return {
      statusCode: 500,
      body: 'Error from Newsletter API',
    };
  }

  return { statusCode: 200, body: 'Success' };
}

exports.main = main;
