import React, { useState, useEffect } from "react";
import AboutImage from "../assets/about.jpg";
import { SkeletonAbout, SkeletonSection } from "../components/Skeleton";
import "../styles/About.css";
import "../styles/Skeleton.css";

// Use require for gallery images to handle potential loading issues
const galleryImages = {
  process: require("../assets/process.jpg"),
  creamycake: require("../assets/creamycake.jpg"),
  cupcakes: require("../assets/cupcakes.jpg"),
  buttercroissant: require("../assets/Butter_Croissant.jpg")
};

function ImageWithFallback({ src, alt, ...props }) {
  const [error, setError] = React.useState(false);
  
  if (error) {
    return (
      <div style={{ 
        width: '100%', 
        height: '200px', 
        background: 'linear-gradient(135deg, #f5e6d3, #e8d4b0)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: '10px'
      }}>
        <span style={{ fontSize: '48px' }}>🖼️</span>
      </div>
    );
  }
  
  return <img src={src} alt={alt} onError={() => setError(true)} {...props} />;
}

function About() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 600);
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <div className="about">
        <SkeletonAbout />
        <SkeletonSection count={4} />
      </div>
    );
  }

  return (
    <div className="about">
      <div className="storyContainer">
        <div className="aboutContainer">
          <div className="aboutImage">
            <img src={AboutImage} alt="About Soft Bakery" />
          </div>
          <div className="aboutContent">
            <h1> OUR STORY</h1>
            <p>
              Soft Bakery began in 2020 with a simple dream: to bring the warmth and comfort of homemade baking to our community. Founder Sarah Mitchell, a third-generation pastry chef, transformed her grandmother's cherished recipes into a modern bakery experience. What started as a small kitchen operation has grown into a beloved local institution, where the aroma of fresh bread and pastries welcomes every visitor like an old friend.
            </p>
            <p>
              Our commitment to quality is unwavering. We source premium ingredients from local farmers and trusted suppliers, ensuring every bite reflects our dedication to excellence. Our bakers arrive before dawn each morning, following time-honored techniques while embracing innovation. From hand-kneaded breads to artisanal cakes, each creation is crafted with precision, passion, and the belief that great baking brings people together. We're not just selling pastries; we're sharing moments of joy, one delicious creation at a time.
            </p>
          </div>
        </div>
      </div>
      
      <div className="otherSections">
        <div className="additionalSections">
        <div className="businessHours">
          <div className="sectionHeader">
            <h2>Business Hours</h2>
            <div className="sectionIcon">🕐</div>
          </div>
          <div className="hoursGrid">
            <div className="dayTime">
              <span className="day">Monday - Friday</span>
              <span className="time">6:00 AM - 8:00 PM</span>
            </div>
            <div className="dayTime">
              <span className="day">Saturday</span>
              <span className="time">7:00 AM - 9:00 PM</span>
            </div>
            <div className="dayTime">
              <span className="day">Sunday</span>
              <span className="time">7:00 AM - 7:00 PM</span>
            </div>
          </div>
        </div>
        
        <div className="awardsSection">
          <div className="sectionHeader">
            <h2>Awards & Certifications</h2>
            <div className="sectionIcon">🏆</div>
          </div>
          <div className="awardsGrid">
            <div className="award">
              <div className="awardIcon">🏆</div>
              <h3>Best Bakery 2023</h3>
              <p>New York Food Awards</p>
              <div className="awardBadge">WINNER</div>
            </div>
            <div className="award">
              <div className="awardIcon">🥇</div>
              <h3>Gold Medal</h3>
              <p>International Pastry Competition</p>
              <div className="awardBadge">GOLD</div>
            </div>
            <div className="award">
              <div className="awardIcon">⭐</div>
              <h3>5-Star Rating</h3>
              <p>Culinary Excellence Association</p>
              <div className="awardBadge">EXCELLENCE</div>
            </div>
          </div>
        </div>
        
        <div className="missionSection">
          <div className="sectionHeader">
            <h2>Our Mission & Values</h2>
            <div className="sectionIcon">🎯</div>
          </div>
          <div className="missionContent">
            <div className="mission">
              <h3>Mission</h3>
              <p>To create exceptional baked goods that bring joy and comfort to our community, using traditional techniques and the finest ingredients while fostering a warm, welcoming environment where everyone feels like family.</p>
              <div className="missionHighlight">
                <span>❤️</span>
                <span>Baked with Love</span>
              </div>
            </div>
            <div className="values">
              <h3>Core Values</h3>
              <ul>
                <li><strong>Quality:</strong> Never compromise on ingredients or craftsmanship</li>
                <li><strong>Community:</strong> Support local farmers and give back to our neighborhood</li>
                <li><strong>Tradition:</strong> Honor time-honored baking methods while embracing innovation</li>
                <li><strong>Passion:</strong> Approach every creation with love and dedication</li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className="timelineSection">
          <div className="sectionHeader">
            <h2>Our Journey</h2>
            <div className="sectionIcon">📅</div>
          </div>
          <div className="timeline">
            <div className="timelineItem">
              <div className="year">2020</div>
              <div className="event">
                <h3>The Beginning</h3>
                <p>Sarah Mitchell starts Soft Bakery in her home kitchen</p>
                <div className="eventTag">STARTUP</div>
              </div>
            </div>
            <div className="timelineItem">
              <div className="year">2021</div>
              <div className="event">
                <h3>First Shop Opens</h3>
                <p>Moved to our current location on Bakery Lane</p>
                <div className="eventTag">EXPANSION</div>
              </div>
            </div>
            <div className="timelineItem">
              <div className="year">2022</div>
              <div className="event">
                <h3>Team Expansion</h3>
                <p>James and Maria join the Soft Bakery family</p>
                <div className="eventTag">GROWTH</div>
              </div>
            </div>
            <div className="timelineItem">
              <div className="year">2023</div>
              <div className="event">
                <h3>Recognition</h3>
                <p>Won Best Bakery award at New York Food Awards</p>
                <div className="eventTag">ACHIEVEMENT</div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="gallerySection">
          <div className="sectionHeader">
            <h2>Behind the Scenes</h2>
            <div className="sectionIcon">📸</div>
          </div>
          <div className="gallery">
            <div className="galleryItem">
              <div className="imageOverlay">
                <ImageWithFallback src={galleryImages.process} alt="Baking Process" />
                <div className="overlayContent">
                  <h4>Artisan Process</h4>
                  <p>Crafting perfection step by step</p>
                </div>
              </div>
            </div>
            <div className="galleryItem">
              <div className="imageOverlay">
                <ImageWithFallback src={galleryImages.creamycake} alt="Creamy Cake" />
                <div className="overlayContent">
                  <h4>Sweet Creations</h4>
                  <p>Decadent cakes made with love</p>
                </div>
              </div>
            </div>
            <div className="galleryItem">
              <div className="imageOverlay">
                <ImageWithFallback src={galleryImages.cupcakes} alt="Cupcakes" />
                <div className="overlayContent">
                  <h4>Mini Delights</h4>
                  <p>Perfect cupcakes for every occasion</p>
                </div>
              </div>
            </div>
            <div className="galleryItem">
              <div className="imageOverlay">
                <ImageWithFallback src={galleryImages.buttercroissant} alt="Butter Croissant" />
                <div className="overlayContent">
                  <h4>Flaky Perfection</h4>
                  <p>Buttery croissants fresh from oven</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        </div>
      </div>
    </div>
  );
}

export default About;
