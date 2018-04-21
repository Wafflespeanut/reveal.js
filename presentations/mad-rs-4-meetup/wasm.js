
function fibo(n, times) {
    var result = 0;
    for (let j = 0; j < times; j++) {
        var f0 = 0;
        var f1 = 1;
        for (let i = 0; i < n; i++) {
            let f2 = f0 + f1;
            f0 = f1;
            f1 = f2;
        }

        result = f0;
    }

    return result;
}

let valueInput = document.getElementById("valueInput");
let loopInput = document.getElementById("loopInput");
let valueOutput = document.getElementById("valueOutput");
let timingOutput = document.getElementById("timingOutput");

document.getElementById("clickRust").addEventListener("click", function() {
    let n = Number(valueInput.value);
    let l = Number(loopInput.value);
    var result = 0;

    let rsStart = performance.now();
    result = compute_nth_fibonacci(n, l);
    let rsEnd = performance.now();

    valueOutput.innerHTML = result;

    let jsStart = performance.now();
    result = fibo(n, l);
    let jsEnd = performance.now();

    timingOutput.innerHTML = `Rust: ${rsEnd - rsStart}ms. JS: ${jsEnd - jsStart}ms`;
});
