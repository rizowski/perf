'use strict';
const R = require('ramda');
const underscore = require('underscore');
const table = require('text-table');
const fs = require('fs');
const path = require('path');
const csvWriter = require('csv-write-stream');
const moment = require('moment');


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
    if(i === suite.results.length - 1){
      return createRow('Slow', r);
    } else if(i === 0){
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

function createDataRow(rank, totalRecords, record){
  const slowest = rank === totalRecords;
  const fastest = rank === 1;
  const date = moment().format('MM/DD/YYYY');

  let indicator = '|';
  if (slowest) {
    indicator = 'S';
  }
  if(fastest){
    indicator = 'F';
  }


  return [date, indicator, record.name, Number(record.frequency.operations), Number(record.samplesRan)];
}

function saveResults(suite){
  const { results, type } = suite;

  const dataset = underscore.map(suite.results, function (r, i){
    return createDataRow(++i, suite.results.length, r);
  });

  console.log(dataset);
}

module.exports = {
  runReports(benches){
    const results = R.sort((a, b) => b.frequency.operations - a.frequency.operations,
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
            prettyOps: prettyNumber(bench.hz),
          },
          samplesRan: bench.stats.sample.length
        };
      }, benches));

    const suite = {
      type: benches.options.name,
      results
    };

    print(suite);
    // saveResults(suite);
  }
}
