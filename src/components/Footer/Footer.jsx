import "./Footer.css"
import Logo from "../../assets/logo.svg"
import Email from "../../assets/Email.svg"
import Email2 from "../../assets/Email2.svg"
import Phone from "../../assets/Phone.svg"
import Insta from "../../assets/Insta.svg"


const categories = [
    "Cupcake", "Pizza", "Kebab", "Salmon", "Dougnut"
]
const aboutUs = [
    "About Us", "FAQ", "Report Problem"
]

export const Footer = () => {
    return(
        <div className="container footer"> 
            <div className="f-logo"> 
                <img src={Logo} alt="" />
                <p>Jl. Prof. DR. Satrio No.7, RT.3/RW.3, Karet Kuningan, 
                   Kecamatan Setiabudi, Kota Jakarta Selatan, 
                   Daerah Khusus Ibukota Jakarta 12950
                </p>
                <div className="f-icons">
                    <div>
                        <img src={Email} alt="" />
                    </div>
                    <div>
                        <img src={Phone} alt="" />
                    </div>
                    <div>
                      <img src={Insta} alt="" />
                    </div>
                </div>
            </div>
            <div className="f-categories">
                <h3>Categories</h3>
                <ul>
                    {categories.map(item => <li>{item}</li>)}
                </ul>
            </div>
            <div className="f-about-us">
            <h3>About Us</h3>
            <ul>
                {aboutUs.map(item => <li>{item}</li>)}
            </ul>
            </div>
            <div className="f-news-letter">
                 <h3>Newsletter</h3>
                 <p>Get now free 50% discount for alll products on your first order</p>
            <div className="f-form">
                <input type="text" placeholder="Your email addres"/>
                <button className="btn-green">SEND</button>
            </div>
                <p className="f-email"> <img src={Email2} alt="" /> elemesid@email.com</p>
                <p className="f-phone"> <img src={Phone} alt="" /> 0888 1111 2222</p>
            
            </div>
            
        </div>
    )
}