# WASM(RUST) JS Bindings

## This repo is a poc of showing complex data types communication between Javascript and Rust webassembly module

### Following Tests are performed

- Call Host function with data from Wasm module
- Call Wasm module functions from JS.
- Send Json object from Wasm module to js
- Send dynamic sized string from Wasm module to js

## Library/Language Used

- Wit Bindgen
- JS
- Rust


## Dir

- HTML (js implementations)
- Interfaces (wit definitions)
- SRC (rust code)

> Make sure you've installed rust and enabled target `wasm32-unknown-unknown`

> To generate JS definitions from wit files install **wit-bindgen-cli** `cargo install --git https://github.com/bytecodealliance/wit-bindgen wit-bindgen-cli`
