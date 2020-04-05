import React from 'react';
import styles from '../Logo/Logo.module.scss';
import pokemonLogo from '../../img/logo.png';

const Logo = () => (
<img src={pokemonLogo} className={styles.logo} alt='logo'/>
)

export default Logo;