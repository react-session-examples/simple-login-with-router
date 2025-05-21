import React, { useEffect, useState } from 'react';

function ProductListing() {
  const [keyword, setKeyword] = useState('');
  const [listItems, setListItems] = useState([]);

   useEffect(() => {
  const debounceTimeout = setTimeout(() => {
    let apiUrl = 'https://dummyjson.com/products';
    if (keyword !== '') {
      apiUrl = `https://dummyjson.com/products/search?q=${keyword}`;
    }
    console.log('apiUrl: ', apiUrl);
    fetch(apiUrl, {
      method: 'GET',
    })
    .then(async (response) => {
      const data = await response.json();
      setListItems(data.products);
    })
    .catch(() => {
      setListItems(null);
    });
  }, 500); // 500ms debounce

  return () => {
    clearTimeout(debounceTimeout); // Clear timeout if keyword changes before 500ms
  };
}, [keyword]);

  return (
    <>
    <p>Search your Products:</p>
    <input type="text" value={keyword} onChange={e => setKeyword(e.target.value)} />
    <h2>Product List</h2>
    <ul>
      {listItems.map((item, index) => {
        return (
          <li key={index}>
            <h3>{item.title}</h3>
            <p>{item.description}</p>
            <div>
              <h3>Reviews</h3>
              <ul>
                {item.reviews.map((reviewItem, index) => {
                  return <li key={index}>{reviewItem.reviewerName} - {reviewItem.comment}</li>
                })}
              </ul>
            </div>
          </li>
        );
      })}
    </ul>
    </>
  )
}

export default ProductListing;