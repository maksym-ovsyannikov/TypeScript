namespace LocationNs {
    export interface ILocation {
        name: string;
        longitude: number;
        latitude: number;
        getInfo(): string;
    }

    export interface ILocationService {
        getlocation(targetLocation: string): ILocation;
    }
}



