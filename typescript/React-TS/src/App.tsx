import { Context, FormEvent, createContext, useContext, useEffect, useState } from "react";
import Box from "./components/Box";
import ThemeChanger from "./components/ThemeChanger"

// type Person = {
//   name: string,
//   age: number
// }

// function App() {

//   // const [state, setState] = useState<string>('')

//   const [person, setPerson] = useState<Person>()

//   // console.log(state);

//   const submitHandler = (e: FormEvent<HTMLFormElement>) => {
//     e.preventDefault()
//     console.log(person);
//     // setPerson()
//   }
  

//   return (
//     <>
//       <div className="">

//         <form onSubmit={submitHandler}>
//           <input 
//             value={person?.name || ''}
//             onChange={(e) => setPerson((prev) => ({...prev!, name: e.target.value}))}
//             type="text" 
//             placeholder="name" />
//           <input 
//             value={person?.age || ''}
//             onChange={(e) => setPerson((prev) => ({...prev!, age: Number(e.target.value)}))}
//             type="number" 
//             placeholder="age" />

//             <button type="submit">Submit</button>
//         </form>
//         {/* <Box lable="Search" value={state} onChange={setState}/> */}
//       </div>
//     </>
//   );
// }


//useContext HOOK

type ThemeMode = 'light' | 'dark'

interface ThemeContextType{
  theme: ThemeMode,
  toggleTheme: () => void
}

const ThemeContext = createContext<ThemeContextType>({
  theme: "light",
  toggleTheme: () => {}
})

export function useTheme(): ThemeContextType {
  return useContext(ThemeContext)
}

function App() {

  const [theme, setTheme] = useState<ThemeMode>('light')

  function toggleTheme() {
    setTheme(prev => (prev === 'light' ? 'dark' : 'light'))
  }


  return (
    <ThemeContext.Provider value={{theme, toggleTheme}}>
      <ThemeChanger/>
    </ThemeContext.Provider>
  )
}

export default App;
