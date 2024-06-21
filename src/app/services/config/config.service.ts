import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class ConfigService {

  private readonly CONFIG_URL = '/ems-home/assets/config/config.json';
  private config: any;

  constructor(private http: HttpClient) {}

  getConfig() {
    return this.http.get(this.CONFIG_URL);
  }
}
