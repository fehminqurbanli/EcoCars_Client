import * as uuid from "uuid";

export class CreateProduct {
    model_id: uuid;
    transmission_id: number;
    name:string;
    city:string;
    email:string;
    phonenumber:string;
    note:string;
    ban_type:string;
    year:number;
    price:number;
    color_id:number;
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


    TB_AdsImages:Array<File>;
    ads_Id:string;
}
