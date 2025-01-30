import Btn from '../Btn/Btn';
import './Clothing.style.css';
import CardProduct from '../CardProduct/CardProduct';

const cardData = [
    {
        image: '/cardProducts/Product1.png',
        title: 'Grey hoodie'
    },
    {
        image: '/cardProducts/Product2.png',
        title: 'Happy jeans pant'
    },
    {
        image: '/cardProducts/Product3.png',
        title: 'Tight half t-shirt'
    },
    {
        image: '/cardProducts/Product4.png',
        title: 'Black thick jacket'
    }
];

const Clothing = () => {
    return ( 
        <div className='Clothing container'>
            <div className="clothing__title">
                <p className="clothing__title-text">Pet Clothing</p>
                <Btn text={'shop all \u2192'}/>
            </div>
            <div className="clothing__products">
                {cardData.map(item => (
                    <div key={item.title}>
                        <CardProduct
                        image={item.image}
                        title={item.title}
                        />
                    </div>
                ))}
            </div>
        </div>
     );
}
 
export default Clothing;