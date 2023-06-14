import { Link } from 'react-router-dom';

const Breadcrumb = () => {

  const pathSegments =  window.location.pathname.split('/').filter(segment => segment !== '');

  return (

    <nav aria-label="breadcrumb">
      <ol className="breadcrumb">
        <li className="breadcrumb-item">
          <Link to="/">Home</Link>
        </li>
        {pathSegments.map((segment, index) => (
          <li key={index} className="breadcrumb-item active">
            <Link to={`/${pathSegments.slice(0, index + 1).join('/')}`}>
              {segment.charAt(0).toUpperCase() + segment.slice(1)}
            </Link>
          </li>
        ))}
      </ol>
    </nav>
    
  );
};


export default Breadcrumb;
