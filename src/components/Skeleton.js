import React from "react";
import "../styles/Skeleton.css";

export const SkeletonNavbar = () => (
  <div className="skeleton-navbar">
    <div className="skeleton-logo"></div>
    <div className="skeleton-nav-links">
      <div className="skeleton-link"></div>
      <div className="skeleton-link"></div>
      <div className="skeleton-link"></div>
      <div className="skeleton-link"></div>
    </div>
    <div className="skeleton-search"></div>
  </div>
);

export const SkeletonHero = () => (
  <div className="skeleton-hero">
    <div className="skeleton-hero-content">
      <div className="skeleton-title"></div>
      <div className="skeleton-text"></div>
      <div className="skeleton-text short"></div>
      <div className="skeleton-button"></div>
    </div>
    <div className="skeleton-hero-image"></div>
  </div>
);

export const SkeletonCard = () => (
  <div className="skeleton-card">
    <div className="skeleton-card-image"></div>
    <div className="skeleton-card-title"></div>
    <div className="skeleton-card-text"></div>
    <div className="skeleton-card-price"></div>
  </div>
);

export const SkeletonSection = ({ count = 3 }) => (
  <div className="skeleton-section">
    <div className="skeleton-section-title"></div>
    <div className="skeleton-grid">
      {Array.from({ length: count }).map((_, i) => (
        <SkeletonCard key={i} />
      ))}
    </div>
  </div>
);

export const SkeletonAbout = () => (
  <div className="skeleton-about">
    <div className="skeleton-about-container">
      <div className="skeleton-about-image"></div>
      <div className="skeleton-about-content">
        <div className="skeleton-title"></div>
        <div className="skeleton-text"></div>
        <div className="skeleton-text"></div>
        <div className="skeleton-text"></div>
      </div>
    </div>
  </div>
);

export const SkeletonContact = () => (
  <div className="skeleton-contact">
    <div className="skeleton-contact-container">
      <div className="skeleton-contact-image"></div>
      <div className="skeleton-contact-form">
        <div className="skeleton-title"></div>
        <div className="skeleton-input"></div>
        <div className="skeleton-input"></div>
        <div className="skeleton-textarea"></div>
        <div className="skeleton-button"></div>
      </div>
    </div>
  </div>
);

export const SkeletonMenu = () => (
  <div className="skeleton-menu">
    <div className="skeleton-menu-title"></div>
    <div className="skeleton-menu-subtitle"></div>
    <div className="skeleton-menu-grid">
      {Array.from({ length: 6 }).map((_, i) => (
        <SkeletonCard key={i} />
      ))}
    </div>
  </div>
);
