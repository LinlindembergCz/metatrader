import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { Cliente, ClientesHistorico } from 'src/app/models';
import { LoginComponent } from '../Login/login.component';
import { Router, ActivatedRoute  } from '@angular/router';
import { HistoricoHttpService } from 'src/app/Services/historico-http.service';
import { Observable } from 'rxjs';

import { Chart } from 'Chart.js';
import { isLineBreak } from 'typescript';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

    mostrarLogin :boolean = true;
    NomeCliente: string = 'Lindemeberg';
    ClienteId: number;

    clienteHistorico :ClientesHistorico[]=[];

    LabelsclienteHistorico:Date[]=[];
    Labelsdatasets:number[]=[];

    @ViewChild("meuCanvas") elemento: ElementRef;

    constructor( private router: ActivatedRoute , private loginComponent: LoginComponent, private historicoHttp: HistoricoHttpService )
    {
      //this.router.params.subscribe(res => this.NomeCliente= res.Nome);
      this.router.params.subscribe(res => this.ClienteId= res.ClienteId);
    }

    ngOnInit() {      
        this.historicoHttp.get(this.ClienteId).subscribe(response => { this.clienteHistorico=response; }) 
    
        setTimeout(() =>{ console.log(this.clienteHistorico); 
        
          this.clienteHistorico.forEach( value => this.LabelsclienteHistorico.push(value.DataHora) );
          this.clienteHistorico.forEach( value => this.Labelsdatasets.push(value.Valor) );
     
          console.log(this.LabelsclienteHistorico);

          new Chart( this.elemento.nativeElement,{
            type: 'line',
            data: 
            {
                  labels: this.LabelsclienteHistorico,
                  datasets:[{  data: this.Labelsdatasets, borderColor: '#00AEFF',fill: false }]
            },
            options:{
              lengend:{
                display: false
              }
            }  
          });
        },  1000);  



        

        


    }

}