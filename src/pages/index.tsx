import Header from '../components/header'
import sharedStyles from '../styles/shared.module.css'
import Divider from '@material-ui/core/Divider'
import contactStyles from '../styles/contact.module.css'

export default () => (
  <>
    <Header titlePre="Home" />
    <div className={sharedStyles.layout}>
      <h1 style={{ fontSize: 40 }}>Shota Akizuki</h1>
      <h2 style={{ margin: 40 }}>- Developer Website -</h2>
      <div className={sharedStyles.layout}>
        <Divider style={{ margin: 56 }} />
        <h2
          style={{ marginTop: 60, fontSize: 24 }}
          className={contactStyles.name}
        >
          Flutter Mobile App Development
        </h2>
        <div>
          <img
            src="/flutter-logo.png"
            alt="flutter-logo"
            height="300"
            width="400"
          />
        </div>
        <h2 style={{ marginTop: 24, fontSize: 24 }}>React Web Development</h2>
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
