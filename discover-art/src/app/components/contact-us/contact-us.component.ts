import { Component, EventEmitter, Output } from '@angular/core';
import { Contacter } from '../../Contacter';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrl: './contact-us.component.scss'
})
export class ContactUsComponent {
  @Output() onContactUs: EventEmitter<Contacter> = new EventEmitter();

  public name: string;
  public email: string;
  public message: string;

  onContact(){
    if(!this.name || !this.email || !this.message){
      alert('The required fields have not all been filled for submitting a contact form!');
      return;
    }

    const newContacter = {
      name: this.name,
      email: this.email,
      message: this.message
    };

    this.onContactUs.emit(newContacter);

    this.name = '';
    this.email = '';
    this.message = '';
  }
}
