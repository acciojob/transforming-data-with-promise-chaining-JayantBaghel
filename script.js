//your JS code here. If required.
document.getElementById('btn').addEventListener('click', () => {
    const input = document.getElementById('ip').value;
    const outputDiv = document.getElementById('output');

    // Helper function to create a promise that resolves after a delay
    function delayedPromise(value, delay) {
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve(value);
            }, delay);
        });
    }

    // Function to update the output div
    function updateOutput(result) {
        outputDiv.textContent = `Result: ${result}`;
    }

    // Start promise chain
    delayedPromise(Number(input), 2000)
        .then(result => {
            updateOutput(result);
            return delayedPromise(result * 2, 1000);
        })
        .then(result => {
            updateOutput(result);
            return delayedPromise(result - 3, 1000);
        })
        .then(result => {
            updateOutput(result);
            return delayedPromise(result / 2, 1000);
        })
        .then(result => {
            updateOutput(result);
            return delayedPromise(result + 10, 1000);
        })
        .then(result => {
            outputDiv.textContent = `Final Result: ${result}`;
        })
        .catch(error => {
            outputDiv.textContent = `Error: ${error}`;
        });
});
