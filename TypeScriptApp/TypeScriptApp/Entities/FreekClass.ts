namespace DeviceNs {

    export class FreekClass extends Photo {
        autor: string;
        year: number;
        width: number;
        height: number;
        formatType: string;

        getFreek(): string {
            return this.getCountBytes().toString();
        }
    }
}
