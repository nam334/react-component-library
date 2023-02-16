import PropTypes from "prop-types";
import './button.css';


const Button = ({disabled, label, onClick, variant='default'}) => (
    <button disabled={disabled ? "true" : ''} onClick={onClick} className={`button ${variant}`}>
        {label}
    </button>
)

Button.propTypes = {
    disabled: PropTypes.bool,
    label: PropTypes.string,
    variant: PropTypes.string,
    onClick: PropTypes.func
}

Button.defaultProps = {
    disabled: false 
}

export default Button