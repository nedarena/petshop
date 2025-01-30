import './Foodies.style.css';
import Btn from '../Btn/Btn';
import CardProduct from '../CardProduct/CardProduct';

const cardData = [
    {
        image: '/cardProducts/Product5.png',
        title: 'fresh kisses'
    },
    {
        image: '/cardProducts/Product6.png',
        title: 'pate butcher`s'
    },
    {
        image: '/cardProducts/Product7.png',
        title: 'pulsitos'
    },
    {
        image: '/cardProducts/Product8.png',
        title: 'pate butcher`s'
    },
    {
        image: '/cardProducts/Product9.png',
        title: 'chicken treats'
    },
    {
        image: '/cardProducts/Product10.png',
        title: 'love corn'
    },
    {
        image: '/cardProducts/Product11.png',
        title: 'pate butcher`s'
    },
    {
        image: '/cardProducts/Product12.png',
        title: 'winiary'
    },
];

const Foodies = () => {
    return ( 
        <div className='Foodies container'>
            <div className="foodies__title">
                <p className="foodies__title-text">Pet Foodies</p>
                <div className="foodies__nav">
                    <li className="foodies__nav-item foodies__nav-item-active">all</li>
                    <li className="foodies__nav-item">cat</li>
                    <li className="foodies__nav-item">dog</li>
                    <li className="foodies__nav-item">bird</li>
                </div>
                <Btn text={'shop all \u2192'}/>
            </div>
            <div className="foodies__products">
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
 
export default Foodies;