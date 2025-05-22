document.addEventListener("DOMContentLoaded", () => {
  const modal = document.getElementById("resumeModal");
  const openBtn = document.getElementById("openResume");
  const closeBtn = document.querySelector(".close");

  openBtn.onclick = () => {
    modal.style.display = "block";
  };

  closeBtn.onclick = () => {
    modal.style.display = "none";
  };

  window.onclick = (event) => {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  };
});
