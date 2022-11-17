const btn = document.getElementsByClassName('btn');
let saying;


const newSaying = () => {
    let randNum = Math.floor(Math.random() * 5)
    
    switch (randNum){
        case 0:
            saying = "A broken clock is right twice a day!";
        break;
        case 1:
            saying = "When I was a kid, we had to walk up hill both ways!";
        break;
        case 2:
            saying = "Don't put all your eggs in one basket!"
        break;
        case 3:
            saying = "Don't put the cart before the horse!"
        break;
        case 4:
            saying = "Well slap my knee and call me fudgy!";
        break;
    };
    console.log(saying);
    const sayingArea = document.getElementById('saying-area');
    sayingArea.innerHTML = saying;
};



