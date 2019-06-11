import { FormGroup } from '@angular/forms';

export interface FormControlComponent {
  config: ControlData;
  group: FormGroup;
}

export interface ControlData {
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
