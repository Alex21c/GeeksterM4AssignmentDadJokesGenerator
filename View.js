'use strict';
class View{

  constructor(model){
    this.model = model;     
    this.divResults = document.querySelector('div#divResults');
    this.divLoaderImg = document.querySelector('div#divLoaderImg');
    this.divLaughingBuddha = document.querySelector('div#divLaughingBuddha');
    this.h2Joke = document.querySelector('h2#h2Joke');

  }

  showLoaderImage(){
    this.divLoaderImg.classList.remove('displayNone');
  }

  hideLoaderImage(){
    this.divLoaderImg.classList.add('displayNone');
  }
  hideBuddhaImage(){
    this.divLaughingBuddha.classList.add('displayNone');
  }

  addNewJoke(joke){       
    if(!joke){
      alert('error: unable to fetch new photos!');
      return;
    } 
    // console.log(this.h2Joke)    
    this.h2Joke.innerText=joke;
    
  }

  

    
  
  
}  

