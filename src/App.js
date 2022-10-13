
import './App.css';
import { ChildToParent } from './components/ChildToParent';
import { Counter } from './components/Counter';
import { ChildrenProps } from './components/HousingProduct/ChildrenProps';
// import Product from './components/HousingProduct/Product';
import Header from './components/HousingProduct/Header/Header';
import { MainArea } from './components/HousingProduct/MainArea';

// import SearchBar from './components/Basics/SearchBar';
// import Section from './components/Section';
// import Cart from './components/Cart';
import Title from './components/HousingProduct/Title';
import { Wraper } from './components/HousingProduct/Wraper';
import { Parent } from './components/LiftingTheState/Parent';
import { Product } from './components/List/Product';
import { ProductList } from './components/List/ProductList';
import { Person } from './components/Person/Person';
// import { StateExample } from './components/States/StateExample';
import { StateExampleRefType } from './components/States/StateExampleRefType';






export function App() {
  let userInfo={
        address:"jamshedpur",
        age:22
  }

  const caller = ()=>{
    console.log("fun called");
  }

  // const print=()=>
  // {
  //   console.log('my name is abhishek and my address is madanpur');
  // }


  const print=(userInfo)=>
  {
    console.log(`my name is ${userInfo.name} and my address is ${userInfo.address}`);
  }
  let arr=[23,24]
  return (
    <div className="App">
      {/* <Header></Header>
      <Section></Section>
      <br/>
      <Cart/>
      
      <h1>
        React
      </h1> */}
      {/* <Header/> */}
      {/* <Title/> */}
      {/* <Product/> */}
      {/* <Product name="queen panel bed" type="household" rating={4} price={2500} image="##" available={true} {...userInfo} caller={()=> 10*}/>
      <br/>
      <Product name="Dresser" type="furniture" rating={3} price={500} image="##" available={false}/>
      <br/>
      <Product name="queen panel bed" type="household" rating={5} price={3500} image="##" available /> */}
 
      {/* <Wraper obj={userInfo} nums={[1,2,3,4,5]} fun={caller}/>
      <br/>
      <br/> */}
      {/* <Wraper obj={{address:"delhi",age:"23"}} nums={arr} fun={()=> console.log("fun1 called")}/>  */}

      {/* <MainArea {...userInfo} /> */}


      {/* <ChildrenProps name="abhihsek">
        <p>This is between opening and closing tag</p>
        <p>second statement</p>
      </ChildrenProps>
      <br/>
      <br/>
      <Person name="Deepak" address="Aurangabad" gender="Male"/> */}
      {/* <StateExample/> */}
      {/* <StateExample/> */}
      {/* <StateExampleRefType/> */}
      <br/>
      <br/>

      {/* <ChildToParent name='avsk' print={print}/> */}
      {/* <Counter/> */}
      {/* <Parent/> */}
      {/* <Product/> */}
      <ProductList/>
      
      
    </div>
  );
}

export default App;
