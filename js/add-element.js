/*
 * Practice on Elements
 */

// get all the hot class elements- change them to cool class
$('#four').addClass('hot');
$('.hot').each(tocool);
function tocool(){
  $(this).removeClass('hot');
  $(this).addClass('cool');
}
// traverse the elements
$('#two').next().next().text("Cheese");
$('#two').prev().text("water");
// add a new element by clicking the plus sign
$('#todo').append('<li class="cool"> meat </li>');
$('#add').click(addElement);
// before and after are for siblings
// append and prepend are for parent


function addElement() {
  // add a new element
  // add a input text box
  $('#todo').append('<li><input type="text"></li>');
  // whenever the user are done add the element
  $('input').blur(convertLi);
  $('#save').text("Need to save to Database");
}
function convertLi(){
  var userinput = $(this).val();
  console.log(userinput);
 $(this).parent().addClass('cool');
 $(this).parent().click(changeStyle);
 $(this).parent().text(userinput);
}

// bind click with the event handler

//  click the li element will change the changeStyle
//  three style : complete, cool, hot
$('li').click(changeStyle);
function changeStyle() {
  if($(this).hasClass('cool')){
    $(this).removeClass('cool');
    $(this).addClass('complete');
  }else{
    $(this).removeClass('complete');
    $(this).addClass('cool');
  }
}

// delete complete element by clicking the trash can
document.getElementById('remove').addEventListener('click', removeElement);

function removeElement() {
  // remove the marked elements  -- element with style complete
  $('li.complete').remove();
  $('#save').text("Need to save to Database");
}
