import styles from './main.module.css'
const Main = ()=>{

return(   

    <main className={styles.main}>
    <h1 className={styles.title}>
      Welcome to <a href="https://nextjs.org">Next.js!</a>
    </h1>

    <p className={styles.description}>
      Get started by editing{' '}
      <code className={styles.code}>pages/index.js</code>
    </p>

    <div className={styles.grid}>
      <a href="/Crud" className={styles.card}>
        <h2>Documentation &rarr;</h2>
        <p>Find in-depth information about Next.js features and API.</p>
      </a>
    </div>
  </main>
)

}

export default Main