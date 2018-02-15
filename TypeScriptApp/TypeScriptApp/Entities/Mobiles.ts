namespace DeviceNs {


    export interface IDevice {
        model: string;
        company: string;
        displayInfo(): void;
    }


    export class Smartphone implements IDevice {
        model: string;
        company: string;
        displayInfo(): void {
            console.log(`SmartPhone. Model: ${this.model} Company: ${this.company}`);
        }
    }

    export class Tablet implements IDevice {
        model: string;
        company: string;
        displayInfo(): void {
            console.log(`Tablet. Model: ${this.model} Company: ${this.company}`);
        }
    }
}
//export { IDevice, Tablet, Smartphone as DevicesAlias };