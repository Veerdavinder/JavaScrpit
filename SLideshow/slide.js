var a=0;
	var images=[];
	
	images[0]='image_1.jpg';
	images[1]='image_2.jpg';
	images[2]='image_3.jpg';
	images[3]='image_4.jpg';
	
	function changeImg()
	{
		document.slide.src=images[a];
		
		if(a<images.length-1)
		{
			a++;
		}
		else
		{
			a=0;
		}
		
		setTimeout("changeImg()",4000);
	}
	window.onload=changeImg;