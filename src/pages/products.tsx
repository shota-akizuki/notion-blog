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
      <a className={contactStyles.links}>スマホでFlutter(iOS)</a>
      <p className={contactStyles.links}>
        （KBOYのFlutter大学共同開発チームで開発）
      </p>
    </div>
  </>
)
