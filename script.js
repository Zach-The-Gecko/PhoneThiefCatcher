const setDisplay = (text) => {
  const display = document.querySelector("#display");
  console.log(text);
  display.innerHTML = JSON.stringify(text);
};

const permissionBtn = document.querySelector("#permission");

// if (location.protocol != "https:") {
// location.href =
//   "https:" + window.location.href.substring(window.location.protocol.length);
// }

permissionBtn.addEventListener("click", () => {
  DeviceMotionEvent.requestPermission();
});

const webcamElement = document.getElementById("webcam");
const canvasElement = document.getElementById("canvas");
const webcam = new Webcam(webcamElement, "user", canvasElement);

const motionDetected = () => {
  const alarmNoise = new Audio("./mixkit-alert-alarm-1005.mp3");
  alarmNoise.loop = true;
  alarmNoise.play();

  webcam
    .start()
    .then((result) => {
      console.log("Webcam Started!");
    })
    .catch((err) => {
      console.log(err);
    });

  const loop = () => {
    const picture = webcam.snap();
    console.log(picture);
    setTimeout(loop, 100);
  };
  loop();
};

window.addEventListener("devicemotion", (event) => {
  const accelerationY = event.acceleration.y;
  const accelerationX = event.acceleration.x;
  const accelerationZ = event.acceleration.z;

  if (accelerationY > 3 || accelerationX > 3 || accelerationZ > 3) {
    motionDetected();
    window.removeEventListener("devicemotion");
  }
});
