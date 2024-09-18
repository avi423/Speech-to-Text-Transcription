// script.js
document.addEventListener('DOMContentLoaded', () => {
    const startButton = document.getElementById('start-btn');
    const stopButton = document.getElementById('stop-btn');
    const transcriptionArea = document.getElementById('transcription');

    let recognition;

    if ('webkitSpeechRecognition' in window) {
        recognition = new webkitSpeechRecognition();
        recognition.continuous = true;
        recognition.interimResults = true;
        
        recognition.onresult = (event) => {
            let transcript = '';
            for (let i = event.resultIndex; i < event.results.length; i++) {
                transcript += event.results[i][0].transcript;
            }
            transcriptionArea.value = transcript;
        };

        recognition.onerror = (event) => {
            console.error('Speech recognition error:', event.error);
        };

        startButton.addEventListener('click', () => {
            recognition.start();
        });

        stopButton.addEventListener('click', () => {
            recognition.stop();
        });

    } else {
        alert('Speech Recognition API is not supported in this browser.');
    }
});
