import React from 'react'
import styles from './Navigation.module.scss'
import Logo from '../../assets/svgs/logo.svg'
import Instagram from '../../assets/svgs/instagram-icon.svg'
import ListItem from '../ListItem/ListItem'

type NavigationProps = {
  variant : 'full-width' | 'decreased'
}

function Navigation({variant}:NavigationProps) {
  return (
    <aside className={styles.aside}>
        {
          variant == 'full-width' ? <img src={Logo} alt='Instagram Logo'/> : <img src={Instagram} alt='Instagram'/>
        }
        <ul className={styles.navigation}>
          
        </ul>
    </aside>
  )
}

export default Navigation