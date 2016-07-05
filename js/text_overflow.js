 $.fn.extend({  
	 	//文本溢出用...表示
        text_overflow:function () {
			
			//默认值150个字节  
            var displayLength = 150; 
			
			//判断是否有设置长度
            displayLength = this.attr("displayLength") || displayLength; 
			
			//获取html文本如果为空这返回""  
            var text = this.html(); 
            if (!text) return "";  
  			
            var result = "";  
            var count = 0;
			var x = 0;  
            for (var i = 0; i < displayLength; i++) {  
                var _char = text.charAt(i);  
                if (count >= displayLength)  break;  
                if (/[^x00-xff]/.test(_char))  count++;  //双字节字符，//[u4e00-u9fa5]中文  
  
                result += _char;  
                count++;
				x++; 
            }  
            if (result.length < text.length) {  
                result += "...";  
            } 
            this.html(result);  
			
			var text_hide = "";
			for(;x<text.length;x++){
				var _char = text.charAt(x);
				text_hide += _char;
			}
			var a = $("<div></div>").attr("class","hide_div_text");
			a.html(text_hide).hide();
			a.appendTo(this);
			
        }  ,
		
		//还原文本溢出代替
		text_reduction : function(){
			var hide_div_html = ""
			if(0 != this.find(".hide_div_text")){
				 hide_div_html = this.find(".hide_div_text").html();
				this.find(".hide_div_text").remove();
			}
			var html_  =  this.html();
		    html_ = html_.substring(0, html_.length - "...".length) ;
			this.html(html_+hide_div_html);
		},
		
		//切换
		un_displayPart : function(){
			if(0 == this.find(".hide_div_text").length)
			this.text_overflow();
			else
			this.text_reduction()
		}
    });  