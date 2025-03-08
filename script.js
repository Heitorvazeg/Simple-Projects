const Tela = document.getElementById('display');
let resultadoamostra = false;

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