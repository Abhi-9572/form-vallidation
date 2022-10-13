import React from 'react'
import Styles from './ModuleCssCom.module.css'

export const ModuleCssCom = () => {
  return (
    <>
    <div className={Styles.theme1}>Theme1</div>
    <div className='theme1'>Theme1</div>
    <div>Theme2</div>
    </>
  )
}
