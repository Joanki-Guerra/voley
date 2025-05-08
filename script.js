function mostrarResultado() {
    const respuestasCorrectas = {
        q1: 'b',
        q2: 'b',
        q3: 'c',
        q4: 'b',
        q5: 'b',
        q6: 'c',
        q7: 'b',
        q8: 'c',
        q9: 'a',
        q10: 'b',
        q11: 'c',
        q12: 'b'
    };
    let puntuacion = 0;
    let resultadosTexto = "";

    for (const pregunta in respuestasCorrectas) {
        const respuestaSeleccionada = document.querySelector(`input[name="${pregunta}"]:checked`);
        if (respuestaSeleccionada) {
            if (respuestaSeleccionada.value === respuestasCorrectas[pregunta]) {
                puntuacion++;
                resultadosTexto += `<p style="color: green;"><strong>${pregunta}:</strong> Correcto</p>`;
            } else {
                resultadosTexto += `<p style="color: red;"><strong>${pregunta}:</strong> Incorrecto. La respuesta correcta es ${respuestasCorrectas[pregunta]}</p>`;
            }
        } else {
            resultadosTexto += `<p style="color: orange;"><strong>${pregunta}:</strong> No respondida</p>`;
        }
    }

    resultadosTexto = `<h3>Resultados del Quiz</h3><p>Tu puntuación es: ${puntuacion} de ${Object.keys(respuestasCorrectas).length}</p>` + resultadosTexto;

    document.getElementById('resultado-quiz').innerHTML = resultadosTexto;
    document.getElementById('resultado-quiz').style.display = 'block';
}