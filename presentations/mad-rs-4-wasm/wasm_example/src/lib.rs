#![feature(proc_macro, wasm_custom_section, wasm_import_module)]

extern crate wasm_bindgen;

use wasm_bindgen::prelude::*;

#[wasm_bindgen]
pub fn compute_nth_fibonacci(n: u8, num_runs: u8) -> String {
    let mut result = String::new();
    for _ in 0..num_runs {
        let mut f0 = 0u64;
        let mut f1 = 1;
        for _ in 0..n {
            let f2 = f0 + f1;
            f0 = f1;
            f1 = f2;
        }

        result = f0.to_string();
    }

    result
}
