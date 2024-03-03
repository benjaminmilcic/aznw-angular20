import LatLng = google.maps.LatLng;

export interface City {
  rang: number;
  name: string;
  federalStateIndex: number;
  federalStateName: string;
  population: number;
  link: string;
  location: LatLng;
}

export interface CityInfo {
  name: string;
  population: number;
  federalState: string;
  link: string;
}

export interface MapDimension {
  width: number;
  height: number;
}
