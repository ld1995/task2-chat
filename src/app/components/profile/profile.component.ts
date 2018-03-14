import {Component, Injectable} from '@angular/core';
import {AuthService} from '../../services/auth.service';
import {Url} from 'url';

@Component({
  moduleId : module.id,
  selector: 'app-profile',
  templateUrl: './profile.component.html', // стартовая страница
  styleUrls: ['./profile.component.css']
})

export class ProfileComponent {
  private nickname: string;
  private picture: Url;
  constructor(private auth: AuthService) {
    const {nickname, picture} = JSON.parse(localStorage.getItem('profile'));
    this.nickname = nickname;
    this.picture = picture;
  }
  public getNickname(): string {
    return this.nickname;
  }
  public getPicture(): string {
    return `${this.picture}`;
  }
  public getPictureUrl(): Url {
    return this.picture;
  }
}
