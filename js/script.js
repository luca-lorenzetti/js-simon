$(function(){

    // ELENCO FUNZIONI

    function enterNumbers(){
        var nums = [];

        for (var i = 0; i < 5; i++) {
            nums.push(parseInt(prompt("Indovina il "+(i+1)+"\° numero: ") )); 
        }

        return nums;
    }

    // Funzione per stampare un messaggio più un array di numeri
    function stampaNumeri(nums,message){

        var stringa = "";

        for (var i = 0; i < nums.length; i++) {
            stringa += nums[i] + " ";          
        }

            alert(message + " " +stringa)
    }
    // Funzione per generare i numeri
    function genNumbers(){
        var nums = [];

        for (let i = 0; i < 5; i++) {
            nums.push(Math.floor(Math.random()*100+1));         
        }

        return nums;
    }
   // FINE FUNZIONI 

    alert("Memorizza i numeri che seguiranno");

    // Definisco le variabili
    var nums = genNumbers();
    var spanTime = $('span.countdown > small');
    var pt = 0;
    var numeriIndovinati = [];
    var time = 30; // Tempo countdown

    // Stampo i numeri generati
    stampaNumeri(nums,"");



    var game = setInterval(function(){

        if( time < 0){
            
            var numeriUtente = enterNumbers();
    
            // Ciclo per controllare quali numeri si sono indovinati
            for (let i = 0; i < numeriUtente.length; i++) {
                if( nums.includes(numeriUtente[i]) ){
                    numeriIndovinati.push(numeriUtente[i]);
                }
            }
    
            // Calcolo e Stampo il risultato
            if( numeriIndovinati.length != 0){
                pt = (pt+1) + numeriIndovinati.length;
            }
            
            $(spanTime).html(pt+"pt");

            alert("Hai indovinato: " + numeriIndovinati.length + " numeri\n");
            
            stampaNumeri(numeriIndovinati,"Numeri indovinati:\n");
            
            // Interrompo il ciclo infinito
            clearInterval(game);
        }
        else{
            $(spanTime).html(time);
            time--;
            if( time < 0){
                $(spanTime).html("GO!");
            }
        }
    },1000);
});