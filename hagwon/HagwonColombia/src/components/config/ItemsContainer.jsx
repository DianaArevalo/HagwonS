import ItemFooter from './Itemfooter'
import { CURSOS, INFORMACION, SECCION } from '../../exports/data.js'
const ItemsContainer = () => {
    return (
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:px-8 px-5 py-16 dark:text-white'>
            <ItemFooter Links={CURSOS} title="CURSOS" />
            <ItemFooter Links={INFORMACION} title="INFORMACION" />
            <ItemFooter Links={SECCION} title="SECCION" />
        </div>
    )
}

export default ItemsContainer