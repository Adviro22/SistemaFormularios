

function generarPDF(){
    var doc = new jsPDF();

    doc.text(10, 10, 'Hello world!');

    doc.addImage("../img/bg.jpeg", 'JPEG', 10, 30, 150, 76);

    doc.save('a4.pdf');
}

