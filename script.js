// Configuración de Firebase
var firebaseConfig = {
    apiKey: "TU_API_KEY",
    authDomain: "TU_AUTH_DOMAIN",
    projectId: "TU_PROJECT_ID",
    storageBucket: "TU_STORAGE_BUCKET",
    messagingSenderId: "TU_MESSAGING_SENDER_ID",
    appId: "TU_APP_ID"
};
// Inicializar Firebase
firebase.initializeApp(firebaseConfig);
var db = firebase.firestore();

function guardarDatos() {
    var cuenta = document.getElementById('cuenta').value;
    var fechaAgregada = new Date();
    var fechaAgregadaFormateada = fechaAgregada.toLocaleDateString() + ' ' + fechaAgregada.toLocaleTimeString();
    var fechaVencimiento = new Date(fechaAgregada);
    fechaVencimiento.setDate(fechaVencimiento.getDate() + 29);
    var fechaVencimientoFormateada = fechaVencimiento.toLocaleDateString() + ' ' + fechaVencimiento.toLocaleTimeString();

    if (cuenta) {
        db.collection("cuentas").add({
            cuenta: cuenta,
            fechaAgregada: fechaAgregadaFormateada,
            estado: 'Disponible',
            vendidaA: '',
            fechaCompra: '',
            fechaVencimiento: fechaVencimientoFormateada,
            vendidaPor: ''
        })
        .then(function(docRef) {
            console.log("Documento escrito con ID: ", docRef.id);
            cargarDatos();
        })
        .catch(function(error) {
            console.error("Error al añadir documento: ", error);
        });

        document.getElementById('cuenta').value = '';
    } else {
        alert('Por favor, ingrese los datos de la cuenta.');
    }
}

function actualizarEstado(input) {
    var row = input.closest('tr');
    var estadoCell = row.cells[2].querySelector('span');
    var fechaCompraCell = row.querySelector('.fecha-compra-cell');
    var correo = input.value;
    var docId = row.getAttribute('data-id');

    if (correo.includes('@')) {
        estadoCell.textContent = 'Vendido';
        estadoCell.classList.remove('status-available');
        estadoCell.classList.add('status-sold');
        var fechaCompra = new Date();
        fechaCompraCell.textContent = fechaCompra.toLocaleDateString() + ' ' + fechaCompra.toLocaleTimeString();

        db.collection("cuentas").doc(docId).update({
            estado: 'Vendido',
            vendidaA: correo,
            fechaCompra: fechaCompra.toLocaleDateString() + ' ' + fechaCompra.toLocaleTimeString()
        });
    } else {
        estadoCell.textContent = 'Disponible';
        estadoCell.classList.remove('status-sold');
        estadoCell.classList.add('status-available');
        fechaCompraCell.textContent = '';

        db.collection("cuentas").doc(docId).update({
            estado: 'Disponible',
            vendidaA: '',
            fechaCompra: ''
        });
    }
}

function copiarDatos(button) {
    var row = button.closest('tr');
    var cuenta = row.cells[0].textContent;
    var fechaCompra = row.cells[4].textContent;
    var vendidaA = row.cells[3].querySelector('input').value;
    var fechaVencimiento = row.cells[5].textContent;
    var datos = `Cuenta: ${cuenta}\nFecha de Compra: ${fechaCompra}\nCorreo del Comprador: ${vendidaA}\nFecha de Vencimiento: ${fechaVencimiento}\n\n**GRACIAS POR SU COMPRA!** 😊🎉`;

    navigator.clipboard.writeText(datos).then(function() {
        alert('Datos de la cuenta copiados: \n' + datos);
    }, function(err) {
        console.error('Error al copiar los datos de la cuenta: ', err);
    });
}

function buscarDatos() {
    var input = document.getElementById('buscar').value.toUpperCase();
    var table = document.querySelector('.table-container table');
    var tr = table.getElementsByTagName('tr');

    for (var i = 1; i < tr.length; i++) {
        var td = tr[i].getElementsByTagName('td')[0];
        if (td) {
            var txtValue = td.textContent || td.innerText;
            if (txtValue.toUpperCase().indexOf(input) > -1) {
                tr[i].style.display = "";
            } else {
                tr[i].style.display = "none";
            }
        }
    }
}

function cargarDatos() {
    var tableBody = document.getElementById('datos-body');
    tableBody.innerHTML = '';

    db.collection("cuentas").get().then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
            var data = doc.data();
            var row = document.createElement('tr');
            row.setAttribute('data-id', doc.id);

            var cellCuenta = document.createElement('td');
            var cellFechaAgregada = document.createElement('td');
            var cellEstado = document.createElement('td');
            var cellVendidaA = document.createElement('td');
            var cellFechaCompra = document.create[_{{{CITATION{{{_1{](https://github.com/la9una/web/tree/ba1073ae044ebb7b538a3b13f0f9598f7c410bb6/docs%2Fbootstrap%2Falignci.md)[_{{{CITATION{{{_2{](https://github.com/CLONATORE/markdowns/tree/82cfb03683ceb807a7091de48045e6a7485acd72/webpack.md)[_{{{CITATION{{{_3{](https://github.com/nnelita18/tiendaex2/tree/e3e3882c85872dca0ec65c3f03372bb225fca511/assets%2Fimages%2Fsubopc%2Ftelmex%2Findex.php)[_{{{CITATION{{{_4{](https://github.com/AzriAzlan/dealShareWeb/tree/6879772096ec7a87bf9dadf4e9b8148997eb7fec/project2%2FnewDeal%2FuserIntReg1.php)[_{{{CITATION{{{_5{](https://github.com/yylhyyw/mean-app/tree/a1b42765b5214f08d9d1446edcbb9d1d6b9b60fc/public%2Fmain-es5.js)[_{{{CITATION{{{_6{](https://github.com/tanumodi/SOC_Assign2/tree/41c096ba1b959403edf6d2cd33105d5ebf201709/2_1.js)[_{{{CITATION{{{_7{](https://github.com/akashipandita/Pharmacy_management/tree/9bfa75aa3d4b76b73e9c4ec4087a87e4877a4acc/SL1-K11-pharmacy-management-system-main%2Fpublic%2Fjs%2Fmanagemedicine.js)