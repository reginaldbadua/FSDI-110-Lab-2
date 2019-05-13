import { Injectable } from '@angular/core';
import { Post } from './post';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  //put on an array
  private posts : Post[] = [];

  constructor() { }

  public savePost(post){
    this.posts.push(post);
  }

  public getPost(){
    return this.posts; 
  }
}

