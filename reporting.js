'use strict';
const R = require('ramda');
const underscore = require('underscore');
const table = require('text-table');


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

function createRow(pre, r){
  return [pre, r.name, `${r.frequency.prettyOps} ops/sec`, `${r.samplesRan} samples`];
}

function createTableStructure(suite){
  return underscore.map(suite.results, function(r, i, derp){
    if(i === 0){
      return createRow('Slow', r);
    } else if(i === suite.results.length - 1){
      return createRow('Fast', r);
    }
    return createRow('', r);
  });
}

function print(suite){
  const results = suite.results;
  console.log(`====================== ${suite.type} ======================`);
  const fastest = results[results.length - 1];
  const slowest = results[0];

  const resultTable = createTableStructure(suite);

  console.log(table(resultTable));
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
