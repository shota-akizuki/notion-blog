import Header from '../components/header'
import sharedStyles from '../styles/shared.module.css'

export default () => (
  <>
    <Header titlePre="Home" />
    <div className={sharedStyles.layout}>
      <img src="/pointed-star.png" width="100" alt="pointed-star" />
      <h1>Shota Developer Web Site</h1>
    </div>
  </>
)
