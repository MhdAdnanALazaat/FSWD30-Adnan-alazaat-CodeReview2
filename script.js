function adnan() {
    
    london = [2500, 1500, 1000, 900],
    amsterdam = [1500, 500, 1800, 700],
       
    l = 0,
    a = 0,

    londonC = london.length,
    amsterdamC = amsterdam.length,
    
    Nul = 0,
    Nua = 0;
     
    for (; l < londonC; ) { Nul += london[l]; l++;};
    for (; a < amsterdamC; ) { Nua += amsterdam[a]; a++;};
    
    londonX = Nul / london.length;  
    amsterdamX = Nua / amsterdam.length,
        
    document.getElementById("am").innerHTML = amsterdamX ;
    document.getElementById("lo").innerHTML = londonX ;
    
    if(amsterdamX > londonX) {
        document.getElementById("b").innerHTML = amsterdamX - londonX ;
        document.getElementById("a").innerHTML = "<span>Amsterdam </span>" ;
        
    } else {

        document.getElementById("b").innerHTML = londonX - amsterdamX ;
        document.getElementById("a").innerHTML = "<span>London </span>";
    }

};adnan()