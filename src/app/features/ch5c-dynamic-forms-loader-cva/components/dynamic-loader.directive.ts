// dynamic-forms/dynamic-loader.directive.ts
import { ComponentFactoryResolver, Directive, Input, OnInit, ViewContainerRef} from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { COMPONENTS } from './index';
import { FormControlConfig } from '../model/form-control-configuration';

@Directive({
  selector: '[fbDynamicControl]',
  exportAs: 'form'
})
export class DynamicLoaderDirective implements OnInit {
  @Input() json: FormControlConfig[];
  @Input() form: FormGroup;

  constructor(
    private resolver: ComponentFactoryResolver,
    private container: ViewContainerRef,
    private fb: FormBuilder
  ) {}

  ngOnInit() {
    this.form = this.fb.group({});

    for (let i = 0; i < this.json.length; i++) {
      const config = this.json[i];

      if (!COMPONENTS[config.type]) {
        const supportedTypes = Object.keys(COMPONENTS).join(', ');
        throw new Error(
          `You're using an unsupported Custom Form Control component (named '${config.type}').
Supported types: ${supportedTypes}`
        );
      }



      console.log(config)
      const componentFactory = this.resolver.resolveComponentFactory(COMPONENTS[config.type]);
      const newCompo = this.container.createComponent(componentFactory);
      const control = new FormControl(config.value, Validators.required);
      this.form.addControl(config.name, control);

      newCompo.instance.config = config;
      newCompo.instance.formControl = control;
    }

  }
}
