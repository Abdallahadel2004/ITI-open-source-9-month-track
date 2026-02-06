import userEmitter from "./user.events.js";
//listen to the signup event and send an email to the user
userEmitter.on("signup",(user)=>{
    console.log(`User ${user.name} signed up`);
});