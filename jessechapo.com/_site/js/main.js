$(document).ready(function() { 

    var $fn = $("#currentFootnote div");
    $fn.parent().hide();
    var fnIsDismissed = true;

    $('a[rel=footnote]').click(function() {
        $fnRef = $(this).attr("name");
        $fnText = $($fnRef).html().trim().split('<a href="#')[0];
        if (fnIsDismissed) {
            $fn.html($fnText).parent().animate({
                height: "toggle",
                opacity: "toggle"
            }, 'slow');
            fnIsDismissed = false; 
        }  else {
            $fn.parent().animate({
                height: "toggle",
                opacity: "toggle"
            }, '1000');
            if ($fnText != $fn.html()) { //if footnote clicked is not the one already being displayed
                setTimeout(function() {
                    $fn.html($fnText).parent().animate({
                        height: "toggle",
                        opacity: "toggle"
                    }, 'slow');
                    fnIsDismissed = false; 
                }, 800);
            } else fnIsDismissed = true; //if it is itself just leave dismissed
        }

        var $window = $(window);
        var $startingScrollHeight = $window.scrollTop();
        console.log($startingScrollHeight);
        var deltaScroll = 0;
        $(window).scroll(function() {
            deltaScroll = ($window.scrollTop() - $startingScrollHeight);
            if ((deltaScroll > 500 || deltaScroll < -500) && !fnIsDismissed) {
                $fn.parent().animate({
                    height: "toggle",
                    opacity: "toggle"
                }, '1000');
                fnIsDismissed = true; 
            }
        }); 
    });

    $fn.parent().click(function(evt) {
        if ($(evt.target).attr('href')) return true;
        $fn.parent().animate({
            height: "toggle",
            opacity: "toggle"
        }, 'slow');
        fnIsDismissed = true;
    })
    
    $('input[type=email]').addClass('idleField')
    .focus(function() {  
        $(this).removeClass('idleField').removeClass('completedField').addClass('focusField');  
        if (this.value == this.defaultValue){  
            this.value = '';  
        }  
        if(this.value != this.defaultValue){  
            this.select();  
        }  
    })
    .blur(function() {  
        $(this).removeClass('focusField');
        if ($.trim(this.value) == ''){  
            $(this).addClass('idleField'); 
            this.value = (this.defaultValue ? this.defaultValue : '');  
        }  else {
            $(this).addClass('completedField');
        }
    });  
});  