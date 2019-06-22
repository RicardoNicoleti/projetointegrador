const { hooks } = require('@adonisjs/ignitor')
const moment = require('moment')
const Boleto = require('node-boleto').Boleto;
//const boleto = require('boleto.js/src/boleto.js')
const boleto = require('boleto.js/src/boleto.js')

hooks.after.providersBooted(() => {
  const View = use('View')

  View.global('dateFormat', function (value) {
    if (value) {
        return moment(String(value)).format('DD/MM/YYYY')
    }
  })
  View.global('barcode', function (value) {
      var svg = new boleto(value).toSVG();
      return svg
  })
})