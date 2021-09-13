const panels = document.querySelectorAll(".panel");

panels.forEach((panel) => {
  panel.addEventListener("click", () => {
    if (panel.classList.contains("active") === true) {
      removeActiveClasses();
    } else {
        removeActiveClasses();
        panel.classList.add("active");
    }
    
  });
});

function removeActiveClasses() {
  panels.forEach((panel) => {
    panel.classList.remove("active");
  });
}
