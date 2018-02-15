namespace DeviceNs {

    export class Photo {

        autor: string;

        year: number;
        width: number;
        height: number;
        formatType: string;

        private getSize(): string {

            return "10 * 15";
        }

        protected getCountBytes(): number {
            return 117;
        }
    }
}

//import * as _ from "lodash";
