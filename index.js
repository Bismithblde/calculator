res = document.getElementById("result")

function clicked(n) {
    
    if ((res.value.length) < 16) {
        res.value += n
        console.log(res.value)

    }
}

function clearScreen() {
    res.value = ""
    console.log(res.value)
}

function calc() {
    res.value = eval(res.value)
}