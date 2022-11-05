import './Menu.css'

const Menu = (props) => {
    return (
        <div className="menu">
            <label>{props.label}</label>
            <input placeholder={props.placeholder} />
        </div>
    )
}

export default Menu