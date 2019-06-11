import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'fb-ex3-static-form-layout',
  template: `
    <pre>This form is not dynamic. Just a template</pre>
    <form>
      <div class="form-group form-check">
        <input type="checkbox" class="form-check-input" id="chk">
        <label for="chk">Are you a Company?</label>
      </div>
      <div class="form-group">
        <input type="text" class="form-control form-control-lg is-valid" placeholder="Enter Your Name *">
        <small class="form-text text-muted">Field required</small>
      </div>
      <div class="form-group">
        <input type="text" class="form-control form-control-lg is-invalid" placeholder="Your VAT Number">
      </div>
      
      <button type="submit" class="btn btn-primary">Submit</button>
    </form>
  `
})
export class Ex3StaticFormLayoutComponent {

}
