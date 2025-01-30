import './Categories.style.css';
import categories from "./../../helper/categories.json";

const Categories = () => {
    const baseURL = '/categories/';
    const categoryCards = categories.categories.map((category) => (
        <div key={category.text} className="category">
            <img src={`${baseURL}${category.img}`} className='category__img' alt='img'/>
            <p className="category__text">{category.text}</p>
        </div>
    ));
    return (
        <div className='categories container'>
            {categoryCards}
        </div>
    );
}
 
export default Categories;