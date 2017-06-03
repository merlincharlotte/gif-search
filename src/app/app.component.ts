import { Component } from '@angular/core';
import { VehicleService } from './services/vehicle.service';

@Component({
  selector: 'my-app',
  template: `<require></require>`,
  providers: [VehicleService]
})
export class AppComponent  { name = 'Angular'; }
