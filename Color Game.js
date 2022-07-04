var box=document.querySelectorAll(".square");
var numSq=6;
var colors=generateRandomColors(numSq);
var heading=document.querySelector(".Heading");
var pickedColor=pickColor();
var colpick=document.getElementById("pc");
colpick.textContent=pickedColor;
var res=document.getElementById("result");
var newg=document.querySelector(".newg");
newg.addEventListener("click",NewGame);
var Easy=document.querySelector("#easyBtn");
var Hard=document.querySelector("#hardBtn");

// Choosing difficulty

Easy.addEventListener("click",function(){
    numSq=3;
    Easy.classList.add("selected");
    Hard.classList.remove("selected");
    colors=generateRandomColors(numSq);
        pickedColor=pickColor();
        console.log("yo");
        colpick.textContent=pickedColor;
        for(var i=0;i<box.length;++i)
            {
                box[i].style.backgroundColor=colors[i];
            }
            for(var i=3;i<6;++i)
            {
                box[i].style.display="none";
            }
});

Hard.addEventListener("click",function(){
    numSq=6;
    Easy.classList.remove("selected");
    Hard.classList.add("selected");
    colors=generateRandomColors(numSq);
        pickedColor=pickColor();
        colpick.textContent=pickedColor;
        for(var i=0;i<box.length;++i)
            {
                box[i].style.backgroundColor=colors[i];
                box[i].style.display="block";
            }
});

for(var i=0;i<box.length;++i)
    {
        box[i].style.backgroundColor=colors[i];
        box[i].addEventListener("click",check);
    }

// definition of check

function check()
    {
        console.log(this.style.backgroundColor);
        console.log(pickedColor);
        if(this.style.backgroundColor==pickedColor)
            {
                res.textContent="Success";
                res.style.color="black";
                for(var i=0;i<box.length;++i)
                    {
                        box[i].style.backgroundColor=pickedColor;
                    }
                heading.style.backgroundColor=pickedColor;
                newg.textContent="Play Again";
            }
        else
        {
            this.style.backgroundColor="#232323";
            res.textContent="Try Again";
            res.style.color="black";
        }
    }
    
// Definition of pickColor()
function pickColor()
    {
        var random=Math.floor(Math.random()*box.length);
        return colors[random];
    }

// Definition of generateRandomColors()
function generateRandomColors(num)
{
    var arr=[];
    for(var j=0;j<num;++j)
        {
            arr[j]=RandomColor();
        }
    return arr;
}

// Definition of RandomColor()
function RandomColor()
    {
        var random1=Math.floor(Math.random()*255+1);
        var random2=Math.floor(Math.random()*255+1);
        var random3=Math.floor(Math.random()*255+1);
        var random="rgb("+random1+", "+random2+", "+random3+")";
        return random;
    }

// Definition of NewGame()
function NewGame()
    {
        colors=generateRandomColors(numSq);
        pickedColor=pickColor();
        colpick.textContent=pickedColor;
        for(var i=0;i<box.length;++i)
            {
                box[i].style.backgroundColor=colors[i];
            }
        heading.style.backgroundColor="steelblue";
        res.textContent="";
        newg.textContent="New Colors";
    }