class Timer{
  constructor(seconds){
    this.seconds = seconds;
  }
  start(){
    const timerInterval = setInterval(() => {
      if (instance.seconds === 0) {
        clearInterval(timerInterval);
      }
  
      console.log(instance.seconds);
      instance.seconds -= 1;
    }, 1000);
  }
};

export default Timer;


// Timer.prototype.start = function () {
//   const instance = this;
//   const timerInterval = setInterval(() => {
//     if (instance.seconds === 0) {
//       clearInterval(timerInterval);
//     }

//     console.log(instance.seconds);
//     instance.seconds -= 1;
//   }, 1000);
// };