import { FormGroup } from '@angular/forms';

export interface FormControlComponent {
  config: ControlConfiguration;
  group: FormGroup;
}

export interface ControlConfiguration {
  label?: string;
  name: string;
  value?: any;
  data?: any[];
  required?: boolean;
  minlength?: number;
  maxlength?: number;
  placeholder?: string;
  type: string;
}
