import React from 'react'
import { useSelector } from 'react-redux';
import Card from '../Components/Card';
import "../CSS/liked-items.css"

export default function LikedItems() {
    const likedItems = useSelector((state) => state.liked.likedItems);
  return (
    <div className="liked-items">
      <h1 className="main-title">Liked Movies and TV Series</h1>
      <div className="cards grid-container">
        {likedItems.map((item) => (
          <Card key={item.id} item={item} number={item.id} />
        ))}
      </div>
    </div>
  );
}

