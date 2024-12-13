#! /usr/bin/env node

import fs from 'node:fs/promises';


const wasmBuffer = await fs.readFile('target/wasm32-wasip1/release/hello_world_wasm_rust.wasm');
const wasmModule = await WebAssembly.instantiate(wasmBuffer);

const { add } = wasmModule.instance.exports;

const sum = add(5, 6);

console.log(sum); // Outputs 11
