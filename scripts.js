function gerar(){

    const jogadoresInput = document.getElementById('jogadores').value;
    const numTimes = parseInt(document.getElementById('numTimes').value);

    if (!jogadoresInput || numTimes <1){
        alert('por favor, insira jogadores e um número de times válido');
        return;
    }

    const jogadores = jogadoresInput.split(',').map
    (j => j.trim()).filter(j => j);
    
    const times = 
    dividirTimes(jogadores, numTimes);
    mostrarResultados(times);

};

function dividirTimes(jogadores, numTimes){
    const times = Array.from({length: numTimes}, () => []);
    while(jogadores.length){
        for(let i = 0; i < times.length; i++){
            if (jogadores.length === 0 ) break;
            const randomIndex = Math.floor(Math.random() * jogadores.length);
            times[i].push(jogadores.splice(randomIndex, 1)[0]);
        }
    }
    return times;
}

function mostrarResultados(times){
    const resultadosDiv = document.getElementById('resultados');
    resultadosDiv.innerHTML = '';
    times.forEach((time, index) => {
        const timeElement = document.createElement('div');
        timeElement.textContent = `Time ${index + 1}: ${time.join(' /  ')}`;
        resultadosDiv.appendChild(timeElement);
        
    });
}