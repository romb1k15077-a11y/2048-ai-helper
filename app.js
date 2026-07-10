const imageInput = document.getElementById("imageInput");
const preview = document.getElementById("preview");
const move = document.getElementById("move");
const analyze = document.getElementById("analyze");

let selectedImage = null;

imageInput.addEventListener("change", (e) => {

    selectedImage = e.target.files[0];

    if (!selectedImage) return;

    const img = document.createElement("img");

    img.src = URL.createObjectURL(selectedImage);

    img.style.width = "100%";
    img.style.marginTop = "20px";
    img.style.borderRadius = "15px";

    preview.innerHTML = "";
    preview.appendChild(img);

});

analyze.addEventListener("click", () => {

    if (!selectedImage) {

        alert("Спочатку вибери скриншот");

        return;

    }

    move.innerHTML = "⬅️";

});
