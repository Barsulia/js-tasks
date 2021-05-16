const workers = [
  {"name":"John","salary":500},
  {"name":"Mike","salary":1300},
  {"name":"Linda","salary":1500}];

const getWorthyWorkers = workArr => {
  var WorthyWorkers = [];
  for (let i=0; i < workArr.length; i++) {
    if (workArr[i].salary > 1000) {
      WorthyWorkers.push(workArr[i].name);
    } 
  }
  return WorthyWorkers;
}

console.log(getWorthyWorkers(workers))