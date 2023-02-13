//horror entry sounds//
var a =new Audio();
a.src= "https://www.dropbox.com/s/mvbab0pex8to5dd/Horror_Sounds%28128k%29%20AETrim1602492098725?dl=1";
a.loop=true;
//end//

//horror party with bhootnath//
var b = new Audio();
    b.src="https://www.dropbox.com/s/cefxy3fhyrqx23z/AUD-20201013-WA0020.mp3?dl=1";
    b.loop=true;
//end//

// horror tune scary //
var c = new Audio();
c.src= "https://www.dropbox.com/s/9ann0eubil0pcqs/Horror_Sounds%28128k%29%20AETrim1602492011314?dl=1";
c.loop = true;
//end//

//horror least sound//
var d = new Audio();
d.src = "https://www.dropbox.com/s/cskk0a2bv8zj61v/Horror_Sounds%28128k%29%20AETrim1602491882934?dl=1";
d.loop = true;
//end//

//bhoot song //
var e = new Audio();
e.src ="https://www.dropbox.com/s/jg2r2bm2r1uqjh3/The_Bhoot_Song%20AETrim1602592518547?dl=1";
e.loop = true;

var f = new Audio();
f.src = " https://www.dropbox.com/s/r5srv3avytahrl0/Sawan_Mein_Lag_Gayi_Aag_-_Ginny_Weds_Sunny__Yami%2C_Vikrant__Mika%2C_Neha_%26_Badshah__Payal_D%2C_Mohsin%28256k%29?dl=1";
f.loop = true;

var g = new Audio();
g.src="https://www.dropbox.com/s/6ugnsbc5g0ojoh8/DON_2_RINGTONE%28256k%29?dl=1";
g.loop = true;

var h= new Audio();
    h.src="https://www.dropbox.com/s/pbsajp1tfwora5v/AUD-20201108-WA0011?dl=1";
    h.loop= true;
//end//




//enter //
function haweli(){
//haweli//
document.getElementById("haweli").style.display="block";
document.getElementById("intro").style.display= "none";
document.getElementById("int").style.display = "none";

a.play();
b.pause();
c.pause ();
d.pause();
e.pause();
f.pause();
g.pause();
h.pause ();
//room-1 button//
document.getElementById("a1").style.display ="block";
//graveyard button//
document.getElementById("a2").style.display ="block";
document.getElementById("a4").style.display ="block";
document.getElementById("a5").style.display ="block";
document.getElementById("a6").style.display ="block";
document.getElementById("a7").style.display ="block";

}
//graveyard//
function grave(){
    document.getElementById("grave").style.display ="block";
   
/**   grave button**/ document.getElementById("a2").style.display ="none";
   
   /**haweli**/ document.getElementById("haweli").style.display ="none";
    
 /***button room1 ***/ document.getElementById("a1").style.display ="none";    
 
/**room2 button**/ document.getElementById("a4").style.display ="none";
   a.pause () ;
    b.play();
    g.pause();
    h.pause();
    document.getElementById("a5").style.display ="none";
document.getElementById("a6").style.display ="none";
document.getElementById("a7").style.display ="none";

    
    
    
    
   /**back**/ document.getElementById("back").style.display = "block";
}

function room1(){

document.getElementById("room").style.display ="block";
    document.getElementById("a1").style.display ="none";
    document.getElementById("a4").style.display ="none";
    
   document.getElementById("haweli").style.display ="none"; 
   
   document.getElementById("grave").style.display ="none";
   
   document.getElementById("a2").style.display ="none";
   document.getElementById("a5").style.display ="none";
document.getElementById("a6").style.display ="none";
document.getElementById("a7").style.display ="none";

   
   
   a.pause();
   b.pause();
   c.pause();
   d.play ();
   e.pause();
   g.pause();
   f.pause ();
  
     /**back**/ document.getElementById("back").style.display = "block";
}


function room2(){
document.getElementById("room-two").style.display = "block";

document.getElementById("room").style.display ="none";
    document.getElementById("a1").style.display ="none";
    document.getElementById("a4").style.display ="none";
    
  document.getElementById("a2").style.display ="none"; document.getElementById("haweli").style.display ="none"; 
   
   document.getElementById("grave").style.display ="none";
   
   
document.getElementById("a5").style.display ="none";
document.getElementById("a6").style.display ="none";
document.getElementById("a7").style.display ="none";



a.pause();
b.pause ();
c.pause ();
d.pause();
e.play ();
g.pause();

  /**back**/ document.getElementById("back").style.display = "block";
}



function room4(){
    document.getElementById("garden").style.display ="block";
    
    document.getElementById("room-two").style.display = "none";

document.getElementById("room").style.display ="none";
    document.getElementById("a1").style.display ="none";
    document.getElementById("a4").style.display ="none";
    
   document.getElementById("haweli").style.display ="none"; 
   
   document.getElementById("grave").style.display ="none";
   
   document.getElementById("a2").style.display ="none";
   
   document.getElementById("a5").style.display ="none";
document.getElementById("a6").style.display ="none";
document.getElementById("a7").style.display ="none";

    f.play ();
    a.pause();
    b.pause ();
    c.pause();
    d.pause();
    e.pause ();
    g.pause();


  /**back**/ document.getElementById("back").style.display = "block";
}


function room3(){
    document.getElementById("room-three").style.display ="block";
    
    document.getElementById("haweli").style.display="none";
document.getElementById("intro").style.display= "none";
document.getElementById("int").style.display = "none";

a.pause();
b.pause();
d.pause ();
e.pause ();
c.play();
g.pause();
//room-1 button//
document.getElementById("a1").style.display ="none";
//graveyard button//
document.getElementById("a2").style.display ="none";
document.getElementById("a4").style.display ="none";
document.getElementById("a5").style.display ="none";
document.getElementById("a6").style.display ="none";

document.getElementById("a7").style.display ="none";


  /**back**/ document.getElementById("back").style.display = "block";
}


function back(){
   
   document.getElementById("back").style.display ="none";
   
   /**haweli**/ document.getElementById("haweli").style.display = "block";
    
   /**grave**/ document.getElementById("grave").style.display ="none";
    
  
  /**room-3**/ document.getElementById("room-three").style.display ="none";
   
  /**garden**/ document.getElementById("garden").style.display ="none";
   
   
   /**room-2**/
   document.getElementById("room-two").style.display = "none";
   
   /**room-1**/
   document.getElementById("room").style.display ="none";
   
  /**wish**/ document.getElementById("ins-new").style.display ="none";
   /**songs**/ 
a.play();
b.pause();
c.pause ();
d.pause();
e.pause();
f.pause ();
g.pause();
h.pause();

/**buttons**/
document.getElementById("a1").style.display ="block";
//graveyard button//
document.getElementById("a2").style.display ="block";
document.getElementById("a4").style.display ="block";
document.getElementById("a5").style.display ="block";
document.getElementById("a6").style.display ="block";
document.getElementById("a7").style.display ="block";

}


/**wish***/
function wish(){
    document.getElementById("a9").style.display = "block";
    document.getElementById("a7").style.display ="none";
    document.getElementById("new").style.display = "block";
    a.pause();
   b.pause();
   c.pause();
   d.pause ();
   e.pause();
   f.pause();
    g.play();
    h.pause();
}

function ent1(){
    document.getElementById("new").style.display = "none";
    
document.getElementById("a9").style.display = "none";

document.getElementById("ins-new").style.display ="block";

document.getElementById("back").style.display ="block";

g.pause();
h.play ();
}
