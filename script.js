@import url('https://fonts.googleapis.com/css2?family=Cairo:wght@400;500;600;700;800&display=swap');

/* =========================
   NIVRA SIZE FINDER
   Premium Responsive Style
========================= */

:root {
    --pink: #f7b6c8;
    --pink-dark: #d46b91;
    --pink-deep: #bd527a;
    --pink-light: #fff2f6;
    --pink-border: #f3d7e1;
    --text: #29232a;
    --muted: #827780;
    --white: #ffffff;
    --shadow: 0 18px 55px rgba(155, 77, 108, .10);
    --radius-lg: 28px;
    --radius-md: 17px;
    --transition: .25s ease;
}

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Cairo', sans-serif;
}

html {
    scroll-behavior: smooth;
}

body {
    min-height: 100vh;
    color: var(--text);
    background: #fff9fb;
    overflow-x: hidden;
    position: relative;
    -webkit-font-smoothing: antialiased;
}

button,
input,
a {
    font: inherit;
}

button,
a {
    -webkit-tap-highlight-color: transparent;
}

button {
    border: 0;
}

a {
    color: inherit;
}

/* =========================
   BACKGROUND
========================= */

.bg {
    position: fixed;
    inset: 0;
    z-index: -2;
    pointer-events: none;
    background:
        radial-gradient(
            ellipse at 95% 5%,
            rgba(247, 182, 200, .38),
            transparent 34%
        ),
        radial-gradient(
            ellipse at 0% 100%,
            rgba(255, 221, 234, .75),
            transparent 36%
        ),
        linear-gradient(145deg, #fffafd, #fff6f9);
}

.bubbles {
    position: fixed;
    inset: 0;
    z-index: -1;
    overflow: hidden;
    pointer-events: none;
}

.bubbles span {
    position: absolute;
    display: block;
    border-radius: 50%;
    background: rgba(247, 182, 200, .22);
    border: 1px solid rgba(255, 255, 255, .5);
    backdrop-filter: blur(5px);
    -webkit-backdrop-filter: blur(5px);
    animation: nivraFloat 9s ease-in-out infinite;
    will-change: transform;
}

.bubbles span:nth-child(1) {
    width: 120px;
    height: 120px;
    left: 8%;
    top: 15%;
}

.bubbles span:nth-child(2) {
    width: 75px;
    height: 75px;
    left: 18%;
    bottom: 12%;
    animation-delay: -2s;
}

.bubbles span:nth-child(3) {
    width: 145px;
    height: 145px;
    right: 8%;
    top: 10%;
    animation-delay: -4s;
}

.bubbles span:nth-child(4) {
    width: 65px;
    height: 65px;
    right: 20%;
    bottom: 14%;
    animation-delay: -1s;
}

.bubbles span:nth-child(5) {
    width: 95px;
    height: 95px;
    left: 44%;
    top: 7%;
    animation-delay: -5s;
}

.bubbles span:nth-child(6) {
    width: 70px;
    height: 70px;
    left: 60%;
    bottom: 10%;
    animation-delay: -3s;
}

.bubbles span:nth-child(7) {
    width: 125px;
    height: 125px;
    right: 34%;
    top: 43%;
    animation-delay: -6s;
}

.bubbles span:nth-child(8) {
    width: 48px;
    height: 48px;
    left: 75%;
    top: 72%;
    animation-delay: -2.5s;
}

@keyframes nivraFloat {
    0%, 100% {
        transform: translate3d(0, 0, 0);
    }

    50% {
        transform: translate3d(12px, -22px, 0);
    }
}

/* =========================
   PAGE LAYOUT
========================= */

.container {
    width: 100%;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 24px clamp(16px, 4vw, 48px);
}

/* =========================
   HEADER
========================= */

.site-header {
    width: 100%;
    max-width: 1120px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 16px;
    margin: 0 auto 36px;
    padding: 5px 0;
}

.logo,
.brand-logo {
    display: inline-flex;
    align-items: center;
    gap: 11px;
    text-decoration: none;
}

.logo-mark {
    width: 47px;
    height: 47px;
    display: grid;
    place-items: center;
    border-radius: 15px;
    background: linear-gradient(145deg, #fbd4df, #ef9fb9);
    color: #fff;
    font-family: Georgia, serif;
    font-size: 27px;
    font-weight: 700;
    box-shadow: 0 7px 20px rgba(212, 107, 145, .17);
}

.logo-text {
    display: flex;
    flex-direction: column;
    line-height: 1.3;
}

.logo-text strong {
    font-size: 19px;
    letter-spacing: 3px;
    color: var(--pink-dark);
}

.logo-text span {
    font-size: 10px;
    color: var(--muted);
    letter-spacing: 1.1px;
}

.store-link {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: 9px;
    padding: 11px 19px;
    border: 1px solid var(--pink-border);
    border-radius: 14px;
    background: rgba(255, 255, 255, .82);
    color: var(--pink-deep);
    font-size: 13px;
    font-weight: 700;
    text-decoration: none;
    transition: var(--transition);
}

.store-link:hover {
    background: var(--pink-dark);
    border-color: var(--pink-dark);
    color: #fff;
    transform: translateY(-2px);
    box-shadow: 0 8px 20px rgba(212, 107, 145, .16);
}

/* =========================
   INTRO
========================= */

.intro {
    width: 100%;
    max-width: 680px;
    text-align: center;
    margin: 5px auto 28px;
}

.eyebrow {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
    padding: 7px 15px;
    margin-bottom: 15px;
    border: 1px solid #f4dce5;
    border-radius: 50px;
    background: rgba(255, 255, 255, .76);
    color: var(--pink-deep);
    font-size: 12px;
    font-weight: 700;
}

.intro h1 {
    color: var(--text);
    font-size: clamp(27px, 4vw, 43px);
    font-weight: 800;
    line-height: 1.65;
    letter-spacing: -.6px;
}

.intro h1 span {
    color: var(--pink-dark);
}

.intro p {
    max-width: 510px;
    margin: 10px auto 0;
    color: var(--muted);
    font-size: 14px;
    line-height: 2;
}

/* =========================
   MAIN CARD
========================= */

.card {
    width: 100%;
    max-width: 760px;
    margin: 0 auto;
    padding: clamp(22px, 4vw, 38px);
    border: 1px solid rgba(255, 255, 255, .92);
    border-radius: var(--radius-lg);
    background: rgba(255, 255, 255, .88);
    box-shadow: var(--shadow);
    backdrop-filter: blur(20px);
    -webkit-backdrop-filter: blur(20px);
}

.measurements-section {
    width: 100%;
}

.section-heading {
    display: flex;
    align-items: center;
    gap: 13px;
    margin-bottom: 23px;
}

.section-icon {
    width: 46px;
    height: 46px;
    flex-shrink: 0;
    display: grid;
    place-items: center;
    border-radius: 15px;
    background: var(--pink-light);
    color: var(--pink-dark);
    font-size: 19px;
}

.section-heading h2 {
    font-size: 17px;
    font-weight: 800;
    color: var(--text);
}

.section-heading p {
    margin-top: 3px;
    color: var(--muted);
    font-size: 12px;
}

/* =========================
   INPUT FIELDS
========================= */

.grid {
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 19px 16px;
}

.field-group {
    min-width: 0;
    display: flex;
    flex-direction: column;
    gap: 8px;
}

.field-group label {
    color: #554650;
    font-size: 13px;
    font-weight: 700;
}

.field-group label .optional {
    color: #a99ba3;
    font-size: 11px;
    font-weight: 500;
}

.input-wrap {
    position: relative;
    display: flex;
    align-items: center;
    min-width: 0;
}

.input-wrap input,
.grid input {
    width: 100%;
    min-width: 0;
    min-height: 55px;
    padding: 13px 16px;
    border: 1px solid #eadfe4;
    border-radius: 15px;
    outline: none;
    background: #fff;
    color: var(--text);
    font-size: 15px;
    font-weight: 600;
    transition: border-color var(--transition),
                box-shadow var(--transition),
                background var(--transition);
}

.input-wrap input {
    padding-left: 55px;
}

.input-wrap input::placeholder,
.grid input::placeholder {
    color: #b8aab2;
    font-size: 13px;
    font-weight: 400;
}

.input-wrap input:hover,
.grid input:hover {
    border-color: #e5b8c9;
}

.input-wrap input:focus,
.grid input:focus {
    border-color: var(--pink-dark);
    background: #fffdfd;
    box-shadow: 0 0 0 4px rgba(212, 107, 145, .10);
}

.input-unit {
    position: absolute;
    left: 15px;
    color: var(--pink-dark);
    font-size: 12px;
    font-weight: 800;
    pointer-events: none;
}

.field-help {
    color: #a0939b;
    font-size: 11px;
    line-height: 1.8;
}

/* Remove number input arrows where supported */

.input-wrap input[type="number"]::-webkit-inner-spin-button,
.input-wrap input[type="number"]::-webkit-outer-spin-button,
.grid input[type="number"]::-webkit-inner-spin-button,
.grid input[type="number"]::-webkit-outer-spin-button {
    margin: 0;
    -webkit-appearance: none;
}

.input-wrap input[type="number"],
.grid input[type="number"] {
    -moz-appearance: textfield;
}

/* =========================
   MAIN ACTION BUTTON
========================= */

.main-btn {
    position: relative;
    width: 100%;
    min-height: 59px;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 12px;
    margin-top: 28px;
    padding: 15px 20px;
    overflow: hidden;
    border: 1px solid rgba(255, 255, 255, .28);
    border-radius: 17px;
    background: linear-gradient(115deg, #e99ab4, #d46b91 58%, #c75b84);
    color: #fff;
    font-size: 15px;
    font-weight: 800;
    cursor: pointer;
    box-shadow: 0 9px 22px rgba(212, 107, 145, .20);
    transition: transform var(--transition),
                box-shadow var(--transition),
                filter var(--transition);
}

.main-btn::before {
    content: "";
    position: absolute;
    top: 0;
    left: -100%;
    width: 60%;
    height: 100%;
    background: linear-gradient(
        100deg,
        transparent,
        rgba(255, 255, 255, .19),
        transparent
    );
    transform: skewX(-20deg);
    transition: left .6s ease;
}

.main-btn:hover::before {
    left: 150%;
}

.main-btn:hover {
    transform: translateY(-2px);
    box-shadow: 0 13px 27px rgba(212, 107, 145, .27);
    filter: saturate(1.05);
}

.main-btn:active {
    transform: translateY(0) scale(.99);
}

.main-btn i {
    font-size: 16px;
}

/* =========================
   RESULT
========================= */

.result {
    margin-top: 25px;
    padding: clamp(20px, 4vw, 30px);
    border: 1px solid #f3d6e1;
    border-radius: 22px;
    background:
        radial-gradient(circle at top, #fff, transparent 75%),
        linear-gradient(145deg, #fff5f8, #fff0f5);
    animation: resultReveal .4s ease both;
}

@keyframes resultReveal {
    from {
        opacity: 0;
        transform: translateY(10px);
    }

    to {
        opacity: 1;
        transform: translateY(0);
    }
}

.result-card {
    text-align: center;
}

.result-card h2 {
    margin-bottom: 15px;
    color: var(--pink-deep);
    font-size: 19px;
    font-weight: 800;
}

.size-box {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 11px;
    margin: 16px 0 19px;
}

.size-letter {
    color: var(--pink-deep);
    font-size: clamp(43px, 8vw, 58px);
    font-weight: 800;
    line-height: 1.3;
}

.size-number {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    min-width: 95px;
    padding: 9px 20px;
    border: 1px solid rgba(255, 255, 255, .5);
    border-radius: 14px;
    background: linear-gradient(135deg, #f7b6c8, #d46b91);
    color: #fff;
    font-size: 23px;
    font-weight: 800;
    box-shadow: 0 7px 18px rgba(212, 107, 145, .16);
}

.note {
    color: #766873;
    font-size: 13px;
    line-height: 2.1;
}

/* =========================
   SHARE RESULT BUTTON
========================= */

.share-result-btn {
    width: 100%;
    min-height: 53px;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
    margin-top: 15px;
    padding: 13px 18px;
    border: 1px solid var(--pink-border);
    border-radius: 16px;
    background: #fff;
    color: var(--pink-deep);
    font-size: 14px;
    font-weight: 800;
    cursor: pointer;
    transition: var(--transition);
}

.share-result-btn:hover {
    border-color: var(--pink-dark);
    background: var(--pink-light);
    transform: translateY(-2px);
}

/* =========================
   CONTACT SECTION
========================= */

.contact-section {
    width: 100%;
    max-width: 760px;
    margin: 28px auto 0;
    padding: 23px;
    border: 1px solid rgba(255, 255, 255, .85);
    border-radius: 23px;
    background: rgba(255, 255, 255, .68);
    box-shadow: 0 10px 30px rgba(155, 77, 108, .05);
}

.contact-heading {
    margin-bottom: 17px;
    text-align: center;
}

.contact-heading h2 {
    font-size: 16px;
    font-weight: 800;
}

.contact-heading p {
    margin-top: 5px;
    color: var(--muted);
    font-size: 12px;
}

.socials {
    display: grid;
    grid-template-columns: repeat(3, minmax(0, 1fr));
    gap: 11px;
    margin-top: 0;
}

.social-btn,
.share-btn {
    min-width: 0;
    min-height: 49px;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
    padding: 12px 10px;
    border: 1px solid transparent;
    border-radius: 14px;
    color: #fff;
    font-size: 12px;
    font-weight: 800;
    text-align: center;
    text-decoration: none;
    cursor: pointer;
    transition: transform var(--transition),
                box-shadow var(--transition),
                filter var(--transition);
}

.social-btn i,
.share-btn i {
    font-size: 17px;
}

.social-btn:hover,
.share-btn:hover {
    transform: translateY(-2px);
    box-shadow: 0 7px 17px rgba(0, 0, 0, .10);
    filter: brightness(1.04);
}

.instagram {
    background: linear-gradient(45deg, #833ab4, #e1306c, #f77737);
}

.whatsapp {
    background: #20b965;
}

.tiktok {
    background: #151515;
}

.copy-btn {
    background: #4a90e2;
    color: #fff;
}

.copy-btn:hover {
    background: #347bc9;
}

/* =========================
   SHARE MODAL
========================= */

.modal {
    position: fixed;
    inset: 0;
    z-index: 9999;
    display: none;
    align-items: center;
    justify-content: center;
    padding: 18px;
    overflow-y: auto;
    background: rgba(36, 23, 31, .48);
    backdrop-filter: blur(8px);
    -webkit-backdrop-filter: blur(8px);
}

.modal.show,
.modal.active {
    display: flex;
}

.modal-content {
    position: relative;
    width: 100%;
    max-width: 430px;
    max-height: calc(100vh - 36px);
    overflow-y: auto;
    padding: 32px 25px 25px;
    border: 1px solid rgba(255, 255, 255, .85);
    border-radius: 25px;
    background: #fff;
    box-shadow: 0 25px 75px rgba(0, 0, 0, .16);
    animation: modalReveal .28s ease both;
}

@keyframes modalReveal {
    from {
        opacity: 0;
        transform: translateY(12px) scale(.97);
    }

    to {
        opacity: 1;
        transform: translateY(0) scale(1);
    }
}

.modal-content h2,
.modal-content h3 {
    margin-bottom: 8px;
    color: var(--text);
    font-size: 20px;
    font-weight: 800;
    text-align: center;
}

.modal-content > p {
    margin: 0 auto;
    color: var(--muted);
    font-size: 12px;
    line-height: 1.9;
    text-align: center;
}

.close-modal {
    position: absolute;
    top: 12px;
    left: 13px;
    width: 39px;
    height: 39px;
    display: grid;
    place-items: center;
    border: 1px solid #f4e4ea;
    border-radius: 12px;
    background: #fff7fa;
    color: var(--pink-deep);
    font-size: 24px;
    line-height: 1;
    cursor: pointer;
    transition: var(--transition);
}

.close-modal:hover {
    background: var(--pink-dark);
    border-color: var(--pink-dark);
    color: #fff;
    transform: rotate(5deg);
}

.modal-buttons {
    display: flex;
    flex-direction: column;
    gap: 11px;
    margin-top: 23px;
}

.modal-btn {
    width: 100%;
    min-height: 52px;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 11px;
    padding: 13px 16px;
    border: 1px solid transparent;
    border-radius: 15px;
    color: #fff;
    font-size: 13px;
    font-weight: 800;
    text-decoration: none;
    cursor: pointer;
    transition: var(--transition);
}

.modal-btn i {
    font-size: 17px;
}

.modal-btn:hover {
    transform: translateY(-2px);
    box-shadow: 0 7px 17px rgba(0, 0, 0, .10);
}

/* =========================
   FOOTER
========================= */

.site-footer {
    width: 100%;
    max-width: 760px;
    margin: 25px auto 0;
    padding: 14px 10px 4px;
    color: #a0929b;
    font-size: 11px;
    line-height: 2;
    text-align: center;
}

.site-footer strong {
    color: var(--pink-dark);
    font-weight: 800;
    letter-spacing: 1px;
}

/* =========================
   HELPERS & ACCESSIBILITY
========================= */

.hidden {
    display: none !important;
}

button:focus-visible,
a:focus-visible,
input:focus-visible {
    outline: 3px solid rgba(212, 107, 145, .35);
    outline-offset: 3px;
}

::selection {
    background: #f7b6c8;
    color: #432b37;
}

/* =========================
   TABLET
========================= */

@media (max-width: 760px) {
    .container {
        padding: 19px 20px 25px;
    }

    .site-header {
        margin-bottom: 28px;
    }

    .intro {
        margin-top: 0;
        margin-bottom: 23px;
    }

    .card {
        max-width: 620px;
    }

    .contact-section {
        max-width: 620px;
    }
}

/* =========================
   MOBILE
========================= */

@media (max-width: 520px) {
    .container {
        padding: 15px 13px 22px;
    }

    .site-header {
        gap: 10px;
        margin-bottom: 25px;
    }

    .logo {
        gap: 8px;
    }

    .logo-mark {
        width: 41px;
        height: 41px;
        border-radius: 13px;
        font-size: 24px;
    }

    .logo-text strong {
        font-size: 16px;
        letter-spacing: 2px;
    }

    .logo-text span {
        font-size: 9px;
        letter-spacing: .5px;
    }

    .store-link {
        gap: 6px;
        padding: 10px 11px;
        border-radius: 12px;
        font-size: 11px;
        white-space: nowrap;
    }

    .intro {
        margin-bottom: 21px;
    }

    .intro h1 {
        font-size: 28px;
        line-height: 1.7;
    }

    .intro p {
        max-width: 340px;
        font-size: 12px;
        line-height: 2;
    }

    .eyebrow {
        padding: 6px 12px;
        margin-bottom: 11px;
        font-size: 10px;
    }

    .card {
        padding: 22px 17px;
        border-radius: 23px;
    }

    .section-heading {
        gap: 10px;
        margin-bottom: 20px;
    }

    .section-icon {
        width: 41px;
        height: 41px;
        border-radius: 13px;
        font-size: 17px;
    }

    .section-heading h2 {
        font-size: 15px;
    }

    .section-heading p {
        font-size: 11px;
    }

    .grid {
        grid-template-columns: minmax(0, 1fr);
        gap: 16px;
    }

    .field-group {
        gap: 7px;
    }

    .field-group label {
        font-size: 12px;
    }

    .input-wrap input,
    .grid input {
        min-height: 53px;
        padding-top: 12px;
        padding-bottom: 12px;
        border-radius: 14px;
        font-size: 14px;
    }

    .input-wrap input {
        padding-left: 50px;
    }

    .main-btn {
        min-height: 55px;
        gap: 9px;
        margin-top: 23px;
        padding: 13px 12px;
        border-radius: 15px;
        font-size: 13px;
    }

    .result {
        padding: 21px 15px;
        border-radius: 19px;
    }

    .result-card h2 {
        font-size: 17px;
    }

    .note {
        font-size: 12px;
    }

    .share-result-btn {
        min-height: 50px;
        font-size: 12px;
    }

    .contact-section {
        margin-top: 20px;
        padding: 19px 14px;
        border-radius: 20px;
    }

    .contact-heading h2 {
        font-size: 14px;
    }

    .contact-heading p {
        font-size: 11px;
    }

    .socials {
        grid-template-columns: minmax(0, 1fr);
        gap: 9px;
    }

    .social-btn {
        min-height: 47px;
        font-size: 12px;
    }

    .modal {
        padding: 13px;
    }

    .modal-content {
        padding: 31px 18px 20px;
        border-radius: 22px;
    }

    .modal-content h2,
    .modal-content h3 {
        font-size: 18px;
    }

    .modal-btn {
        min-height: 50px;
        font-size: 12px;
    }

    .site-footer {
        margin-top: 19px;
        font-size: 10px;
    }
}

/* =========================
   SMALL PHONES
========================= */

@media (max-width: 350px) {
    .container {
        padding-right: 9px;
        padding-left: 9px;
    }

    .store-link {
        padding: 9px 8px;
        font-size: 10px;
    }

    .logo-text strong {
        font-size: 14px;
    }

    .logo-mark {
        width: 36px;
        height: 36px;
    }

    .intro h1 {
        font-size: 25px;
    }

    .card {
        padding: 19px 13px;
    }
}

/* Respect reduced-motion preferences */

@media (prefers-reduced-motion: reduce) {
    *,
    *::before,
    *::after {
        scroll-behavior: auto !important;
        animation-duration: .01ms !important;
        animation-iteration-count: 1 !important;
        transition-duration: .01ms !important;
    }
}
