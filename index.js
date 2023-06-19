function display(picture){
    document.getElementById("image").innerHTML= picture;
}

let myPromise = new Promise(function(resolve, reject){
let req = new XMLHttpRequest();
req.open('GET', 'mycar.html')
req.onload = function(){
if(req.status == 200){
    resolve(req.response);
} else{
    reject("Inaccessible!")
}
}
req.send();
});

myPromise.then(
    function(value){
        display(value);
    },
    function(error){
    display(error);
    }
);

/*function getItem(myCallback){
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

getItem(display);*/
