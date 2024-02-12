const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", mobileMenu);

function mobileMenu() {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
}

// Close navbar when link is clicked
const navLink = document.querySelectorAll(".nav-link");

navLink.forEach((n) => n.addEventListener("click", closeMenu));

function closeMenu() {
  hamburger.classList.remove("active");
  navMenu.classList.remove("active");
}

// Event Listeners: Handling toggle event
const toggleSwitch = document.querySelector(
  '.theme-switch input[type="checkbox"]'
);

function switchTheme(e) {
  if (e.target.checked) {
    document.documentElement.setAttribute("data-theme", "dark");
  } else {
    document.documentElement.setAttribute("data-theme", "light");
  }
}

toggleSwitch.addEventListener("change", switchTheme, false);

//  Store color theme for future visits

function switchTheme(e) {
  if (e.target.checked) {
    document.documentElement.setAttribute("data-theme", "dark");
    localStorage.setItem("theme", "dark"); //add this
  } else {
    document.documentElement.setAttribute("data-theme", "light");
    localStorage.setItem("theme", "light"); //add this
  }
}

// Save user preference on load

const currentTheme = localStorage.getItem("theme")
  ? localStorage.getItem("theme")
  : null;

if (currentTheme) {
  document.documentElement.setAttribute("data-theme", currentTheme);

  if (currentTheme === "dark") {
    toggleSwitch.checked = true;
  }
}

//Adding date

let myDate = document.querySelector("#datee");

const yes = new Date().getFullYear();
myDate.innerHTML = yes;


function downloadDocumento() {
  // Creazione di un elemento <a> (link)
  var link = document.createElement('a');
  var doc = './src/assets/Resume/Alessandro_Stapane.pdf'
  // Impostazione dell'URL del documento che si desidera scaricare
  var documentoURL = doc; // Sostituisci con l'effettivo URL del tuo documento

  // Impostazione degli attributi del link
  link.href = documentoURL;
  link.download = 'Resume - Stapane Alessandro'; // Sostituisci con il nome desiderato per il documento
// Impostazione degli attributi del link
link.type = 'application/pdf';  // Aggiungi questa linea

  // Aggiunta del link alla pagina
  document.body.appendChild(link);

  // Simulazione del clic sul link per avviare il download
  link.click();

  // Rimozione del link dalla pagina
  document.body.removeChild(link);
}
function BackToHome() {
  var home = "index.html";
  window.location.href = home;
}

document.addEventListener("DOMContentLoaded", function() {
  animaBarre();
});

var options = {
  root: null,
  rootMargin: '0px',
  threshold: 0.2  // Cambia questo valore a seconda di quanto vuoi che la sezione sia visibile prima di avviare l'animazione
};

var observer = new IntersectionObserver(handleIntersection, options);
var skillsSection = document.getElementById('skill');

observer.observe(skillsSection);

function handleIntersection(entries, observer) {
  entries.forEach(entry => {
      if (entry.isIntersecting) {
          // Sezione entrata nella visualizzazione, avvia l'animazione
          animaBarre();
          observer.unobserve(entry.target);
      }
  });
}

var options = {
  root: null,
  rootMargin: '0px',
  threshold: 0.2
};

var observer = new IntersectionObserver(handleIntersection, options);
var skillsSection = document.getElementById('skillsSection');

observer.observe(skillsSection);

function handleIntersection(entries, observer) {
  entries.forEach(entry => {
      if (entry.isIntersecting) {
          animaBarre();
          observer.unobserve(entry.target);
      }
  });
}

var skillsSection = document.getElementById('skill');

function handleWaypoint() {
    animaBarre();
    this.destroy();  // Ferma il listener dopo che l'evento è stato gestito
}

var waypoints = new Waypoint({
    element: skillsSection,
    handler: handleWaypoint,
    offset: '80%'  // Modifica questo valore a seconda di quando vuoi che l'evento venga attivato rispetto all'altezza della finestra
});

function animaBarre() {
    animaBarra("progress-bar-react", 20);
    animaBarra("progress-bar-net", 40);
    animaBarra("progress-bar-js", 30);
    animaBarra("progress-bar-css", 50);
    animaBarra("progress-bar-html", 90);
    animaBarra("progress-bar-jq", 30);
    animaBarra("progress-bar-db", 70);
    animaBarra("progress-bar-git", 50);
}

function animaBarra(classe, percentuale) {
    var barra = document.querySelector("." + classe);
    var porcentaje = 0;

    var intervalo = setInterval(function () {
        if (porcentaje >= percentuale) {
            clearInterval(intervalo);
        } else {
            porcentaje++;
            barra.style.width = porcentaje + "%";
            barra.innerHTML = porcentaje + "%";
        }
    }, 15);

    barra.parentElement.style.opacity = 1;
}
