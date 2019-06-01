'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class AlunosSchema extends Schema {
  up () {
    this.table('alunos', (table) => {
      table.string('periodo')
      table.string('sala')
    })
  }

  down () {
    this.table('alunos', (table) => {
      // reverse alternations
    })
  }
}

module.exports = AlunosSchema
