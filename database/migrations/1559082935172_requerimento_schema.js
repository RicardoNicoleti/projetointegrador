'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class RequerimentoSchema extends Schema {
  up () {
    this.create('requerimentos', (table) => {
      table.increments()
      table.string('tipo')
      table.decimal('valor', 9, 2)
      table.string('prazoEntrega')
      table.string('prazoSolicitacao')
      table.timestamps()
    })
  }

  down () {
    this.drop('requerimentos')
  }
}

module.exports = RequerimentoSchema
