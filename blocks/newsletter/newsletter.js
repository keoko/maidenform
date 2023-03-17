import { getConfigValue } from '../../scripts/configs.js';
import { loadScript } from '../../scripts/scripts.js';
import { decorateIcons } from '../../scripts/lib-franklin.js';

/* global grecaptcha */

async function executeSubmit(block, token) {
  const endpoint = await getConfigValue('newsletter-endpoint');
  const email = block.querySelector('input[name="email"]').value;
  const response = await fetch(endpoint, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      email,
      captchaToken: token,
    }),
  });

  if (response.ok) {
    block.querySelector('.newsletter-captcha').classList.add('hidden');
    block.querySelector('.content').textContent = 'Thank you for signing up for our newsletter!';
  } else {
    block.querySelector('.newsletter-captcha').classList.add('hidden');
    block.querySelector('.content').textContent = 'There was an error signing up for our newsletter. Please try again.';
  }
}

export default async function decorate(block) {
  // Get text
  const text = block.querySelector(':scope > div > div');

  const captchaSiteKey = await getConfigValue('captcha-site-key');
  await new Promise((resolve) => {
    loadScript('https://www.google.com/recaptcha/api.js?render=explicit', {}, () => {
      resolve();
    });
  });

  block.textContent = '';
  const markup = document.createRange().createContextualFragment(`
  <div class="content-wrapper">
    <div class="content"></div>
  </div>
  <div class="email-wrapper">
    <div class="email">
      <input name="email" type="email" placeholder="Email Address" />
      <button name="signup" title="Sign Up">Sign Up</button>
    </form>
  </div>
  <div class="newsletter-captcha hidden">
    <div class="newsletter-captcha-inner">
      <h3>Complete the check to finish newsletter sign-up</h3>
      <div id="gcaptcha-placeholder"></div>
      <button name="close" title="Close Captcha">
        <span class="icon icon-x-lg"></span>
      </button>
    </div>
  </div>
`);
  markup.querySelector('.content').append(text);
  block.appendChild(markup);

  block.querySelector('button[name="close"]').addEventListener('click', () => {
    block.querySelector('.newsletter-captcha').classList.add('hidden');
  });

  block.querySelector('button[name="signup"]').addEventListener('click', async (event) => {
    event.preventDefault();

    if (!block.querySelector('input[name="email"]').value) {
      return;
    }

    block.querySelector('.newsletter-captcha').classList.remove('hidden');
    if (!block.querySelector('iframe[title="reCAPTCHA"]')) {
      grecaptcha.render('gcaptcha-placeholder', {
        sitekey: captchaSiteKey,
        callback: async (token) => executeSubmit(block, token),
      });
    }
  });

  decorateIcons(block);
}
