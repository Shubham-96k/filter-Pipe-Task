import { Pipe, PipeTransform } from '@angular/core';
import { Iplayer } from '../model/player';

@Pipe({
  name: 'player'
})
export class PlayerPipe implements PipeTransform {
  selectedValue ?: string;
  transform(value: Iplayer[], search : string, select: string): Iplayer[]{
     let filtered : Iplayer[] = value;
     if(!value){
      return [];
     }
     if(!search){
      return value;
     }
     if(select === 'team'){
        filtered = value.filter(player => {
        return player.team.toLowerCase().includes(search.toLowerCase().trim())
      })
    }else if(select === 'name'){
      filtered = value.filter(player => {
        return player.name.toLowerCase().includes(search.toLowerCase().trim())
      })
    }else if(select === 'odiRuns'){
      if(isNaN(+search)){
        throw new Error('please enter valid input')
      }else{    
        let minnumber = Math.floor(+search / 1000)*1000;
        let maxnumber = minnumber + 1000;
        filtered = value.filter(player => {
          return player.odiRuns >= minnumber && player.odiRuns <= maxnumber;
        })
      }
    }else if(select === 'testRuns'){
      if(isNaN(+search)){
        throw new Error('please enter valid input')
      }else{        
        let minnumber = Math.floor(+search / 1000)*1000;
        let maxnumber = minnumber + 1000;
        filtered = value.filter(player => {
          return player.testRuns >= minnumber && player.testRuns <= maxnumber;
        })
      }
    }else if(select === 'yearDebut'){
      if(isNaN(+search)){
        throw new Error('please enter valid input')
      }else{        
        let minnumber = Math.floor(+search / 10)*10;
        let maxnumber = minnumber + 10;
          filtered = value.filter(player => {
          return player.yearDebut >= minnumber && player.yearDebut <= maxnumber;
        })
      }
    }
     return filtered;
  }
}
