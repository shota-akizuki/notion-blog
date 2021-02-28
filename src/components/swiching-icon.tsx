import { useTheme } from 'next-themes'
import DarkIcon from '../components/svgs/darkicon'
import LightIcon from '../components/svgs/lighticon'

export default function Icon() {
  const { theme, setTheme } = useTheme()
  setTheme(theme === 'dark' ? 'light' : 'dark')
  return <div>{theme === 'dark' ? <DarkIcon /> : <LightIcon />}</div>
}
