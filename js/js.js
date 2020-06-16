
      /*Slide Show*/

var images = ['images/slide1.jpg', 'images/slide2.jpg', 'images/slide3.jpg'];  //location of images for slide show
var indexImage = 0;   //the index of images


setInterval(function(){  
	indexImage++;        //inciment index of image by 1
	if (indexImage > 2) {  //if the index of image is less than 2 it will return it 0 
		indexImage = 0;
	}

	$(".the_image_container").css("background-image", "url("+images[indexImage] +")");  //this adds the images for image container from array in terms of  index
},4000);


		/*To Top*/

$(document).ready(function(){      //document rady function
    $(window).scroll(function(){      // scroll function
        if ($(this).scrollTop() > 150) {   //if the top of the window scrolled more than 150px 
            $('#scroll_top').fadeIn(); 		// the top button will appear
        } else { 
            $('#scroll_top').fadeOut();   //else it will disappear 
        } 
    }); 
    $('#scroll_top').click(function(){     // the function when top button is clicked
    	event.preventDefault();			// it will prevent window will not refresh
        $("html, body").animate({ scrollTop: 0 }, 500); //the animation after clicking top button. it will scroll up smoothly in half second
        return false; 
    }); 
});



		//validation

$('.btn').click(()=>{        //the validation for form in contact page
	event.preventDefault();
	var formGroupExampleInput = document.querySelector('#formGroupExampleInput').value;
	var exampleInputEmail1 = document.querySelector('#exampleInputEmail1').value;         
	var exampleTextarea = document.querySelector('#exampleTextarea').value;
	if (formGroupExampleInput.length === 0 && exampleInputEmail1.length === 0 && exampleTextarea.length ===0 ) {   //validation
		alert('Please, fill the all lines!')
	}else{
		alert('Thank you for your message!')
	}
})



