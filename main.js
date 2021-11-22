// 1
let un = document.querySelector("#content");
console.log(un.innerText);

// 2
let deux = document.querySelectorAll("#content");
console.log(deux);

// 3
let trois = document.querySelector(".important");
console.log(trois);

// 4
let quatre = document.querySelectorAll(".important");
console.log(quatre);
// 5
let boucle = [...quatre];
boucle.forEach(element => {
    let text = element.textContent;
    console.log(
        text.substring(0,text.length-1).toLocaleLowerCase() + text.substring(text.length-1).toUpperCase()
    );
});
// 6
let six = document.getElementById("content");
let sixD = six.getElementsByClassName("grandParagraphe")[0];
console.log(sixD);

