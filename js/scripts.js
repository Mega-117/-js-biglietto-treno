let chilometriViaggio = prompt("Inserisci i chilometri che devi percorrere");
let prezzoViaggio = chilometriViaggio * 0.21;
let eta = prompt("quanti anni hai ?");
chilometriViaggio = parseInt(chilometriViaggio);

if (isNaN(chilometriViaggio))
    alert("I chilometri inseriti non sono validi");


eta = parseInt(eta);
if (isNaN(eta))
    alert("valore età non valido");

if (eta >= 18 && eta < 65) {
    alert("Sei maggiorenne");
    prezzoViaggio = prezzoViaggio.toFixed(2);
    alert("Il tuo biglitto viene " + prezzoViaggio);
}

if (eta < 18) {

    const scontoMinori = (prezzoViaggio * 20) / 100;
    alert("Complimenti sei minorenne quidi hai diritto a uno sconto del 20%");
    let prezzoMinori = (prezzoViaggio - scontoMinori);
    prezzoMinori = prezzoMinori.toFixed(2);
    alert("il tuo biglietto viene " + prezzoMinori);
}
if (eta >= 65) {
    const scontoOver = (prezzoViaggio * 40) / 100;
    alert("Complimenti hai più di 64 e hai diritto a uno sconto del 40%");
    let prezzoOver = (prezzoViaggio - scontoOver);

    prezzoOver = prezzoOver.toFixed(2)
    if (isNaN(prezzoOver)) {
        alert("Valori inseriti non validi riprova")
    }
    else {
        alert("il tuo biglietto viene " + prezzoOver);
    }
}


