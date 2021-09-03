var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
}

var z = 2

$('#tempModal').click( function(){
    $('#exampleModal').modal('show');
});


function addEmail(){
    $('<div class="mySlides"><div class="templateContainer"><div class="div1 leftDiv"><form action="javascript:void(0)"><label for="email">Enter your email:</label><input type="text" id="email" name="email"><input type="submit"></form></div><div class="div2 rightDiv"><img class="sideImage" src="static/images/form_logo.jpg"/></div></div></div>').appendTo('.slideshow-container')
    $('<span class="dot" onclick="currentSlide(' + z + ')"></span>').appendTo('.dotSpan')
    z=z+1
}


function addFillUp(){
    $('<div class="mySlides"><div class="templateContainer"><div class="div1 leftDiv"><form action="javascript:void(0)"><input type="text" onblur="getValue(this)" /><br/><br/>Ans:<br/><input type="text" style="width:108px"/></form></div><div class="div2 rightDiv"><img class="sideImage" src="static/images/form_logo.jpg"/></div></div></div>').appendTo('.slideshow-container')
    $('<span class="dot" onclick="currentSlide(' + z + ')"></span>').appendTo('.dotSpan')
    z=z+1
}



function addPhone(){
    $('<div class="mySlides"><div class="templateContainer"><div class="div1 leftDiv"><form action="javascript:void(0)"><label for="phone">Enter phone number:</label><input type="tel" pattern="pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"></form></div><div class="div2 rightDiv"><img class="sideImage" src="static/images/form_logo.jpg"/></div></div></div>').appendTo('.slideshow-container')
    $('<span class="dot" onclick="currentSlide(' + z + ')"></span>').appendTo('.dotSpan')
    z=z+1
}


function addDate(){
    $('<div class="mySlides"><div class="templateContainer"><div class="div1 leftDiv"><form action="javascript:void(0)"><label for="date">Select Date:</label>&nbsp;<input type="date" id="date" name="date">&nbsp;<input type="submit"></form></div><div class="div2 rightDiv"><img class="sideImage" src="static/images/form_logo.jpg"/></div></div></div>').appendTo('.slideshow-container')
    $('<span class="dot" onclick="currentSlide(' + z + ')"></span>').appendTo('.dotSpan')
    z=z+1
}

var p = 2
// function addMcq(){original
//     $('<div class="mySlides"><div class="templateContainer"><div class="div1 leftDiv"><form action="javascript:void(0)"><label for="mcq">Choose one of the given options:</label><ol class="mcqList" id="mcqList"><li>Option 1 &nbsp; <button class="btn btn-outline-secondary my-2 my-sm-0" id="mcqOption" onclick="addMcqOption(' + p + ')">Add Option</button></li><br/></ol><br/></form></div><div class="div2 rightDiv"><img class="sideImage" src="static/images/form_logo.jpg"/></div></div></div>').appendTo('.slideshow-container')
//     $('<span class="dot" onclick="currentSlide(' + z + ')"></span>').appendTo('.dotSpan')
//     z=z+1
// }

function addMcq(){ 
    $('<div class="mySlides"><div class="templateContainer"><div class="div1 leftDiv"><form action="javascript:void(0)"><input type="text" onblur="getValue(this)" /><ol class="mcqList" id="mcqList"><li><input type="text" onblur="getValue(this)" /> &nbsp; <button class="btn btn-outline-secondary my-2 my-sm-0" id="mcqOption" onclick="addMcqOption(' + p + ')">Add Option</button></li><br/></ol><br/></form></div><div class="div2 rightDiv"><img class="sideImage" src="static/images/form_logo.jpg"/></div></div></div>').appendTo('.slideshow-container')
    $('<span class="dot" onclick="currentSlide(' + z + ')"></span>').appendTo('.dotSpan')
    z=z+1
}

function getValue(ele){
    console.log(ele.value);
    $(ele).hide().after('<span class="dfk">' + ele.value + '</span>');
    $(ele).attr('contenteditable','true');
}

// $('.dfk').click(function(){
//     $('.dfk').hide();
//     $(ele).show();
// }
// );

