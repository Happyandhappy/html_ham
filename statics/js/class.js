var Rect = function(){}
Rect.prototype = {
	parentId 	: "image",   	// image id
	width 	 	: 48,			// width of selection region	
	height 	 	: 48,		  	// height of selection region	
	posX 	 	: 0,			// selection region X-point
	posY 		: 0, 			// selection region Y-point	
	selection 	: null,	  		// selection instance
	number		: 0,			// rect number	
	init : function(){			// initialize
		this.width  = 48;
		this.height = 48;
		this.posX = 0;
		this.posY = 0;		
	},

	showSelectRegion : function(){  // show selection region
	    this.selection = $('#' + this.parentId).imgAreaSelect({ handles: true, instance: true });
        this.selection.setSelection(this.posX, this.posY, this.posX + this.width, this.posY + this.height, true);
        this.selection.setOptions({ show: true });
        this.selection.update();
	},
	drawRect : function(){			// draw rect on image
		var ele = "<div id='" + rect_num + "'";
        ele += "style='width:" + rect.width + "px; height:" + rect.height + "px;";
        ele += "left:" + rect.posX +"px; top:" + rect.posY + "px; border: 1px solid rgb(0, 0, 0); background-color: rgb(255, 0, 0); opacity: 0.8; font-size: 1px; color: rgb(0, 0, 0); overflow: visible; position: absolute; display: block; z-index: 500;'></div>";
        $('body').append(ele);
	}
}



var Polygen = function(){}
Polygen.prototype = {
	width : 48,
	height : 48,
	init : function(){
		width  = 48;
		height = 48;
		posX = 0;
		posY = 0;
	}
}

