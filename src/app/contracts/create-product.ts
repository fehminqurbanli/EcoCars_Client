export class CreateProduct {
    model_id: string;
    transmission_id: number;
    name:string;
    city:string;
    email:string;
    phonenumber:string;
    note:string;
    year:number;
    price:number;
    color:string;
    currency_id: number;
    speed_box: number;
    distance: number;
    distance_id: number;
    seat_count: number;

    leather_salon: boolean;
    park_radar: boolean;
    lyuk: boolean;
    condisioner: boolean;
    rear_camera: boolean;
    seat_heating: boolean;


    tB_AdsImages:Array<File>;
    ads_Id:string;
}
