const a = document.getElementById("a_input")
const b = document.getElementById("b_input")
const btn = document.getElementById("btn")
const operator = document.getElementById("operator_input")


function operation(a,b,operator){
    let c = Number(a)
    let d = Number(b)
    let result
        if(!isNaN(c) || !isNaN(d)){
    if(typeof c === "number" && typeof d === "number" && ["+", "-", "*", "/"].includes(operator)){
        
        if(operator === "-"){
            result = `${c} - ${d} = ${c - d}`
        }
        if(operator === "+"){
            result =   `${c} + ${d} = ${c + d}`
        }
        if(operator === "*"){
            result =   `${c} * ${d} = ${c * d}`
        }
        if(operator === "/"){
            result =  `${c} / ${d} = ${Math.floor(c / d)}`
        }
    } else{
        return false
    }
    document.getElementById("answer").innerHTML = result
    console.log(result)
}
 else{
    console.log( "type numbers not strings")
}
}
function send(){
operation(a.value,b.value,operator.value)
}

btn.addEventListener('click', send)