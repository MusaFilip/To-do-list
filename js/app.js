
//creating close button and append it to each list item
var myList = document.getElementsByTagName("LI");
var i;
for (i = 0; i < myList.length; i++) {
   var span = document.createElement("SPAN");
   var txt = document.createTextNode("\u00D7");
   span.className="close";
   span.appendChild(txt);
   myList[i].appendChild(span);
}

//Click on close button to hide list item
var close = document.getElementsByClassName("close");
var i;
for (i = 0; i < close.length; i++) {
  close[i].onclick = function() {
    var div = this.parentElement;
    div.style.display = "none";
  }
}

//add a "checked" symbol when clicking
var list = document.querySelector('ul');
list.addEventListener('click', function(ev) {
  if (ev.target.tagName === 'LI') {
    ev.target.classList.toggle('checked');
  }
}, false);

//adding a new list item after clicking add
function newItem() {
   var li = document.createElement("li");
   var inputValue = document.getElementById("myInput").value;
   var t = document.createTextNode(inputValue);
   li.appendChild(t);
   if(inputValue === ''){
    alert("EMPTY! Please enter task.");
   } else {
      document.getElementById("myUL").appendChild(li);
   }
   document.getElementById("myInput").value = "";

   var span = document.createElement("SPAN");
   var txt = document.createTextNode("\u00D7");
   span.className="close";
   span.appendChild(txt);
   li.appendChild(span);

   for (i = 0; i < close.length; i++) {
     close[i].onclick = function() {
       var div = this.parentElement;
       div.style.display = "none";
}
   }
}
// Execute a function when a key on the keyboard is pressed
var input =  document.getElementById("myInput"); 
input.addEventListener("keypress", function(event) {
  if (event.key === "Enter"){
    event.preventDefault();
    document.getElementById("push").click();
  }
});     