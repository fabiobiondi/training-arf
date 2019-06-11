import { ControlData } from './models/input-config.interface';

export const LOAD_FORM_CONFIGURATION: ControlData[] = [
  {
    type: 'input',
    label: 'Full name',
    name: 'name',
    placeholder: 'Enter your name',
    required: true,
    minlength: 3,
    value: 'guest'
  },
  {
    type: 'select',
    label: 'Favourite food',
    name: 'food',
    data: ['Pizza', 'Hot Dogs', 'Knakworstje', 'Coffee'],
    placeholder: 'Select an option',
    required: true,
    // value: 'Pizza'
  },
  {
    label: 'Submit',
    name: 'submit',
    type: 'button',
  },
];
