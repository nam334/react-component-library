import PropTypes from 'prop-types'
import './textinput.css'

const TextInput = ({label}) => (
    <>
    <input type='text' placeholder={label} className='input'/>
    </>
)

TextInput.propTypes = {
    label:PropTypes.string
}
export default TextInput