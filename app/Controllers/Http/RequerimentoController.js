'use strict'
const Requerimento = use('App/Models/Requerimento')
class RequerimentoController {
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
        const requerimentos = Requerimento.all();
        return requerimentos;
    }
}

module.exports = RequerimentoController
