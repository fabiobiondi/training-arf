import {ComponentFactoryResolver, ComponentRef, Directive, Input, OnInit, ViewContainerRef} from '@angular/core';
import { FormGroup } from '@angular/forms';
import { components } from '../form-controls';
import { FormControlComponent, ControlConfiguration } from '../models/input-config.interface';

@Directive({
  selector: '[fbDynamicControl]'
})
export class DynamicControlDirective implements OnInit {
  @Input() group: FormGroup;
  @Input() config: ControlConfiguration;

  constructor(
    private resolver: ComponentFactoryResolver,
    private container: ViewContainerRef
  ) {}

  ngOnInit() {
    let component: ComponentRef<FormControlComponent>;

    if (!components[this.config.type]) {
      const supportedTypes = Object.keys(components).join(', ');
      throw new Error(
        `You're using an unsupported Custom Form Control component (named '${this.config.type}').
Supported types: ${supportedTypes}`
      );
    }
    const componentFactory = this.resolver.resolveComponentFactory<FormControlComponent>(components[this.config.type]);
    component = this.container.createComponent(componentFactory);
    component.instance.group = this.group;
    component.instance.config = this.config;
  }
}

