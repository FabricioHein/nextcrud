import Header from '../components/header/header'
import Main from '../components/main/main'
import Footer from '../components/footer/footer'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Header />
      <Main/>
     
      <Footer />

    </div>
  )
}
