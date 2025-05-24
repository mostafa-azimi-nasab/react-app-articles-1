import stayled from './navbar.module.css'

function Navbar(props) {

    return(

        
        <div className={stayled.navbar}>
        <div ><ol>
           <li> <h1>{props.title}</h1> </li>
            </ol></div>
        <ul>
            <li>Home</li>
            <li>articles</li>
            <li>about us</li>
        </ul>

        </div>
        

    )


}
export default Navbar