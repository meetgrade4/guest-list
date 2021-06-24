students = [];
sorted = null;
unsorted = [];
code = null;

function addstudent(){
students.push(document.getElementById("newstudent").value);
document.getElementById("newstudent").value = null;
}

function show(){
unsorted = "<ul>"
for(var i = 0;i<students.length;i++){
unsorted = unsorted + "<li>" + students[i] + "</li>";
}
unsorted = unsorted + "</ul>";
document.getElementById("unsorted").innerHTML = unsorted;
document.getElementById("unhideline").style.visibility = "visible";
document.getElementById("sort").style.visibility = "visible";
document.getElementById("sorted").style.visibility = "visible";
}

function sort(){
code = students;
code.sort();
sorted = "<ul>"
for(var f = 0;f<code.length;f++){
sorted = sorted + "<li>" + code[f] + "</li>";
}
sorted = sorted + "</ul>";
document.getElementById("sorted").innerHTML = sorted;
}

function search(){
var found = 0;
var name = document.getElementById("search").value;
for(var j = 0;j<students.length;j++){
    if(name == students[j]){
        found = found + 1;
    }
}
document.getElementById("search_result").innerHTML = "found " + found + "times";
console.log(name + " found " + found + "times")
document.getElementById("search").value = null;
}