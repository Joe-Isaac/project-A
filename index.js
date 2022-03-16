// document.getElementById("count-el").innerText = 5;
var arr = [];
var count = 0;

function increment() {
    console.log("The button was clicked");
    count++;
    document.getElementById("count-el").innerHTML = count;
    var nextCount = [];
    nextCount = document.getElementById("prevNo");
    nextCount.innerHTML = +count;
}

/** function clear() {
    console.log("This function clears the count");
    document.getElementById("count-el").innerHTML = countclr;
} **/

function decrement() {
    console.log("This code has been executed");
    if (count < 0) {
        document.getElementById("count-el").innerHTML =
            "Number of people cannot be less than zero";
    } else {
        document.getElementById("count-el").innerHTML = count--;
    }
}

function clearscr() {
    console.log("The button was clicked");
    count = 0;
    document.getElementById("count-el").innerHTML = count;
}

//document above is object
//getElementById is a method of the object

/** function Joey() {
    var joey = document.getElementById("count-el");
    joey.innerHTML = "the name is Joey";
    // how to use variables to store html elements
} **/

function save() {
    arr.push(count);
    console.log(arr);
    let welcomeEl = document.getElementById("paragraph");
    welcomeEl.innerHTML += arr[arr.length - 1];
}

//A valuable lesson worth remembering is, when a string is concatenated with a number or anything else. The string will always win and the result will be a string.
//for this reason, var me += count + "- ", will be a string

//using node.innerText only shows the human readable elements, but using textContent shows all content from all elements.
//innerText is aware of styling and wont return hidden elements, but textContent returns every element in the node.
//reading the value of innerText triggers a reflow, to ensure upto date computed styles. Reflows should be avoided as much as possible, since theyre computationally expensive

//text content has even better performance than inner html