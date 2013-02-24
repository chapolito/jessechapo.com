$(document).ready(function() {  
    $('input[type="email"]').addClass("idleField")
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

// Avoid `console` errors in browsers that lack a console.
(function() {
    var method;
    var noop = function () {};
    var methods = [
        'assert', 'clear', 'count', 'debug', 'dir', 'dirxml', 'error',
        'exception', 'group', 'groupCollapsed', 'groupEnd', 'info', 'log',
        'markTimeline', 'profile', 'profileEnd', 'table', 'time', 'timeEnd',
        'timeStamp', 'trace', 'warn'
    ];
    var length = methods.length;
    var console = (window.console = window.console || {});

    while (length--) {
        method = methods[length];

        // Only stub undefined methods.
        if (!console[method]) {
            console[method] = noop;
        }
    }
}());