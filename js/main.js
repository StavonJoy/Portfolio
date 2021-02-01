const linkContainer = document.getElementById("navdiv");

const links = linkContainer.getElementsByClassName("link");

for (let i = 0; i < links.length; i++) {
  links[i].addEventListener("click", function() {
    let current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
    this.className += " active";
  });
}