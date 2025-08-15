// Show cookies window if not previously accepted
function showCookiesWindow() {
  const cookiesWindow = document.querySelector(".cookies-window");
  if (!cookiesWindow) return;
  if (!localStorage.getItem("cookiesAccepted")) {
    cookiesWindow.classList.add("active");
  }
}

function hideCookiesWindow() {
  const cookiesWindow = document.querySelector(".cookies-window");
  if (cookiesWindow) {
    cookiesWindow.classList.remove("active");
  }
}

document.addEventListener("DOMContentLoaded", function () {
  showCookiesWindow();
  const agreeBtn = document.querySelector(".cookies-btn.agree");
  const manageBtn = document.querySelector(".cookies-btn.manage");

  if (agreeBtn) {
    agreeBtn.addEventListener("click", function () {
      localStorage.setItem("cookiesAccepted", "true");
      hideCookiesWindow();
    });
  }

  if (manageBtn) {
    manageBtn.addEventListener("click", function () {
      // You can add your manage settings logic here
      hideCookiesWindow();
      // alert removed
    });
  }
});
