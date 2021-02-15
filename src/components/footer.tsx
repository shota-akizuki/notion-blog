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
      <span>Copyright©Shota Akizuki All rights reserved.</span>
      <div>
        <DynamicComponent />
      </div>
    </footer>
  )
}
