var counting= document.querySelectorAll('.drum').length;
for (var i=0; i<counting; i++) {
    document.querySelectorAll('.drum')[i].addEventListener("click", function(){
        var inter= this.innerHTML;
        makeSound(inter);
        animated(inter);
    });
}
document.addEventListener("keydown", function(event){
    makeSound(event.key);
    animated(inter);
});
function makeSound(key){
    switch (key) {
        case "w":
            var audio1= new Audio("sounds/crash.mp3");
            audio1.play();
            break;
        case "a":
            var audio1= new Audio("sounds/kick-bass.mp3");
            audio1.play();
            break;
        case "s":
            var audio1= new Audio("sounds/snare.mp3");
            audio1.play();
            break;
        case "d":
            var audio1= new Audio("sounds/tom-1.mp3");
            audio1.play()
            break;
        case "j":
            var audio1= new Audio("sounds/tom-2.mp3");
            audio1.play()
            break;
        case "k":
            var audio1= new Audio("sounds/tom-3.mp3");
            audio1.play()
            break;
        case "l":
            var audio1= new Audio("sounds/tom-4.mp3");
            audio1.play()
            break;
                                        
        
        default:
            break;
    }
}
function animated(ok){
    var okk = document.querySelector("."+ ok);
    okk.classList.add("pressed");

    
    setTimeout(function(){
        okk.classList.remove("pressed")
    } , 100);
}