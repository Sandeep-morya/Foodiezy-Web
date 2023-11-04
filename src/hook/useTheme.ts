import {useContext} from 'react'
import { ThemeContext } from '../provider/ThemeProvider'

const useTheme = () => {
  return useContext(ThemeContext)
}

export default useTheme