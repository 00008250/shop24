		//Comment adder

var comments = [];    // container of comments

function display(){    // this is the function for displaying items which are in the comment array, to html 
	$('.comments').html('');
	comments.forEach((x,i)=>{   //forEach is the function which loops items in the array
		var h5 = document.createElement("h5");   //cratingElements is used for creating html tages in the javascrip dynamically
		var p = document.createElement("p");
		var li = document.createElement("li")
		var txt = document.createTextNode(x.text);  // this creates text elemts
		var name = document.createTextNode(x.name);

		h5.append(name);   // append is used for adding items to html tags 
		p.append(txt);
		li.append(h5)
		li.append(p)
		$('.comments').append(li);
		$('.comments').append(li);
	});
}

$('#button').click(()=>{     //this is the validation of comment form 
	event.preventDefault();
	var name = document.querySelector('#formGroupExampleInput').value; 
	var text = document.querySelector('#exampleTextarea').value;	
	

	if (name.length !== 0 && text.length !== 0) {
		comments.push({name: name, text: text});
		display();                                 // this is calling display() function which is above if the validation is correct 
		document.querySelector('#formGroupExampleInput').value = ''; 
		document.querySelector('#exampleTextarea').value = '';
	}else{
		alert("Please, fill in the all lines")
	}
});


		//To top function

$(document).ready(function(){ 
    $(window).scroll(function(){ 
        if ($(this).scrollTop() > 150) { 
            $('#scroll_top').fadeIn(); 
        } else { 
            $('#scroll_top').fadeOut(); 
        } 
    }); 
    $('#scroll_top').click(function(){ 
    	event.preventDefault();
        $("html, body").animate({ scrollTop: 0 }, 500); 
        return false; 
    }); 
});


$('#buy').click(()=>{
	event.preventDefault();
	alert('Thank you for your purchase!')
})