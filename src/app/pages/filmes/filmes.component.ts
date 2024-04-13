import { Component, OnInit } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { FilmeService } from '../../services/filme.service';
import { FilmeInterface } from '../../types/filme';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-filmes',
  standalone: true,
  imports: [MatTableModule, MatProgressSpinnerModule, CommonModule],
  templateUrl: './filmes.component.html',
  styleUrl: './filmes.component.scss'
})


export class FilmesComponent implements OnInit {
  displayedColumns: string[] = ['title', 'episode_id', 'opening_crawl', 'director', 'producer', 'release_date'];
  listaFilmes: FilmeInterface[] = [];
  loading: boolean = true;
  constructor(private filmeService: FilmeService) {}

  ngOnInit(): void {
    this.filmeService.getFilms().subscribe((res) => {
      this.loading = true;
      this. listaFilmes = res;
      this.loading = false;
    });
  }
}
