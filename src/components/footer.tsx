import Divider from '@material-ui/core/Divider'
import dynamic from 'next/dynamic'
import FooterStyles from '../styles/footer.module.css'
import ThemeChanger from './ThemeChanger'

export default () => {
  return (
    <footer className={FooterStyles.layout}>
      <Divider style={{ margin: 48 }} />
      <div style={{ marginTop: -24 }}>
        <div>
          <ThemeChanger />
        </div>
        <span>Copyright©Shota Akizuki All rights reserved.</span>
      </div>
      <div style={{ marginTop: -8 }}>
        <span>Powered by Vercel.</span>
      </div>
    </footer>
  )
}
