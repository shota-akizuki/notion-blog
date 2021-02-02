import Header from '../components/header'
import sharedStyles from '../styles/shared.module.css'

export default () => (
  <>
    <Header titlePre="Home" />
    <div className={sharedStyles.layout}>
      <img
        src="/pointed-star.png"
        height="30"
        width="120"
        alt="Vercel + Notion"
      />
      <h1>Shota Developer Web</h1>

      <div className="explanation">
        {/* <p>ここに何かしら説明を書くかも</p> */}
        <p></p>
      </div>
    </div>
  </>
)
