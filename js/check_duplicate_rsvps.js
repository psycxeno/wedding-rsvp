<script>
  document.addEventListener("DOMContentLoaded", function () {
    const rsvpButton = document.getElementById("rsvp-button");
    const formURL = "https://docs.google.com/forms/d/e/1FAIpQLSflaAqF5bZWMAiLAyt87sFyiTVx7rIyzDRJv4kdchEbrOaigw/viewform?usp=header"; // Replace with your actual URL

    if (localStorage.getItem("rsvpVisited")) {
      rsvpButton.innerText = "✔️ Ήδη δηλώσατε παρουσία";
      rsvpButton.style.backgroundColor = "#ccc";
      rsvpButton.style.pointerEvents = "none";
      rsvpButton.style.cursor = "not-allowed";
    } else {
      rsvpButton.addEventListener("click", function (e) {
        e.preventDefault();
        localStorage.setItem("rsvpVisited", "true");
        window.open(formURL, "_blank");
        rsvpButton.innerText = "✔️ Ήδη δηλώσατε παρουσία";
        rsvpButton.style.backgroundColor = "#ccc";
        rsvpButton.style.pointerEvents = "none";
        rsvpButton.style.cursor = "not-allowed";
      });
    }
  });
</script>
