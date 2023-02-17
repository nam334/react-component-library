import PropTypes from "prop-types";
import './button.css'

const ButtonSizes = ({label, size}) => (
    <>
    <button className={`button ${size}`}>{label}</button> 
    </>
   
)

ButtonSizes.propTypes = {
    label: PropTypes.string
}

export default ButtonSizes