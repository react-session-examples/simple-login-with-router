import React from 'react';
import ProductListing from '../../components/ProductList/ProductListing';
import { useNavigate } from 'react-router-dom';

const Dashboard = () => {
  const navigate = useNavigate();

  return <>
    <h1>Welcome to the App!</h1>
    <a href="http://www.instagram.com" onClick={(e) => {
      e.preventDefault();
      navigate('/');
    }}>Logout</a>
    <ProductListing />
  </>
}

export default Dashboard;