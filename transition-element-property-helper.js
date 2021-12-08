(function (root, factory) {
    if (typeof module !== 'undefined' && module.exports) {
        module.exports = factory();
    } else {
        root.TransitionElementPropertyHelper = factory();
    }
}(this, function () {
    "use strict";
    /*A function that starts when an error occurs*/
    function onError(typeErr){
        switch(typeErr){
            case 1:
             console.error('Block not found');
            break;
            default:
             console.error('Error');
            break;
        }
    }
    return class TransitionElementPropertyHelper{
        constructor(block){
            this._block=block;
        }
        /* The function that starts the transition test when the transition starts*/
        start(){
            /* An event handler that starts when the transition starts*/
            this._block.addEventListener('transitionstart',()=>{
                if(this._block){
                    console.log("Transition: "+getComputedStyle(this._block).transition);
                    console.log("Delay: "+getComputedStyle(this._block).transitionDelay);
                    console.log("Duration: "+getComputedStyle(this._block).transitionDuration);
                    console.log("Property: "+getComputedStyle(this._block).transitionProperty);
                    console.log("Timing function: "+getComputedStyle(this._block).transitionTimingFunction);
                }else{
                    onError(1);
                }
            });
        }
        /*A function that shows the transition-delay value once*/
        showDelay(){
            if(this._block){
                console.log("Delay: "+getComputedStyle(this._block).transitionDelay);
            }else{
                onError(1);
            }
        }
        /*A function that shows the transition-duration value once*/
        showDuration(){
            if(this._block){
                console.log("Duration: "+getComputedStyle(this._block).transitionDuration);
            }else{
                onError(1);
            }
        }
        /*A function that shows the transition-property value once*/
        showProperty(){
            if(this._block){
                console.log("Property: "+getComputedStyle(this._block).transitionProperty);
            }else{
                onError(1);
            }
        }
        /*A function that shows the transition-timing-function value once*/
        showTimingFunction(){
            if(this._block){
                console.log("Timing function: "+getComputedStyle(this._block).transitionTimingFunction);
            }else{
                onError(1);
            }
        }
        /*A function that displays a table and/or array with transition-property,
        transition-duration, transition-timing-function, and transition-delay values once*/
        showTransitionTable(){
            if(this._block){
                console.table([{
                    Delay:getComputedStyle(this._block).transitionDelay,
                    Duration:getComputedStyle(this._block).transitionDuration,
                    Property:getComputedStyle(this._block).transitionProperty,
                    TimingFunction:getComputedStyle(this._block).transitionTimingFunction
                }]);
            }else{
                onError(1);
            }
        }
    }
}));
