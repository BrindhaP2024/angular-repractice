import { Component, OnInit, OnDestroy } from '@angular/core';
import { DataService } from '../../services/data.service';
import { Subject, takeUntil } from 'rxjs';
import { SearchComponent } from '../search/search.component';
import { compileNgModule } from '@angular/compiler';

import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-post-list',
  imports:[SearchComponent,CommonModule],
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit, OnDestroy {
  posts: any[] = [];
  filteredPosts: any[] = [];
  private destroy = new Subject<void>();

  constructor(private dataService: DataService) {}

  ngOnInit() {
    this.dataService.getPosts()
      .pipe(takeUntil(this.destroy))
      .subscribe(data => {
        this.posts = data;
        this.filteredPosts = data;
      });
  }

  filterPosts(searchTerm: string) {
    if (!searchTerm) {
      this.filteredPosts = this.posts;
    } else {
      this.filteredPosts = this.posts.filter(post =>
        post.title.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }
  }

  ngOnDestroy() {
    this.destroy.next();
    this.destroy.next();
    this.destroy.complete();
  }
}
