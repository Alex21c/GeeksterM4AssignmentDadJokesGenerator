'use strict';
class Controller{ 

  constructor(view, model){
    this.view = view;
    this.model = model;

    this.formSearchQuery = document.querySelector('form#formSearchQuery');
    
    this.formSearchQuery.addEventListener('submit', (event)=>{
      event.preventDefault();
      this.handleJokeRequest();

    })

    


  }

  async handleJokeRequest(){
    try{
      this.view.showLoaderImage();
      let joke = await this.model.fetchJoke();
      this.view.addNewJoke(joke);
      // this.view.hideBuddhaImage();
      this.view.hideLoaderImage();

    }catch(error){
      console.error(error);
    }
  }


}
