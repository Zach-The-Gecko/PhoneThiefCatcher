const setDisplay = (text) => {
  const display = document.querySelector("#display");
  console.log(text);
  display.innerHTML = JSON.stringify(text);
};

const permissionBtn = document.querySelector("#permission");

permissionBtn.addEventListener("click", () => {
  DeviceMotionEvent.requestPermission();
});

ondevicemotion((e) => {
  console.log(e);
});
