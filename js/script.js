const hamburger = document.getElementById("hamburger");
const navbarMenu = document.getElementById("navbarMenu");

hamburger.addEventListener("click", () => {
  navbarMenu.classList.toggle("active");
});


document.getElementById("messageForm").addEventListener("submit", function(e) {
  e.preventDefault(); // mencegah reload halaman

  const nama = document.getElementById("inputNama").value;
  const tanggal = document.getElementById("inputTanggal").value;
  const pesan = document.getElementById("inputPesan").value;

  // cari radio jenis kelamin yang dipilih
  const jkElement = document.querySelector("input[name='jk']:checked");
  const jk = jkElement ? jkElement.value : "-";

  // waktu realtime
  const currentTime = new Date().toString();

  // update output
  const output = document.getElementById("outputBox");
  output.innerHTML = `
    <p><strong>Current time :</strong> ${currentTime}</p>
    <br>
    <p><strong>Nama :</strong> ${nama || "-"}</p>
    <p><strong>Tanggal Lahir :</strong> ${tanggal || "-"}</p>
    <p><strong>Jenis Kelamin :</strong> ${jk}</p>
    <p><strong>Pesan :</strong> ${pesan || "-"}</p>
  `;
});

document.addEventListener("DOMContentLoaded", function () {

  const popupOverlay = document.getElementById("welcomePopup");
  const popupInput = document.getElementById("popupName");
  const popupBtn = document.getElementById("popupSubmit");

  const greetingTitle = document.querySelector("#home h2");

  popupOverlay.classList.add("active");

  popupBtn.addEventListener("click", function () {
    const nama = popupInput.value.trim();

    if (nama === "") {
      alert("Isi nama dulu ya!");
      return;
    }

    greetingTitle.textContent = `Hi ${nama}, Welcome To Website`;

    popupOverlay.classList.remove("active");
  });

});
