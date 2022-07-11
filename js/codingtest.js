function playLoader()
{
    setTimeout(disableloader,0);
    var n = document.getElementById("n");
        var roll = document.getElementById("roll");
        var date = document.getElementById("date");

        n.innerHTML = "Amit lavania ";
        roll.innerHTML = "201500082 ";

        var day = new Date();
        var d = day.getDate();
        var month = day.getMonth();
        var year = day.getFullYear();

        date.innerHTML = `${d}-${month}-${year}`;

}
function disableloader()
{   
    document.querySelector('.Animatecontainer').style.display ="none";
    document.querySelector('.container').style.display="block";
}

