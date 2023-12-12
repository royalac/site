(function () {
  emailjs.init("5KcmepTSqy4xcWV1J");
})();

const loading = document.getElementById("loading");
const errorMessage = document.getElementById("errorMessage");
const sentMessage = document.getElementById("sentMessage");

window.onload = function () {
  document.getElementById("contact-form").addEventListener("submit", function (event) {
    loading.style.display = "block";
    event.preventDefault();
    emailjs.sendForm("service_royalac", "template_royalac", this).then(
      function () {
        loading.style.display = "none";
        sentMessage.style.display = "block";
        console.log("SUCCESS SEND EMAIL...");
      },
      function (error) {
        loading.style.display = "none";
        errorMessage.style.display = "block";
        console.log("FAILED SEND EMAIL...", error);
      }
    );
  });
};
