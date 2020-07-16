/*Add the JavaScript here for the function billingFunction().  It is responsible for setting and clearing the fields in Billing Information */
 /* function billingFunction() {
    if (document.getElementById("same").checked) {
          document.getElementById("billingName").value = document.getElementById("shippingName").value;
  document.getElementById("billingZip").value = document.getElementById("shippingZip").value;
  }
  else {
    document.getElementById("billingName").value = "";
    document.getElementById("billingZip").value = "";
  }
  } */

  function billingFunction(){
    var isSame = document.getElementById('same');
    var shippingName = document.getElementById('shippingName');
    var shippingZip = document.getElementById('shippingZip');

    var billingName = document.getElementById('billingName');
    var billingZip = document.getElementById('billingZip');

    if (isSame.checked) {
        billingName.value = shippingName.value;
        billingZip.value = shippingZip.value;
        billingName.setAttribute("required", true);
        billingZip.setAttribute("required", true);
    }else{
        billingName.value = "";
        billingZip.value = "";
        billingName.removeAttribute("required");
        billingZip.removeAttribute("required");
    }
}