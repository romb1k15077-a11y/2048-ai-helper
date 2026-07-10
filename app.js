const imageInput = document.getElementById("imageInput");
const preview = document.getElementById("preview");
const move = document.getElementById("move");
const analyze = document.getElementById("analyze");

let img = new Image();

imageInput.addEventListener("change", (e) => {

    const file = e.target.files[0];

    if (!file) return;

    img.src = URL.createObjectURL(file);

    preview.innerHTML = "";

    img.style.width = "100%";
    img.style.borderRadius = "12px";

    preview.appendChild(img);

});

analyze.addEventListener("click", () => {

    if (!img.src) {
        alert("Оберіть скриншот.");
        return;
    }

    const canvas = document.createElement("canvas");
    const ctx = canvas.getContext("2d");

    canvas.width = img.naturalWidth;
    canvas.height = img.naturalHeight;

    ctx.drawImage(img, 0, 0);

    move.innerHTML = "🧠 Аналіз...";
    recognizeBoard(canvas).then(text => {

    move.innerHTML = text;

});
    console.log("Зображення готове до аналізу.");

});
