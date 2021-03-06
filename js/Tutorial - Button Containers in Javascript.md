# Creating a button container:

```html
<!DOCTYPE html>
<html>
  <head>
    <title>Page Title</title>

    <style>
      /* Style for the 'buttonContainer' class */
      .buttonContainer {
        width: 148px;
      }
      /* Style for 'buttonClass' elements inside a 'buttonContainer' 
            
               We can think of the '>' combinator as a sort of binary operator:
               the syntax 'parent > child' specifies that we're selecting ONLY 
               elements of type 'child' that are within elements of type 'parent'. 
            */
      .buttonContainer > .buttonClass {
        width: 72px;
        height: 48px;
        font-size: 16px;
      }
    </style>
  </head>

  <body>
    <div id="btns" class="buttonContainer">
      <button id="btn1" class="buttonClass">1</button>
      <button id="btn2" class="buttonClass">2</button>
      <button id="btn3" class="buttonClass">3</button>
      <button id="btn4" class="buttonClass">4</button>
    </div>
  </body>
</html>
```

# Scaling button layout

```html
<!DOCTYPE html>
<html>
  <head>
    <title>Page Title</title>

    <style>
      .buttonContainer {
        width: 20%;
      }

      .buttonContainer > .buttonClass {
        width: 33%;
        height: 48px;
        font-size: 16px;
      }
    </style>
  </head>

  <body>
    <div id="btns" class="buttonContainer">
      <button id="btn1" class="buttonClass">1</button>
      <button id="btn2" class="buttonClass">2</button>
      <button id="btn3" class="buttonClass">3</button>
      <button id="btn4" class="buttonClass">4</button>
    </div>
  </body>
</html>
```
