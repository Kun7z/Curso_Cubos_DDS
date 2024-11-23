import styles from './header.module.css'
import logoImage from '../../assets/logo.svg';
import signOutImage from '../../assets/sign-out.svg';
export function Header() {
  return (

    <header className={styles.header}>
      <img src={logoImage} alt="Logo" className="logo" />
      <img src={signOutImage} className={styles.signOut__button} alt="Sign Out" />
    </header>
  )
}