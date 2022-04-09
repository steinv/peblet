import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { faEnvelope, faBuilding, faMobilePhone } from '@fortawesome/free-solid-svg-icons';

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

  constructor() { }

  ngOnInit(): void {
  }

}
