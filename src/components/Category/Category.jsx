import "./Category.css"
import img1 from "../../assets/img1.svg"
import img2 from "../../assets/img2.svg"
import img3 from "../../assets/img3.svg"
import img4 from "../../assets/img4.svg"
import img5 from "../../assets/img5.svg"



export const Category = () => {
  return (
    <div className="container category">
      <h2 className="c-list">
        Browser Our Category <br /> <span> Receipt</span>
      </h2>

      <div className="c-item" >
        <div style={{ backgroundColor: '#F0FEEB' }} className="c-img12">
          <div>
            <img src={img1} alt="" />
          </div>
          <h3>Cupcake</h3>
          <p>22 Items</p>
        </div>

        <div style={{ backgroundColor: '#E4F2F4' }} className="c-img12">
          <div>
            <img src={img2} alt="" />
          </div>
          <h3>Pizza</h3>
          <p>25 Items</p>
        </div>

        <div style={{ backgroundColor: '#EAEEFA' }} className="c-img12">
          <div>
            <img src={img3} alt="" />
          </div>
          <h3>Kebab</h3>
          <p>12 Items</p>
        </div>

        <div style={{ backgroundColor: '#F9EEF3' }} className="c-img12">
          <div>
            <img src={img4} alt="" />
          </div>
          <h3>Salmon</h3>
          <p>22 Items</p>
        </div>

        <div style={{ backgroundColor: '#F3F7D9' }} className="c-img12">
          <div>
            <img src={img5} alt="" />
          </div>
          <h3>Doughnut</h3>
          <p>11 Items</p>
        </div>
      </div>
      <div style={{display: 'flex', gap: '13px', justifyContent: 'end', marginTop: '30px'}}>
        <div>
          <button className="common-btn btn-green">PREV</button>
        </div>
        <div>
          <button className="common-btn btn-gray">NEXT</button>
        </div>
      </div>
    </div>
  )
}