import { Pipe, PipeTransform } from '@angular/core';
import { OrderSearch } from 'src/app/interfaces/ordersearch';

@Pipe({
  name: 'searchfilter',
  pure: false

})
export class SearchfilterPipe implements PipeTransform {

  
  transform(ordersearch: OrderSearch[] , searchValue: string ): OrderSearch[] {
    if (!ordersearch || !searchValue){
      console.log("not found")
      return ordersearch;
    }
    //console.log(ordersearch.dateTime);
   return ordersearch.filter(ordersearch=> ordersearch.dateTime.toLocaleLowerCase().includes(searchValue.toLocaleLowerCase()));
  //  return ordersearch.filter(ordersearch => 
  //   ordersearch.dateTime.toLowerCase().indexOf(searchValue.toLowerCase()) !== -1);
     }

}
