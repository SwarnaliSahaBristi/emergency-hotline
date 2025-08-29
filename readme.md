1. What is the difference between **getElementById, getElementsByClassName, and querySelector / querySelectorAll**?
Answer:getElementById:selects a single element,returns a single dom object.
getElementsByClassName:selects all elements having same class name,returns a live HTML collects of elements.
querySelector:selects id,class,tag css selector;returns matching HTML element objject
querySelectorAll:selects all elements that match a specified CSS selector.Returns Nodelist elements.
2. How do you **create and insert a new element into the DOM**?
Answer:let el = document.createElement("p");
el.textContent = "Hello";
document.body.appendChild(el);
3. What is **Event Bubbling** and how does it work?
Answer:When an event (e.g., a click) occurs on a child element, it first triggers on that child and then "bubbles up" to its parent, grandparent, and so on, until it reaches the root of the DOM (or where the event listener is attached).
Event Trigger: An event occurs on a specific element (the "target element").
Bubbling Up: The event then "bubbles up" the DOM tree. This means that if an event listener is attached to any of the target element's ancestors for the same event type, that listener will also be triggered.
Execution Order: Event listeners are executed in sequence, starting from the target element and moving upwards through its ancestors.
4. What is **Event Delegation** in JavaScript? Why is it useful?
Answer:Event Delegation is a pattern based upon the concept of Event Bubbling. It is an event-handling pattern that allows you to handle events at a higher level in the DOM tree other than the level where the event was first received.
Event Delegation is a useful pattern that allows you to write cleaner code, and create fewer event listeners with similar logic.
5. What is the difference between **preventDefault() and stopPropagation()** methods?
Answer:preventDefault() and stopPropagation() are two distinct methods of the Event interface in JavaScript, used to control the behavior of events in the Document Object Model (DOM).
event.preventDefault():
This method prevents the default action associated with an event. Every event, especially those triggered by user interactions, often has a default browser behavior. preventDefault() stops this default behavior from occurring.
event.stopPropagation():
This method stops the event from propagating further through the DOM. Events in the DOM typically follow a propagation path, either bubbling up from the target element to its ancestors or capturing down from the window to the target element. stopPropagation() prevents the event from continuing along this path, meaning parent or child elements will not receive the event.
