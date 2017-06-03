import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()

export class VehicleService {
	
	constructor(private http:Http) {		
		
	}

	getInfo(value:string) {
		console.log("http://api.giphy.com/v1/gifs/search?q="+value+"&api_key=dc6zaTOxFJmzC");
		
		return this.http.get("http://api.giphy.com/v1/gifs/search?q="+value+"&api_key=dc6zaTOxFJmzC").map(res => res.json());
	}
	
}	