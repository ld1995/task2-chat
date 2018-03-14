import {AngularFirestore, AngularFirestoreCollection} from 'angularfire2/firestore';
import {Message} from '../components/models/message.model';
import {Injectable, OnInit} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {ProfileComponent} from '../components/profile/profile.component';

@Injectable()
export class MessageService implements OnInit {
  private basePath = 'messages';
  private messageList: AngularFirestoreCollection<Message>;
  public messages: Observable<Message[]>;
  constructor(private _angularFirestore: AngularFirestore, private profile: ProfileComponent) {
    this.messageList = this._angularFirestore.collection<Message>(this.basePath,
      element => element.orderBy('date'));
    this.messages = this.messageList.valueChanges();
  }

  public sendMessage(post: string) {
    if (post && post.trim().length) {
      this.messageList.add(<Message>{
        username: this.profile.getNickname(),
        icon: this.profile.getPicture(),
        post: post,
        date: new Date
      });
    }
  }

  ngOnInit(): void {
  }
}
