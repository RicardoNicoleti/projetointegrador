'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class UserSchema extends Schema {
  up () {
    this.create('alunos', (table) => {
      table.increments()
      table.string('nome', 60)
      table.string('matricula', 80).notNullable().unique()
      table.string('password', 60).notNullable()
      table.string('email', 254).notNullable().unique()
      table.string('cpf', 60)
      table.integer('curso_id')
      .unsigned()
      .references('id')
      .inTable('cursos')
      .onUpdate('CASCADE')
      .onDelete('CASCADE')
      table.timestamps()
    })
  }

  down () {
    this.drop('users')
  }
}

module.exports = UserSchema
