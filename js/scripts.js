const chilometriViaggio = prompt("Inserisci i chilometri che devi percorrere");
let prezzoViaggio = chilometriViaggio * 0.21;

const eta = prompt("quanti anni hai ?");

if (eta >= 18 && eta < 65) {
    alert("Sei maggiorenne");
    alert("Il tuo biglitto viene " + prezzoViaggio);
    prezzoViaggio = prezzoViaggio.toFixed(2);
}

else if (eta < 18) {
    const scontoMinori = (prezzoViaggio * 20) / 100;
    alert("Complimenti sei minorenne quidi hai diritto a uno sconto del 20%");
    let prezzoMinori = (prezzoViaggio - scontoMinori);
    prezzoMinori = prezzoMinori.toFixed(2);
    alert("il tuo biglietto viene " + prezzoMinori);
}
else if (eta >= 65) {
    const scontoOver = (prezzoViaggio * 40) / 100;
    alert("Complimenti hai più di 64 e hai diritto a uno sconto del 40%");
    let prezzoOver = (prezzoViaggio - scontoOver);
    alert("il tuo biglietto viene " + prezzoOver);
    prezzoOver = prezzoOver.toFixed(2)
}