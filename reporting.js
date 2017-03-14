'use strict';
const R = require('ramda');
const underscore = require('underscore');

const benches = [];

function toNumber(hz){
  const num = hz.toFixed(hz < 100 ? 2 : 0);
  const strNum = String(num).split('.');
  return Number(strNum[0]);
}
function prettyNumber(hz){
  const num = hz.toFixed(hz < 100 ? 2 : 0);
  const strNum = String(num).split('.');
  return strNum[0].replace(/(?=(?:\d{3})+$)(?!\b)/g, ',') +
    (strNum[1] ? '.' + strNum[1] : '');
}

function printSpec(result, type){
  console.log(`${type}: ${result.name} | ${result.frequency.prettyOps} ops/sec | ${result.samplesRan} samples`);
}

function print(suite){
  const results = suite.results;
  console.log(`================ ${suite.type} ================`);
  const fastest = results[results.length - 1];
  const slowest = results[0];

  underscore.forEach(results, (r) =>{
    console.log(`${r.name} | ${r.frequency.prettyOps} ops/sec | ${r.samplesRan} samples`)
  });
  console.log();
  printSpec(fastest, 'Fastest');
  printSpec(slowest, 'Slowest');
  console.log('\n');
}

module.exports = {
  runReports(benches){
    const results = R.sort((a, b) => a.frequency.operations - b.frequency.operations,
      R.map(function (bench){
        return {
          options: {
            async: bench.async
          },
          name: bench.name,
          stats: bench.stats,
          times: bench.times,
          frequency: {
            hz: bench.hz,
            operations: toNumber(bench.hz),
            prettyOps: prettyNumber(bench.hz)
          },
          samplesRan: bench.stats.sample.length
        };
      }, benches));

    const suite = {
      type: benches.options.name,
      results
    };

    print(suite);
  }
}
