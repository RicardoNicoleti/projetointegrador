'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class MensalidadeSchema extends Schema {
  up () {
    this.create('mensalidades', (table) => {
      table.increments()
      table.integer('aluno_id')
      .unsigned()
      .references('id')
      .inTable('alunos')
      .onUpdate('CASCADE')
      .onDelete('CASCADE')
    table.date('vencimento')
    table.decimal('valorLiquido',9,2)
    table.decimal('valorAtual',9, 2)
    table.integer('parcela')
    table.boolean('pagamentoRealizado')
    table.date('dataPagamento')
    table.decimal('valorPago', 9, 2)
      table.timestamps()
    })
  }

  down () {
    this.drop('mensalidades')
  }
}

module.exports = MensalidadeSchema
