let acc = document.getElementsByClassName("accordion");

for (let i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    let panel = this.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "em";
    }
  });
}

let bcc = document.getElementsByClassName("downaccordion");

for (let i = 0; i < bcc.length; i++) {
  bcc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    let downPanel = this.previousElementSibling;
    if (downPanel.style.maxHeight) {
      downPanel.style.maxHeight = null;
    } else {
      downPanel.style.maxHeight = downPanel.scrollHeight + "em";
    }
  });
}