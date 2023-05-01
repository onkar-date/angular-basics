Angular components have a lifecycle consisting of several lifecycle hooks or methods that provide developers with ways to respond to events during the component's creation, change detection, and destruction.

Here are the lifecycle methods of an Angular component, in the order they are called:

1. ngOnChanges() - This method is called whenever one or more of the component's input properties changes.

2. ngOnInit() - This method is called once when the component is first created. This is typically where you would perform initialization tasks such as retrieving data from a server.

3. ngDoCheck() - This method is called during every change detection cycle and allows the developer to implement custom change detection logic.

4. ngAfterContentInit() - This method is called after the component's content has been initialized.

5. ngAfterContentChecked() - This method is called after the component's content has been checked for changes.

6. ngAfterViewInit() - This method is called after the component's view has been initialized.

7. ngAfterViewChecked() - This method is called after the component's view has been checked for changes.

8. ngOnDestroy() - This method is called when the component is about to be destroyed. This is typically where you would perform cleanup tasks such as unsubscribing from observables.

It's important to note that not all of these lifecycle methods are always necessary to implement. In most cases, you will only need to implement a few of them depending on the specific needs of your application.
