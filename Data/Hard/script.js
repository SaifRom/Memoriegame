num=new Array();
c=0;
function random(){
    if(c>0){
    do{
         var v=false;
         do{
           var number=Math.floor((Math.random()*100)+1);
           }while(number==0 || number>=17);
        for(i=0;i<num.length;i++){
            if(number==num[i]){
                v=true;
            }
        }
    }while(v==true);
    }
    else {
        do{
           var number=Math.floor((Math.random()*100)+1);
           }while(number==0 || number>=17);
    }
    num[c]=number;
    c++;
    return number;
}
comp=0;
vcomp=0;
TV=new Array();
function test(i){
     if(comp==0){
        if(ti[i]==1){
            document.getElementById(tc[i]).src="image/1.png";
            TV[comp]=tc[i];
        }
        else if(ti[i]==2){
            document.getElementById(tc[i]).src="image/2.png";
            TV[comp]=tc[i];
        }
        else if(ti[i]==3){
            document.getElementById(tc[i]).src="image/3.png";
            TV[comp]=tc[i];
        }
        else if(ti[i]==4){
            document.getElementById(tc[i]).src="image/4.png";
            TV[comp]=tc[i];
        }
        else if(ti[i]==5){
            document.getElementById(tc[i]).src="image/5.png";
            TV[comp]=tc[i];
        }
        else if(ti[i]==6){
            document.getElementById(tc[i]).src="image/6.png";
            TV[comp]=tc[i];
        }
        else if(ti[i]==7){
            document.getElementById(tc[i]).src="image/7.png";
            TV[comp]=tc[i];
        }
        else if(ti[i]==8){
            document.getElementById(tc[i]).src="image/8.png";
            TV[comp]=tc[i];}
        comp++;
     }
     else if(comp==1){
        if(ti[i]==1){
            document.getElementById(tc[i]).src="image/1.png";
            TV[comp]=tc[i];
        }
        else if(ti[i]==2){
            document.getElementById(tc[i]).src="image/2.png";
            TV[comp]=tc[i];
        }
        else if(ti[i]==3){
            document.getElementById(tc[i]).src="image/3.png";
            TV[comp]=tc[i];
        }
        else if(ti[i]==4){
            document.getElementById(tc[i]).src="image/4.png";
            TV[comp]=tc[i];
        }
        else if(ti[i]==5){
            document.getElementById(tc[i]).src="image/5.png";
            TV[comp]=tc[i];
        }
        else if(ti[i]==6){
            document.getElementById(tc[i]).src="image/6.png";
            TV[comp]=tc[i];
        }
        else if(ti[i]==7){
            document.getElementById(tc[i]).src="image/7.png";
            TV[comp]=tc[i];
        }
        else if(ti[i]==8){
            document.getElementById(tc[i]).src="image/8.png";
            TV[comp]=tc[i];
        }
        i1=document.getElementById(TV[0]).value;
        i2=document.getElementById(TV[1]).value;
        if(i1==i2){
            document.getElementById(TV[0]).onclick="";
            document.getElementById(TV[1]).onclick="";
            vcomp++;
            console.log(vcomp);
            TV = new Array();
            comp=0;
        }
        else{
            
            setTimeout(function reset(){document.getElementById(TV[0]).src="image/t.png";
            document.getElementById(TV[1]).src="image/t.png";
            TV = new Array();
            comp=0;},250);
        }
     }
 }
 function won(){
    if(vcomp==8){
        document.getElementById("wol").innerHTML="YOU WON";
        document.getElementById("wol").id="W";
        document.getElementById("button").innerHTML="RESTART";
        document.getElementById("button").setAttribute("onclick","location.reload();");
        document.getElementById("start_restart").style.visibility="visible";
        for(i=0;i<16;i++){
            ch="i"+i;
            document.getElementById(ch).onclick="";
        }
        clearTimeout(timer);
    }
 }
ti =new Array();
tc = new Array();
function random_image(){
     for(i=0;i<16;i++){
        var ch="i"+i;
        var n=random();
        console.log("n : "+n);
        if(n==1 || n==2){
            var d=document.getElementById(ch);//546132
            d.src="image/1.png";
            d.value="1";
            d.class="p1";
            ti[i]=1;
        }
        else if(n==3 || n==4){
            var d=document.getElementById(ch);
            d.src="image/2.png";
            d.value="2";
            d.class="p2";
            ti[i]=2;
        }
        else if(n==5 || n==6){
            var d=document.getElementById(ch);
            d.src="image/3.png";
            d.class="p3";
            d.value="3";
            ti[i]=3;
        }
        else if(n==7 || n==8){
            var d=document.getElementById(ch);
            d.src="image/4.png";
            d.class="p4";
            d.value="4";
            ti[i]=4;
        }
        else if(n==9 || n==10){
            var d=document.getElementById(ch);
            d.src="image/5.png";
            d.class="p5";
            d.value="5";
            ti[i]=5;
        }
        else if(n==11 || n==12){
            var d=document.getElementById(ch);
            d.src="image/6.png";
            d.class="p6";
            d.value="6";
            ti[i]=6;
        }
        else if(n==13 || n==14){
            var d=document.getElementById(ch);
            d.src="image/7.png";
            d.class="p7";
            d.value="7";
            ti[i]=7;
        }
        else if(n==15 || n==16){
            var d=document.getElementById(ch);
            d.src="image/8.png";
            d.class="p8";
            d.value="8";
            ti[i]=8;
        }
     }
     document.getElementById("start_restart").style.visibility="hidden";
     setTimeout(function start(){
    for(i=0;i<16;i++){
        var ch="i"+i;
        tc[i]=ch;
        d=document.getElementById(ch);
        d.src="image/t.png";
        d.setAttribute("onclick","test("+i+");"+"won();");
    }
    },700);    
}
Time_value=0;
function timer(){
    timer=setInterval(function time(){
        document.getElementById("time").innerHTML="Time : "+Time_value;
        Time_value++;
    },1000);
    setTimeout(function lost(){
        document.getElementById("wol").innerHTML="YOU Lost";
        document.getElementById("wol").id="L";
        document.getElementById("button").innerHTML="RESTART";
        document.getElementById("button").setAttribute("onclick","location.reload();");
        document.getElementById("start_restart").style.visibility="visible";
        for(i=0;i<16;i++){
            ch="i"+i;
            document.getElementById(ch).onclick="";
        }
        clearTimeout(timer);
    },21000); 
}