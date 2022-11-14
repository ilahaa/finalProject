// import { useEffect, useState } from 'react';
// import PropagateLoader from 'react-spinners/PropagateLoader'
// import HomeInside from './HomeInside';

// function Preloader(){
//     const [loading,setLoading] = useState(false);

//   useEffect(()=>{
//     setLoading(true);
//     setTimeout(()=>{
//       setLoading(false);
//     },3000)

//   },[])
//   return (
//     <div className="App">
//       {loading ? (
//       <div style={{"height":"100vh","display":"flex","alignItems":"center","justifyContent":"center"}} >
//           <PropagateLoader size={30} color={'rgb(255,0,0)'} loading={loading}/>
//       </div>
//       ): ( 
//         <div>
//          <HomeInside />
//         </div>
//       )}
     
//     </div>
//   );
// }

// export default Preloader