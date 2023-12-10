import { Component, EventEmitter, Output } from '@angular/core';
import { Subscriber } from '../../Subscriber';


@Component({
  selector: 'app-newsletter',
  templateUrl: './newsletter.component.html',
  styleUrl: './newsletter.component.scss'
})
export class NewsletterComponent {
  @Output() onAddSubscriber: EventEmitter<Subscriber> = new EventEmitter();

  public name: string;
  public email: string;

  infoSubscribe(){
    if(!this.name || !this.email){
      alert('The required fields have not all been filled!');
      return;
    }

    const newSubscriber = {
      name: this.name,
      email: this.email
    };

    this.onAddSubscriber.emit(newSubscriber);

    this.name = '';
    this.email = '';
  }

}
