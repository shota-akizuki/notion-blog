import Header from '../components/header'
import sharedStyles from '../styles/shared.module.css'

export default () => (
  <>
    <Header titlePre="Skills" />

    <div className={sharedStyles.layout}>
      <h1 style={{ marginTop: 0, fontSize: 22 }}>
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
      <h1 style={{ marginTop: 0, fontSize: 22 }}>React Web Development</h1>
      <div>
        <img src="/logo-og.png" alt="react-logo" height="300" width="320" />
      </div>
    </div>
  </>
)