// function edit1(ele) {
//     ele.parentNode.hide();
//     $('.textboxes input[type=text]').show();
// });

// function editValue(){
//     // $('.dfk').hide();
//     // console.log(ele);
//     // $(ele).show();
// //   ele.contentEditable = true;
//   console.log("The p element above is now editable. Try to change its text.");
// }

// $("input[type='text']").blur(function(){
//     $(this).hide().after('<span class="dfk">' + $(this).val() + '</span>');  

// });
// $("#editBut").click(function() {
//      $('.textboxes span').hide();
//      $('.textboxes input[type=text]').show();
// });


function addMcqOption(p){
    $('<li id="ele' + p + '"><input type="text" onblur="getValue(this)" />&nbsp;<button class="btn btn-outline-secondary my-2 my-sm-0" id="mcqOption" onclick="removeElement(this)">X</button></li><br/>').appendTo('.mcqList')
    p=p+1
}


var aa = 2
function addImageMcq(){
    $('<div class="mySlides"><div class="templateContainer"><div class="div1 leftDiv"><form action="javascript:void(0)"><input type="text" onblur="getValue(this)" />&nbsp;<ol class="imageMcqList" id="imageMcqList"><li><input type="file" accept="image/*"> &nbsp;<button class="btn btn-outline-secondary my-2 my-sm-0" id="imageMcqOption" onclick="addImageMcqOption(' + aa + ')">Add Option</button></li><br/></ol><br/></form></div><div class="div2 rightDiv"><img class="sideImage" src="static/images/form_logo.jpg"/></div></div></div>').appendTo('.slideshow-container')
    $('<span class="dot" onclick="currentSlide(' + z + ')"></span>').appendTo('.dotSpan')
    z=z+1
}

function addImageMcqOption(aa){
    $('<li id="ele' + aa + '"><input type="file" accept="image/*"> <button class="btn btn-outline-secondary my-2 my-sm-0" id="imageMcqOption" onclick="removeElement(this)">X</button></li><br/>').appendTo('.imageMcqList')
    p=p+1
}

function addShortText(){
    $('<div class="mySlides"><div class="templateContainer"><div class="div1 leftDiv"><input type="text" placeholder="Enter some text.."/></div><div class="div2 rightDiv"><img class="sideImage" src="static/images/form_logo.jpg"/></div></div></div>').appendTo('.slideshow-container')
    $('<span class="dot" onclick="currentSlide(' + z + ')"></span>').appendTo('.dotSpan')
    z=z+1
}

function addLongText(){
    $('<div class="mySlides"><div class="templateContainer"><div class="div1 leftDiv"><textarea placeholder="Enter some text.."></textarea></div><div class="div2 rightDiv"><img class="sideImage" src="static/images/form_logo.jpg"/></div></div></div>').appendTo('.slideshow-container')
    $('<span class="dot" onclick="currentSlide(' + z + ')"></span>').appendTo('.dotSpan')
    z=z+1

}

function addComment(){
    $('<div class="mySlides"><div class="templateContainer"><div class="div1 leftDiv"><p><textarea>Add Comment</textarea></p></div><div class="div2 rightDiv"><img class="sideImage" src="static/images/form_logo.jpg"/></div></div></div>').appendTo('.slideshow-container')
    $('<span class="dot" onclick="currentSlide(' + z + ')"></span>').appendTo('.dotSpan')
    z=z+1

}

