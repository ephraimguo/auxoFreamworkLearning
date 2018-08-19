const {Actor} = require("cqrs");

module.exports = class User extends Actor{
  constructor(data){
     const {nickname, loginname, password} = data;
     super({
       nickname,
       loginname,
       password,
       createTime: Date.now(),
       follows:[],

     });
  }

  // this user follows other users
  async follow(idolId){
    const idolUser = await this.$.get("User", idolId); // this statement is invokig the event database
    idolUser.followed(this.id);

    //this.$.apply("follow", idolId); // generatre the event
    this.$(idolId); // same as former line, but if the event name is not same as the method name, former statement is needed
  }

  // this user unfollows other users
  async unFollow(idolId){
    const idolUser = await this.$.get("User", idolId);
    idolUser.unFollowed(this.id);
    this.$(idolId);
  }

  // other user follower this user
  followed(fansId){

  }

  // other user unfollower this user
  unFollowed(fansId){

  }

  get updater(){
    return {
      follow(json, event){ // json is the copied data of current object, wont affect the real obj. event.data is the data from this.$.apply("follow", eventData)
          //json.follows.push(event.data);
        const follows = json.follows;
        follows.push(event.data);
        return{
          //follows: json.follows // follows is the attribute of object itself, but json.follows is the mutated data
          follows
        }
      },

      //unfollow updater
      unFollow(json, event){
        const follows = json.follows;
        var set = new Set(follows);
        set.delete(event.data);
        return {
          follows: [...set]
        }
      }
    }
  }
}
