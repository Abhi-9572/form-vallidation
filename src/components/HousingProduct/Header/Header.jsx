// import MyHeading from "./Heading"
// import {Heading2} from "./Heading"
import SearchBar from "./SearchBar"
 
  export default function Header()
 {
    return( 
        <div>
            {/* <header>
            <h2>This is my first react Project</h2>
        </header> */}
        <nav>
            <ul>
                <li>Home</li>
                <li>Product</li>
                <li>login</li>
            </ul>
            <SearchBar/>
            
        </nav>
        {/* <MyHeading/>
        <Heading2/> */}
        </div>
    )
 }
