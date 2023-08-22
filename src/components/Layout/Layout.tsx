import { NavLink, Outlet} from 'react-router-dom';

const Layout = () => {
  return (
    <div>
        <nav>
            <NavLink to="/">Головна</NavLink>
            <NavLink to="/math">Матекатика</NavLink>
            <NavLink to="/english">Англійська</NavLink>
            <NavLink to="/find">Вправа на уважність</NavLink>
        </nav>
        <main><Outlet/></main>
    </div>
  )
}

export default Layout