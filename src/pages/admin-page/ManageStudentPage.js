// import React, { useEffect, useState } from 'react'
// import FilterResults from 'react-filter-search';

// export default function ManageStudentPage() {
//   const [data, setData] = useState([])
//   const [value, setValue] = useState([])

//   useEffect(()=>{
//     fetch('https://jsonplaceholder.typicode.com/users')
//       .then(response => response.json())
//       .then(json => setData(json));
//   },[])

//   const handleChange = event => {
//     const { value } = event.target;
//     this.setState({ value });
//   };

//   return (
//     <div>
//         <input type="text" value={value} onChange={handleChange} />
//         <SearchResults
//           value={value}
//           data={data}
//           renderResults={results => (
//             <div>
//               {results.map(el => (
//                 <div>
//                   <span>{el.name}</span>
//                   <span>{el.email}</span>
//                 </div>
//               ))}
//             </div>
//           )}
//         />
//       </div>
//   )
// }
