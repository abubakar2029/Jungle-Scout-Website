import './styles.css'
import {
  Routes,
  BrowserRouter,
  Route,
  useMatch,
  Outlet,
  NavLink,
} from 'react-router-dom'

function Index() {
  return (
    <>
    <h2> Index </h2>
    </>
  )
}

function Nav() {
  return (
    <>
      <header>
        <ul>
          <li><NavLink to="/">Home</NavLink></li>
          <li><NavLink to="/profile">Profile</NavLink></li>
          <li><NavLink to="/about">About</NavLink></li>
        </ul>
      </header>
      <Outlet />
    </>
  )
}

function Profile() {
  const match = useMatch('/profile')

  return (
    <>
      <h2>Profile</h2>
      {match && (
        <pre>
          <code>{JSON.stringify(match, null, 2)}</code>
        </pre>
      )}
    </>
  )
}

function About() {
  const match = useMatch('/about')

  return (
    <>
      <h2>About</h2>
      {match && (
        <pre>
          <code>{JSON.stringify(match, null, 2)}</code>
        </pre>
      )}
    </>
  )
}

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Nav />}>
          <Route index element={<Index />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/about" element={<About />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}