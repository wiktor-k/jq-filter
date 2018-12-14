#!/usr/bin/env node

const readline = require('readline');

const predicate = new Function('it', 'return ' + process.argv.pop());

readline.createInterface({
    input: process.stdin,
    output: null,
    console: false
}).on('line', function(line) {
    const object = JSON.parse(line);

    if (predicate(object)) {
        console.log(line);
    }
});
