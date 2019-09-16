# Quick Start

```
rustup target add wasm32-unknown-unknown
cargo build --target wasm32-unknown-unknown --release
node index.js
```

Optionally to make the .wasm file smaller:
```
cargo install wasm-gc
~/.cargo/bin/wasm-gc target/wasm32-unknown-unknown/release/*.wasm
```

# Explanation

This is just a bare-bones example of how to compile and use rust webassembly in nodejs. There not much js/rust
interoperability with this approach. For any serious projects, you should use
[wasm-bindgen](https://rustwasm.github.io/docs/wasm-bindgen).

# Deps

`node` and `rustup` are required. not much else. tested on linux.
