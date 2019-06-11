import {ComponentFactoryResolver, ComponentRef, Directive, Input, OnInit, ViewContainerRef} from '@angular/core';
import { FormGroup } from '@angular/forms';
import { components } from '../form-controls';
import { FormControlComponent, ControlData } from '../models/input-config.interface';

@Directive({
  selector: '[fbDynamicControl]'
})
export class DynamicControlDirective implements OnInit {
  @Input() group: FormGroup;
  @Input() data: ControlData;
  component: ComponentRef<FormControlComponent>;

  constructor(
    private resolver: ComponentFactoryResolver,
    private container: ViewContainerRef
  ) {}

  ngOnInit() {
    if (!components[this.data.type]) {
      const supportedTypes = Object.keys(components).join(', ');
      throw new Error(
        `You're using an unsupported Custom Form Control component (named '${this.data.type}').
Supported types: ${supportedTypes}`
      );
    }
    const componentFactory = this.resolver.resolveComponentFactory<FormControlComponent>(components[this.data.type]);
    this.component = this.container.createComponent(componentFactory);
    this.component.instance.group = this.group;
    this.component.instance.config = this.data;
  }
}

