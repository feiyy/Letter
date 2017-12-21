$(function(){
	
	$("#content p").each(function(i){
		setTimeout(function(){
			$("#content p").eq(i).fadeIn();
		},i*2000);
	});
	$("#plus").click(function(){
		$("#file").click();
		
	});
	setTimeout(function(){
		$("#god").fadeIn(1000);
		$("#god").animate({left:'50px'});
	},1000);
	setTimeout(function(){
		$("#people").fadeIn(1000);
		$("#people").animate({right:'460px'});
	},3000);
	setTimeout(function(){
		$("#ruidao").fadeIn(1000);
		$("#ruidao").animate({left:'350px'});
	},5000);
	function gif()
	{
		setInterval(function(){
			$("#open img").animate({
				width: '140%',
				height: '140%', 
				left:'-20%', 
				top:'-20%' 
			},1000);
			$("#open img").animate({
				width: '100%',
				height: '100%', 
				left:'0px', 
				top:'0px'
			},1000);
		},1800); 
	}
	setTimeout(function(){
    	gif();
    },7000);
	
	
	$("#open img").click(function(){
		location.href = "letter2.html";
	});
	
	var texts1  = $("#texts1");  
    var s1 = $("#texts1 p").text();  
    var len1 = s1.length;  
    var index1 = 0;  
    var tid1 = null;  
 
    function start1(){  
    	texts1.text('');  
        tid1 = setInterval(function(){  
            texts1.append(s1.charAt(index1));  
            if(index1 ++ === len1){  
                clearInterval(tid1);  
                index1 = 0;  
            }  
        },100);  
    } 
    setTimeout(function(){
    	start1();
    	
    },6500);
    
	var texts2  = $("#texts2");  
    var s2 = $("#texts2 p").text();  
    var len2 = s2.length;  
    var index2 = 0;  
    var tid2 = null;  
    
    function start2(){  
    	texts2.text('');  
        tid2 = setInterval(function(){  
            texts2.append(s2.charAt(index2));  
            if(index2 ++ === len2){  
                clearInterval(tid2);  
                index2 = 0;  
            }  
        },100);  
    } 
    
    setTimeout(function(){
    	start2();
    },8500);
	
	/*swidth = parseInt(window.screen.width);
	sheight = parseInt(window.screen.height);
	console.log(swidth);
	console.log(sheight);*/
	
	/*awidth = parseInt(window.screen.availWidth);
	aheight = parseInt(window.screen.availHeight);
	console.log(awidth);
	console.log(aheight);*/
	iwidth = parseInt($("#wrapper2").width());
	console.log(iwidth);
	iheight = parseInt($("#wrapper2").height());
	console.log(iheight);
	$("#content p").css("line-height",iheight*0.025+"px");
 	$("#blank").css("height",iheight*0.135+"px");
    
	
    
    
    
	
});
function insertimg(file)
{
	if(file.files && file.files[0])
	{
	 	var reader = new FileReader();
	 	reader.readAsDataURL(file.files[0]);
	 	reader.onload = function(e)
	 	{
		    $("#imgwrapper img").attr("src",e.target.result)
		    $("#imgwrapper img").show();
		    $("#saveimg").show();
		}
	}
	else
	{
		$("#imgwrapper img").attr("src",e.target.result)
	}
	$("#div_saveimg").show();
}
function saveimg()
{
	$("audio").remove();
	$("#div_saveimg").hide();
	html2canvas(document.getElementById("wrapper2")).then(
		//allowTaint : true;
	    function(canvas) {
	        //canvas.id = "mycanvas";
	        //document.body.appendChild(canvas);
	        //生成base64图片数据
	        var newImg = document.createElement("img");
	        newImg.setAttribute("crossorigin","Anonymous");
	        var dataUrl = canvas.toDataURL();
	        newImg.src =  dataUrl;
	        $("#wrapper2").hide();
	        document.body.appendChild(newImg);
	        $(newImg).css({
	            "width": iwidth+"px",
	            "height": iheight+"px",
	        })
	        alert("生成图片成功，长按可保存");
	    })
	
	
}


	

