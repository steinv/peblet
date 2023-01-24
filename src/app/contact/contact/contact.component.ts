import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { faEnvelope, faBuilding, faMobilePhone } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedin, faNpm } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'peblet-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ContactComponent implements OnInit {

  public faPhone = faMobilePhone;
  public faMail = faEnvelope;
  public faBuilding = faBuilding;
  public faGithub = faGithub;
  public faLinkedIn = faLinkedin;
  public faNpm = faNpm;

  constructor() { }

  ngOnInit(): void {
  }

}
