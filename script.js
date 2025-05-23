document.addEventListener("DOMContentLoaded", () => {
  // === Resume Modal Logic ===
  const resumeModal = document.getElementById("resumeModal");
  const openResumeBtn = document.getElementById("openResume");
  const closeResumeBtn = document.querySelector(".close");

  openResumeBtn.onclick = () => {
    resumeModal.style.display = "block";
  };

  closeResumeBtn.onclick = () => {
    resumeModal.style.display = "none";
  };

  // Click outside to close resume modal
  window.addEventListener("click", (event) => {
    if (event.target === resumeModal) {
      resumeModal.style.display = "none";
    }
  });

  // === Contact Modal Logic ===
  const contactModal = document.getElementById("contactModal");
  const openContactBtn = document.getElementById("openContact");
  const closeContactBtn = document.querySelector(".contact-close");

  if (openContactBtn && contactModal && closeContactBtn) {
    openContactBtn.onclick = () => {
      contactModal.style.display = "block";
    };

    closeContactBtn.onclick = () => {
      contactModal.style.display = "none";
    };

    // Click outside to close contact modal
    window.addEventListener("click", (event) => {
      if (event.target === contactModal) {
        contactModal.style.display = "none";
      }
    });
  }
});
