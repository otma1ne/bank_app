import { Customer } from './customer.model';

export type CustomerFormData = Omit<Customer, 'id'>;
