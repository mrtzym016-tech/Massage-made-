const PASSWORD = "12345";
let unlocked = false;

document.querySelectorAll(".lock-overlay").forEach(lock => {
  lock.addEventListener("click", () => {
    if (unlocked) return;

    const pass = prompt(
      "🔒 محتوى مدفوع\nللحصول على كلمة السر اشترك\nTelegram: @mortza016"
    );

    if (pass === PASSWORD) {
      unlocked = true;
      document.querySelectorAll(".card").forEach(card => {
        card.classList.add("unlocked");

        const btn = card.querySelector(".copy-btn");
        const text = card.querySelector(".text").innerText;

        btn.disabled = false;
        btn.onclick = () => navigator.clipboard.writeText(text);
      });
    } else {
      alert("❌ كلمة السر غير صحيحة");
    }
  });
});
