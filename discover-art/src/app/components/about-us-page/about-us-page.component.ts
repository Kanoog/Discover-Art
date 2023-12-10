import { Component } from '@angular/core';
import { Subscriber } from '../../Subscriber';
import { SubscriberListService } from '../../services/subscriber-list.service';
import { Contacter } from '../../Contacter';
import { ContactListService } from '../../services/contact-list.service';

@Component({
  selector: 'app-about-us-page',
  templateUrl: './about-us-page.component.html',
  styleUrl: './about-us-page.component.scss'
})
export class AboutUsPageComponent {
  people: Subscriber[] = [];
  contact: Contacter[] = [];

  constructor(private subscriberService: SubscriberListService, private contactService: ContactListService){}

  addSubscriber(person: Subscriber){
    this.subscriberService.addSubscriber(person).subscribe((person => (this.people.push())));
  }

  addContact(user: Contacter){
    this.contactService.addSubscriber(user).subscribe((user => (this.contact.push())));
  }

}
