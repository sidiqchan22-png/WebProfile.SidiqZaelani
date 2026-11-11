const sapaanEl = document.getElementById("sapaan");
const btnSapa = document.getElementById("btnSapa");
const pesanSapa = document.getElementById("pesanSapa");
function ucapanWaktu() {
  const jam = new Date().getHours();
  if (jam < 11) return "Selamat pagi";
  if (jam < 15) return "Selamat siang";
  if (jam < 18) return "Selamat sore";
  return "Selamat malam";
}
sapaanEl.textContent = ucapanWaktu() + "! 👋";
btnSapa.addEventListener("click", function () {
  pesanSapa.textContent = ucapanWaktu() + ", Terima kasih telah mengunjungi website saya, Sehat selalu yakk!";
});
const themeToggle = document.getElementById("themeToggle");
function terapkanTema(gelap) {
  document.body.classList.toggle("dark", gelap);
  themeToggle.textContent = gelap ? "☀️ Mode Terang" : "🌙 Mode Gelap";
}
let temaGelap = false;
try {
  temaGelap = localStorage.getItem("tema") === "gelap";
} catch (e) { /* abaikan jika storage tidak tersedia */ }
terapkanTema(temaGelap);
themeToggle.addEventListener("click", function () {
  const gelap = !document.body.classList.contains("dark");
  terapkanTema(gelap);
  try {
    localStorage.setItem("tema", gelap ? "gelap" : "terang");
  } catch (e) { /* abaikan */ }
});
const menuToggle = document.getElementById("menuToggle");
const navMenu = document.getElementById("navMenu");
menuToggle.addEventListener("click", function () {
  const terbuka = navMenu.classList.toggle("buka");
  menuToggle.setAttribute("aria-expanded", terbuka);
});
navMenu.querySelectorAll("a").forEach(function (link) {
  link.addEventListener("click", function () {
    navMenu.classList.remove("buka");
    menuToggle.setAttribute("aria-expanded", "false");
  });
});
const form = document.getElementById("formKontak");
const hasilForm = document.getElementById("hasilForm");
function setStatus(input, errEl, pesan) {
  errEl.textContent = pesan;
  input.classList.toggle("invalid", pesan !== "");
  input.classList.toggle("valid", pesan === "");
}
form.addEventListener("submit", function (e) {
  e.preventDefault();
  hasilForm.textContent = "";
  const nama = document.getElementById("nama");
  const email = document.getElementById("email");
  const pesan = document.getElementById("pesan");
  let valid = true;

  if (nama.value.trim().length < 3) {
    setStatus(nama, document.getElementById("errNama"), "Nama minimal 3 karakter.");
    valid = false;
  } else {
    setStatus(nama, document.getElementById("errNama"), "");
  }

  const polaEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!polaEmail.test(email.value.trim())) {
    setStatus(email, document.getElementById("errEmail"), "Format email tidak valid.");
    valid = false;
  } else {
    setStatus(email, document.getElementById("errEmail"), "");
  }

  if (pesan.value.trim().length < 10) {
    setStatus(pesan, document.getElementById("errPesan"), "Pesan minimal 10 karakter.");
    valid = false;
  } else {
    setStatus(pesan, document.getElementById("errPesan"), "");
  }

  if (valid) {
    hasilForm.textContent = "✅ Terima kasih, " + nama.value.trim() + "! Pesan kamu berhasil divalidasi.";
    form.reset();
    [nama, email, pesan].forEach(function (el) { el.classList.remove("valid"); });
  }
});

const btnAtas = document.getElementById("btnAtas");

window.addEventListener("scroll", function () {
  btnAtas.classList.toggle("tampil", window.scrollY > 300);
});

btnAtas.addEventListener("click", function () {
  window.scrollTo({ top: 0, behavior: "smooth" });
});


document.getElementById("tahun").textContent = new Date().getFullYear();
