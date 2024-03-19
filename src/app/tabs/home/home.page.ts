import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { BannerComponent } from 'src/app/components/banner/banner.component';
import {
  InfiniteScrollCustomEvent,
}
  from '@ionic/angular/standalone';

import { MovieService } from '../../services/movie.service';
import { catchError, finalize } from 'rxjs';
import { MovieResult } from '../../services/interface';
import { DatePipe } from '@angular/common';
import { RouterModule } from '@angular/router';
import { TransitionComponent } from '../../transition/transition.component';



@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule,
    BannerComponent,
    DatePipe,
    RouterModule,
    TransitionComponent,]
})
export class HomePage {
  private movieService = inject(MovieService);
  private currentPage = 1;
  public error = null;
  public isLoading = false;
  // array dei film 
  public movies: MovieResult[] = [];
  public imageBaseUrl = 'https://image.tmdb.org/t/p';
  // array finto x caricamento
  public dummyArray = new Array(5);
  public filterText: string = '';
  public data: any = [];
  public newData: any = [];



  constructor() {
    this.loadMovies();

  }


  roundVoteAverage(voteAverage: number){
    return Math.floor(voteAverage);
  }

  handleInput(event: any) {
    const newValue = event.detail.value.toLowerCase();
    // const newValue = event.detail.value;
    this.filterText = newValue;
    // console.log('evento' + newValue)
    // console.log(this.filterText)
    console.log('new data' + this.newData)

  }


  // paramentro opzionale
  loadMovies(event?: InfiniteScrollCustomEvent) {
    this.error = null;

    if (!event) {
      this.isLoading = true;
    }

    this.movieService.getTopRaitedMovies(this.currentPage).pipe(
      finalize(() => {
        this.isLoading = false;
        if (event) {
          event.target.complete();
        }
      }),
      catchError((err: any) => {
        console.log(err)
        this.error = err.error.status_message;
        return [];
      }),

    ).subscribe({
      next: (res) => {

        // res.results.forEach((film) => {
        //   const title = film.title;
        //   this.data.push(title);
        //     // console.log(this.data);
        //   // if (this.filterText === '') {
        //   //    console.log('scritto')
        //   //    res.results = this.movies.filter((d) => console.log(d));
        //   const result = this.data.filter((d: any) => d.toLowerCase().indexOf(this.filterText) > -1);
        //   this.newData.push(result);
        //   // 
        // });

        // console.log(res.results)
        this.movies.push(...res.results);
        if (event) {
          event.target.disabled = res.total_pages === this.currentPage;
        }
      }
    })
  }

  // carica altri film
  loadMore(event: InfiniteScrollCustomEvent) {
    this.currentPage++;
    this.loadMovies(event);
  }

}