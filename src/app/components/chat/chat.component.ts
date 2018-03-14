import {Component, Injectable} from '@angular/core';
import {AuthService} from '../../services/auth.service';
import {Observable} from 'rxjs/Observable';
import {Message} from '../models/message.model';
import {MessageService} from '../../services/firestore-data';

@Component({
  moduleId : module.id,
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
@Injectable()
export class ChatComponent {
  public messages: Observable<Message[]>;
  public post: string;
  constructor(private auth: AuthService, private messageService: MessageService) {
    this.messages = this.messageService.messages;
  }

  public sendPost(post: string) {
    this.messageService.sendMessage(post);
    this.post = '';
  }
}
