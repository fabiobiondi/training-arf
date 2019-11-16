import { FormControlConfig } from '../model/form-control-configuration';

export const MY_JSON: FormControlConfig[] = [
  {
    type: 'input',
    name: 'name',
    value: 'guest',
    required: true,
    minlength: 3,
    placeholder: 'Enter your name',
    label: 'Full name'
  },
  {
    type: 'select',
    name: 'food',
    label: 'Favourite food',
    value: '',
    // value: 'Pizza',
    data: ['Pizza', 'Hot Dogs', 'Knakworstje', 'Coffee'],
    placeholder: 'Select an option',
    required: true,

  },
];
