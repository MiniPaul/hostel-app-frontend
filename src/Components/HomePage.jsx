import React from 'react'
import HomeNavBar from './HomeNavBar'

const HomePage = () => {
  return (
    <div>
        <HomeNavBar/>
        <div className="container">

            <div className="row g-3">
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                <div id="carouselExampleCaptions" class="carousel slide">
  <div class="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img height="800px" src="https://www.dimensions-architect.com/wp-content/uploads/2014/07/Scholars-Institute-building.png" class="d-block w-100" alt="..."></img>
      <div class="carousel-caption d-none d-md-block">
        <h5><b><font color ="black">SereneNest Hostel</font></b></h5>
      </div>
    </div>
    <div class="carousel-item">
      <img height="800px" src="https://www.thehivehostels.com/uploads/images/1658301040_7796f3aa4d7819a2f5d5.jpeg" class="d-block w-100" alt="..."></img>
      <div class="carousel-caption d-none d-md-block">
      <h5><b>SereneNest Hostel</b></h5>
        <p>Each room at SereneNest Hostel is crafted to be your personal oasis, where comfort meets tranquility, ensuring a rejuvenating stay every time.</p>
      </div>
    </div>
    <div class="carousel-item">
      <img height="800px" src="https://gsayurvedamedicalcollege.com/img/gallery/gallery/BOYS-MESS-1.webp" class="d-block w-100" alt="..."></img>
      <div class="carousel-caption d-none d-md-block">
      <h5><b>SereneNest Hostel</b></h5>
        <p>At SereneNest Hostel, our communal area isn't just a mess hall; it's a vibrant gathering space where friendships are forged over delicious meals and shared stories, creating a sense of belonging for all our guests.</p>
      </div>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
                </div>
            </div>
            <br></br>


            <div className="row">
                <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                <div class="card">
                    <div class="card-body">
                     <h5 class="card-title"><center>Welcome To</center></h5>
                     <br></br>
                    <h6 class="card-subtitle mb-2 text-body-secondary"><center>SereneNest Hostel</center></h6>
                    <p class="card-text"><p>Serenenest Ladies Hostel offers a serene haven for both students and working women, providing a secure and nurturing environment conducive to personal growth and academic or professional pursuits.</p>
                    <p>Nestled in a tranquil setting, our hostel combines comfort with convenience, offering thoughtfully designed rooms and shared spaces tailored to meet the needs of modern women. With a focus on safety, community, and well-being.</p>
                    Serenenest fosters a supportive atmosphere where friendships flourish, empowering residents to thrive in their endeavors while enjoying a peaceful retreat away from the bustle of daily life.</p>
                    </div>
                </div>
                </div>

                <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                <div class="card">
                    <img src="https://t4.ftcdn.net/jpg/02/19/66/93/360_F_219669327_v12pBKc7TB62E3uCJrgRRkDhfVENK3z5.jpg" class="card-img-top" alt="..."></img>
                    </div>
                </div>
            </div>
            <br></br>

            <div className="row" >
                <img src="https://media.nngroup.com/media/editor/2019/01/16/clarity.png"></img>
            </div>

        </div>
    </div>
  )
}

export default HomePage