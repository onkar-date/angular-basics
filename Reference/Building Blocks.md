# Modules

1. An Angular application is typically divided into multiple modules, each of which contains a set of related components, services, and directives.
2. Modules provide a way to organize an application and make it easier to manage.
3. Commands to generate module
   a. `ng generate module <module-name>`
   b. `ng g m <module-name>`
   c. `ng g m <module-name> --routing` ---> this will create a routing file for the module

# Components

1. Components are the basic building blocks of an Angular application.
2. They are responsible for rendering the UI and handling user interactions.
3. Each component has its own template, styles, and logic, and they can be nested within each other to create more complex UIs.
4. Commands to generate component
   a. `ng generate component <component-name>`
   b. `ng g c <component-name>`
   c. `ng g c <component-name> -is` ---> this will not create a style file (is stands for inline-style)

# Services

1. Services are used to provide functionality that can be shared across multiple components.
2. They are typically used for tasks such as fetching data from a server, handling authentication, or logging.
3. Services are singleton objects, which means that there is only one instance of a service in an application.
4. Commands to generate services
   a. `ng generate service <service-name>`
   b. `ng g s <service-name>`

# Directives

1. Directives are used to manipulate the DOM (Document Object Model) in an Angular application.
2. Directives do not have HTML file associated with them.
3. They are essentially instructions that tell Angular how to modify the HTML that is rendered in the browser.
4. There are two types of directives in Angular :
   a. structural directives :- Used to add or remove elements from the DOM
   b. attribute directives :- attribute directives are used to modify the behavior or appearance of existing elements.
5. Commands to generate directives
   a. `ng generate directive <directive-name>`
   b. `ng g d <directive-name>`

# Templates

1. Templates are used to define the structure and appearance of the UI in an Angular application.
2. They are typically written in HTML, and they can include Angular-specific syntax such as directives and data bindings.

# Data Binding

1. Data binding is a feature that allows you to connect data in your application with the UI elements that display that data.
2. There are three types of data binding in Angular :-
   a. interpolation,
   b. property binding
   c. event binding.

# Dependency Injection

1. Dependency injection is a design pattern that is used to manage the dependencies between different components and services in an Angular application.
2. It allows you to easily inject instances of services into components, and it helps to make your application more modular and maintainable.
