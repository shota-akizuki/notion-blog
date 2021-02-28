import { useTheme } from 'next-themes'
import DarkIcon from '../components/svgs/darkicon'
import LightIcon from '../components/svgs/lighticon'
import sharedStyles from '../styles/shared.module.css'

const ThemeChanger = () => {
  const { theme, setTheme } = useTheme()
  return (
    <button onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}>
      {theme === 'dark' ? (
        <DarkIcon className={sharedStyles.icon} />
      ) : (
        <LightIcon className={sharedStyles.icon} />
      )}
    </button>
  )
}

export default ThemeChanger
