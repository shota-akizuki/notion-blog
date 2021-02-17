import Header from '../components/header'
import ExtLink from '../components/ext-link'
import sharedStyles from '../styles/shared.module.css'
import contactStyles from '../styles/contact.module.css'
import GitHub from '../components/svgs/github'
import Envelope from '../components/svgs/envelope'
import Instagram from '../components/svgs/instagram'
import Twitter from '../components/svgs/twitter'

const contacts = [
  {
    Comp: Twitter,
    alt: 'twitter icon',
    link: 'https://twitter.com/shota_akizuki',
  },
  {
    Comp: Instagram,
    alt: 'instagram icon',
    link: 'https://www.instagram.com/shota_akizuki',
  },
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
      <h1 className={contactStyles.title}>Contact</h1>
      <h2 className={contactStyles.name}>Shota Akizuki - Web Developer</h2>

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
