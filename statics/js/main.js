    // var offsetX = 0;
    // var offsetY = 0;
    var posX = 0;
    var posY = 0;
    var rect_num = 0;
    var poly_num = 0;
    $(document).ready(()=>{
        // offsetX = $("#image").offset().left;
        // offsetY = $("#image").offset().top;
        // console.log("OffsetX : " + offsetX);
        // console.log("OffsetY : " + offsetY);

        $.contextMenu({
            selector: '#image', 
            callback: function(key, options) {
                var m = "clicked: " + key;
                window.console && console.log(m);
                if (key === "rect"){
                    // alert("rect");
                    startRect();
                }else if (key === "poly"){
                    // alert("poly");
                }
            },
            items: {
                "rect": {name: "Create Rect", icon: "rect"},
                "poly": {name: "Create Poly", icon: "poly"},               
                "sep1": "---------",
                "close": {name: "Quit", icon: function(){
                    return 'context-menu-icon context-menu-icon-close';
                }}
            }
        });

        $('#image').on('mousedown', function(e){                                
            posX = e.pageX ;
            posY = e.pageY ;
            console.log(posX + " : " + posY);
        });

        $( "#menu" ).draggable();
    });

    function startRect(){
        var rect = new Rect();
        rect.posX = posX;
        rect.posY = posY;
        rect.number = rect_num;        
        rect.showSelectRegion();        
        rect_num+=1;
    }


