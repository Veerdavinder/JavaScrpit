
var myImages=new Array("image_1.jpg",
						"image_2.jpg",
						"image_3.jpg",
						"image_4.jpg");

 index_val=0;
function nextImage()
{
	index_val++;
	if(index_val<myImages.length)
	{
		document.images['slider'].src=myImages[index_val];
	}
	else
	{
		index_val=0;
		document.images['slider'].src=myImages[index_val];
	
	}
	
}
function preImage()
{
	index_val--;
	if(index_val>=0)
	{
		document.images['slider'].src=myImages[index_val];
	}
	else
	{
		index_val=myImages.length-1;
		document.images['slider'].src=myImages[index_val];
		
	}
	
}