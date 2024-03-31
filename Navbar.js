import { Link } from 'react-router-dom'


function Navbar(){
  return (
    <nav className="flex gap-10 bg-rose-500 p-4">
      <NavItem title='Home' to='/' />
      <NavItem title='Contact' to='/contact' />
      <NavItem title='Protected' to='protected' />
      <NavItem title='SignIn' to='signin' />
    </nav>
  )
}

function NavItem({ title, to }){
  return(
    <>
      <Link to={to}>
        {title}
      </Link>
    </>
  )
}

export default Navbar