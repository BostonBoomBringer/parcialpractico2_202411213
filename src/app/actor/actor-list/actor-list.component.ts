import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-actor-list',
  standalone: false,
  templateUrl: './actor-list.component.html',
  styleUrls: ['./actor-list.component.css']
})
export class ActorListComponent {
  @Input() actors: any[] = [];

  getPopularityAverage(): number {
    if (!this.actors || this.actors.length === 0) return 0;
    const sum = this.actors.reduce((acc, actor) => acc + actor.popularity, 0);
    return (sum / this.actors.length);
  }
}
