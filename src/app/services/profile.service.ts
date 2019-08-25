import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';

import 'rxjs/add/operator/map';
import { User } from '../user';
import { Repo } from '../repo';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {
  user:User;
  repo:Repo;

  private username: string;
  private clientid = 'e0e67dc5e2bfc4ebe060';
  private clientsecret = 'cb59010587837d665ecc1bb6288d11b2ec56b9bb';
  constructor(private http: Http) {
    console.log("service is good to go!");
    this.username = "Robinkariuki";
  }

  getProfileInfo() {
    return this.http.get("https://api.github.com/users/" + this.username + "?client_id=" + this.clientid + "&client_secret=" + this.clientsecret).map(res => res.json());
  }
  getProfileRepos() {
    return this.http.get("https://api.github.com/users/" + this.username + "/repos?client_id=" + this.clientid + "&client_secret=" + this.clientsecret).map(res => res.json());
  }
  updateProfile(username: string) {
    this.username = username;
  }
}
