(function () {
  emailjs.init("5KcmepTSqy4xcWV1J");
})();

const loading = document.getElementById("loading");
const errorMessage = document.getElementById("errorMessage");
const sentMessage = document.getElementById("sentMessage");
const btnActions = document.getElementById("btnActions");

window.onload = function () {
  document.getElementById("contact-form").addEventListener("submit", function (event) {
    loading.style.display = "block";
    btnActions.style.display = "none"
    event.preventDefault();
    emailjs.sendForm("service_royalac", "template_royalac", this).then(
      function () {
        loading.style.display = "none";
        sentMessage.style.display = "block";
        startTimeHideMessages()
        console.log("SUCCESS SEND EMAIL...");
      },
      function (error) {
        loading.style.display = "none";
        errorMessage.style.display = "block";
        startTimeHideMessages()
        console.log("FAILED SEND EMAIL...", error);
      }
    );
  });

  const startTimeHideMessages = () => {
    setTimeout(() => {
      btnActions.style.display = "block"
      loading.style.display = "none";
      sentMessage.style.display = "none";
      errorMessage.style.display = "none";    
    }, 3000);
  }
};
