import Header from '../components/header'
import ExtLink from '../components/ext-link'
import sharedStyles from '../styles/shared.module.css'
import contactStyles from '../styles/contact.module.css'
import GitHub from '../components/svgs/github'
import Envelope from '../components/svgs/envelope'

const contacts = [
  {
    Comp: GitHub,
    alt: 'github icon',
    link: 'https://github.com/shota-akizuki',
  },
  {
    Comp: Envelope,
    alt: 'envelope icon',
    link: 'mailto:shota0609akizuki@gmail.com',
  },
]

export default () => (
  <>
    <Header titlePre="Contact" />
    <div className={sharedStyles.layout}>
      <div className={contactStyles.avatar}>
        <img
          src="/pointed-star.png"
          alt="pointed_star"
          height="30"
          width="120"
        />
      </div>

      <h1 style={{ marginTop: 0, fontSize: 24 }}>Contact</h1>

      <div className={contactStyles.name}>
        Shota - Mobile / Web App Developer{' '}
      </div>

      <div className={contactStyles.links}>
        {contacts.map(({ Comp, link, alt }) => {
          return (
            <ExtLink key={link} href={link} aria-label={alt}>
              <Comp height={32} />
            </ExtLink>
          )
        })}
      </div>
    </div>
  </>
)
