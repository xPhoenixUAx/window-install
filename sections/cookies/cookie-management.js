// Cookie management modal logic
function openCookieManagement() {
  document.getElementById("cookieManagementModal").classList.add("active");
}
function closeCookieManagement() {
  document.getElementById("cookieManagementModal").classList.remove("active");
}

function saveCookiePreferences() {
  const analytics = document.getElementById("analyticsCookies").checked;
  const marketing = document.getElementById("marketingCookies").checked;
  localStorage.setItem("cookiePrefs", JSON.stringify({ analytics, marketing }));
  localStorage.setItem("cookiesAccepted", "true");
  closeCookieManagement();
  hideCookiesWindow();
}

document.addEventListener("DOMContentLoaded", function () {
  fetch("sections/cookies/cookie-management.html")
    .then((res) => res.text())
    .then((html) => {
      document.body.insertAdjacentHTML("beforeend", html);

      const prefs = JSON.parse(localStorage.getItem("cookiePrefs") || "{}");
      if (prefs.analytics)
        document.getElementById("analyticsCookies").checked = true;
      if (prefs.marketing)
        document.getElementById("marketingCookies").checked = true;
      // Button events
      document.querySelector(".cookie-management-btn.save").onclick =
        saveCookiePreferences;
      document.querySelector(".cookie-management-btn.cancel").onclick =
        closeCookieManagement;
    });

  const manageBtn = document.querySelector(".cookies-btn.manage");
  if (manageBtn) {
    manageBtn.addEventListener("click", function (e) {
      e.preventDefault();
      openCookieManagement();
    });
  }
});
