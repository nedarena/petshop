import React, { useState } from 'react';
import './Foodies.style.css';
import Btn from '../Btn/Btn';
import CardProduct from '../CardProduct/CardProduct';

const cardData = [
    {
        image: '/cardProducts/Product5.png',
        title: 'fresh kisses',
        category: 'cat',
        price: 38,
        incart: false
    },
    {
        image: '/cardProducts/Product6.png',
        title: 'pate butcher`s',
        price: 18,
        category: 'dog'
    },
    {
        image: '/cardProducts/Product7.png',
        title: 'pulsitos',
        price: 15,
        category: 'bird'
    },
    {
        image: '/cardProducts/Product8.png',
        title: 'butcher`s pate',
        price: 43,
        category: 'dog'
    },
    {
        image: '/cardProducts/Product9.png',
        title: 'chicken treats',
        price: 18,
        category: 'cat'
    },
    {
        image: '/cardProducts/Product10.png',
        title: 'love corn',
        price: 18,
        category: 'cat'
    },
    {
        image: '/cardProducts/Product11.png',
        title: 'butcher`s dogs',
        price: 18,
        category: 'dog'
    },
    {
        image: '/cardProducts/Product12.png',
        title: 'winiary',
        price: 18,
        category: 'bird'
    },
];

const Foodies = () => {
    const [activeFilter, setActiveFilter] = useState('all'); // Состояние для хранения активного фильтра
    const handleClick = (filter) => {
        setActiveFilter(filter); // Меняем активный фильтр при клике
    };

    const filteredCards = activeFilter === 'all' ? cardData : cardData.filter(card => card.category === activeFilter);

    return ( 
        <div className='Foodies container'>
            <div className="foodies__title">
                <p className="foodies__title-text">Pet Foodies</p>
                <div className="foodies__nav">
                    <li className={`foodies__nav-item ${activeFilter === 'all' ? 'foodies__nav-item-active' : ''}`} onClick={() => handleClick('all')}>all</li>
                    <li className={`foodies__nav-item ${activeFilter === 'cat' ? 'foodies__nav-item-active' : ''}`} onClick={() => handleClick('cat')}>cat</li>
                    <li className={`foodies__nav-item ${activeFilter === 'dog' ? 'foodies__nav-item-active' : ''}`} onClick={() => handleClick('dog')}>dog</li>
                    <li className={`foodies__nav-item ${activeFilter === 'bird' ? 'foodies__nav-item-active' : ''}`} onClick={() => handleClick('bird')}>bird</li>
                </div>
                <Btn text={'shop all \u2192'}/>
            </div>
            <div className="foodies__products">
                {filteredCards.map(item => (
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
 
export default Foodies;