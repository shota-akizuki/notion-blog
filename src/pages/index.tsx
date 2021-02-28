import Header from '../components/header'
import sharedStyles from '../styles/shared.module.css'
import Divider from '@material-ui/core/Divider'
import NextLogo from '../components/svgs/nextjs-3'
import ReactLogo from '../components/svgs/react-2'
import Flutter from '../components/svgs/flutter'

export default () => {
  return (
    <>
      <Header titlePre="Home" />
      <div className={sharedStyles.layout}>
        <h1 className={sharedStyles.title}>Shota Akizuki</h1>
        <h2 style={{ margin: 40 }}>- Developer Website -</h2>
        <Divider style={{ margin: 48 }} />
        <h2
          style={{
            marginTop: 24,
            fontSize: 24,
          }}
        >
          Next.js & React Web Development
        </h2>
        <NextLogo
          style={{
            marginTop: 80,
            fill: 'var(--color-text)',
          }}
          className={sharedStyles.logo}
        />
        <ReactLogo style={{ marginTop: 80 }} className={sharedStyles.logo} />
        <h2
          style={{
            marginTop: 64,
            fontSize: 24,
          }}
        >
          Flutter Mobile App Development
        </h2>
        <Flutter
          style={{
            marginTop: 56,
            marginBottom: -16,
          }}
          className={sharedStyles.logo}
        />
      </div>
    </>
  )
}
