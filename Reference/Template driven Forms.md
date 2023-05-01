Angular Template-Driven Forms are a way to build forms in Angular that are primarily driven by HTML templates. In this approach, the form fields are defined directly in the HTML template using special directives provided by Angular, which automatically generate the necessary form controls and validators.

Here are the basic steps to create a Template-Driven Form in Angular:

1. Import the FormsModule in your app.module.ts file:

```typescript
import { FormsModule } from '@angular/forms';
@NgModule({
  imports: [
    FormsModule
  ]
})
```

2. Create a new component with a template containing the form controls:

```html
<form #myForm="ngForm" (ngSubmit)="submitForm(myForm)">
  <label>
    Name:
    <input type="text" name="name" ngModel required />
  </label>
  <label>
    Email:
    <input type="email" name="email" ngModel required />
  </label>
  <button type="submit">Submit</button>
</form>
```

In this example, we use the `ngModel` directive to bind the form fields to a component property. We also use the `required` attribute to indicate that the fields are required.

3. Implement the submitForm() method in the component class:

```typescript
import { Component } from "@angular/core";
@Component({
  selector: "my-component",
  template: `
    <form #myForm="ngForm" (ngSubmit)="submitForm(myForm)">
      <label>
        Name:
        <input type="text" name="name" ngModel required />
      </label>
      <label>
        Email:
        <input type="email" name="email" ngModel required />
      </label>
      <button type="submit">Submit</button>
    </form>
  `,
})
export class MyComponent {
  submitForm(form: NgForm) {
    if (form.valid) {
      console.log(form.value);
    }
  }
}
```

In this example, we check if the form is valid before submitting it. If it is valid, we log the form values to the console.

Template-Driven Forms in Angular are a quick and easy way to build forms, but they have some limitations when it comes to complex form validation and custom form controls. If you need more control over your forms, you can also use Reactive Forms in Angular.
++++
