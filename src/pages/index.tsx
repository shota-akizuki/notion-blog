import Header from '../components/header'
import sharedStyles from '../styles/shared.module.css'

export default () => (
  <>
    <Header titlePre="Home" />
    <div className={sharedStyles.layout}>
      <h1 style={{ fontSize: 40 }}>Shota Akizuki</h1>
      <h2 style={{ marginTop: 24, fontSize: 24 }}>- Developer Website -</h2>
      <div className={sharedStyles.layout}>
        <h2 style={{ marginTop: 60, fontSize: 24 }}>
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
