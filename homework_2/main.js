const fahrenheit = document.getElementById("fah")
const btn = document.getElementById("btn")

function fahrenheittocelsius(props){
    
    let cel = Number(props)
    if(!isNaN(cel)) {
    console.log(fahrenheit.value + "°F")
     let celsius = (props -32) * 5/9
     console.log(celsius.toFixed(2) + "°C")
     document.getElementById('celsius').innerHTML = "°C = " + celsius.toFixed(2)

    } else{
        console.log( "°F ველში ჩაწერილი მონაცემი არ არის რიცხვი")
    }
    
}


function gadacema(){
    fahrenheittocelsius(fahrenheit.value)
    
}

btn.addEventListener('click', gadacema)