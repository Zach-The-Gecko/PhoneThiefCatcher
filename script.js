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
