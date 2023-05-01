# Components

1. Angular components are the building blocks of an Angular application.
2. It consists of a template, which defines the view to be displayed to the user, and a class that defines the behavior and logic of the component.

# Decorator

1. In Angular, components are defined using the @Component decorator, which provides metadata about the component. This metadata includes the selector, which is the name of the component as it will be used in the HTML, the template or templateUrl, which defines the HTML template to be used by the component, and the styleUrls or styles, which define the CSS styles to be used by the component.

# Lifecycle Methods

1. Each component in Angular has a lifecycle that consists of a series of events that occur during the creation, rendering, and destruction of the component.
2. These lifecycle events include :-
3. ngOnInit --> which is called when the component is initialized
4. ngOnChanges --> which is called when the component's inputs change
5. ngOnDestroy --> which is called when the component is destroyed.

# Input Output

1. Components in Angular can communicate with each other using input and output properties.
2. Input properties allow data to be passed from a parent component to a child component
3. Output properties allow events to be emitted from a child component to a parent component.

Overall, Angular components are a fundamental part of building modern web applications with Angular, and understanding how to create, use, and manage them is essential for any developer working with the Angular framework.
