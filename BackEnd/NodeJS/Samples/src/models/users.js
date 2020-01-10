const sequence = {
    _id: 1,
    get nextId() { return this._id++ }
}

const users = []

exports.create = (user) => {
    return new Promise((resolve, reject) => {
        if (user.id) {
            reject();
        }
        user.id = sequence.nextId
        users[user.id] = user    
        resolve(user);
    })
};

exports.readAll = () => {
    return new Promise((resolve, reject) => {
         if (Object.entries(users).length === 0)
             reject();
        resolve(users);
    })
};

exports.read = (id) => {
    const user = users[id];
    return new Promise((resolve, reject) => {
       if (user === undefined)
            reject();
       resolve(user);
   })    
};

exports.update = (id, newuser) => {
    console.log(id);
    console.log(newuser)
    const user = users[id];
    return new Promise((resolve, reject) => {
        if (user === undefined)
            reject();
        newuser.id = id;
        users[id] = newuser;
        resolve(newuser);
   })    
};

exports.delete = (id) => {
    const user = users[id];
    return new Promise((resolve, reject) => {
        if (user === undefined)
            reject();
        delete users[id];
        resolve(user);
   })    
};