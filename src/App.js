import './App.css';
import img1 from './images/asset 16.svg';
import { MdDirectionsCar } from "react-icons/md";
import { IoCallSharp } from "react-icons/io5";
import { FaFacebookF } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa";
function App() {
  return (
    <>
      {/* header start */}

      <section>
        <header>
          <div className='flex'>
            <div className='lg-img'>
              <img src={require(`./images/logo.png`)}></img>
            </div>
            <div className='menu'>
              <ul className='flex'>
                <li className='red'>HOME</li>
                <li>SERVICE</li>
                <li>PRICES</li>
                <li>NEWS</li>
                <li>PAGES</li>
                <li>CONTACT US</li>
              </ul>
            </div>
          </div>
        </header>
      </section>

      {/* header end */}

      {/* slider start */}

      <div className='p-relative'>
        <img src={require(`./images/2.jpeg`)} className='sld-img'></img>
        <div className='sid-info'>
          <p>QUALITY CAR</p>
          <p className='maint'>MAINTNEANCE</p>
        </div>
      </div>

      {/* slider end */}

      {/* about us start */}

      <section className='us-theme'>
        <div className='container'>
          <div className='us-info'>
            <p className='p-1'>AFEWWORDS</p>
            <p className='p-2'>ABOUT US</p>
            <p className='p-3'>For nearly 20 years, residents throughout the local area have turned to Car Repair for all of their automotive repair needs. With free estimates and fast turnaround, we are known for our personal service and expertise in all forms of specialized engine repair. We use the latest and most modern diagnostic technology to have you back in your car.</p>
            <button className='us-btn'>READ MORE</button>
          </div>
        </div>
      </section>

      {/* about us end */}

      {/* best service start */}

      <section>
        <div className='servise-1'>
          <div className='flex'>
            <div className='ser-img'>
              <img src={require(`./images/ser-1.jpeg`)}></img>
            </div>
            <div className='ser-info'>
              <p className='ser-p1'>BEST</p>
              <p className='ser-p2'>SERVISES</p>
              <p className='ser-p3'>Car Repair can solve almost any problem that occurs with your vehicle. From engine repairs and oil change to regular maintenance and diagnostics, you will always get reliable services from our ASE certified technicians who use the latest in automotive equipment and diagnostic software.</p>
              <button className='ser-btn'>READ MORE</button>
            </div>
          </div>
        </div>
        <div className='servise-1'>
          <div className='flex'>
            <div className='ser-info-2'>
              <p className='ser-p1'>100% RESULT</p>
              <p className='ser-p2'>GUARANTEE</p>
              <p className='ser-p3'>Car Repair stands for expertise, value, and professionalism - and has from the day the company began. We were the first automotive aftermarket repair company to offer a lifetime guarantee on select services, and today we guarantee that the results of our work will meet your expectations.</p>
              <button className='ser-btn'>READ MORE</button>
            </div>
            <div className='ser-img'>
              <img src={require(`./images/ser-2.jpeg`)}></img>
            </div>
          </div>
        </div>
      </section>

      {/* best service end */}

      {/* OUR ADVANTAGES start */}

      <section className='space-x space-y'>
        <div className='container'>
          <p className='ad-heading'><b>OUR</b>ADVANTAGES</p>
          <div className='flex box-line'>
            <div className='box-1 flex'>
              <div className='ad-info'>
                <h4 className='box-head'>ALL CAR MAKES</h4>
                <p className='box-info'>We provide a variety of repair and maintenance services for all car makes and models, even for exotic and vintage ones.</p>
              </div>
              <div className='ad-img'>
                <div className='p-relative ml'>
                  <img src={img1}></img>
                  <p className='p-abs'><MdDirectionsCar></MdDirectionsCar></p>
                </div>
              </div>
            </div>
            <div className='box-1 flex'>
              <div className='ad-img'>
                <div className='p-relative ml'>
                  <img src={img1}></img>
                  <p className='p-abs'><MdDirectionsCar></MdDirectionsCar></p>
                </div>
              </div>
              <div className='ad-info ml'>
                <h4 className='box-head-left'>ALL CAR MAKES</h4>
                <p className='box-info-left'>We provide a variety of repair and maintenance services for all car makes and models, even for exotic and vintage ones.</p>
              </div>
            </div>
          </div>
          <div className='flex box-line'>
            <div className='box-1 flex'>
              <div className='ad-info'>
                <h4 className='box-head'>ALL CAR MAKES</h4>
                <p className='box-info'>We provide a variety of repair and maintenance services for all car makes and models, even for exotic and vintage ones.</p>
              </div>
              <div className='ad-img'>
                <div className='p-relative ml'>
                  <img src={img1}></img>
                  <p className='p-abs'><MdDirectionsCar></MdDirectionsCar></p>
                </div>
              </div>
            </div>
            <div className='box-1 flex'>
              <div className='ad-img'>
                <div className='p-relative ml'>
                  <img src={img1}></img>
                  <p className='p-abs'><MdDirectionsCar></MdDirectionsCar></p>
                </div>
              </div>
              <div className='ad-info ml'>
                <h4 className='box-head-left'>ALL CAR MAKES</h4>
                <p className='box-info-left'>We provide a variety of repair and maintenance services for all car makes and models, even for exotic and vintage ones.</p>
              </div>
            </div>
          </div>
          <button className='ad-btn'>READ MORE</button>
        </div>
      </section>

      {/* OUR ADVANTAGES end */}

      {/* OUR SERVICES start */}

      <section className='space-x space-y'>
        <div className='bg-img'>
          <div className='container'>
            <div className='our-heading'>
              <p className='our-p1'>OUR</p>
              <p className='our-p2'>SERVICES</p>
            </div>
            <div className='ser-data flex'>
              <div className='o-box'>
                <div className='d-flex'>
                  <div className='o-img'>
                    <img src={require(`./images/our-1.jpeg`)}></img>
                  </div>
                  <div className='o-info'>
                    <h5 className='b-head'>BRAKE REPAIR</h5>
                    <p className='b-info'>From the brake pedal to hydraulic brake fluid, our technicians can perform brake repair on any make and model.</p>
                  </div>
                </div>
              </div>
              <div className='o-box'>
                <div className='d-flex'>
                  <div className='o-img'>
                    <img src={require(`./images/our-2.jpeg`)}></img>
                  </div>
                  <div className='o-info'>
                    <h5 className='b-head'>BRAKE REPAIR</h5>
                    <p className='b-info'>From the brake pedal to hydraulic brake fluid, our technicians can perform brake repair on any make and model.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className='ser-data flex'>
              <div className='o-box'>
                <div className='d-flex'>
                  <div className='o-img'>
                    <img src={require(`./images/our-3.jpeg`)}></img>
                  </div>
                  <div className='o-info'>
                    <h5 className='b-head'>BRAKE REPAIR</h5>
                    <p className='b-info'>From the brake pedal to hydraulic brake fluid, our technicians can perform brake repair on any make and model.</p>
                  </div>
                </div>
              </div>
              <div className='o-box'>
                <div className='d-flex'>
                  <div className='o-img'>
                    <img src={require(`./images/our-4.jpeg`)}></img>
                  </div>
                  <div className='o-info'>
                    <h5 className='b-head'>BRAKE REPAIR</h5>
                    <p className='b-info'>From the brake pedal to hydraulic brake fluid, our technicians can perform brake repair on any make and model.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* OUR SERVICES end */}

      {/* what our client say start */}

      <section>
        <div className='container'>
          <div className='c-heading'>
            <p className='c-p1'>WHAT OUR</p>
            <p className='c-p2'>CLIENTS SAY</p>
          </div>
          <div className='c-data'>
            <div className='c-img p-relative'>
              <img src={require(`./images/p-1.jpeg`)}></img>
              <img src={require(`./images/qot.png`)} className='c-abs'></img>
            </div>
            <div className='c-info'>
              <h4 className='p-heading'>KATE MCMILLAN</h4>
              <p className='p-dif'>The owner of Car Repair didn’t want me to have to leave with a car that doesn’t work. So she adjusted the price to meet my ability to pay and did the work at a great rate as a favor to me. Besides they offered the top-notch customer service that’s hard to find nowadays.</p>
            </div>
          </div>
        </div>
      </section>

      {/* what our client say end */}

      {/* contact us start */}

        <section>
          <div className='con-bg-img'>
            <div className='container'>
              <div className='con-heading'>
                <p className='con-p1'>OUR</p>
                <p className='con-p2'>CONTACTS</p>
              </div>
              <div className='add'>
                <p className='con-p3'>ADDRESS: 4578 MARMORA ROAD, GLASGOW D04 89GR</p>
              </div>
              <div className='call p-relative'>
                <p><IoCallSharp className='call-abs'></IoCallSharp></p>
                <p className='call-p1'>800-2345-6789</p>
                <p className='call-p2'>800-2345-6790</p>
              </div>
              <div className='social-icon d-flex'>
                <p className='soc-fa'><FaFacebookF></FaFacebookF></p>
                <p className='soc-tw'><FaTwitter></FaTwitter></p>
              </div>
              <div className='copy'>
                <p>©  2023 CAR REPAIR. ALL RIGHTS RESERVED.PRIVACY POLICY</p>
              </div>
            </div>
          </div>
        </section>

      {/* contact us end */}

    </>
  );
}

export default App;