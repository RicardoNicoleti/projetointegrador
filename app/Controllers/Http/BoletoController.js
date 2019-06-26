'use strict'
/** @type {import('@adonisjs/node_boleto/index')} */
const Boleto = require('node-boleto').Boleto;
const Database = use('Database')
const Mail = use('Mail')

class BoletoController {
/**
   * Show a list of all cursos.
   * GET cursos
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async dadosBoleto({params, request}){
      const aluno = await Database.table('alunos').where('matricula', params.id).first();
      const data = request.all();
      var boleto = new Boleto({
        'banco': 'bradesco',
        'data_emissao': new Date(),
        'data_vencimento': new Date(new Date().getTime() + 5 * 24 * 3600 * 1000),
        'valor': data.valorPagamento.toString().split('.').join(''),
        'nosso_numero': '6',
        'numero_documento': '1',
        'cedente': 'Unifacear',
        'cedente_cnpj': '18727053000174',
        'agencia': '1229',
        'codigo_cedente': '469',
        'carteira': '25',
        'pagador': aluno.nome +'\n CPF:'+aluno.cpf,
        'local_de_pagamento': 'PAGÁVEL EM QUALQUER BANCO ATÉ O VENCIMENTO.',
        'instrucoes': 'Sr. Caixa, aceitar o pagamento e não cobrar juros após o vencimento.'
      })
      return boleto.linha_digitavel;
    }
    async envioEmail({params, request}){
      const aluno = await Database.table('alunos').where('matricula', params.id).first();
      const data = request.all();
      var boleto = new Boleto({
        'banco': 'bradesco',
        'data_emissao': new Date(),
        'data_vencimento': new Date(new Date().getTime() + 5 * 24 * 3600 * 1000),
        'valor': data.valorPagamento.toString().split('.').join(''),
        'valorNormal': data.valorPagamento.toString().split('.').join(','),
        'nosso_numero': '6',
        'numero_documento': '1',
        'cedente': 'Unifacear',
        'cedente_cnpj': '18727053000174',
        'agencia': '1229',
        'codigo_cedente': '469',
        'carteira': '25',
        'pagador': aluno.nome +'\nCPF:'+aluno.cpf,
        'local_de_pagamento': 'PAGÁVEL EM QUALQUER BANCO ATÉ O VENCIMENTO.',
        'instrucoes': 'Sr. Caixa, aceitar o pagamento e não cobrar juros após o vencimento.'
      })
      await Mail.send('emails.boleto', {boleto}, (message) => {
        message.from('centraldoaluno@unifacear.com.br')
        message.to(aluno.email)
      })
    }
}

module.exports = BoletoController
