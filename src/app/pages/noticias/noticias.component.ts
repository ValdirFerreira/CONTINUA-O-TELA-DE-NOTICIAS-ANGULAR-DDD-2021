import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NoticiaService } from 'src/app/service/noticia.service';

@Component({
  selector: 'app-noticias',
  templateUrl: './noticias.component.html',
  styleUrls: ['./noticias.component.scss']
})
export class NoticiasComponent implements OnInit {

  constructor(private noticiaService: NoticiaService, private router: Router) { }

  noticias!: any;

  ngOnInit(): void {
    this.ListarNoticias();
  }


  ListarNoticias() {
    this.noticiaService.ListarNoticias()
      .subscribe(noticias => {
        this.noticias = noticias;
      },
        error => {
          this.router.navigate(["/login"]);
        } )
  }

}
