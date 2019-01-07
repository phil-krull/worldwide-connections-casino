export class Form {
    Void:boolean;
    Corrected:boolean;
    Payer1:string;
    Payer2:string;
    Payer3:string;
    Winner1:string;
    Winner2:string;
    Winner3:string;
    Winner4:string;
    Winner5:string;
    Winner6:string;
    Reportings1:number;
    Reportings2:string;
    Reportings3:string;
    Reportings4:number;
    Reportings5:string;
    Reportings6:string;
    Reportings7:number;
    Reportings8:string;
    Reportings9:string;
    Reportings10:string;
    Reportings11:string;
    Reportings12:string;
    Reportings13:string;
    Reportings14:number;
    Reportings15:number;
    Reportings16:number;
    Reportings17:number;
    Reportings18:string;
    constructor() {
        let d = new Date();
        let month = '' + d.getMonth()+1;
        let day = '' + d.getDate();
        if(day.length < 2) {
            day = '0' + day;
        }
        if(month.length < 2) {
            month = '0' + month;
        }
        let year = d.getFullYear();
        console.log(`${year}-${month}-${day}`);
        this.Reportings2 = `${year}-${month}-${day}`;
    }
}
