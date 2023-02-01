function imageSwitcher(imgId, onId, offId, filename) {
    const onbuttonEl = document.getElementById(onId);
    const offbuttonEl = document.getElementById(offId);
    const imageEl = document.getElementById(imgId);

    onbuttonEl.setAttribute("disabled", true);
    onbuttonEl.addEventListener("click", function() {
        imageEl.setAttribute("src", `./assets/images/${filename}-on-example.png`);
        offbuttonEl.removeAttribute("disabled");
        this.setAttribute("disabled", "");
    });

    offbuttonEl.addEventListener("click", function() {
        imageEl.setAttribute("src", `./assets/images/${filename}-off-example.png`);
        onbuttonEl.removeAttribute("disabled");
        this.setAttribute("disabled", "");
    });
}