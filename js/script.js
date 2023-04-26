var design=1; // default value for design

		function setDesign(value) {
			design = value; // set the value of design based on the button clicked
      document.getElementById("num1").value = "";
			document.getElementById("num2").value = "";
      document.getElementById("fc").value = "";
      document.getElementById("gifc").value="";
      document.getElementById("sc").value="";
      document.getElementById("gisc").value="";
      document.getElementById("gc").value="";
      document.getElementById("psf").value="";
    }



function calculate() {

  // Get the values of the two textboxes
  var num1 = parseInt(document.getElementById("num1").value);
  var num2 = parseInt(document.getElementById("num2").value);
  var misc=Math.min(num1*num2/92903.04*50,2000);

  // Calculate the sum and display it in the result textbox
  var fc,gifc,sc,gc,glasscost,beading = 0;
switch (design) {
	case 1:
  var fc = document.getElementById("fc");
  var framecost = ((num1 + num2) * 2 / 1000) * 269.01 * 1.1;

  var gifc = document.getElementById("gifc");
  var giframecost = ((num1 + num2) * 2 /1000 * 41.448)*2 * 1.1;

  var sc = document.getElementById("sc");
  var sashcost = (((num1)/2 + num2 ) * 2 /1000 * 182.868 * 3) * 1.1;


  var gisc = document.getElementById("gisc");
  var gisashcost = ((((num1/2) + num2) * 2 / 1000 * 57.272) * 3) * 1.1;

  var gc = document.getElementById("gc");
  var glasscost = (num1 * num2)/92903.04 * 80;
  var beading = (num1 + (num2 / 2)) * 2 / 1000 * 33.369 * 3;

  var mesh = ((num1/2) * num2 )/92903.04 * 20;

  var psf = document.getElementById("psf");
  var psfcost = framecost + giframecost + sashcost + gisashcost + glasscost + 255 + 170 + 240 + 100 + beading + mesh + 100 + misc;
  
  console.log(psf);
  break;

  case 2:
  var fc = document.getElementById("fc");
  var framecost = ((num1 + num2) * 2 / 1000) * 42.336 * 1.1;

  var gifc = document.getElementById("gifc");
  var giframecost = ((num1 + num2) * 2 /1000 * 57.272) * 1.1;

  var sc = document.getElementById("sc");
  var sashcost = ((num1 + num2)) * 2 /1000 * 180.957 * 1.1;

  var gisc = document.getElementById("gisc");
  var gisashcost = ((num1 + num2 ) * 2 / 1000 * 54.256) *  1.1;

  var gc = document.getElementById("gc");
  var glasscost = (num1 * num2)/92903.04 * 80;
  var beading = (num1 + (num2 / 2)) * 2 / 1000 * 33.369 * 3;

  var mesh = ((num1/2) * num2 )/92903.04 * 20;

  var psf = document.getElementById("psf");
  var psfcost = framecost + giframecost + sashcost + gisashcost + glasscost + 80 + 100 + beading + mesh + 100 + misc;
  break;
  default:
    console.log("Invalid design selected");
}

  fc.value = framecost;
  gifc.value = giframecost;
  sc.value = sashcost;
  gisc.value = gisashcost;
  gc.value = glasscost;
  psf.value = psfcost / (num1 * num2)*92903.04;

}

