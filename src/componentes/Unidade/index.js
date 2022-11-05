import './UF.css'

const UF = (props) => {
    console.log(props.itens)
    return (
        <div className="uf">
            <label>{props.label}
                <select>
                    {props.itens.map(item => {
                        return <option key={item}>{item}</option>
                    })}
                </select>
            </label>
        </div>
    )
}

export default UF