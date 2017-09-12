
function add(val){
  return val + 1;
}

function subtract(val){
  return val - 1;
}

function returnVal(val){
  return val;
}


function executeIf(val){
  if(val === 1) {
    return add(val);
  } else if (val === 2) {
    return subtract(val);
  } else {
    return returnVal(val);
  }
}

function executeTern(val){
  return val === 1 ? add(val) : val === 2 ? subtract(val) : returnVal(val);
}

function executeSwitch(val){
  switch (val) {
    case 1:
      return add(val);
    case 2:
      return subtract(val);
    default:
      return returnVal(val);
  }
}

const map = {
  1: add,
  2: subtract
};

function executeMap(val){
  let func = map[val] || returnVal;

  return func(val);
}

const es6Map = new Map([[1, add], [2, subtract]]);

function executeEs6Map(val){
  const func = es6Map.get(val) || returnVal;

  return func(val);
}


module.exports = {
  if(){
    return executeIf(1);
  },
  elseIf(){
    return executeIf(2);
  },
  else(){
    return executeIf(34);
  },
  switchFirst(){
    return executeSwitch(1);
  },
  switchSecond(){
    return executeSwitch(2);
  },
  switchDefault(){
    return executeSwitch(34);
  },
  mapOne(){
    return executeMap(1);
  },
  mapTwo(){
    return executeMap(2);
  },
  mapThree(){
    return executeMap(34);
  },
  es6MapOne(){
    return executeEs6Map(1);
  },
  es6MapTwo(){
    return executeEs6Map(2);
  },
  es6MapThree(){
    return executeEs6Map(34);
  },
  ternOne(){
    return executeTern(1);
  },
  ternTwo(){
    return executeTern(2);
  },
  ternThree(){
    return executeTern(34);
  }
};
