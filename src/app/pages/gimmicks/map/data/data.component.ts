import { Component, OnInit } from '@angular/core';
import { City } from '../map.models';
import LatLng = google.maps.LatLng;


@Component({
  selector: 'app-data',
  standalone: true,
  imports: [],
  templateUrl: './data.component.html',
  styleUrl: './data.component.css',
})
export class DataComponent implements OnInit {
  result: City[] = [];
  locations: { rang: number; location: LatLng }[] = [];
  async ngOnInit() {
    await fetch('/assets/json/locations.json')
      .then((response) => response.json())
      .then((json) => {
        this.locations = json;
      });
    let start = document.getElementById('start');

    start.removeChild(document.getElementById('start').childNodes[0]);
    start.removeChild(document.getElementById('start').lastChild);

    let trs = document.getElementsByTagName('tr');
    // console.log(trs.length);

    for (let index = 0; index < trs.length; index++) {
      let firsttd = trs[index].childNodes[0];
      trs[index].removeChild(firsttd);
      firsttd = trs[index].childNodes[1];
      trs[index].removeChild(firsttd);
      firsttd = trs[index].childNodes[1];
      trs[index].removeChild(firsttd);
      firsttd = trs[index].childNodes[1];
      trs[index].removeChild(firsttd);
      firsttd = trs[index].childNodes[1];
      trs[index].removeChild(firsttd);
      firsttd = trs[index].childNodes[1];
      trs[index].removeChild(firsttd);
      firsttd = trs[index].childNodes[1];
      trs[index].removeChild(firsttd);
      let name = trs[index].childNodes[0].childNodes[0].firstChild.nodeValue;
      let population = +trs[
        index
      ].childNodes[1].childNodes[0].nodeValue.replaceAll('.', '');
      // console.log(name);
      // console.log(population);
      let link2 = trs[index].childNodes[0].firstChild as HTMLAnchorElement;
      // console.log(link.getAttribute('href').valueOf());
      let federalState = trs[index].childNodes[2].childNodes[0].nodeValue;
      // console.log(federalState);

      let federalStateIndex;
      switch (federalState) {
        case 'Berlin':
          federalStateIndex = 0;
          break;
        case 'Sachsen-Anhalt':
          federalStateIndex = 1;
          break;
        case 'Rheinland-Pfalz':
          federalStateIndex = 2;
          break;
        case 'Mecklenburg-Vorpommern':
          federalStateIndex = 3;
          break;
        case 'Thüringen':
          federalStateIndex = 4;
          break;
        case 'Hessen':
          federalStateIndex = 5;
          break;
        case 'Saarland':
          federalStateIndex = 6;
          break;
        case 'Niedersachsen':
          federalStateIndex = 7;
          break;
        case 'Nordrhein-Westfalen':
          federalStateIndex = 8;
          break;
        case 'Brandenburg':
          federalStateIndex = 9;
          break;
        case 'Hamburg':
          federalStateIndex = 10;
          break;
        case 'Bremen':
          federalStateIndex = 11;
          break;
        case 'Baden-Württemberg':
          federalStateIndex = 12;
          break;
        case 'Sachsen':
          federalStateIndex = 13;
          break;
        case 'Schleswig-Holstein':
          federalStateIndex = 14;
          break;
        case 'Bayern':
          federalStateIndex = 15;
          break;

        default:
          break;
      }

      let location: { rang: number; location: LatLng }[];

      location = this.locations.filter(e => {
        return (index + 1) === e.rang;
      })

      this.result.push({
        rang: index + 1,
        name,
        federalStateIndex: federalStateIndex,
        federalStateName: federalState,
        population,
        link: link2.getAttribute('href').valueOf(),
        location: location[0].location
      });
      // console.log(JSON.stringify(this.result));
    }
  }

  download() {
    // Create element with <a> tag
    const link = document.createElement('a');

    // Create a blog object with the file content which you want to add to the file
    const file = new Blob([JSON.stringify(this.result)], {
      type: 'text/plain',
    });

    // Add file content in the object URL
    link.href = URL.createObjectURL(file);

    // Add file name
    link.download = 'cities.json';

    // Add click event to <a> tag to save file.
    link.click();
    URL.revokeObjectURL(link.href);
  }
}
