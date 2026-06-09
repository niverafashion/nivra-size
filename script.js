function calculateSize() {

const h = parseFloat(document.getElementById("height").value);
const w = parseFloat(document.getElementById("weight").value);
const c = parseFloat(document.getElementById("chest").value);
const z = parseFloat(document.getElementById("waist").value);

if (!h || !w) {
    alert("يرجى إدخال الطول والوزن");
    return;
}

/* حساب BMI */

const bmi = w / Math.pow(h / 100, 2);

let score = bmi;

/* تحسين النتيجة عند إدخال الصدر */

if (!isNaN(c)) {

    if (c >= 88 && c < 92) score += 1;
    else if (c >= 92 && c < 96) score += 2;
    else if (c >= 96 && c < 100) score += 3;
    else if (c >= 100 && c < 104) score += 4;
    else if (c >= 104) score += 5;

}

/* تحسين النتيجة عند إدخال الخصر */

if (!isNaN(z)) {

    if (z >= 72 && z < 76) score += 1;
    else if (z >= 76 && z < 80) score += 2;
    else if (z >= 80 && z < 84) score += 3;
    else if (z >= 84 && z < 88) score += 4;
    else if (z >= 88) score += 5;

}

/* تحديد المقاس */

let idx = 0;

if (score < 22) {
    idx = 0;
}
else if (score < 26) {
    idx = 1;
}
else if (score < 30) {
    idx = 2;
}
else if (score < 34) {
    idx = 3;
}
else if (score < 38) {
    idx = 4;
}
else {
    idx = 5;
}

const sizes = ["S", "M", "L", "XL", "XXL", "XXXL"];
const nums = ["38", "40", "42", "44", "46", "48"];

/* عرض النتيجة */

const result = document.getElementById("result");

result.classList.remove("hidden");

result.innerHTML = `
<div class="result-card">

    <h2>✨ القياس المناسب</h2>

    <div class="size-box">

        <span class="size-letter">
            ${sizes[idx]}
        </span>

        <span class="size-number">
            ${nums[idx]}
        </span>

    </div>

    <p class="note">
        تم احتساب النتيجة اعتماداً على الطول والوزن بشكل أساسي،
        وتم تحسينها عند إدخال الصدر أو الخصر.
    </p>

</div>
`;

/* الرسالة الجاهزة */

const message =
`مرحباً 🌸

القياس المقترح لي من Nivra Size Finder:

المقاس الحرفي: ${sizes[idx]}
المقاس الرقمي: ${nums[idx]}

شكراً لكم 🤍`;

const encodedMessage = encodeURIComponent(message);

/* إظهار قسم المشاركة */

const shareSection =
document.getElementById("shareSection");

shareSection.classList.remove("hidden");

/* واتساب */

document.getElementById("shareWhatsapp").href =
`https://wa.me/?text=${encodedMessage}`;

/* انستغرام */

document.getElementById("shareInstagram").href =
"https://www.instagram.com/nivra.iq?igsh=bWE3dTJwajV5bnB5&utm_source=qr";

/* تيك توك */

document.getElementById("shareTiktok").href =
"https://www.tiktok.com/@nivra.iq?_r=1&_t=ZS-973Wr9i5ZWH";

}
