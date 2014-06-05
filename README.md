Vibr
=========

jQuery plugin creates vibration effect.

Usage
===

To use Vibr you just need to have **jQuery** (>= 1.5.x) and **vibr** loaded in your page:

```html
<script src="//ajax.googleapis.com/ajax/libs/jquery/1.11.1/jquery.min.js"></script>
<script src="jquery.vibr.js"></script>
```

And call the function on your html element to add vibration effect

```javascript
$('div.class').vibr();
```

Options
===

Vibr accepts an options like that:

```javascript
$('div.class').vibr({
    h_spread: 5,
    v_spread: 2,
    speed: 50,
    delay: 3000
  });
```
#### **Horisontal spread**

integer (default: 3)

```javascript
h_spread: 3
```
#### **Vertical spread**

integer (default: 1)

```javascript
v_spread: 1
```
#### **Speed of vibration**

integer (default: 50)

```javascript
speed: 50
```
#### **Delay between vibrations**

integer (default: 2000)

```javascript
delay: 2000
```
