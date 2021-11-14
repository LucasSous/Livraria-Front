import { http } from "./config";


export default {

    listar:() => {
        return http.get('alugueis')
    },

    salvar:(aluguel) => {
        return http.post('aluguel', aluguel)
    },

    alterar:(aluguel) => {
        return http.put('aluguel', aluguel)
    },

    deletar:(aluguel) => {
        return http.delete('aluguel', {data: aluguel})
    },

}