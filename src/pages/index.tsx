import Header from '../components/header'
import sharedStyles from '../styles/shared.module.css'
import Divider from '@material-ui/core/Divider'
import Next from '../components/svgs/nextjs-3'

export default () => {
  return (
    <>
      <Header titlePre="Home" />
      <div className={sharedStyles.layout}>
        <h1 className={sharedStyles.title}>Shota Akizuki</h1>
        <h2 style={{ margin: 40 }}>- Developer Website -</h2>
        <Divider style={{ margin: 48 }} />
        <h2 style={{ marginTop: 24, fontSize: 24 }}>
          Next.js & React Web Development
        </h2>
        <div>
          <img
            src="/logo-og.png"
            alt="react-logo"
            height="300"
            width="320"
            style={{ marginTop: 32 }}
          />
        </div>
        <Next
          style={{ marginTop: 96, marginBottom: -16 }}
          className={sharedStyles.next}
        />
      </div>
    </>
  )
}
