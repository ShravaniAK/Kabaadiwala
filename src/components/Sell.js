import React from 'react';

const onSubmit = async (data) => {
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
    };

    const response = await fetch(['https://api.apyhub.com/validate/postcodes/in'], requestOptions);
    const jsonData = await response.json();

    console.log(jsonData);
}



export const Sell = () => {

    
  return (

    <form>
  <label>
    Name:
    <input type="text" name="name" />
  </label>
  <label>
   Address:
    <input type="text" name="name" />
  </label>
  <input onSubmit={onSubmit} type="submit" value="Submit" />
</form>
  )
}
