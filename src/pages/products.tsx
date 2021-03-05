import Header from '../components/header'
import sharedStyles from '../styles/shared.module.css'
import productsStyles from '../styles/products.module.css'

export default () => {
  return (
    <>
      <Header titlePre="Products" />
      <div className={sharedStyles.layout}>
        <h1 className={productsStyles.title}>Products</h1>
        <img
          style={{ marginTop: 40 }}
          src="/senju_bosatsu.jpg"
          alt="senju_bosatsu"
          width="352"
        />
        <a
          style={{ marginTop: 40 }}
          href="https://shota-akizuki.ml/"
          className={productsStyles.links}
          target="_blank"
        >
          Shota Akizuki Artist Website
        </a>
        <h2 className={productsStyles.text}>
          個人でアーティスト活動をしています。
        </h2>
        <h2 className={productsStyles.text}>
          React × Next.jsで作成したシンプルなウェブサイトです。
        </h2>
      </div>
    </>
  )
}
