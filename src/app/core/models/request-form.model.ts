export default class RequestFormModel {
    country: string = null;
    city: string = null;
    bloodType: string = null;
    title: string = null;
    address: string = null;
    responseDate: Date = new Date();
    note: string = null;
    contact: string = null;
    
    constructor(entity?: Partial<RequestFormModel>){
        for (const key in entity){
            if (this.hasOwnProperty(key)) this[key] = entity[key];
        }        
    }
}
