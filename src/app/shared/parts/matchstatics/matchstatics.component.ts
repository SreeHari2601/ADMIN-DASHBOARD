import {
  Component,
  OnInit
} from '@angular/core';
import * as Highcharts from 'highcharts';
import HC_exporting from 'highcharts/modules/exporting';
@Component({
  selector: 'app-matchstatics',
  templateUrl: './matchstatics.component.html',
  styleUrls: ['./matchstatics.component.css']
})
export class MatchstaticsComponent implements OnInit {
  Highcharts = Highcharts
  chartOptions = {}
  constructor() {}
  ngOnInit(): void {
    this.chartOptions = {
      chart: {
          type: 'column'
      },
      title: {
          text: 'Argentina Match Statics '
      },
      subtitle: {
          text: 'Source: <a href="https://worldpopulationreview.com/world-cities" target="_blank">Fifa</a>'
      },
      xAxis: {
          type: 'category',
          labels: {
              rotation: -45,
              style: {
                  fontSize: '13px',
                  fontFamily: 'Verdana, sans-serif'
              }
          }
      },
      yAxis: {
          min: 0,
          title: {
              text: 'Goal Ratio (Goals/Games)'
          }
      },
      legend: {
          enabled: false
      },
     exporting : {
        enabled:true  
     },
     credits: {
          enabled:false
      },
      tooltip: {
          pointFormat: 'Goals in 2022 14 </b>'
      },
      series: [{
          name: 'Population',
          data: [
              ['Brazil', 37],
              ['Portugal', 31],
              ['Usa', 27.2],
              ['Mexico', 22.2],
              ['England', 21],
              ['Spain', 21],
              ['Chile', 21],
              ['Germany', 20.8],
              ['France', 20],
              ['Japan', 10],
              ['China', 16.8],
              ['Russia', 16.5],
              ['NetherLand', 15],
              ['Peru', 15],
              ['Ghana', 14],
              ['Monocco', 14],
              ['Poland', 14],
              ['Wales', 14.4],
              ['Belgium', 12],
              ['Croatia', 13]
          ],
          dataLabels: {
              enabled: true,
              rotation: -90,
              color: '#FFFFFF',
              align: 'right',
              format: '{point.y:.1f}', // one decimal
              y: 10, // 10 pixels down from the top
              style: {
                  fontSize: '13px',
                  fontFamily: 'Verdana, sans-serif'
              }
          }
      }]
  }
  HC_exporting(Highcharts);
  setTimeout(()=>{
    window.dispatchEvent(
      new Event('resize')
    )
  },100)
  }
}
