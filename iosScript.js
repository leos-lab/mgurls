function isIOS() {
  return /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;
}
function cloneDeviceMotionEvent(e) {
  return {
    acceleration: {
      x: e.acceleration.x,
      y: e.acceleration.y,
      z: e.acceleration.z,
    },
    accelerationIncludingGravity: {
      x: e.accelerationIncludingGravity.x,
      y: e.accelerationIncludingGravity.y,
      z: e.accelerationIncludingGravity.z,
    },
    rotationRate: {
      alpha: e.rotationRate.alpha,
      beta: e.rotationRate.beta,
      gamma: e.rotationRate.gamma,
    },
    interval: e.interval,
    timeStamp: e.timeStamp,
  };
}
var iframe = document.getElementById("tree");
if (isIOS()) {
  window.addEventListener("devicemotion", function (e) {
    iframe.contentWindow.postMessage(
      {
        type: "devicemotion",
        deviceMotionEvent: cloneDeviceMotionEvent(e),
      },
      "*"
    );
  });
}