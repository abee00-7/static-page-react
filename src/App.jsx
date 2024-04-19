import React from 'react';
import './App.css'; 
import chair1 from'../src/assets/chair1.jpeg'
import chair2 from'../src/assets/chair2.jpeg'
import chair3 from'../src/assets/chair3.jpg'
import chair4 from'../src/assets/chair4.jpg'
import chair5 from'../src/assets/chair5.webp'
import chair6 from'../src/assets/chair6.jpeg'
function App() {
  return (
    <div className="App">
      <header>
        <h1 className='text-center fw-bolder text-danger'>Furniture Emporium</h1>
        <nav>
          <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#products">Products</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </nav>
      </header>
      <main>
        <section id="home">
          <h2 className='fw-bolder text-dark text-center '>Welcome to Furniture Emporium</h2>
          <p className='fw-bolder text-danger text-center '>Explore our wide range of high-quality furniture products.</p>
        </section>
        <section id="products">
          <h2 className='fw-bolder text-dark text-center '>Our Products</h2>
          <div className="products-container ">
            <div className="product bg-dark rounded">
              <img style={{height:'40vh',width:'60vh'}} src={chair1} alt="Chair" />
              <h3 className='text-light text-center'>Comfy Chair</h3>
              <p className='text-light text-center'>Price: $99</p>
              <button className='btn btn-danger'>Buy NOW</button>

            </div>
            <div className="product bg-dark rounded">
              <img style={{height:'40vh',width:'60vh'}}  src={chair2} alt="Table" />
              <h3 className='text-light text-center'>Wooden Table</h3>
              <p className='text-light text-center'>Price: $199</p>
              <button className='btn btn-danger'>Buy NOW</button>

            </div>
            <div className="product bg-dark rounded">
              <img style={{height:'40vh',width:'60vh'}} src={chair3}alt="Table" />
              <h3 className='text-light text-center'>single chair</h3>
              <p className='text-light text-center'>Price: $199</p>
              <button className='btn btn-danger'>Buy NOW</button>

            </div>
            <div className="product bg-dark rounded">
              <img src={chair4} alt="Table" />
              <h3 className='text-light text-center'>coloured chair</h3>
              <p className='text-light text-center'>Price: $199</p>
              <button className='btn btn-danger'>Buy NOW</button>

            </div>
            <div className="product bg-dark rounded">
              <img src={chair5} alt="Table" />
              <h3 className='text-light text-center'>mutlicoloured</h3>
              <p className='text-light text-center'>Price: $199</p>
              <button className='btn btn-danger'>Buy NOW</button>
            </div>
            <div className="product bg-dark rounded">
              <img style={{height:'40vh',width:'60vh'}}  src={chair6} alt="Table" />
              <h3 className='text-light text-center'>coloured chair</h3>
              <p className='text-light text-center'>Price: $199</p>
              <button className='btn btn-danger'>Buy NOW</button>

            </div>
            {/* Add more products here */}
          </div>
        </section>
      </main>
      <div id='about' className="mb-2 text-center bg-dark rounded">
      <section id="about">
          <h2 className='text-light fw-bolder'>About Us</h2>
          
            <p className='text-light'>Furniture Emporium is your one-stop destination for all your furniture needs. We offer a diverse selection of stylish and functional furniture pieces, ranging from classic to contemporary designs. Our commitment to quality craftsmanship and customer satisfaction sets us apart. Whether you're furnishing your home or office, we have the perfect pieces to complement your space. Shop with us and experience the difference in quality and service. <br />
            Furniture Emporium is your one-stop destination for all your furniture needs. We offer a diverse selection of stylish and functional furniture pieces, ranging from classic to contemporary designs. Our commitment to quality craftsmanship and customer satisfaction sets us apart. Whether you're furnishing your home or office, we have the perfect pieces to complement your space. Shop with us and experience the difference in quality and service. </p>
          
        </section>
      </div>
      <footer id="contact">
        <p className='text-center'>&copy; 2024 Furniture Emporium. All rights reserved.</p>
        <p className='text-center'>Contact us: info@furnitureemporium.com</p>
      </footer>
    </div>
  );
}

export default App;