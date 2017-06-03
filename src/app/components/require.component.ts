import { Component } from '@angular/core';
import { VehicleService } from '../services/vehicle.service';

@Component({
  moduleId: module.id,
  selector: 'require',
  templateUrl: `require.component.html`,
})
export class RequireComponent  {
	gifs:any;
	searchTerm:string;
	constructor(private vehicleService:VehicleService) {
	}	
	searchGifs() {
		console.log(this.searchTerm);
		if(this.searchTerm) {
			let search = encodeURIComponent(this.searchTerm);
			console.log(search);
			this.vehicleService.getInfo(search).subscribe((res:any) => {
			    console.log(res.data[0]);
			    this.gifs = res.data;        
		   });
		}
		      
	});
}	