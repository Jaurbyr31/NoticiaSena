import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.page.html',
  styleUrls: ['./detail.page.scss'],
})
export class DetailPage implements OnInit {

  detallenotis: any =[];

  titleNew: string='';
  dateNew: string='';
  textSmall: string='';
  textLong: string='';
  urlImg: string='';
  urlFont: string='';

  constructor( public route: Router) { }

  

  ngOnInit() {
    this.detallenotis = localStorage.getItem("detail");
    this.detallenotis = JSON.parse(this.detallenotis)

    this.titleNew =this.detallenotis.title
    this.dateNew =this.detallenotis.date
    this.textSmall =this.detallenotis.text_small
    this.textLong =this.detallenotis.text_long
    this.urlImg =this.detallenotis.url_imag
    this.urlFont =this.detallenotis.font_noticia
  }
  Navigate(value: any){
    this.route.navigate(['/dashboard']);
    localStorage.setItem("detail",JSON.stringify(value))
  }

}
