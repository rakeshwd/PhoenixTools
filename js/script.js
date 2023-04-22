function sum() {
    // Get the values of the two textboxes
    var num1 = parseInt(document.getElementById("num1").value);
    var num2 = parseInt(document.getElementById("num2").value);
    
    // Calculate the sum and display it in the result textbox
    var fc = document.getElementById("fc");
    var framecost= (((num1+num2)*2/19.3)*5.8)*269.01*1.2;

    var gifc = document.getElementById("gifc");
    var giframecost=(((num1+num2)*2/15.5)*5*41.448)*1.2;

    var fc = document.getElementById("fc");
    var framecost= (((num1+num2)*2/19.3)*5.8)*269.01*1.2;

    var fc = document.getElementById("fc");
    var framecost= (((num1+num2)*2/19.3)*5.8)*269.01*1.2;

    var fc = document.getElementById("fc");
    var framecost= (((num1+num2)*2/19.3)*5.8)*269.01*1.2;
   
    fc.value = framecost;
    gifc.value=giframecost;

  }