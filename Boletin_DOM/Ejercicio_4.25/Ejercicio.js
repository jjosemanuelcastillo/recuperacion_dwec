let provincias = ["Huelva", "Sevilla", "Córdoba", "Jaén", "Almería", "Granada", "Málaga", "Cádiz"];

function añadir() {
    let idProvincias = document.getElementById("provincias");
    provincias.forEach(provincia => {
        let option = document.createElement("option");
        option.value = provincia;
        option.textContent = provincia;
        idProvincias.appendChild(option);
        
    });

    idProvincias.onchange = () => {
        
    };
}