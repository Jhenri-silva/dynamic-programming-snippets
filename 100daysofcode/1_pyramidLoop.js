let actualLoop = 1;
let max = 60;
let forward = true;

var i = setInterval(function () {
  let str = (m) => Array(m).fill(".").join("");

  if (actualLoop === max) {
    forward = false;
  }

  if (actualLoop === 0) {
    console.log("( ͡° ͜ʖ ͡°)");
    forward = true;
  }

  if (forward) {
    actualLoop++;
    console.log(str(actualLoop));
  } else {
    actualLoop--;
    console.log(str(actualLoop));
  }
}, 1);
