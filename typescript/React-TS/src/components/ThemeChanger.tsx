import {useTheme} from '../App'

const ThemeChanger = () => {

    const {theme, toggleTheme} = useTheme()

    const changeTheme = () => {
      toggleTheme()
    }

  return (
    <>
        <div style={{width: '300px', height: '300px', backgroundColor: theme === 'light' ? 'gray' : 'black'}}>
            <h1 style={{color: theme === 'light' ? 'black' : 'white'}}>Theme is {theme}</h1>
            <button onClick={changeTheme}>Change</button>
        </div>
    </>
  )
}

export default ThemeChanger