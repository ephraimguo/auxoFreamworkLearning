const {Actor} = require("cqrs");
//import Actor from "cqrs";

module.exports = class Topic extends Actor{ // expose the class Topic to allow others

  constructor(data){
    const {title, content} = data;
    super({title, content});
  }

  change(title, content){
    this.$(title, content);
  }

  get updater(){
    return {
      change(json, event){
        const {title, content} = event.data;
        return {title, body}
      }
    }
  }
};