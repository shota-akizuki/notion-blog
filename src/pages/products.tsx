import Header from '../components/header'
import sharedStyles from '../styles/shared.module.css'
import productsStyles from '../styles/contact.module.css'

export default () => (
  <>
    <Header titlePre="Products" />
    <div className={sharedStyles.layout}>
      <h1 style={{ marginTop: 0, fontSize: 24 }}>Products</h1>
      <div className={productsStyles.avatar}>
        <img src="/widget_app.png" alt="pointed_star" height="30" width="120" />
      </div>
      <a
        href="https://apps.apple.com/jp/app/%E3%82%B9%E3%83%9E%E3%83%9B%E3%81%A7flutter/id1551776146"
        className={productsStyles.links}
        target="_blank"
      >
        スマホでFlutter(iOS)
      </a>
      <p className={productsStyles.name}>
        App Store開発ツールランキング2位獲得。
      </p>
      <a
        className={productsStyles.links}
        href="https://qiita.com/shota0609akizuki/items/c276caae464a85391060"
      >
        KBOYのFlutter大学共同開発チームで制作
      </a>
    </div>
  </>
)
