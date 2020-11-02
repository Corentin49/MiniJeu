let i = 0
let elements = []

window.addEventListener("load", function movePer() {
    document.getElementById('personnage').style.marginLeft = "0px"

    window.addEventListener("keydown", function move(param) {
        let personnage = window.document.getElementById("personnage")
        let distance = parseInt(personnage.style.marginLeft);
        switch (param.code) {
            case "KeyD":
                if (distance <= (window.document.body.clientWidth - 60))
                {
                    distance += 20
                    personnage.style.marginLeft = distance + "px"
                }
                break;
            case "KeyA":
                if (distance >= 10)
                {
                    distance -= 20
                    personnage.style.marginLeft = distance + "px"
                }
                break;
            default:
                break;
        }
    })  


    createElem = setInterval(createElement, 5000)
    moveElem = setInterval(moveElement, 1000)

})

function createElement(){
    let elem = document.createElement("DIV")
    elem.innerHTML = '<div id="item'+i+'" style="background-color: red; top:-50px; height: 20px; width: 20px; position: absolute; left:'+ Math.random() * 100 +'%;"></div>'
    document.body.appendChild(elem)

    elements.push(window.document.getElementById('item'+i))
    i++
    console.log(i)
}

function moveElement(){
    elements.forEach(function(e){
        styleTop = (parseInt(e.style.top) + 20)
        e.style.top = styleTop + "px"
        console.log("Element : "+e.id+" top = "+e.style.top)

    })
}