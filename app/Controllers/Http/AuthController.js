'use strict'
const Aluno = use('App/Models/Aluno')

class AuthController {
    async register({ request }){
        const data =  request.all()
        
        const aluno = await Aluno.create(data)
        
        return aluno
    } 
    async authenticate({ request, auth }){
        const { matricula, password } = request.all();
                
        const token = await auth.attempt(matricula, password)
        const aluno = await Aluno.query().where('matricula', matricula).with('curso').fetch();

        return {aluno,token}
    }
}

module.exports = AuthController
