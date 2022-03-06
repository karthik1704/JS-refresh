# DOM

## What is the DOM?

- Allows us to make JS interact with the browser
- We can write JS to,

  - create , modify and delete HTML elements
  - set styles , classes and attributes
  - listen and respond to events

- DOM tree is generated from an HTML document, which we can then interact with
- DOM is a very complex API that contains lots of methods and properties
  to interact with the DOM tree

## DOM API Behind Scenes

- Node - has spl methods, properties
- Represented by JS object
- Node Types,
  - Element -->(one different type of HTMLElement per HTML element)
  - Text \<P>Paragraph\</p>
  - Comment \<!--Comment-->
  - Document - all the time 
- This all work via inheritance of method and properties,(child inherited by parent)

- Any HTML elements will have access to .addEventListener(),.cloneNode() ,.closest methods

- all the node type need to listen events, by using spl node Event Target, 
    - never  manually create EventTarger(you can't create i think?, ), it's  abstract type
    - it has both node type and window
    - Event Target
        - .addEventListener()
        - .removeEventListener()
    - Window
        - **Global object**, lots of methods and properties, many unrelated to DOM.

