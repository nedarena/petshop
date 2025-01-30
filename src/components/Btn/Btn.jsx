import './Btn.style.css';

const Btn = ({text}) => {
    return ( 
        <button className='btn'>
            {text}
        </button>
     );
}
 
export default Btn;