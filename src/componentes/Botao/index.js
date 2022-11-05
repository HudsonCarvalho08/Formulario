import './Botao.css'

const Botao = (props) => {
    console.log(props.texto)
    return(<button className="botao">
        {props.texto}
    </button>)
}

export default Botao