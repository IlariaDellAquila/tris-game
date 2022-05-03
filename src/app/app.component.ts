import { Component } from '@angular/core';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Tris';
  turno: boolean = true; //inizia la x
  combinationsWin = ['012', '036', '048', '147', '258', '246', '345', '678'];
  sygnsObject = { x: '', o: '' };
  titleWin:string =''
  colored: boolean = false;
  end:boolean = false;

  cells = [{ index: 0, turno: undefined, colored:false}, { index: 1, turno: undefined, colored:false}, { index: 2, turno: undefined, colored:false},
  { index: 3, turno: undefined, colored:false}, { index: 4, turno: undefined, colored:false }, { index: 5, turno: undefined, colored:false },
  { index: 6, turno: undefined, colored:false }, { index: 7, turno: undefined, colored:false}, { index: 8, turno: undefined, colored:false}];


  clickedCell(indice: number) {
    let cella: any = this.cells.find(c => c.index === indice);
    cella.turno = this.turno;
    this.sygnsObject[cella.turno ? 'x' : 'o'] += cella.index;
    this.turno = !this.turno;
    
   let result = this.control(this.combinationsWin, this.sygnsObject)
    if(result){
      this.end=true;
     result.split('').forEach(c => {
       this.cells.forEach( ce => {
         if(c == ce.index.toString()){
          ce.colored = true;

         } 
       })
     })
    }
   
   

  }


  
  control(win:string[], sygnsObject: object | any) : string| void {
    let result;
    win.forEach(element => {
      let winX = element.split('').every(el => sygnsObject.x.indexOf(el) != -1);
      let winO = element.split('').every(el => sygnsObject.o.indexOf(el) != -1);
      
      if(winX || winO){
        this.titleWin =`Ha vinto la ${winX ? 'X' : 'O'}`
       result = sygnsObject[winX ? 'x': 'o']
      }



    })
    return result;
  }

}


