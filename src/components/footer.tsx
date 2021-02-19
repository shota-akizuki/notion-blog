import Divider from '@material-ui/core/Divider'
import dynamic from 'next/dynamic'
import FooterStyles from '../styles/footer.module.css'

export default () => {
  const DynamicComponent = dynamic(() =>
    import('../components/switching-theme')
  )
  return (
    <footer className={FooterStyles.layout}>
      <Divider style={{ margin: 48 }} />
      <div style={{ marginTop: -32 }}>
        <span>Copyright©Shota Akizuki All rights reserved.</span>
      </div>
      <div style={{ marginTop: -16 }}>
        <span>Built with Vercel App.</span>
      </div>
      <div>
        <DynamicComponent />
      </div>
    </footer>
  )
}
