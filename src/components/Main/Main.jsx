import "./Main.css"
import HeroImg from "../../assets/HeroImg.png"
import HeroBg from "../../assets/hero-bg.png"
import Food from "../../assets/Food.svg"
import Star from "../../assets/Star.svg"

export const Main = () => {
    return (
        <div style={{
            background: ` #757575 url(${HeroBg}) no-repeat center/cover`
        }}>
            <div className="container main">
                <div className="main-text">
                    <h1>Good Food Us Good Mood</h1>
                    <p>I would think that conserving our natural resources should be
                        a conservative position: Not to waste food, and  not to throw away a lot of the food that we buy.</p>
                    <button className="common-btn btn-green">Daftar Sekarang</button>
                    <button className="common-btn btn-gray">About Us</button>
                </div>
                <div className="main-img">
                    <img src={HeroImg} alt="hero-img" />
                    <div className="img-info">
                        <div >
                            <img src={Food} alt="" />
                        </div>
                        <div>
                            <h3>Green Salad Tomato</h3>
                            <p>Tomato</p>
                            {/* {[1,2,3,4,5].map(star =>  )} */}
                            <img src={Star} alt="" />   
                        </div>
                    </div>
                </div>
            </div>
        </div>


    )
}
