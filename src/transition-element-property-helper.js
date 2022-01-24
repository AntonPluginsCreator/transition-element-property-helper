/*!
 * transition-element-property-helper v1.1.3 (https://github.com/AntonPluginsCreator/transition-element-property-helper)
 * Copyright (c) 2021-2022 Anton Maklakov
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
    /*Function that gets transition data*/
    function getData(element){
        /*Array with all the values of the transition properties:["0s,...","1s,...","transform,...","ease,..."]*/
        let arrayTransition=[
            getArray(getComputedStyle(element).transitionDelay),
            getArray(getComputedStyle(element).transitionDuration),
            getArray(getComputedStyle(element).transitionProperty),
            getArray(getComputedStyle(element).transitionTimingFunction)
        ];
        /*Array for transition data*/
        let transitionData=[];
        /*Transition element object template*/
        let properties={Delay:'',Duration:'',Property:'',TimingFunction:''};
        /*Loop for creating objects by the number of transition elements*/
        for(let i=0;i<getLength(getComputedStyle(element).transition);i++){
            /*Updating template values*/
            arrayTransition.forEach((arr,index)=>{
                properties[String(Object.keys(properties)[index])]=arr[i].replace(/ +/g, ' ').trim();
            });
            /*Adding an updated template to an array with transition data*/
            transitionData.push(properties);
            /*Template refresh*/
            properties={Delay:'',Duration:'',Property:'',TimingFunction:''};
        }
        return transitionData;
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
        /*Function that shows the transition value once*/
        showTransition(){
            this._element ? console.log("Transition: "+getComputedStyle(this._element).transition) : onError(1);
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
            this._element ? console.table(getData(this._element)) : onError(1);
        }
        /*Function that shows the value of the transition properties in an array once*/
        showTransitionArray(){
            this._element ? console.log(getData(this._element)) : onError(1);
        }
        /*Function that shows the value of the transition properties in a JSON string once*/
        showTransitionJSON(){
            this._element ? console.log(JSON.stringify(getData(this._element))) : onError(1);
        }
    }
}));