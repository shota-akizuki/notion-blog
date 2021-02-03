import Header from '../components/header'
import sharedStyles from '../styles/shared.module.css'
import contactStyles from '../styles/contact.module.css'

export default () => (
  <>
    <Header titlePre="Products" />
    <div className={sharedStyles.layout}>
      <h1 style={{ marginTop: 0, fontSize: 30 }}>Products</h1>
      <div className={contactStyles.avatar}>
        <img src="/widget_app.png" alt="pointed_star" height="30" width="120" />
      </div>
      <a
        href="https://apps.apple.com/jp/app/%E3%82%B9%E3%83%9E%E3%83%9B%E3%81%A7flutter/id1551776146"
        className={contactStyles.links}
      >
        スマホでFlutter(iOS)
      </a>
      <p className={contactStyles.links}>
        Flutterウィジェット体験アプリ / KBOYのFlutter大学共同開発チームで制作
      </p>
    </div>
  </>
)
