import cross from './cross.svg'
import './ButtonDelete.style.css'

const ButtonDelete = () => {
    return ( 
        <button type="button" className="buttondelete">
            <img src={cross} alt="delete" />
        </button>
     );
}
 
export default ButtonDelete;