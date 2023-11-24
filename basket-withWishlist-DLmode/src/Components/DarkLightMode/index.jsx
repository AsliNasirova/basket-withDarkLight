import React from 'react'
import './index.scss'
import useDarkMode from '../../Hook/useDarkMode'
import Card from '../Card'

function DarkLightMode() {
    const {islight,changeThemeMode} = useDarkMode()
    return (
      <>   
     
            <i className={`fa-solid ${islight ? 'fa-sun' : 'fa-moon'} `} onClick={changeThemeMode}></i>
      <Card/>
      </>
    )
  }

export default DarkLightMode
