import Header from '../components/header'
import sharedStyles from '../styles/shared.module.css'

export default () => (
  <>
    <Header titlePre="Home" />
    <div className={sharedStyles.layout}>
      <img
        src="/pointed-star.png"
        height="40"
        width="120"
        alt="Vercel + Notion"
      />
      <h1>Shota Developer Blog</h1>

      <div className="explanation">
        {/* <p>ここに何かしら説明を書くかも</p> */}
        <p></p>
      </div>
    </div>
  </>
)
