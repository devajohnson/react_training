import React from 'react';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div>
      <button>
        <Link to="DashBord">DashBord</Link>
      </button>
      <h1>home</h1>
    </div>
  );
}
