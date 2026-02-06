const PASSWORD = "12345"; // كلمة السر للمدفوع

const content = document.getElementById("content");

let unlocked = false;

function renderCategory() {
  const cat = document.getElementById("category").value;
  content.innerHTML = "";

  const filtered = TEXTS.filter(t => t.category === cat);

  filtered.forEach(t => {
    const div = document.createElement("div");
    div.className = "card";

    if(t.type === "paid" && !unlocked){
      div.classList.add("locked");
      div.innerHTML = `<pre>🔒 نص مدفوع</pre>`;
    } else {
      div.innerHTML = `<pre>${t.text}</pre><button onclick="copyText(this)">نسخ النص</button>`;
    }

    content.appendChild(div);
  });
}

function unlock() {
  const input = document.getElementById("passwordInput").value;

  if(input === PASSWORD){
    unlocked = true;
    document.getElementById("lockedInfo").style.display = "none";
    document.getElementById("passwordInput").style.display = "none";
    renderCategory();
  } else {
    alert("❌ كلمة السر غير صحيحة");
  }
}

function copyText(btn){
  const text = btn.previousElementSibling.innerText;
  navigator.clipboard.writeText(text);
  btn.innerText = "✔ تم النسخ";
  setTimeout(()=> btn.innerText="نسخ النص",2000);
}

// العرض الأول عند فتح الصفحة
renderCategory();
