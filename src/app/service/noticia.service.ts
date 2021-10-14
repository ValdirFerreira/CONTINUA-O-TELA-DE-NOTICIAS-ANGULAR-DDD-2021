import { Injectable } from "@angular/core";
import { environment } from "src/environments/environment";
import { HttpClient } from "@angular/common/http";  

@Injectable({
    providedIn: "root",
  })


export class NoticiaService
{
    private readonly baseUrl = environment["endPoint"];

    constructor(private httpClient: HttpClient) {}


    ListarNoticias() {
        return this.httpClient.post<any>(
          `${this.baseUrl}/ListarNoticias/`,
          null
        );
      }


}