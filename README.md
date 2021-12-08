# TransitionElementPropertyHelper
Simple plugin for test transition property for site styles. The test results appear in the console.

[![npm-version](https://img.shields.io/npm/v/transition-element-property-helper)](https://www.npmjs.com/package/transition-element-property-helper)


## Start Plugin

```javascript
new TransitionElementPropertyHelper(document.getElementById('div1')).start();
```

## Functions

The function that starts the transition test when the transition starts

```javascript
TransitionElementPropertyHelper(document.getElementById('div1')).start();
```

A function that shows the transition-delay value once

```javascript
TransitionElementPropertyHelper(document.getElementById('div1')).showDelay();
```

A function that shows the transition-duration value once

```javascript
TransitionElementPropertyHelper(document.getElementById('div1')).showDuration();
```

A function that shows the transition-property value once

```javascript
TransitionElementPropertyHelper(document.getElementById('div1')).showProperty();
```


A function that shows the transition-timing-function value once

```javascript
TransitionElementPropertyHelper(document.getElementById('div1')).showTimingFunction();
```

A function that displays a table and/or array with transition-property,
transition-duration, transition-timing-function, and transition-delay values once

```javascript
TransitionElementPropertyHelper(document.getElementById('div1')).showTransitionTable();
```

## The result of the plugin
### Console
```
Transition: transform 1s ease 0s
Delay: 0s
Duration: 1s
Property: transform
Timing function: ease
```
