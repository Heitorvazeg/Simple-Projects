const Tela = document.getElementById('display');
let resultadoamostra = false;

function BotarOperadorNoDisplay(input) {
    if (Tela.value == 'Error') {
        Tela.value = input;
    }
    else {
        Tela.value += input;
        resultadoamostra = false;
    };
};

function BotarNoDisplay(input) {
    if (resultadoamostra) {
        Tela.value = input;
        resultadoamostra = false;
    }
    else {
        Tela.value += input;
    };
};

function Resetar() {
    Tela.value = "";
};

function Calcular() {
    try {
        Tela.value = eval(Tela.value);
    }
    catch(error) {
        Tela.value = 'Error';
    };
    resultadoamostra = true;
};