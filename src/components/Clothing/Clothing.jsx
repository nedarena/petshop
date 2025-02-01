import Btn from '../Btn/Btn';
import './Clothing.style.css';
import CardProduct from '../CardProduct/CardProduct';

const cardData = [
    {
        image: '/cardProducts/Product1.png',
        title: 'Grey hoodie',
        price: 15
    },
    {
        image: '/cardProducts/Product2.png',
        title: 'Happy jeans pant',
        price: 36
    },
    {
        image: '/cardProducts/Product3.png',
        title: 'Tight half t-shirt',
        price: 48
    },
    {
        image: '/cardProducts/Product4.png',
        title: 'Black thick jacket',
        price: 23
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
                        price={item.price}
                        />
                    </div>
                ))}
            </div>
        </div>
     );
}
 
export default Clothing;