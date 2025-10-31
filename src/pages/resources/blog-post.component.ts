import { ChangeDetectionStrategy, Component, inject, signal, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { BlogService, BlogPost } from '../../services/blog.service';
import { CtaSectionComponent } from '../../components/shared/cta-section/cta-section.component';

@Component({
  selector: 'app-blog-post',
  templateUrl: './blog-post.component.html',
  imports: [CommonModule, RouterLink, CtaSectionComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
})
export class BlogPostComponent implements OnInit {
  private route = inject(ActivatedRoute);
  private router = inject(Router);
  private blogService = inject(BlogService);

  post = signal<BlogPost | undefined>(undefined);

  ngOnInit(): void {
    const slug = this.route.snapshot.paramMap.get('slug');
    if (slug) {
      const foundPost = this.blogService.getPostBySlug(slug);
      if (foundPost) {
        this.post.set(foundPost);
      } else {
        this.router.navigate(['/not-found']);
      }
    }
  }
}