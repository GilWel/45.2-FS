
import {fellowship} from './fellowship'
import './Lesson05.css'

function Lesson05(){

    console.log(fellowship)
    return(
        <div>
           <h2>React map() components 🧝🧝🧝</h2>
           {fellowship.map((hero, index) => (
            <div className='heroCard' key={hero}>
                <p>Hero: {hero.name}</p>
                <p>{hero.age} years old</p>
                <p>{hero.isDark ? 'Vilian🔥' : 'Hero ✨'}</p>
            </div>

           ))}


        </div>
    );
}
export default Lesson05