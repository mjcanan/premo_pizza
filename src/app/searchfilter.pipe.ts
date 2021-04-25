import { Pipe, PipeTransform } from '@angular/core';
import { OrderSearch } from 'src/app/interfaces/ordersearch';

@Pipe({
  name: 'searchfilter'
})
export class SearchfilterPipe implements PipeTransform {

  
  transform(ordersearch: OrderSearch[] , searchValue: string ): OrderSearch[] {
    if (!ordersearch || !searchValue){
      return ordersearch;
    }
    return ordersearch.filter(ordersearch => ordersearch.employeeID.toString().includes(searchValue.toLocaleLowerCase()));
  }

}
