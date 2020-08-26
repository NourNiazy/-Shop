/*problem solution
$('#example1').dataTable( {
    "scrollY": "200px"
  } );
   
  // Some time later, recreate without (no scrolling)
  $('#example1').dataTable( {
    "destroy": true
  } );
  */
 function loadDoc() {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
     document.getElementById("demo").innerHTML = this.responseText;
    }
  };
  xhttp.open("GET", "ajax_info.txt", true);
  xhttp.send();
}
