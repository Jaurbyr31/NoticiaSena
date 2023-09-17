import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss'],
})
export class DashboardPage implements OnInit {
  listCategorys : any[]=[];
  listNoticias : any[]=[];

  constructor(
    public http: HttpClient,
    public route: Router
  ) { }

  ngOnInit() {

    this.http.get('../../assets/noticias/noticias_all.JSON').subscribe(data => {
      this.listCategorys = JSON.parse(JSON.stringify(data))[0].noticias.categorys;
      this.listNoticias = JSON.parse(JSON.stringify(data))[0].detailNoticias;

      
    });
  }
  Navigate(value: any){
    this.route.navigate(['/detail']);
    localStorage.setItem("detail",JSON.stringify(value))
  }
}
