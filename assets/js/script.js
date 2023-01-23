// 1) Where is carNoise stored?
//The global execution context
const carNoise = 'Honk';
// 2) Where is goFast stored?
//The global execution context 
const goFast = speed => {
  // 4) When is speed assigned a value? Where is this value stored?
  // Speed is assigned a value when goFast is called and is stored  on the local execution context for the execution of the goFast function  
  
  // 5) Where is makeNoise stored?
  //The same global execution 
  const makeNoise = sound => {
    console.log(`My speed is at ${speed}, time to ${sound}`);
  }

  // 6) What happens in the following statement?
  // 
  makeNoise(carNoise);
}

// 3) What happens in the following statement?
// 
if(confirm("Do you want to go fast?")) {
  goFast(80);
}
