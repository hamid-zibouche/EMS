import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class ConfigService {
  private readonly CONFIG_URL = '/assets/config/config.json';
  private config: any;

  constructor(private http: HttpClient) {}

  getConfig() {
    return this.http.get('/assets/config/config.json');
  }
}
