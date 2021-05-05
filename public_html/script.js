
var tombKutya = [
        
        {
            nev: "Trixi",
            kor: 5,
            fajta: "keverék"
        },
        
        {
            nev: "Bruno",
            kor: 3,
            fajta: "Bison"
        },
        
        {
            nev: "Doge",
            kor: 7,
            fajta: "Shiba inu"
        }
 
    ];


var irany = true;

/*--------------------------------------*/

$(function(){
    
    tablazatKiirasa();
 
});

/*--------------------------------------*/

function tablazatKiirasa(){

    $("article").empty();


    $("article").append("<table>");
    
    $("article table").append("<tr><th>Név</th><th>Kor</th><th>Fajta</th></tr>");
    
    
    
    for (var i = 0; i < tombKutya.length; i++) {
        
        $("article table").append("<tr>");
        
        for(var item in tombKutya[i]){
            
            $("article table tr").eq(i + 1).append("<td>" + tombKutya[i][item] + "</td>");
        }
    }
    
    $("article th").click(rendezes);
}

function rendezes(){
    
    console.log(irany);
    
    if(irany){
        
        tombKutya.sort(function(a, b){

            return Number(a.nev > b.nev) - 0.5;
        });
        irany = false;
    }else{
        
        tombKutya.sort(function(a, b){

            return Number(a.nev < b.nev) - 0.5;
        });
        
        irany = true;
    }
    
    tablazatKiirasa();
}
