import Menu from '../Menu'
import Botao from '../Botao'
import Unidade from '../Unidade'
import './Lista.css'

const Lista = () => {

    const UF = [
        'AC',
        'AL',
        'AP',
        'AM',
        'BA',
        'CE',
        'DF',
        'ES',
        'GO',
        'MA',
        'MT',
        'MS',
        'MG',
        'PA',
        'PB',
        'PR',
        'PE',
        'PI',
        'RJ',
        'RN',
        'RS',
        'RO',
        'RR',
        'SC',
        'SP',
        'SE',
        'TO'

    ]

 

    return (
        <section className="lista">
            <form>
                <h2>Preencha seus dados</h2>
                <Menu label="Nome" placeholder="Digite seu Nome" x-model="user.nome"/>
                <Menu label="CPF" placeholder="Digite seu CPF" />
                <Menu label="Email" placeholder="Digite seu email" />
                <Menu label="CEP" placeholder="Digite seu CEP" />
                <Menu label="Endereço" placeholder="Digite seu endereço" />
                <Menu label="Número" placeholder="Nº" />
                <Menu label="Bairro" placeholder="Digite seu bairro" />
                <Menu label="Cidade" placeholder="Digite sua cidade" />
                <Unidade label="UF" itens={UF} />
                <Botao texto="Salvar"/>
            </form>
        </section>

    )
}

export default Lista