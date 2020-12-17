import "./styles.css";

const recorderContainer = document.querySelector(".record-container");
const recordBtn = document.querySelector(".recordBtn");
const audio = document.querySelector("audio");

const startRecording = () => {
  navigator.mediaDevices
    .getUserMedia({ video: false, audio: true })
    .then(function (stream) {
      audio.srcObject = MediaStream;
    })
    .catch(function (err) {
      alert("Error: " + err);
    });
};

function init() {
  recordBtn.addEventListener("click", startRecording);
}

if (recorderContainer) {
  init();
}
