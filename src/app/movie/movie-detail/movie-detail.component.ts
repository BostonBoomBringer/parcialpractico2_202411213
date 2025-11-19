import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MovieService } from '../../services/movie.service';

@Component({
  selector: 'app-movie-detail',
  standalone: false,
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.css']
})
export class MovieDetailComponent implements OnInit {
  movie: any;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private movieService: MovieService
  ) {}

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.movieService.getMovieDetail(id).subscribe(data => {
      this.movie = data;
    });
  }
  goBack(): void {
    this.router.navigate(['/movies']);
  }
    getFormattedDuration(): string {
    if (!this.movie?.duration) return '';
    const hours = Math.floor(this.movie.duration / 60);
    const minutes = this.movie.duration % 60;
    return `${hours}h ${minutes}m`;
  }
}
