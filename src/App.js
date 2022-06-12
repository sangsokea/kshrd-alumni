import BasicRoute from "./Router/BasicRoute";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

function App() {
  return (
    <>
    {console.log( `runing on ${process.env.NODE_ENV}`)}
    {console.log(` ${process.env.REACT_APP_BASE_URL}`)}
      <BasicRoute/>
    </>
  );
}

export default App;
