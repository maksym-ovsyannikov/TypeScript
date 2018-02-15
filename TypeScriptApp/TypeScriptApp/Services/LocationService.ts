namespace LocationNs {


    export class LocationService implements ILocationService {
        getlocation(targetLocation: string): ILocation {
            return new CustomLocation(23.5, -57.18, targetLocation);
        }
    }
}