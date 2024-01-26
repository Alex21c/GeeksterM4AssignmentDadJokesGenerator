'use strict';
class Model{
  constructor(){
   this.apiNinjas={
    applicaitonId : 557954,
    accessKey: 'blYELrc4zv9VqBxaE/PoEw==Nb75KVlcIWup27Su',          
   };
   this.joke = '';
   
   
   
  }
  

  async fetchJoke(){
    let url =  `https://api.api-ninjas.com/v1/dadjokes`; 
    try{
      let response = await fetch(url, {
        method: "GET",
        headers: { 
          'X-Api-Key': this.apiNinjas.accessKey,
          "Content-Type": "application/json",
        },
      });
      let jsonResponse = await response.json();
      // console.log(jsonResponse);
      let [{joke}] = jsonResponse;
      // console.log('result is', results);
      return joke;      

    }catch(error){
      console.error('Alex21C-ERROR: Unable to load content from API.', error);
      return false;
    }
    
  }    
  

}
