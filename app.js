function animationText () {
    const element = document.getElementById("full")
    const text = "a Full-stack Developer"
    const arr = text.split("")

    var index = 0
    element.innerHTML = ''

    var timer = setInterval(() => {
        if(index >= arr.length) return clearInterval(timer)
        element.innerHTML += arr[index]      
        index += 1 
    }, 100)
}

animationText()