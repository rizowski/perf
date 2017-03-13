'use strict';

function formatNumber(hz){
  const num = hz.toFixed(hz < 100 ? 2 : 0);
  const strNum = String(num).split('.');
  return strNum[0].replace(/(?=(?:\d{3})+$)(?!\b)/g, ',') +
    (strNum[1] ? '.' + strNum[1] : '');
}

function getStats(thing){
  return thing.map('stats')[0];
}

function getTimes(thing){
  return thing.map('times')[0];
}

function getSpecs(bench){
  const spec = {
    options: {
      async: bench.map('async')[0],
      benchName: bench.options.name
    },
    name: bench.map('name')[0],
    stats: getStats(bench),
    times: getTimes(bench),
    ops: formatNumber(bench.map('hz')[0])
  };

  spec.samplesRan = spec.stats.sample.length;
  return spec;
}

function print(type, spec){
  console.log(`${type}: ${spec.name} | ${spec.ops} ops/sec | ${spec.samplesRan} samples`);
}

module.exports = {
  addResult(benches){
    const fastest = getSpecs(benches.filter('fastest'));
    const slowest = getSpecs(benches.filter('slowest'));
    console.log(`================ ${fastest.options.benchName} ================`);
    print('Fastest', fastest);
    print('Slowest', slowest);
    console.log('\n');
  }
}
