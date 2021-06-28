import {NavLink} from 'react-router-dom';

let categories = [{
    id: 0,
    name: 'Aire Acondicionado',
},
{
    id: 1,
    name: 'Calefaccion',
},
{
    id: 2,
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