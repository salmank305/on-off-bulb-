let button = document.querySelector('#on-off');

button.addEventListener('click' ,function(){
    let bulb = document.querySelector('#bulb-box');
    let container = document.querySelector('.bulb-container');
    let text = document.querySelector('#text');

    if(bulb.src.match('off') ){
        bulb.src = "./on.png"
        bulb.style.width = "220px"
        button.textContent = 'Turn OFF'
        container.style.backgroundColor = 
        'black'
        text.textContent = "Good Night";
        text.style.color = "Yellow";
        button.style.color = "Yellow";
    }
    else{
        bulb.src = "./off.png"
        bulb.style.width = "180px"
        button.textContent = 'Turn ON'
        container.style.backgroundColor = 'white'
        text.textContent = "Good Morning";
        text.style.color = "Black";
        button.style.color = "Black";
    }
    
    
})

