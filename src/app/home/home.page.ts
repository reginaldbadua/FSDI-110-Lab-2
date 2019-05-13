import { Component } from '@angular/core';
import { DataService } from '../data.service';
import { Post } from '../post';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  //angular will put the value from the text area
  postContent ="";
  imageUrl ="";

  constructor(private dataSrv: DataService){}

  createPost(){
    console.log('create btn clicked', this.postContent);

    //save the post into the service
    var p = new Post();
    p.content = this.postContent;
    p.imageUrl = this.imageUrl; 
    //assign the imageUrl

    /*
    -create a variable above (like postContent [imageUrl])
    -html
      - create a control (ion-input)
      - bind the value to the variable
    - assign the variable p object

    */
  

    this.dataSrv.savePost(this.postContent);
        //clear the capture form
    this.postContent ='';
    this.imageUrl='';
  }
}
/*
 -create a service (data)
    -put an array
    -savePost and get Posts methods
 -inject the dataService into home.page.ts component
*/