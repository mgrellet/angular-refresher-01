import {Component, OnInit} from '@angular/core';
import {DataService} from "../../services/data.service";

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

  myPosts: any = [];

  constructor(private dataService: DataService) {
  }

  ngOnInit(): void {
    this.myPosts = this.dataService.getPosts();
      /*.subscribe( (posts: any[]) => {
        console.log(posts)
        this.myPosts = posts;
      })*/
  }


  listeningChildren(event: any) {
    console.log('click from children on ', event);
  }
}
