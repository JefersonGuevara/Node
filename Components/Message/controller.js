const store = require('./store');

function addMessage(user, message) {
    console.log(user);
    console.log(message);
    return new Promise((resolve, reject) => {
        if (!user || !message) {
            console.error('[MessageController] No hay usuario o mensaje');
            reject('Los Datos son incorrectos');
            return false;
        }

        const fullmessage = {
            user: user,
            message: message,
            date: new Date(),

        };
        //  console.log (fullmessage);
        store.add(fullmessage);
        resolve(fullmessage);


    })

}

function getMessage() {
    return new Promise((resolve, reject) => {
        resolve(store.list());

    });

}
module.exports = {
    addMessage, getMessage,
};