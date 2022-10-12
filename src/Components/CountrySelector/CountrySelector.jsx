// import React, {useState, useEffect} from 'react'

// const CountrySelector = () => {
// const [country, setCountry] = useState([])
// const [countryid, setCountryid] = useState('')

// useEffect =(()=>{
//     const getCountry = async ()=>{
// const rescountry = await fetch()
// const rescon = await rescountry.json()
// setCountry(await rescon)
//     }
//     getCountry()
// },[])
// const handleCountry =(e =>{
//     const getcountryid = e.target.value
// setCountryid(getcountryid)
// })
//   return (
//     <div>
//         <form action="">
//         <label htmlFor=""></label>
// <select name="" id="" onChange={()=>handleCountry()}>
//     <option value="">hdhhd</option>
//     {
//         country.map((getcon, index)=>(
//             <option key={index} value={getcon.id}>{getcon.countryid}</option>

//         ))
//     }
// </select>
//         <label htmlFor=""></label>
// <select name="" id="">
//     <option value="">hdhhd</option>
//     <option value="">hdhhd</option>
// </select>
//         </form>

//     </div>
//   )
// }

// export default CountrySelector

// zm2cmen5DXL8QCn9M16sDyCN5VzeC4Ii



import React, { useState, useMemo } from 'react'
import Select from 'react-select'
import countryList from 'react-select-country-list'

function CountrySelector() {
  const [value, setValue] = useState('')
  const options = useMemo(() => countryList().getData(), [])

  const changeHandler = value => {
    setValue(value)
  }

  return <Select options={options} value={value} onChange={changeHandler} />
}


export default CountrySelector