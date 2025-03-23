let label = document.getElementById("nbpersonness");
let nbpersonnes = document.getElementById("totalnumber");
let email = document.getElementById("name");
let existingCsvContent = ""

function calculate() {
    let personnes = parseFloat(label.value) || 0; 
    let total = personnes * 19.99;

    nbpersonnes.textContent = total.toFixed(2);
    exportToCSV(personnes, email.value, total.toFixed(2)); 
}

function popup() {
    alert("Votre demande a été mise sur la base de donnée. On vous enverra un e-mail avec la facture. MERCI!")
}
function exportToCSV(nbPersonnes, email, total) {

    if (!existingCsvContent) {
        existingCsvContent = "nbpersonnes,email,total\n";
    }

    existingCsvContent += `${nbPersonnes},${email},${total}\n`;

    const blob = new Blob([existingCsvContent], { type: 'text/csv;charset=utf-8;' });
    
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = 'data.csv'; 
    
    link.click();

}

function alertsending() {
    alert("Votre demande a été envoyée");
}
