import Header from '../components/header'
import sharedStyles from '../styles/shared.module.css'
import contactStyles from '../styles/contact.module.css'

export default () => (
  <>
    <Header titlePre="Home" />
    <div className={sharedStyles.layout}>
      <h1 style={{ fontSize: 36 }}>Shota Akizuki</h1>
      <div className={contactStyles.avatar}>
        <img src="/pointed-star.png" alt="pointed_star" width="120" />
      </div>
      <h1 style={{ fontSize: 36 }}>Develeper Web Site</h1>
    </div>
  </>
)
