namespace CompanyNs {

    export  class User {

        name: string;
        constructor(userName: string) {

            this.name = userName;
        }
        getInfo(): string {
            console.log("Name: " + this.name);
            return "Name: ${this.name}";
        }
    }

  export   class Employee extends User {

        company: string;

        constructor(companyName: string, userName: string) {
            super(userName);
            this.company = companyName;
        }

        work(): void {
            console.log(this.name + " work in company " + this.company);
        }

        getInfo(): string {
            return `Name ${this.name}    company: ${this.company}`;
        }
    }

    
}
