function sum() {
    // Get the values of the two textboxes
    var num1 = parseInt(document.getElementById("num1").value);
    var num2 = parseInt(document.getElementById("num2").value);
    
    // Calculate the sum and display it in the result textbox
    var fc = document.getElementById("fc");
    var framecost= (((num1+num2)*2/19.3)*5.8)*269.01*1.2;

    var gifc = document.getElementById("gifc");
    var giframecost=(((num1+num2)*2/15.5)*5*41.448)*1.2;

    var sc = document.getElementById("sc");
    var sashcost=(((num1+(num2/2))*2/19.3)*5.8*182.868*3)*1.2;
    

    var gisc = document.getElementById("gisc");
    var gisashcost= (((num1+(num2/2))*2/15.5*5*57.272)*3)*1.2;

    var gc = document.getElementById("gc");
    var glasscost= (num1*num2)*80;
var beading=(num1+(num2/2))*2/19.8*5.8*33.369*3;

var mesh=(num1*(num2/2))*20;

    var psf = document.getElementById("psf");
    var psfcost= framecost+giframecost+sashcost+gisashcost+glasscost+255+170+240+100+beading+mesh+100+2000;
   
    fc.value = framecost;
    gifc.value=giframecost;
    sc.value=sashcost;
    gisc.value=gisashcost;
    gc.value=glasscost;
    psf.value=psfcost/(num1*num2)
  }