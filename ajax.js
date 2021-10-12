// console.log("this is js file");

const fetchbtn = document.getElementById("fetch");
fetchbtn.addEventListener("click", fetchbtnhandler);

function fetchbtnhandler() {
    console.log("btn clicked");

    const xhr = new XMLHttpRequest();

    xhr.open("get" , "https://jsonplaceholder.typicode.com/todos/1") ;

    xhr.onload = function () {
        console.log(this.responseText);
    }

    xhr.onprogress = function () {
        // console.log("request on progress");
    }


    xhr.send();
    // console.log("request done");
}
