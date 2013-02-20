$(document).ready(function() {  
    $('input[type=email]').addClass("idleField")
    .focus(function() {  
        $(this).removeClass("idleField").removeClass("completedField").addClass("focusField");  
        if (this.value == this.defaultValue){  
            this.value = '';  
        }  
        if(this.value != this.defaultValue){  
            this.select();  
        }  
    })
    .blur(function() {  
        $(this).removeClass("focusField");
        if ($.trim(this.value) == ''){  
            $(this).addClass("idleField"); 
            this.value = (this.defaultValue ? this.defaultValue : '');  
        }  else {
            $(this).addClass("completedField");
        }
    });  
});  
