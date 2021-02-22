import Header from '../components/header'
import sharedStyles from '../styles/shared.module.css'
import Divider from '@material-ui/core/Divider'
import NextLogo from '../components/svgs/nextjs-3'
import ReactLogo from '../components/svgs/react-2'
import FlutterLogo from '../components/svgs/flutter-logo'

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
          React & Next.js Web Development
        </h2>
        <ReactLogo style={{ marginTop: 80 }} className={sharedStyles.logo} />
        <NextLogo
          style={{
            marginTop: 80,
            marginBottom: -16,
            fill: 'var(--color-text)',
          }}
          className={sharedStyles.logo}
        />
        <h2
          style={{
            marginTop: 64,
            fontSize: 24,
          }}
        >
          Flutter Mobile App Development
        </h2>
        <FlutterLogo
          style={{ marginTop: 56, marginBottom: -24 }}
          className={sharedStyles.logo}
        />
      </div>
    </>
  )
}
