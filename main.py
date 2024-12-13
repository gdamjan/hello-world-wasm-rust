# /// script
# requires-python = ">=3.12"
# dependencies = [
#     "wasmtime",
# ]
# ///

from wasmtime import Store, Module, Instance

store = Store()
module = Module.from_file(store.engine, "target/wasm32-wasip1/release/hello_world_wasm_rust.wasm")
instance = Instance(store, module, [])

add_func = instance.exports(store)["add"]

# Call the function and print the result
result = add_func(store, 5, 7)
print("5 + 7:", result)
