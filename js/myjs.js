var mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

// JavaScript program to find whether an array
// is subset of another array
  
    /* Return true if arr2[] is a subset 
    of arr1[] */
    function isSubset(arr1, arr2){
        let m = arr1.length;
        let n = arr2.length;
        let i = 0;
        let j = 0;
        for (i = 0; i < n; i++) {
            for (j = 0; j < m; j++)
                if (arr2[i] == arr1[j])
                    break;
  
            /* If the above inner loop 
            was not broken at all then
            arr2[i] is not present in
            arr1[] */
            if (j == m)
                return false;
        }
  
        /* If we reach here then all
        elements of arr2[] are present
        in arr1[] */
        return true;
    }




function checkboxreturn(){
  var checkboxarr;
  var options;
  checkboxarr = []
  options = document.getElementsByClassName('fcheckbox');
  for (i=0; i < options.length; i++){
    
    if (options[i].checked == true){
      
        checkboxarr.push(options[i].value);
      
    }
    else{
      const index = checkboxarr.indexOf(options[i].value);
      if (index > -1) {
        array.splice(index, 1);
      }
    }
  }
  return checkboxarr

}

function filterSelection(c) {
  var x, i;
  x = document.getElementsByClassName("card");
  // Add the "show" class (display:block) to the filtered elements, and remove the "show" class from the elements that are not selected
  for (i = 0; i < x.length; i++) {
    if (isSubset(x[i].className.split(" "),c)){
      w3AddClass(x[i], "show")
    } 
    else{
      w3RemoveClass(x[i], "show")
    }
  }
}
function checkboxupdate(){
  filterSelection(checkboxreturn());
}
function showall(){
  var x, i;
  x = document.getElementsByClassName("card");
  // Add the "show" class (display:block) to the filtered elements, and remove the "show" class from the elements that are not selected
  for (i = 0; i < x.length; i++){
    w3AddClass(x[i], "show");
  }
  var options;
  options = document.getElementsByClassName('fcheckbox');
  for (i=0; i < options.length; i++){
    options[i].checked = false;
  }
}

// Show filtered elements
function w3AddClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    if (arr1.indexOf(arr2[i]) == -1) {
      element.className += " " + arr2[i];
    }
  }
}

// Hide elements that are not selected
function w3RemoveClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    while (arr1.indexOf(arr2[i]) > -1) {
      arr1.splice(arr1.indexOf(arr2[i]), 1);
    }
  }
  element.className = arr1.join(" ");
}

// Close the dropdown if the user clicks outside of it

function searchfunc() {
  var cardss, i;
  cardss = document.getElementsByClassName("card");
  var input, filter, txtValue;
    input = document.getElementById("myInput");
    filter = input.value.toUpperCase();
  
  for (i = 0; i < cardss.length; i++) {
      txtValue = cardss[i].className + " "+ cardss[i].getElementsByClassName("fullname")[0].innerHTML +" "+cardss[i].getElementsByClassName("interests")[0].innerHTML+" "+hostelInfosearch(cardss[i]);
      if (txtValue.toUpperCase().indexOf(filter) > -1) {
          cardss[i].style.display = "";
      } else {
          cardss[i].style.display = "none";
      }
  }
}


function hostelInfo(dataa) {
  if(dataa["Hostel"]!== ""){
    var divtxt;
    divtxt = `<div class="desctags hostel">`+dataa["Room No."]+ ", "+dataa["Hostel"]+`</div>`
    return divtxt;
  }
  else{
    return ""
  }
}

function hostelInfosearch(dataa) {
  if(dataa.getElementsByClassName("hostel")[0]!== undefined){
    var divtxt;
    divtxt = dataa.getElementsByClassName("hostel")[0].innerHTML
    return divtxt;
  }
  else{
    return ""
  }
}

function createCARD(dataa){
  $('.cards').append(`
  
        <div class="card ${dataa["Year of admission"]+" "+dataa["Campus"]+" "+dataa["Gender"]+" "+dataa["City"].toUpperCase()} show">
          <div class="cardimage">
            <img src="https://drive.google.com/uc?id=${dataa["Add your best picture (less than 500kb preferred)"].substr(-33)}" loading="lazy" alt="barbarian" />
          </div>
          <div class="fullname">${dataa["Name"]}</div>
          <div class="desctags maintags">&#8226;${dataa["Branch"]+"  &#8226;"+dataa["City"]+"  &#8226;"+dataa["Campus"]+"  &#8226;"+dataa["Year of admission"]}</div>
          ${hostelInfo(dataa)}
          <div class="description">${dataa["About You (~30 words)"]}</div>
          <div class="desctags interests">&#8226;${dataa["3 things you love to do"].toUpperCase().split(", ").join("   &#8226;")}</div>
          <div class="footertags"><a href="https://www.instagram.com/${dataa["Insta Handle (don't use @)"]}" target="blank"}>${"@"+dataa["Insta Handle (don't use @)"]}</a></div>
        </div> 
  `)
}

var public_spreadsheet_url = 'https://docs.google.com/spreadsheets/d/e/2PACX-1vRKOqqT5iqeAUcVsDdHBJkPNXFzZ1EMuo5TGSApsafZpQ3wcOapT2mGfyJERKULgDogu6PNDwlYbSll/pub?gid=1466443368&single=true&output=csv';

		function init() {
		Papa.parse(public_spreadsheet_url, {
			download: true,
			header: true,
			complete: showInfo
		})
		}

		window.addEventListener('DOMContentLoaded', init)