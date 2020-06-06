var openedWindow;
var parar = false;
function openWindow() {
    openedWindow = window.open('https://youtu.be/9Vt8euIQaLs', "Faby  Star", "width=600,height=300");
    
}

function closeOpenedWindow() {
    openedWindow = window.open('https://youtu.be/9Vt8euIQaLs', "Faby  Star", "width=600,height=300");
    openedWindow.close();
}

var ActulizarHora = function () {
    var ampm;
    var fecha = new Date();
    var horas = fecha.getHours();
    var minutos = fecha.getMinutes();
    var segundos = fecha.getSeconds();
    var diaSemana = fecha.getDay();
    var dia = fecha.getDate();
    var mes = fecha.getMonth();
    var year = fecha.getFullYear();
    // segunda estrcutura
    var pHoras = document.getElementById('horas');
    var pDiaSemana = document.getElementById('diaSemana');
    var pDia = document.getElementById('dia');
    var pMes = document.getElementById('mes');
    var pYear = document.getElementById('year');
    var pAMPM = document.getElementById('ampm');
    var pMinutos = document.getElementById('minutos');
    var pSegundos = document.getElementById('segundos');
    // tercera estructure
    var semana = ['Domingo', 'Lunes', 'Martes', 'Miercoles', 'Jueves', 'Viernes', 'Sabado'];
    pDiaSemana.textContent = semana[diaSemana];
    pDia.textContent = dia;
    var meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Dicimebre'];
    pMes.textContent = meses[mes];
    pYear.textContent = year;

    if (horas >= 12) {
        ampm = 'PM';
    } else {
        ampm = 'AM';
    }

    if (horas == 0) {
        horas == 12;
    }

    pHoras.textContent = horas;
    pAMPM.textContent = ampm;

    if (minutos < 10) {
        minutos = '0' + minutos
    }
    if (segundos < 10) {
        segundos = '0' + segundos
    }

    pMinutos.textContent = minutos;
    pSegundos.textContent = segundos;

    if (103500 == horas + '' + minutos + '' + segundos) {
        console.log(horas + '' + minutos + '' + minutos);
        console.log('TRabajando');
        window.setInterval(openWindow, 120000);
    }
    if (150000 == horas + '' + minutos + '' + segundos) {
        console.log(horas + '' + minutos + '' + minutos);
        console.log('Tarbaje mucho ahora descanzo bay');
        location.reload();
        closeOpenedWindow();
    }  
}

ActulizarHora();
setInterval(ActulizarHora, 1000);

