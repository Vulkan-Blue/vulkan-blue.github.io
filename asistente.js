
       function pregunta(){
       
       
       const tf = window.tf;

        // Crear un modelo secuencial
        const model = tf.sequential();

        // Añadir una capa densa con una neurona y entrada de dos valores (2 inputs)
        model.add(tf.layers.dense({ units: 1, inputShape: [2] }));

        // Compilar el modelo con función de pérdida y optimizador
        model.compile({
            loss: 'meanSquaredError',
            optimizer: 'sgd'
        });

        // Codificar la pregunta "¿Cuál es la capital de Francia?" como [1, 0]
        // Codificar la pregunta "¿Cuál es la capital de Alemania?" como [0, 1]
        // Respuesta codificada: París = 1, Berlín = 2

        const xs = tf.tensor2d([[1, 0], [0, 1]], [2, 2]);
        const ys = tf.tensor2d([[1], [2]], [2, 1]);

        // Añadir un div para mostrar la salida
        const outputDiv = document.getElementById('output');

        function mostrarResultado(prediccion, pregunta) {
            const valor = prediccion.dataSync()[0];
            const respuesta = valor < 1.5 ? 'París' : 'Berlín';
            outputDiv.innerHTML += `<p>Pregunta: ${pregunta} - Respuesta: ${respuesta}</p>`;
        }

        // Entrenar el modelo
        model.fit(xs, ys, {
            epochs: 500
        }).then(() => {
            const preguntaFrancia = tf.tensor2d([[1, 0]], [1, 2]);
            const preguntaAlemania = tf.tensor2d([[0, 1]], [1, 2]);

            mostrarResultado(model.predict(preguntaFrancia), "¿Cuál es la capital de Francia?");
            mostrarResultado(model.predict(preguntaAlemania), "¿Cuál es la capital de Alemania?");
        });
    }
    <p> hola</p>