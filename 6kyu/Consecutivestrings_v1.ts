
              // Consecutivestrings
              // https://www.codewars.com//kata/56a5d994ac971f1ac500003e
        
              export class G964 {
    public static longestConsec(strarr:string[], k:number):string {
        if(strarr.length === 0 || k > strarr.length || k <= 0) {
          return "";
        }
  
        let nums:number[] = strarr.map(x => x.length);
        let results:number[] = [];
        let num:number = 0;
  
        for(let i = 0; i < (nums.length - k + 1); i++){
          num = 0;
          for(let j = 0; j < k; j++){
            num += nums[i+j];
          }
          results.push(num);
        }
  
        let index:number = 0;
  
        for(let i = 0; i < results.length; i++){
          if(results[i] > results[index]){
            index = i;
          }
        }
  
        let str:string = "";
  
        for(let i = index; i < (index + k); i++){
          str += strarr[i];
        }
  
        return str;
    }
}

            