import Header from '../components/header'
import sharedStyles from '../styles/shared.module.css'
import productsStyles from '../styles/contact.module.css'

export default () => (
  <>
    <Header titlePre="Products" />
    <div className={sharedStyles.layout}>
      <h2 style={{ fontSize: 24 }}>Products</h2>
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
      <h2 className={productsStyles.name} style={{ fontSize: 16 }}>
        App Store開発ツールランキング2位獲得。
      </h2>
      <a
        target="_blank"
        className={productsStyles.links}
        style={{ fontSize: 16 }}
        href="https://qiita.com/shota0609akizuki/items/c276caae464a85391060"
      >
        KBOYのFlutter大学共同開発チームで制作
      </a>
    </div>
  </>
)
