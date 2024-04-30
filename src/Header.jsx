

import './Header.css'
import Logo from './assets/logo.svg'

const menu = ["Home", "Abaut", "Promotions", "Blogs", "Contact Us"]


const Header = () => {

    return <div className='container  header'> 
        <div className='logo'>
            <img src={Logo} alt="" />
        </div>
        <div className='nav-menu'>
            {menu.map( ( el ) => {
                return <a key={el} href="">{el}</a>
            })}
        
        </div>
        <div className='headers-button'>
            <button className='btn btn-white'>Masuk</button>
            <button className='btn btn-green'>Daftar Sekarang</button>
        </div>
    </div>
}

export default Header