'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Mensalidade extends Model {
    aluno () {
        return this.belongsTo('App/Models/Aluno')
    }
}

module.exports = Mensalidade
