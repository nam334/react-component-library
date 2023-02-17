import PropTypes from "prop-types";
import './button.css';
//import img from './img.jpg'

const Button = ({disabled, label, onClick, variant='default', src}) => (
    <button disabled={disabled ? "true" : ''} onClick={onClick} 
     className={`button ${variant} downloadBtn`}>
     {src  ? <><img src={src} alt="download" width='30' height='30' />
     <span className="downloadLabel">{ label }</span></> : label}   
    
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