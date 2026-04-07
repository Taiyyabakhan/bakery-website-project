import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import BrownieImage from "../assets/brownie.jpg";
import CakeImage from "../assets/chocolate cake.jpg";
import CroissantImage from "../assets/Croissant.jpg";
import { SkeletonHero, SkeletonSection } from "../components/Skeleton";
import "../styles/Home.css";
import "../styles/Skeleton.css";

function Home() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => {
      setLoading(false);
    }, 600);
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <div className="home">
        <SkeletonHero />
        <SkeletonSection count={3} />
        <SkeletonSection count={3} />
        <SkeletonSection count={3} />
      </div>
    );
  }

  return (
    <div className="home">
      <div className="mainContainer">
        <div className="headerContainer">
          <h1> Soft Bakery </h1>
          <p>Discover our wide range of freshly<br />baked delights made daily with love.</p>
          <Link to="/menu">
            <button> 🍰 Explore Our Menu </button>
          </Link>
        </div>
        <div className="imageContainer">
          <img src={BrownieImage} alt="Brownie" />
        </div>
      </div>
      
      <div className="featuredSection">
        <h2>Featured Products</h2>
        <div className="featuredProducts">
          <div className="productCard">
            <img src={BrownieImage} alt="Brownie" />
            <h3>Chocolate Brownie</h3>
            <p>Rich, fudgy brownie with premium chocolate</p>
            <span className="price">₹415</span>
          </div>
          <div className="productCard">
            <img src={CakeImage} alt="Cake" />
            <h3>Chocolate Cake</h3>
            <p>Moist chocolate cake with layers of ganache</p>
            <span className="price">₹1,078</span>
          </div>
          <div className="productCard">
            <img src={CroissantImage} alt="Croissant" />
            <h3>Butter Croissant</h3>
            <p>Flaky butter croissant, baked fresh daily</p>
            <span className="price">₹290</span>
          </div>
        </div>
      </div>
      
      <div className="testimonialsSection">
        <h2>What Our Customers Say</h2>
        <div className="testimonials">
          <div className="testimonialCard">
            <div className="stars">⭐⭐⭐⭐⭐⭐</div>
            <p>"The best brownies I've ever tasted! Fresh, rich, and absolutely delicious. Soft Bakery is my go-to place for treats."</p>
            <div className="customer">
              <strong>Sarah Johnson</strong>
              <span>Regular Customer</span>
            </div>
          </div>
          <div className="testimonialCard">
            <div className="stars">⭐⭐⭐⭐⭐⭐⭐</div>
            <p>"Amazing chocolate cakes! Perfect for birthdays and special occasions. The quality is consistently excellent."</p>
            <div className="customer">
              <strong>Mike Chen</strong>
              <span>Birthday Customer</span>
            </div>
          </div>
          <div className="testimonialCard">
            <div className="stars">⭐⭐⭐⭐⭐</div>
            <p>"Fresh croissants every morning! The buttery flavor is perfect and they're always warm when I visit."</p>
            <div className="customer">
              <strong>Emma Davis</strong>
              <span>Morning Regular</span>
            </div>
          </div>
        </div>
      </div>
      
      <div className="aboutSection">
        <h2>About Soft Bakery</h2>
        <div className="aboutContent">
          <p>Founded in 2020, Soft Bakery has been serving the community with love and dedication. We believe in using only the finest ingredients, traditional baking methods, and recipes passed down through generations.</p>
          <p>Every day, our skilled bakers arrive before dawn to prepare fresh breads, pastries, and cakes that bring joy to our customers' lives. From our signature chocolate brownies to our flaky croissants, each item is made with care and attention to detail.</p>
        </div>
      </div>
      
      <div className="offersSection">
        <h2>Today's Special Offers</h2>
        <div className="offers">
          <div className="offerCard">
            <div className="offerBadge">HOT DEAL</div>
            <h3>Morning Combo</h3>
            <p>Croissant + Coffee</p>
            <div className="offerPrice">
              <span className="original">₹746</span>
              <span className="special">₹580</span>
            </div>
          </div>
          <div className="offerCard">
            <div className="offerBadge">LIMITED</div>
            <h3>Chocolate Lovers</h3>
            <p>Buy 2 Brownies, Get 1 Free</p>
            <div className="offerPrice">
              <span className="original">₹1,242</span>
              <span className="special">₹830</span>
            </div>
          </div>
          <div className="offerCard">
            <div className="offerBadge">WEEKLY</div>
            <h3>Fresh Friday</h3>
            <p>20% Off All Cakes</p>
            <div className="offerPrice">
              <span className="original">Varies</span>
              <span className="special">20% Off</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
