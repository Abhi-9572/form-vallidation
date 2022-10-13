import React from 'react'


export const ConditionalReturns = (props) => {
  let themeName;
  if(props.theme)
  {
    themeName='theme1'
  }else{
    themeName='theme2'
  }
  if(props.theme)
  {
    return (
      <>
      <h2 className={`${themeName} themeFont`}>Flipkart</h2>
       <div>ConditionalReturns 1</div>
       <div>Traditional Section</div>
      </>
     )
  }
  else
  {
    return (
      <>
      <h2  className={themeName}>Flipkart</h2>
      <div>ConditionalReturns 2</div>
      <div>Grocery Section</div>
     </>
    )
  } 
}
