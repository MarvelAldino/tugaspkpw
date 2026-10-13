let mode = 0, uSkor = 0, cSkor = 0;

function pilihGame(n) {
    mode = n; uSkor = 0; cSkor = 0;
    skorUser.innerText = "0"; skorComp.innerText = "0";
    menu.classList.add("d-none");
    game.classList.remove("d-none");
    hasil.classList.add("d-none");

    let nama = ["", "Batu Gunting Kertas", "Gajah Orang Semut", "Suit Jari"];
    let opsi = [
        [], 
        ["Batu", "Gunting", "Kertas"], 
        ["Gajah", "Orang", "Semut"], 
        ["Jempol", "Telunjuk", "Kelingking"]
    ];

    judulGame.innerText = nama[n];
    tombolPilihan.innerHTML = "";
    
    opsi[n].forEach(item => {
        tombolPilihan.innerHTML += `<button onclick="main('${item}')">${item}</button>`;
    });
}

function main(pUser) {
    let opsi = [];
    if (mode === 1) opsi = ["Batu", "Gunting", "Kertas"];
    if (mode === 2) opsi = ["Gajah", "Orang", "Semut"];
    if (mode === 3) opsi = ["Jempol", "Telunjuk", "Kelingking"];

    let pComp = opsi[Math.floor(Math.random() * opsi.length)];
    let ket = "SERI!";

    if (pUser !== pComp) {
        let menang = (
            (pUser === "Batu" && pComp === "Gunting") ||
            (pUser === "Gunting" && pComp === "Kertas") ||
            (pUser === "Kertas" && pComp === "Batu") ||
            (pUser === "Gajah" && pComp === "Orang") ||
            (pUser === "Orang" && pComp === "Semut") ||
            (pUser === "Semut" && pComp === "Gajah") ||
            (pUser === "Jempol" && pComp === "Telunjuk") ||
            (pUser === "Telunjuk" && pComp === "Kelingking") ||
            (pUser === "Kelingking" && pComp === "Jempol")
        );
        if (menang) { ket = "KAMU MENANG!"; uSkor++; }
        else { ket = "KOMPUTER MENANG!"; cSkor++; }
    }

    skorUser.innerText = uSkor;
    skorComp.innerText = cSkor;
    pUserTeks.innerText = "Pilihanmu: " + pUser;
    pCompTeks.innerText = "Pilihan Komputer: " + pComp;
    teksHasil.innerText = ket;
    hasil.classList.remove("d-none");
}

function keMenu() {
    game.classList.add("d-none");
    menu.classList.remove("d-none");
}