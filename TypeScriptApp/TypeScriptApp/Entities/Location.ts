namespace LocationNs {
  export   class CustomLocation implements LocationNs.ILocation {

        constructor(longitude: number, latitude: number, locationName?: string) {
            this.longitude = longitude;
            this.latitude = latitude;
            this.name = locationName;
        }
        name: string;
        longitude: number;
        latitude: number;
        getInfo(): string { return `longitude: ${this.longitude} latitude:${this.latitude} locationName:${this.name}`; }
    }
}

