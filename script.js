console.log("Website erfolgreich geladen!");

  fetch('https://api.mcsrvstat.us/2/mystania.de') // <- Hier deinen Servernamen eintragen
    .then(response => response.json())
    .then(data => {
      if (data.online) {
        document.getElementById('playercount').textContent = data.players.online;
      } else {
        document.getElementById('playercount').textContent = "Server offline";
      }
    })
    .catch(error => {
      console.error('Fehler beim Abrufen:', error);
      document.getElementById('playercount').textContent = "Fehler";
    });






// Funktion zum Öffnen und Schließen des Navigationsmenüs
function toggleNav() {
    var nav = document.getElementById("side-nav");
    nav.classList.toggle("open");

    // Ändere die Hamburger-Icon-Animation, wenn das Menü geöffnet ist
    var bars = document.querySelectorAll(".hamburger-menu .bar");
    bars[0].classList.toggle("change-top");
    bars[1].classList.toggle("change-middle");
    bars[2].classList.toggle("change-bottom");
}

