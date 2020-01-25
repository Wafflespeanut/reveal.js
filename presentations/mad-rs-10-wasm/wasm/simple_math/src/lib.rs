use wasm_bindgen::prelude::*;

#[cfg(not(feature = "fmt"))]
#[wasm_bindgen]
pub fn multiply(a: i32, b: i32) -> i32 {
    a * b
}

#[cfg_attr(feature = "fmt", wasm_bindgen(js_name = multiply))]
pub fn multiply_str(a: i32, b: i32) -> String {
    (a * b).to_string()
}
