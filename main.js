
var timer=3;
var score=0;
var hitrn=0;

function scoreUpdater()
{
    score += 10;
    document.querySelector("#scoreval").textContent=score;
}

function newHitValue()
{
    hitrn=Math.floor(Math.random()*10)
    document.querySelector("#hitVal").textContent=hitrn;
}

function makeBubble()
{
    var clutter="";
    for(var i=1;i<=133;i++)
    {
        var rn=Math.floor(Math.random()*10);
        clutter +=`<div class="bubble">${rn}</div>`;
    }

    document.querySelector(".pbtm").innerHTML=clutter;
}



function runTimer()
{
    var timerint=setInterval(function(){
        if(timer > 0)
        {
            timer--;
            document.querySelector("#timerValue").textContent=timer;
        }
        else
        {
            clearInterval(timerint);
            document.querySelector(".pbtm").innerHTML=`<h1>Game over</h1>`;
        }

    },1000);
}


document.querySelector(".pbtm").addEventListener("click",function(details)
{   
    var clicked=Number(details.target.textContent);
    if(clicked === hitrn)
    {
        scoreUpdater();
        makeBubble();
        newHitValue();
    }
});

runTimer();
makeBubble();
newHitValue();