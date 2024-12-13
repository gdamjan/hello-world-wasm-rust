# Quick Start

### Build
```
rustup target add wasm32-wasip1
cargo build --target wasm32-wasip1 --release
```

### Invoke from node, python, wasmer or wasmtime
```
node index.mjs

uv run main.py

wasmer run --invoke add  target/wasm32-wasip1/release/hello_world_wasm_rust.wasm 1 2

wasmtime --invoke add target/wasm32-wasip1/release/hello_world_wasm_rust.wasm 1 2
```

Optionally to make the .wasm file smaller:
```
cargo install wasm-gc
~/.cargo/bin/wasm-gc target/wasm32-wasip1/release/*.wasm
```

## Explanation

This is just a bare-bones example of how to compile and use rust webassembly in nodejs. There not much js/rust
interoperability with this approach. For any serious projects, you should use
[wasm-bindgen](https://rustwasm.github.io/docs/wasm-bindgen).

I don't plan to add anything to this example.

# Deps

`node` and `rustup` are required. not much else. tested on linux.
