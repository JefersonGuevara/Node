function addMessage(user, message) {
    console.log(user);
    console.log(message);
return new Promise ((resolve,reject)=>{
    if(!user||!message){
        console.error ('[MessageController]Np hay usuario o mensaje');
         reject('Los Datos son incorrectos');
         return false;
    }

    const fullmessage = {
        user: user,
        message: message,
        date: new Date(),

    };
    console.log (fullmessage);
    resolve(fullmessage);


})

}

module.exports = {
    addMessage,
};