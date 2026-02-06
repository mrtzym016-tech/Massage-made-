const container = document.getElementById("cards");

TEXTS.forEach(item => {
  const card = document.createElement("div");
  card.className = "card";

  if (item.type === "paid") {
    card.classList.add("locked");
    card.innerHTML = `
      <div class="lock-overlay">🔒 محتوى مدفوع</div>
      <p class="text">${item.text}</p>
      <button class="copy-btn" disabled>نسخ النص</button>
    `;
  } else {
    card.innerHTML = `
      <p class="text">${item.text}</p>
      <button class="copy-btn">نسخ النص</button>
    `;
  }

  container.appendChild(card);
});
