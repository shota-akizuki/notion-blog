import Header from '../components/header'
import sharedStyles from '../styles/shared.module.css'
import contactStyles from '../styles/contact.module.css'

export default () => (
  <>
    <Header titlePre="Home" />
    <div className={sharedStyles.layout}>
      <h1 style={{ fontSize: 32 }}>Shota Akizuki Developer Web Site</h1>
      <div className={sharedStyles.layout}>
        <h1 style={{ marginTop: 54, fontSize: 24 }}>
          Flutter Mobile App Development
        </h1>
        <div>
          <img
            src="/flutter-logo.png"
            alt="flutter-logo"
            height="300"
            width="400"
          />
        </div>
        <h1 style={{ marginTop: 24, fontSize: 24 }}>React Web Development</h1>
        <div>
          <img
            src="/logo-og.png"
            alt="react-logo"
            height="300"
            width="320"
            style={{ marginTop: 16 }}
          />
        </div>
      </div>
    </div>
  </>
)
