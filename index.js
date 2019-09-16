'use strict';

const fs = require('fs');
const bytes = fs.readFileSync('./target/wasm32-unknown-unknown/release/hello_world_wasm_rust.wasm');

(async () => {
  const { instance, module } = await WebAssembly.instantiate(bytes);

  console.log(instance.exports.add(8, 5));
})();
