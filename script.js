document.addEventListener("DOMContentLoaded", function () {
  const hadiths = document.querySelectorAll("p.bord");

  hadiths.forEach((el) => {
    if (el.querySelector(".wa-share-btn")) return;

    const text = el.innerText.trim();
    const btn = document.createElement("button");
    btn.className = "wa-share-btn";
    btn.type = "button";
    btn.innerHTML = "📤 مشاركة الحديث عبر واتساب";

    btn.addEventListener("click", function () {
      const shareText = `${text}\n\n📖 اقرأ الأربعين النووية كاملة:\nhttps://anawawi40.com`;
      const whatsappUrl = "https://api.whatsapp.com/send?text=" + encodeURIComponent(shareText);
      window.open(whatsappUrl, "_blank");
    });

    el.appendChild(document.createElement("br"));
    el.appendChild(btn);
  });
});