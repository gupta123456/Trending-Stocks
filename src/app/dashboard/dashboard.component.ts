import { Component, OnInit } from '@angular/core';
import { DashboardService } from '../dashboard/dashboard.service';
declare var $: any;
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  data: any;
  dtOptions: DataTables.Settings = {};
  constructor(private service: DashboardService) { }

  ngOnInit(): void {
    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 5,
      processing: true
    };

    this.service.getTrendingTickets().subscribe(res => {
      console.log(res);
      this.data = res;
    })
  }

}
