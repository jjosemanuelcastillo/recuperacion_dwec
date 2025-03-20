function insertByinsertAdjacentHTML() {
    let texto = document.getElementById("texto").value;
    let div = document.querySelector("div");

    div.insertAdjacentHTML("afterbegin", `<p>${texto}</p>`);
}

function insertBycreateElement() {
    let div = document.querySelector("div");
    let texto = document.getElementById("texto").value;
    let p = document.createElement("p");
    p.innerHTML = `<p>${texto}</p>`
    div.appendChild(p);
}