function addRadio(){
    $('<div class="mySlides"><div class="templateContainer"><div class="div1 leftDiv"><input type="text" onblur="getValue(this)" /><br><input type="radio" id="yes" name="eitheror" value="Yes">&nbsp;<label for="yes">Yes</label><br><input type="radio" id="no" name="eitheror" value="No">&nbsp;<label for="css">No</label><br></div><div class="div2 rightDiv"><img class="sideImage" src="static/images/form_logo.jpg"/></div></div></div>').appendTo('.slideshow-container')
    $('<span class="dot" onclick="currentSlide(' + z + ')"></span>').appendTo('.dotSpan')
    z=z+1

}
// style="overflow-y: scroll;max-height:400px;width:100%;"
function addLikert(){
    $('<div class="mySlides"><div class="templateContainer" style="overflow-y: scroll;max-height:400px;width:100%;"><div class="div1 leftDiv"><form action="javascript:void(0)"><ol class="likertList"><li><input type="text" onblur="getValue(this)" />&nbsp;<button class="btn btn-outline-secondary my-2 my-sm-0" id="likertOption" onclick="addLikertOption(' + aa + ')">Add Likert</button><ul class="likert"><li><input type="radio" name="likert" value="1"><label>1</label></li><li><input type="radio" name="likert" value="2"><label>2</label></li><li><input type="radio" name="likert" value="3"><label>3</label></li><li><input type="radio" name="likert" value="4"><label>4</label></li><li><input type="radio" name="likert" value="5"><label>5</label></li></ul></li></ol></form></div><div class="div2 rightDiv"><img class="sideImage" src="static/images/form_logo.jpg"/></div></div></div>').appendTo('.slideshow-container')
    $('<span class="dot" onclick="currentSlide(' + z + ')"></span>').appendTo('.dotSpan')
    z=z+1
}

function addLikertOption(aa){
    $('<li id="lik' + aa + '"><input type="text" onblur="getValue(this)" /><ul class="likert"><li><input type="radio" name="likert" value="1"><label>1</label></li><li><input type="radio" name="likert" value="2"><label>2</label></li><li><input type="radio" name="likert" value="3"><label>3</label></li><li><input type="radio" name="likert" value="4"><label>4</label></li><li><input type="radio" name="likert" value="5"><label>5</label></li>&nbsp; &nbsp;<button class="btn btn-outline-secondary my-2 my-sm-0" id="likertOption" onclick="removeLikert(this)">X</button></ul></li><br/>').appendTo('.likertList')
    // alert('Likert added..')
}

function removeElement(ele){
    console.log('removing element')
    ele.parentNode.remove()
}

function removeLikert(ele){
    console.log('removing likert')
    // ele.parentNode.remove()
    ele.parentNode.parentNode.remove()
}

function removeSlide(ind){
    console.log(ind)
    console.log('removing slide')
    var slides = document.getElementsByClassName("mySlides");
    $(slides[ind-1]).remove()
    var dots = document.getElementsByClassName("dot");
    $(dots[ind-1]).remove()
    z=z-1
    // ele.parentNode.remove()
}

function showWorkspace(){
    $('.slideshow-container').show()
    $('.dotSpan').show()
    $('#templateName').show()
    $(".slideshow-container").attr('id', 'slideshow-container1');
    // $(".slideshow-container").html('')
    // $('.dotSpan').html('')
}

// $('#templateName').change(function(){
//     $('#templateTitle').innerHTML = $('#templateName').value
// })


function downloadInnerHtml(){
    var fileContent = "data:text/html," + '<br><br><br><div class="slideshow-container" style="width:100%;height:450px;border:2px solid black;">' + document.getElementById("slideshow-container1").innerHTML + '</div><br/><br/><div class="dotSpan" id="dotSpan" style="text-align:center;">' + document.getElementById("dotSpan").innerHTML + '</div>';
    console.log(fileContent)
    var filename = document.getElementById('templateName').value + ".html";
    var f = new File([fileContent], filename, {type: "text/html"})
    console.log(f)
    var file_data = f;
        console.log(file_data);
        var formData = new FormData();
      
          formData.append("uploadedFile", file_data);
          console.log(formData);
            // var form_data = new FormData($('#uploadForm')[0]);
            $.ajax({
                type: 'POST',
                url: '/publishForm',
                data: formData,
                contentType: false,
                cache: false,
                processData: false,
                success: function(data) {
                    console.log('Success!');
                    alert('Success!');
                },
            });


}

function leftLayout(){
    console.log('left...')
    $('.div1').removeClass('rightDiv')
    $('.div1').addClass('leftDiv')
    $('.div2').removeClass('leftDiv')
    $('.div2').addClass('rightDiv')
}

function rightLayout(){
    console.log('right...')
    $('.div1').removeClass('leftDiv')
    $('.div1').addClass('rightDiv')
    $('.div2').removeClass('rightDiv')
    $('.div2').addClass('leftDiv')
}
