import { Component, OnInit } from '@angular/core';
import {CalendarModule} from 'primeng/calendar';
import {DatePipe} from '@angular/common'; 
import { ReportesService } from '../../../services/reportes.service'; 
import * as FileSaver from 'file-saver';
@Component({
  selector: 'app-puntos-repartidos',
  templateUrl: './puntos-repartidos.component.html',
  styles: [
  ]
})
export class PuntosRepartidosComponent implements OnInit {

  public cargandoReporte:boolean = false;
  public pipe:DatePipe = new DatePipe('en-US');
  public rangeDates:any[]  = [];

  //reporte
  public listAliados:any[] = [];
  public first:number = 0;
  public rows:number = 10;
  //listado con nuevos datos
  public listFilterAliados:any[] = [];

  constructor(private reportesService:ReportesService) { }

  ngOnInit(): void {
  }

  searchBetween()
  {
    const range = {
      valor1: this.pipe.transform(this.rangeDates[0] , 'yyyy-MM-dd'),
      valor2: this.pipe.transform(this.rangeDates[1] , 'yyyy-MM-dd'),
    }
     
    this.reportesService.getListPuntosRepartidos(range)
      .subscribe((resp:any) => {
            this.listAliados = resp.response;
            /*/for(let item of this.listAliados)
            {
              const factura = item.puntos * 10;

              this.listAliados.push(factura);
            }*/
            //console.log(this.listAliados);
            for(var i = 0; i < this.listAliados.length; i++)
            {  
              //console.log(this.listAliados[i])
              let temp = this.listAliados[i].puntos * 10;
              let estado = this.listAliados[i].aliado_merkas_estado == 1 ? 'Activo':'Inactivo';
              let tempListNuevo = 
                { Id: this.listAliados[i].aliado_merkas_id ,
                  Nit: this.listAliados[i].aliado_merkas_nit,
                  Estado: estado,
                  Aliado: this.listAliados[i].aliado_merkas_nombre,
                  Direccion: this.listAliados[i].aliado_merkas_sucursal_direccion,
                  Municipio: this.listAliados[i].municipio_nombre,
                  PuntosRepartidos: this.listAliados[i].puntos,
                  ValorxFacturar: '$ '+temp
                }
                this.listFilterAliados.push(tempListNuevo);             
            }
            console.log(this.listFilterAliados);
            this.cargandoReporte = true;
      });
  }


  //functiojn primeng
  next()
  {
    this.first = this.first + this.rows;
  }
  prev()
  {
    this.first = this.first - this.rows;
  }
  reset() {
    this.first = 0;
  }
  isLastPage():boolean{
    return this.listAliados ? this.first === (this.listAliados.length - this.rows):true;
  }
  isFirstPage():boolean{
    return this.listAliados ? this.first === 0 : true;
  }


  exportExcel(){
    import("xlsx").then(xlsx => {
      const worksheet = xlsx.utils.json_to_sheet(this.listFilterAliados);
      const workbook = { Sheets: { data: worksheet }, SheetNames: ["data"] };
      const excelBuffer: any = xlsx.write(workbook, {
        bookType: "xlsx",
        type: "array"
      });
      this.saveAsExcelFile(excelBuffer, "ReportePuntosRepartidos");
    });
  }
  saveAsExcelFile(buffer: any, fileName: string): void {
    let EXCEL_TYPE = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8';
    let EXCEL_EXTENSION = '.xlsx';
    const data: Blob = new Blob([buffer], {
        type: EXCEL_TYPE
    });
    FileSaver.saveAs(data, fileName + '_export_' + new Date().getTime() + EXCEL_EXTENSION);
}

}
