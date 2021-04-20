export class Employee {
    public employeeid : number
    public employee_name : string
    public address : string
    public hourly_rate : number
    public hours_worked: number
    public status : boolean
    

    constructor(employeeid: number, employee_name: string, address: string, hourly_rate: number, hours_worked: number, status: boolean){

        this.employeeid = employeeid;
        this.employee_name = employee_name;
        this.address = address;
        this.hourly_rate = hourly_rate;
        this.hours_worked = hours_worked;
        this.status = status;
            }
}