import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Customer } from 'src/app/models/customer.model';

@Component({
  selector: 'app-confirm',
  templateUrl: './confirm.component.html',
  styleUrls: ['./confirm.component.css'],
})
export class ConfirmComponent {
  @Input() customer?: Customer;
  @Output() showPopup = new EventEmitter<boolean>();
  @Output() delete = new EventEmitter<Customer>();

  cancel() {
    this.showPopup.emit(false);
  }

  onDelete() {
    this.delete.emit(this.customer);
  }
}
