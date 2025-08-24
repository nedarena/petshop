import cross from './cross.svg'
import './ButtonDelete.style.css'

const ButtonDelete = ({ onDelete, id }) => {
    return ( 
        <button type="button" className="button-delete" onClick={() => onDelete(id)}>
            <img src={cross} alt="delete" />
        </button>
     );
}
 
export default ButtonDelete;