// public/js/predict.js
document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('predictionForm');
    form.addEventListener('submit', async (event) => {
        event.preventDefault();

        const age = parseFloat(document.getElementById('age').value);
        const internships = parseFloat(document.getElementById('internships').value);
        const cgpa = parseFloat(document.getElementById('cgpa').value);
        const backlogs = parseFloat(document.getElementById('backlogs').value);

        const input = [age, internships, cgpa, backlogs];
        const scaledInput = scaleInput(input);

        const model = await tf.loadLayersModel('/model/model.json');
        const tensorInput = tf.tensor2d([scaledInput]);
        const prediction = model.predict(tensorInput);
        const predictionResult = prediction.argMax(1).dataSync()[0];

        const resultText = predictionResult === 1 ? 'Placed' : 'Not Placed';
        document.getElementById('result').innerText = `Prediction Result: ${resultText}`;
    });

    function scaleInput(input) {
        // These are the mean and standard deviation values calculated from the training data
        const mean = [21.485840, 0.703641, 7.073837, 0.192178];
        const std = [1.324933, 0.740197, 0.967748, 0.394079];
        return input.map((value, index) => (value - mean[index]) / std[index]);
    }
});
