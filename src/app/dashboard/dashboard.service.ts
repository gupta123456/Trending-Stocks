import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';

const httpOptions = { headers: new HttpHeaders({ 'Access-Control-Allow-Headers': 'Content-Type', 'Access-Control-Allow-Methods': 'POST,GET', 
'content-type': 'application/json', 'Access-Control-Allow-Origin': '*', "x-rapidapi-key": "7bb69ae516msh40de16896cef4fcp1a7825jsne6270221076d",
"x-rapidapi-host": "apidojo-yahoo-finance-v1.p.rapidapi.com",
 }) };

@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  constructor(private http: HttpClient) {
  }

  getTrendingTickets() {
    return this.http.get('https://apidojo-yahoo-finance-v1.p.rapidapi.com/market/get-trending-tickers',httpOptions);
  }

}
