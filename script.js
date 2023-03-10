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

window.addEventListener("devicemotion", (event) => {
  const accelerationY = event.acceleration.y;
  const accelerationX = event.acceleration.x;
  const accelerationZ = event.acceleration.z;

  if (accelerationY > 3 || accelerationX > 3 || accelerationZ > 3) {
    console.log("MOVEMENT!!!!");
  }
});

const motionDetected = () => {
  const alarmNoise = new Audio("./mixkit-alert-alarm-1005.mp3");
  alarmNoise.loop = true;
  alarmNoise.play();
};

// setTimeout(motionDetected, 1000);

const webcamElement = document.getElementById("webcam");
const canvasElement = document.getElementById("canvas");
const snapSoundElement = document.getElementById("snapSound");
const webcam = new Webcam(
  webcamElement,
  "user",
  canvasElement,
  snapSoundElement
);

webcam
  .start()
  .then((result) => {
    console.log("Taking picture!");
  })
  .catch((err) => {
    console.log(err);
  });

let picture = webcam.snap();

const takePictureBtn = document.querySelector("#take-picture");

takePictureBtn.addEventListener("click", () => {
  const picture = webcam.snap();
  console.log(picture);
});
