import React from "react";

export default function SearchForm(props) {
  //console.log(props)

  const handleInputChange = (event) => {
    props.setAnything(event.target.value)
  }
 
  return (
    <section className="search-form">
     <form
      onSubmit = {
        (event) => {
          event.preventDefault()
          props.setApiKey(`${props.apiKey}?name=${props.anything}`)
        }
      }
     >
       <input
         onChange = {handleInputChange}
         value = {props.anything}
       />
       <button type = "submit">Search</button>
       
      </form>
      
    </section>
  );
}