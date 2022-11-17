prompt("Your Name:");
prompt("Crush Name:");
var n = Math.random();
n = (n*100);
n = Math.floor(n) + 1;

if (n > 70) {
    alert("The love score is " + n + "%, You love each other like Kanye loves Kanye.");
}

if (n > 30 && n <=70){
    alert("The love score is " + n + "%");
}

if (n<=30) {
    alert("The love score is " + n + "%, You go together like oil and water.");
}
