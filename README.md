# TransitionElementPropertyHelper
Simple plugin for test transition property for site styles. The test results appear in the console.

## Start Plugin

```javascript
new TransitionElementPropertyHelper(document.getElementById('div1')).start();
```

## Functions

The function that starts the transition test when the transition fires

```javascript
TransitionElementPropertyHelper(document.getElementById('div1')).start();
```

A function that shows the transition-delay once

```javascript
TransitionElementPropertyHelper(document.getElementById('div1')).showDelay();
```

A function that shows the transition-duration once

```javascript
TransitionElementPropertyHelper(document.getElementById('div1')).showDuration();
```

A function that shows the transition-property once

```javascript
TransitionElementPropertyHelper(document.getElementById('div1')).showProperty();
```


A function that shows the transition-timing-function once

```javascript
TransitionElementPropertyHelper(document.getElementById('div1')).showTimingFunction();
```
## The result of the plugin
### Console
```
Transition: transform 1s ease 0s
Delay: 0s
Duration: 1s
Property: transform
Timing function: ease
plugin.js:30 Timing function: ease
```
