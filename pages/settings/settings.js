document.addEventListener('DOMContentLoaded', () => {
    const settingsList = document.querySelector('.settings-list');
    const settingsCard = document.querySelector('.settings-card');
    const backButtonHTML = '<button class="back-button">Back</button>';
    const cookiesToggle = document.getElementById('cookies-toggle');

    const usagePolicyContent = `
        <div class="loaded-content">
        <h1>Why Cookies & IP Addresses?</h1>
        <p>At Crynox, we use cookies and temporary logs to make our platform run smoothly. Cookies enable us to use Supabase to save your login data—like your Discord login—so you don’t have to sign in every time. We also temporarily log your <b>IP address</b> to help maintain stability, prevent malicious activity (like DDoS attacks), and improve our services.</p>
        <p>These logs are for internal use only and are never sold or shared for advertising. Your IP address is basic connection data and is not linked to your personal identity.</p>

        ---

        <h1>Third-Party Ads via Google Ads</h1>
        <p>We use Google Ads to display advertisements on Crynox. These ads help us keep our services free for you. Google and its partners may use cookies and device identifiers to show you ads that are more relevant to your interests.</p>
        <p>This data is handled by Google and its partners, not by Crynox. You have control over the ads you see and can manage your preferences or opt out of personalized advertising by visiting Google's <a href="https://adssettings.google.com/authenticated" target="_blank">Ad Settings page</a>.</p>

        ---

        <h1>Copyright & DMCA Notices</h1>
        <p>We take copyright seriously. If you believe any content on Crynox infringes your copyright, please send us a DMCA notice. We will review your request and take appropriate action, including removing or disabling access to the content.</p>
        <p>To submit a valid takedown request, please send an email to our designated Copyright Agent at: <b>crynox@crynox1.me</b>. In your email, please include:</p>
        <ul>
            <li>A description of the copyrighted work.</li>
            <li>A statement that you have a good faith belief the use is not authorized.</li>
            <li>Your name, contact information, and a physical or electronic signature.</li>
            <li>A statement that your notice is accurate and you are authorized to act on behalf of the copyright owner.</li>
        </ul>
        <p>We will respond to all valid DMCA notices in compliance with applicable law.</p>

        ---

        <h1>General Notes</h1>
        <p>We do not sell or share user data. The only time we will share information is when required by law, such as a court order or other valid legal request.</p>
        <p>Please note: if you send an email to <b>crynox@crynox1.me</b>, we are using a forwarding service (<a href="https://forwardemail.net" target="_blank">forwardemail.net</a>). When we respond to you, the email will come from: <b>officialy.sourced@gmail.com</b>.</p>

        ---

        <h1>Updates to This Policy</h1>
        <p>This Usage Policy may be updated from time to time to reflect changes to our practices. Changes will be reflected on this page with an updated effective date. We encourage you to review it periodically.</p>
        </div>
    `;

    // Function to check and set the cookies toggle state from localStorage
    const checkCookiesState = () => {
        const cookiesEnabled = localStorage.getItem('cookies-enabled');
        if (cookiesEnabled !== null) {
            cookiesToggle.checked = (cookiesEnabled === 'true');
        } else {
            // Default to true if no preference is set
            cookiesToggle.checked = true;
            localStorage.setItem('cookies-enabled', 'true');
        }
    };

    // Add event listener to the cookies toggle
    if (cookiesToggle) {
        cookiesToggle.addEventListener('change', (event) => {
            localStorage.setItem('cookies-enabled', event.target.checked);
        });
        checkCookiesState(); // Check the state on page load
    }

    settingsList.addEventListener('click', (event) => {
        const targetItem = event.target.closest('.settings-item');
        if (targetItem && targetItem.querySelector('span').textContent.trim() === 'Usage Policy') {
            settingsCard.innerHTML = backButtonHTML + usagePolicyContent;
        }
    });

    document.addEventListener('click', (event) => {
        if (event.target.classList.contains('back-button')) {
            settingsCard.innerHTML = `
                <div class="settings-list">
                    <div class="settings-item">
                        <span>Account</span>
                        <i data-lucide="user"></i>
                    </div>
                    <div class="settings-item">
                        <span>Cookies</span>
                        <label class="switch">
                            <input type="checkbox" id="cookies-toggle">
                            <span class="slider"></span>
                        </label>
                    </div>
                    <div class="settings-item">
                        <span>Usage Policy</span>
                        <i data-lucide="shield"></i>
                    </div>
                    <div class="settings-item disabled">
                        <span>Themes (Coming Soon)</span>
                        <i data-lucide="palette"></i>
                    </div>
                    <div class="settings-item disabled">
                        <span>Plugins (Coming Soon)</span>
                        <i data-lucide="package"></i>
                    </div>
                </div>
            `;
            lucide.createIcons();
            const newCookiesToggle = document.getElementById('cookies-toggle');
            if (newCookiesToggle) {
                newCookiesToggle.addEventListener('change', (event) => {
                    localStorage.setItem('cookies-enabled', event.target.checked);
                });
                const cookiesEnabled = localStorage.getItem('cookies-enabled');
                newCookiesToggle.checked = (cookiesEnabled === 'true');
            }
        }
    });
});