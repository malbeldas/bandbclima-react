import {NavLink} from 'react-router-dom';

let categories = [{
    id: 1,
    name: 'Aire Acondicionado',
},
{
    id: 2,
    name: 'Calefaccion',
},
{
    id: 3,
    name: 'Agua caliente sanitaria',
}]

const CategoriesNavBar = () => {

    const category = categories.map(({id, name})=>(
        <NavLink key={id} to={`/categories/${id}`} activeClassName='currentCategory' className='categoryLink'>{name}</NavLink>
    ))

        return (
            <div className="categoryContainer">    
                {category}
            </div>
        );
}

export {CategoriesNavBar};