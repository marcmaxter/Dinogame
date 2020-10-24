const dino = document.querySelector('.dino');
function handleKeyUp(event){
if (event.KeyCode ===32){
    console.log('pressionou espaço');
}
}

document.addEventListener('keyUp', handlekeyUp);
