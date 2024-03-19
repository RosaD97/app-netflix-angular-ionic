import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { MovieResult } from 'src/app/services/interface';
import { MovieService } from 'src/app/services/movie.service';
import { InfiniteScrollCustomEvent } from '@ionic/angular/standalone';
import { catchError, finalize } from 'rxjs';
import { BannerComponent } from 'src/app/components/banner/banner.component';
import { DatePipe } from '@angular/common';
import { RouterModule } from '@angular/router';
import { TransitionComponent } from '../../transition/transition.component';


@Component({
  selector: 'app-wallet',
  templateUrl: './wallet.page.html',
  styleUrls: ['./wallet.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule,
    BannerComponent,
    DatePipe,
    RouterModule,
    TransitionComponent,]
})
export class WalletPage {
  private movieService = inject(MovieService);
  private currentPage = 1;
  public error = null;
  public isLoading = false;
  // array dei film 
  public movies: MovieResult[] = [];
  public imageBaseUrl = 'https://image.tmdb.org/t/p';
  // array finto x caricamento
  public dummyArray = new Array(5);

  constructor() {
    this.loadMovies();
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

        this.movies.push(...res.results,);
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
