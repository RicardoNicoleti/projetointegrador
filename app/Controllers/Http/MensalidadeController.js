'use strict'
const Mensalidade = use('App/Models/Mensalidade')
const Database = use('Database')

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */

/**
 * Resourceful controller for interacting with mensalidades
 */
class MensalidadeController {
  /**
   * Show a list of all mensalidades.
   * GET mensalidades
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async index ({ request, response}) {

  
  }

  /**
   * Create/save a new mensalidade.
   * POST mensalidades
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async store ({ request, response }) {
  }

  /**
   * Display a single mensalidade.
   * GET mensalidades/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async show ({ params, request}) {
        const aluno = await Database.table('alunos').where('matricula', params.id).first();
        const mensalidades = await Database.table('mensalidades').where('aluno_id', aluno.id)

        return mensalidades;
  }
  async mensalidadePaga({params}){
    const aluno = await Database.table('alunos').where('matricula', params.id).first();
    const mensalidades = await Database.table('mensalidades').where('aluno_id', aluno.id)
                                                             .andWhere('pagamentoRealizado', 1);

    return mensalidades;
  }
  async mensalidadeApagar({params}){
    const aluno = await Database.table('alunos').where('matricula', params.id).first();
    const mensalidades = await Database.table('mensalidades').where('aluno_id', aluno.id)
                                                             .andWhere('pagamentoRealizado', 0);

    return mensalidades;
  }


  /**
   * Render a form to update an existing mensalidade.
   * GET mensalidades/:id/edit
   *
   * 
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async edit ({ params, request, response, view }) {
  }

  /**
   * Update mensalidade details.
   * PUT or PATCH mensalidades/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async update ({ params, request, response }) {
      const id = request.input('id')
      const valorLiquido = request.input('valorLiquido')
  
      let mensalidade = await Mensalidade.find(id)
    
      mensalidade.valorPago = valorLiquido
      mensalidade.dataPagamento = new Date()
      mensalidade.pagamentoRealizado = 1

      await mensalidade.save()
      return response.status(200)
                      .send({success: 'Pagamento realizado com sucesso'});
    }
  /**
   * Delete a mensalidade with id.
   * DELETE mensalidades/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async destroy ({ params, request, response }) {
  }
}

module.exports = MensalidadeController
