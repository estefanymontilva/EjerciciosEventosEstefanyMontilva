function calcularIMC() {
   
    let weight = parseFloat(document.getElementById('weight').value);
    let height = parseFloat(document.getElementById('height').value);

    
    if (isNaN(weight) || weight <= 0) {
        alert('Por favor, introduce un peso válido.');
        return;
    }
    if (isNaN(height) || height <= 0) {
        alert('Por favor, introduce una altura válida.');
        return;
    }

   
    let imc = weight / (height * height);

    
    let categoriaIMC = '';
    if (imc < 18.5) {
        categoriaIMC = 'Bajo peso';
    } else if (imc >= 18.5 && imc < 24.9) {
        categoriaIMC = 'Peso normal';
    } else if (imc >= 25 && imc < 29.9) {
        categoriaIMC = 'Sobrepeso';
    } else {
        categoriaIMC = 'Obesidad';
    }

    
    document.getElementById('resultado').innerHTML = `Tu IMC es ${imc.toFixed(2)} (${categoriaIMC})`;
}