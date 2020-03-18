import React, { useState } from 'react';
import "./SearchForm.css";


const SearchForm = ({ setSearch, initialPlaceholder }) => {
 const [query, setQuery] = useState(initialPlaceholder);

 // this method triggers when we change the input on line 15.
 const onChange = event => setQuery(event.target.value);

 // this method triggers when we submit the form.
 const onSubmit = (event) => {
   event.preventDefault();
   setSearch(query);
 }

 return (
   <form className="container search-form" onSubmit={onSubmit}>
     <input type="text" value={query} onChange={onChange} placeholder="What are we cooking?" />
   </form>
 );
};

export default SearchForm;



