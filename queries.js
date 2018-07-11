const database = require("./database-connection");

module.exports = {
    list() {
        return database('resolutions')
    },
    read(id) {
        // console.log(resolutions.id)
        return database('resolutions').where('id', id).first()
    },
    create(resolution) {
        return database('resolutions').insert(resolution).returning('*').then(record => record[0])
    },
    update(id, resolution) {
        return database('resolutions').where('id', id).update(resolution)
    },
    delete(id) {
        return database('resolutions').where('id', id).delete()
    }
};

