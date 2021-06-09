var fruits=["Apples","Oranges","Peaches"];
function loadfruits(){
    document.getElementById("fruits").innerHTML=fruits;
}
function myfunction(){
    var fruit=prompt("What is your favourite fruit?");
    if(fruit.length!=0){
    fruits[fruits.length]=fruit;
    document.getElementById("fruits").innerHTML=fruits;
    }
    else
    document.write("We hit your favourite list !")
}

