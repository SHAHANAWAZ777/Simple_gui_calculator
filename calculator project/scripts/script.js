function clearScreen(){
    document.getElementById("result").value='';
}


function append(value){
    document.getElementById('result').value +=value;
}

// function square(){
//     let currentValue= document.getElementById('result').value;
//     document.getElementById('result').value= eval(currentValue * currentValue);
// }

function calculate(){
    let expression = document.getElementById('result').value;


    try{
        document.getElementById('result').value=eval(expression);

    }catch(error){
        document.getElementById('result').value='Error';
    }
}

// Adding buttons animations effects on click

const buttons = document.querySelectorAll('button');
buttons.forEach(button=> {
    button.addEventListener('click', function(){
        this.classList.add('active');
        setTimeout(()=> this.classList.remove('active'), 100);
    });
});