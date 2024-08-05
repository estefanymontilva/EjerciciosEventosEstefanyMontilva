const conversionPesosAr =1375;

       
        const dolaresIn = document.getElementById('dolares');
        const pesosArIn = document.getElementById('pesosArgentinos');

               function updateConversion() {
            
            const dolares = parseFloat(dolaresIn.value) || 0;
            const pesosAr = parseFloat(pesosArIn.value) || 0;

            
            if (dolaresIn === document.activeElement) {
                pesosArIn.value = (dolares * conversionPesosAr).toFixed(2);
            } else {
                dolaresIn.value = (pesosAr / conversionPesosAr).toFixed(2);
            }
        }

        
        dolaresIn.addEventListener('input', updateConversion);
        pesosArIn.addEventListener('input', updateConversion);