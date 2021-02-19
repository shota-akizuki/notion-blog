import Header from '../components/header'
import sharedStyles from '../styles/shared.module.css'
import productsStyles from '../styles/products.module.css'
import Divider from '@material-ui/core/Divider'
export default () => (
  <>
    <Header titlePre="Products" />
    <div className={sharedStyles.layout}>
      <h1 className={productsStyles.title}>Products</h1>

      <div className={productsStyles.avatar}>
        <img src="/widget_app.png" alt="pointed_star" width="120" />
      </div>
      <a
        href="https://apps.apple.com/jp/app/%E3%82%B9%E3%83%9E%E3%83%9B%E3%81%A7flutter/id1551776146"
        className={productsStyles.links}
        target="_blank"
      >
        スマホでFlutter(iOS)
      </a>
      <h2 className={productsStyles.text}>
        App Store開発ツールランキング2位！
      </h2>
      <h2 className={productsStyles.text}>FlutterによるWidget体験アプリを、</h2>
      <a
        target="_blank"
        className={productsStyles.links}
        style={{ fontSize: 16 }}
        href="https://kboyflutteruniv.com/"
      >
        KBOYのFlutter大学共同開発チームで制作！
      </a>
      <a
        target="_blank"
        className={productsStyles.links}
        style={{ fontSize: 16 }}
        href="https://qiita.com/shota0609akizuki/items/c276caae464a85391060"
      >
        →Qiita記事はこちら
      </a>
      <Divider style={{ marginTop: 36, marginLeft: 440, marginRight: 440 }} />
      <img
        style={{ marginTop: 54 }}
        src="/senju_bosatsu.jpg"
        alt="senju_bosatsu"
        height="100"
        width="320"
      />
      <a
        href="https://nextjs-shota-blog.vercel.app/"
        className={productsStyles.links}
        target="_blank"
      >
        Shota Akizuki Artist Website
      </a>
      <h2 className={productsStyles.text}>
        個人でアーティスト活動をしています。
      </h2>
      <h2 className={productsStyles.text}>
        Next.jsで作成したウェブサイトです。
      </h2>
    </div>
  </>
)
