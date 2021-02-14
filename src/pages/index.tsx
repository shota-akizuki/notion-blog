import Header from '../components/header'
import sharedStyles from '../styles/shared.module.css'
import Divider from '@material-ui/core/Divider'
import contactStyles from '../styles/contact.module.css'
import Next from '../components/svgs/nextjs-3'
export default () => (
  <>
    <Header titlePre="Home" />
    <div className={sharedStyles.layout}>
      <h1 className={sharedStyles.title}>Shota Akizuki</h1>
      <h2 style={{ margin: 40 }}>- Developer Website -</h2>
      <Divider style={{ margin: 48 }} />
      <h2 style={{ marginTop: 24, fontSize: 24 }}>React Web Development</h2>
      <div>
        <img
          src="/logo-og.png"
          alt="react-logo"
          height="300"
          width="320"
          style={{ marginTop: 24 }}
        />
      </div>
      <Next className={sharedStyles.next} />
      <h2 style={{ fontSize: 24 }} className={contactStyles.name}>
        Flutter Mobile App Development
      </h2>
      <div>
        <img
          src="/flutter-logo.png"
          alt="flutter-logo"
          width="400"
          style={{ marginBottom: -64 }}
        />
      </div>
    </div>
  </>
)
