//Display Current Date in Header
var currentDay = dayjs().format('dddd, MMMM, D, hh:mm A');
$('#currentDay').text(currentDay); 
//Find Current Hour
var currentHour = dayjs().hour();
$('#currentHour').text(currentHour); 

// utilizing document.ready to make sure HTMl is fully loaded
$(document).ready(function () {
  // when saveBtn is click
  $(".saveBtn").click(function(){
    // test alert for debugging alert("Button was clicked!");
    // key creation (what hour was selected) (IE location)
    var key = $(this).parent().attr("id").split("-")[1];
    // value creation (what was typed into the text aread) (content inputtedadd)
    var value = $(this).parent().find(".description").val();
    // save key and value to the local storage
    localStorage.setItem(key,value);
    // data saved to local storage message code
    var parentP = document.getElementById("dataSaved");
    var childP = document.createElement("p");
    // insert "data save to local storage!" into the existing <p> with id="dataSaved"
    childP.innerHTML = "Data saved to local storage! ✔️";
    parentP.appendChild(childP);
  });

  // text area formatting
$(".time-block").each(function(){
  // obtain hour of each cell using 24 hour formatting, removing "hour-" and obtaining that cells hour (7-17, meaning 7pm tp 5pm)
  var blockHour = $(this).attr("id").split("-")[1];
  // retrieves local storage data and displays it in appropriate cell
  var textEntry = localStorage.getItem(blockHour);
  var textArea = $(this).find(".description");
  textArea.val (textEntry);
  // if statements to change time slots to past, present, or future by comparing the block time to current time
  if (blockHour < currentHour){
      // adds the class of past to appropriate cell(s)
      $(this).find(".description").addClass("past");
      // console log how many cells are past
      console.log("past");
  }else if(blockHour == currentHour){
      // adds the class of present to the appropriate cell
      $(this).find(".description").addClass("present");
      // console log how many cells are present (should only ever be ONE)
      console.log("present");
  }else{
      // adds the class of future to the appropriate cell(s)
      $(this).find(".description").addClass("future");
      // console log how many cells are future
      console.log("future");
   }
});
});
