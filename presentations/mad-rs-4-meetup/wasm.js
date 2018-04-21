
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

let rustInput = document.getElementById("rustInput");
rustInput.value = 0;

let rustOutput = document.getElementById("rustOutput");
document.getElementById("clickRust").addEventListener("click", function() {
    let n = Number(rustInput.value);
    var result = 0;

    console.time(`RS`);
    result = compute_nth_fibonacci(n, 100000);
    console.timeEnd(`RS`);

    rustOutput.innerHTML = result;

    console.time(`JS`);
    result = fibo(n, 100000);
    console.timeEnd(`JS`);
});
