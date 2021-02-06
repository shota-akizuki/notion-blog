import Header from '../components/header'
import ExtLink from '../components/ext-link'
import sharedStyles from '../styles/shared.module.css'
import contactStyles from '../styles/contact.module.css'
import GitHub from '../components/svgs/github'
import Envelope from '../components/svgs/envelope'

export default () => (
  <>
    <Header titlePre="Skills" />

    <div className={sharedStyles.layout}>
      <div>
        <img
          src="/flutter-logo.png"
          alt="flutter-logo"
          height="300"
          width="400"
        />
      </div>
      <h1 style={{ marginTop: 0, fontSize: 24 }}>
        Flutter&Dart App Development
      </h1>
    </div>
  </>
)
