import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {


  selectedTemp: string = 'celsius';
  selectedSpeed: string = 'k/h';

  checkedIcon: string = 'cloud_done';

  airTemperature: number | undefined;
  windSpeed: number | undefined;

  visibleResultInCelsius: string = ''
  visibleResultInFahrenheit: string = ''

  invalidTemperature: boolean = false;
  invalidSpeed: boolean = false;

  calculate(){

    let temperature: number = 0;
    let speed: number = 0;

    let resultCelsius: number = 0;
    let resultFahrenheit: number = 0;

    if(this.airTemperature && this.windSpeed){
      temperature = this.selectedTemp === 'celsius' ? this.airTemperature : (this.airTemperature - 32) * 5/9;
      speed = this.selectedSpeed === 'k/h' ? this.windSpeed : this.windSpeed * 1.609;

      if(temperature > 10){
        this.invalidTemperature = true;
      }else{
        this.invalidTemperature = false;
      }

      if(speed < 5){
        this.invalidSpeed = true
      }else{
        this.invalidSpeed = false
      }
    }



    if(this.airTemperature && this.windSpeed && temperature <= 50 && speed >= 5){
      resultCelsius = (13.12 + (0.6215 * temperature) - (11.37 * Math.pow(speed, 0.16)) + (0.3965 * temperature) * Math.pow(speed, 0.16));
      resultFahrenheit = ((resultCelsius * 9/5) + 32);

      this.visibleResultInCelsius = resultCelsius.toFixed(1);
      this.visibleResultInFahrenheit =  resultFahrenheit.toFixed(1);
    }



  }

}
