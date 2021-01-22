import { Component, OnInit } from '@angular/core';
import { DashboardService } from '../dashboard/dashboard.service';
declare var $: any;
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  data:any;
  dtOptions: DataTables.Settings = {};
  constructor(private service: DashboardService) { }

  ngOnInit(): void {
    this.service.getTrendingTickets().subscribe(res => {
      this.data = res;
      console.log(this.data);
    })
    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 5,
      processing: true
    };
  }

}
