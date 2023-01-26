import createexpform, { queryById } from "./database.js"




document.getElementById("submitbtn").addEventListener("click", () => {
    submitbtn();
});


function submitbtn() {
    console.log("Submit Button Clicked");
    alert("sumbitted succesfully");
    var a = document.getElementById("field1").value;
    var b = document.getElementById("field2").value;
    var c = document.getElementById("field3").value;
    var e = document.getElementById("field4").value;
    var f = document.getElementById("field5").value;
    var g = document.getElementById("field6").value;
    var h = document.getElementById("field7").value;
    var i = document.getElementById("field8").value;
    var j = document.getElementById("field9").value;
    var  k= document.getElementById("field10").value;

    // console.log(a, b, c, e,f,g,h,i,j,k);
    createexpform(a, b, c, e,f,g,h,i,j,k)
}