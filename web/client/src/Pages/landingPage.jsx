import React from 'react';
import { Link } from 'react-router-dom';
import Card from '../components/Card';

export default function landingPage() {
  return (
    <div className="container mx-auto flex flex-col items-center justify-center min-h-screen py-2 gap-4 ">
      <div className="flex gap-3">
        <Link to="/todo">
          <Card title="Goals" />
        </Link>
        <Link to="/note">
          <Card title="Express" />
        </Link>
      </div>

      <div className="flex gap-3">
        <Link to="/ai">
          <Card title="AI Friend" />
        </Link>
        <Link to="/pomo">
          <Card title="Timer" />
        </Link>
      </div>
    </div>
  );
}
