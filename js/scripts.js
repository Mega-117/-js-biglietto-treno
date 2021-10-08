let chilometriViaggio = prompt("inserisci i km del viaggio");
let prezzoViaggio = chilometriViaggio * 0.21;

if (chilometriViaggio === null || chilometriViaggio <= 0) {
    alert("km non inseriti riprova");
    location.reload();
}

else if (isNaN(chilometriViaggio)) {
    alert("Valore chilometri non valido riprova");
} else {
    console.log("viaggio di " + chilometriViaggio + " km");
    let eta = prompt("età");
    console.log("anni " + eta);

    if (eta === null || eta == "") {
        alert("età non inserita riprova");
        location.reload();
    }

    else if (isNaN(eta)) {
        alert("Valore età non valido riprova");
    }

    else if (eta < 18) {
        console.log("Minorenne");
        alert("Sei minorenne. Hai uno sconto del 20%");
        let scontoMinori = ((prezzoViaggio * 20) / 100);
        let prezzoMinori = prezzoViaggio - scontoMinori;
        prezzoMinori = prezzoMinori.toFixed(2);
        console.log("il biglietto costa " + prezzoMinori);
        alert("Il biglietti ti viene " + prezzoMinori);
    }
    else if (eta >= 18 && eta <= 65) {
        console.log("Maggiorenne");
        alert("Sei maggirenne");
        prezzoViaggio = prezzoViaggio.toFixed(2);
        console.log("il biglietto costa " + prezzoViaggio);
        alert("Il biglietto viene " + prezzoViaggio);
    }
    else if (eta > 65) {
        console.log("Over 65");
        alert("Complimenti hai più di 64 anni hai diritto a uno sconto del 40%");
        let scontoOver = ((prezzoViaggio * 40) / 100);
        let prezzoOver = prezzoViaggio - scontoOver;
        prezzoOver = prezzoOver.toFixed(2);
        console.log("il biglietto costa " + prezzoOver);
        alert("Il tuo biglietto viene " + prezzoOver);
    }
}
