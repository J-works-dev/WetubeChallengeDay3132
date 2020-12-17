import "./styles.css";

const recorderContainer = document.querySelector(".record-container");
const recordBtn = document.querySelector(".recordBtn");
const timer = document.querySelector(".timer");

// let temp = [];
let audioRecorder;
let seconds = 0;

const startRecording = () => {
  navigator.mediaDevices
    .getUserMedia({ video: false, audio: true })
    .then(function (stream) {
      audioRecorder = new MediaRecorder(stream);
      audioRecorder.start();
      audioRecorder.addEventListener("dataavailable", handleAudioData);
      audioRecorder.addEventListener("click", stopRecording);
      recordBtn.innerHTML = "Stop Recording";
      audioRecorder.addEventListener("timeupdate", handleTimer);
      setInterval(handleTimer, 1000);
    })
    .catch(function (err) {
      alert("Error: " + err);
    });
};

const handleAudioData = (event) => {
  // temp.push(event.data);
  const { data: audioFile } = event;
  const link = document.createElement("a");
  link.href = URL.createObjectURL(audioFile);
  link.download = "recorded.webm";
  document.body.appendChild(link);
  link.click();
};
const stopRecording = () => {
  recordBtn.innerHTML = "Start Recording";
  audioRecorder.stop();
  clearInterval();
  seconds = 0;
  timer.innerHTML = "";
  recordBtn.removeEventListener("click", stopRecording);
  recordBtn.addEventListener("click", startRecording);
};
const handleTimer = () => {
  seconds++;
  timer.innerHTML = "Recording.. " + seconds + "seconds";
};

function init() {
  recordBtn.addEventListener("click", startRecording);
}

if (recorderContainer) {
  init();
}
