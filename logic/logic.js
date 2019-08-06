// const newPage = window.location.pathname = '/Users/haigtalarian/Desktop/Code/repositories/MyWebsite/index.html'
// console.log(newPage);

document.getElementById('click-me').onclick = function changeContent() {

    document.getElementById('click-me').innerHTML = "Thanks for that.";
    document.getElementById('click-me').style = "Color: red";
    document.querySelector('h5').setAttribute("id", "clicked-me");
    // setTimeout(myFunction(window.location.pathname = '/Users/haigtalarian/Desktop/Code/repositories/MyWebsite/index.html'), 3000)
    

    // $("#clicked-me").click(function () {
    // })
}

$("#clicked-me").click(function () {
    console.log("test");
})

// document.addEventListener('click', function (event) {

// 	// If the clicked element doesn't have the right selector, bail
// 	if (!event.target.matches('.clicked-me')) return;

// 	// Don't follow the link
// 	event.preventDefault();

// 	// Log the clicked element in the console
// 	console.log(event.target);

// }, false);
    // document.getElementById('clicked-me').onclick = function changeContent() {
    //     document.getElementById('clicked-me').innerHTML = "Please stop.";
    // }

