/*!
 * transition-element-property-helper v1.1.0 (https://github.com/AntonPluginsCreator/transition-element-property-helper)
 * Copyright (c) 2021 Anton Maklakov
 * Licensed under MIT (https://github.com/AntonPluginsCreator/transition-element-property-helper/blob/main/LICENSE)
 */
(function (root, factory) {
    if (typeof module !== 'undefined' && module.exports) {
        module.exports = factory();
    } else {
        root.TransitionElementPropertyHelper = factory();
    }
}(this, function () {
    "use strict";
    /*Function that starts when an error occurs*/
    function onError(typeErr){
        switch(typeErr){
            case 1:
             console.error('Element not found');
            break;
            default:
             console.error('Error');
            break;
        }
    }
    /*Function that gets the length of an array of strings*/
    function getLength(element){
        return element.split(',').length;
    }
    /*Function that converts a string to an array*/
    function getArray(element){
        return element.split(',');
    }
    return class TransitionElementPropertyHelper{
        constructor(element){
            this._element=element;
        }
        /* Function that starts the transition test when the transition starts*/
        start(){
            /* An event handler that starts when the transition starts*/
            this._element.addEventListener('transitionstart',()=>{
                if(this._element){
                    console.log("Transition: "+getComputedStyle(this._element).transition);
                    console.log("Delay: "+getComputedStyle(this._element).transitionDelay);
                    console.log("Duration: "+getComputedStyle(this._element).transitionDuration);
                    console.log("Property: "+getComputedStyle(this._element).transitionProperty);
                    console.log("Timing function: "+getComputedStyle(this._element).transitionTimingFunction);
                }else{
                    onError(1);
                }
            });
        }
        /*Function that shows the transition-delay value once*/
        showDelay(){
            this._element ? console.log("Delay: "+getComputedStyle(this._element).transitionDelay) : onError(1);
        }
        /*Function that shows the transition-duration value once*/
        showDuration(){
            this._element ? console.log("Duration: "+getComputedStyle(this._element).transitionDuration) : onError(1);
        }
        /*Function that shows the transition-property value once*/
        showProperty(){
            this._element ? console.log("Property: "+getComputedStyle(this._element).transitionProperty) : onError(1);
        }
        /*Function that shows the transition-timing-function value once*/
        showTimingFunction(){
            this._element ? console.log("Timing function: "+getComputedStyle(this._element).transitionTimingFunction) : onError(1);
        }
        /*Function that displays a table and/or array with transition-property,
        transition-duration, transition-timing-function, and transition-delay values once*/
        showTransitionTable(){
            if(this._element){
                /*Сondition that is triggered if there are more than one transition elements*/
                if(getLength(getComputedStyle(this._element).transition)>1){
                    /*Array with all the values of the transition properties:["0s,...","1s,...","transform,...","ease,..."]*/
                    let arrayTransition=[
                        getArray(getComputedStyle(this._element).transitionDelay),
                        getArray(getComputedStyle(this._element).transitionDuration),
                        getArray(getComputedStyle(this._element).transitionProperty),
                        getArray(getComputedStyle(this._element).transitionTimingFunction)
                    ];
                    /*Array for table data*/
                    let tableData=[];
                    /*Transition element object template*/
                    let properties={Delay:'',Duration:'',Property:'',TimingFunction:''};
                    /*Loop for creating objects by the number of transition elements*/
                    for(let i=0;i<getLength(getComputedStyle(this._element).transition);i++){
                        /*Updating template values*/
                        arrayTransition.forEach((arr,index)=>{
                            properties[String(Object.keys(properties)[index])]=arr[i].replace(/ +/g, ' ').trim();
                        });
                        /*Adding an updated template to an array with table data*/
                        tableData.push(properties);
                        /*Template refresh*/
                        properties={Delay:'',Duration:'',Property:'',TimingFunction:''};
                    }
                    console.table(tableData);
                }
                else{
                    /*Displays the table if there are one or zero transition elements*/
                    console.table([{
                        Delay:getComputedStyle(this._element).transitionDelay,
                        Duration:getComputedStyle(this._element).transitionDuration,
                        Property:getComputedStyle(this._element).transitionProperty,
                        TimingFunction:getComputedStyle(this._element).transitionTimingFunction
                    }])
                }
            }else onError(1);
        }
    }
}));
