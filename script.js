// An curent
document.getElementById("an-curent").textContent = new Date().getFullYear();

// Meniu mobil
const navToggle = document.createElement("button");
navToggle.className = "nav-toggle";
navToggle.textContent = "☰";
document.querySelector(".main-nav").prepend(navToggle);

const navMenu = document.querySelector(".main-nav ul");
navToggle.addEventListener("click", () => {
  navMenu.classList.toggle("open");
});

const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightbox-img");
const lightboxCaption = document.getElementById("lightbox-caption");
const closeBtn = document.querySelector(".lightbox .close");

document.querySelectorAll(".grid-item").forEach(item => {
  item.addEventListener("click", e => {
    e.preventDefault();
    lightboxImg.src = item.querySelector("img").src;
    lightboxCaption.textContent = item.dataset.title;
    lightbox.classList.add("open");
  });
});

closeBtn.addEventListener("click", ()=>lightbox.classList.remove("open"));
lightbox.addEventListener("click", e => {
  if(e.target === lightbox) lightbox.classList.remove("open");
});

const form = document.getElementById("form-contact");
const statusEl = document.getElementById("form-status");
if(form){
  form.addEventListener("submit", async e=>{
    e.preventDefault();
    statusEl.textContent = "Sending...";
    try {
      const res = await fetch(form.action, {
        method: form.method,
        body: new FormData(form),
        headers: { 'Accept': 'application/json' }
      });
      if(res.ok){ form.reset(); statusEl.textContent = "Sent successfully!"; }
      else statusEl.textContent = "Error, try again.";
    } catch { statusEl.textContent = "Connection problems."; }
  });
}