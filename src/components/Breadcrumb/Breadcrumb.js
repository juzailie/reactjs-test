import { useLocation } from 'react-router-dom'

function Breadcrumb() {
  const location = useLocation();
  console.log(location.pathname);
  return <span>Path : {location.pathname}</span>
}


export default Breadcrumb;
