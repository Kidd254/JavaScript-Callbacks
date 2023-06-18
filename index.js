function display(picture){
    document.getElementById("image").innerHTML= picture;
}

function getItem(myCallback){
    let req = new XMLHttpRequest();
    req.onload = function(){
        if(req.status==200){
            myCallback(this.responseText);
        } else{
            myCallback('error:' + this.responseText);
        }
    }
    req.open('GET', 'https://www.lamborghini.com/en-en');
    req.send();
}

getItem(display);
