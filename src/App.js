import React, {useState} from 'react';
import Form from './components/Form';

import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.css'
import ReviewList from './components/ReviewList';
import Header from './components/navBar';
import Star from './components/Stars';



function App() {
  const[reviews, setReviews] =useState([])
  const [form, setForm] = useState({movie: "", review: "", id: null })
  return (
    <div className="App">
      <Header />
      <Form 
      form={form} 
      reviews={reviews} 
      setForm={setForm} 
      setReviews={setReviews} 
      />
       <Star 
        form={form} 
        reviews={reviews} 
        setForm={setForm} 
         setReviews={setReviews} 
 />

      <ReviewList reviews={reviews} />
    </div>
  );
}

export default App;
