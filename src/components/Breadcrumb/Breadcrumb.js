import { Link } from 'react-router-dom';

const Breadcrumb = () => {

  const pathSegments =  window.location.pathname.split('/').filter(segment => segment !== '');

  console.log("pathSegments ", pathSegments);

  let isdashboard = false;

  if(pathSegments.length > 0){
    
    if(pathSegments[0] === "forgotpwd"){
      pathSegments[0] = "Forgot Password";
    }else if (pathSegments[0] === "myprofile"){
      pathSegments[0] = "My Profile";
    }else if (pathSegments[0] === "changepassword"){
      pathSegments[0] = "Change Password";
    }else if (pathSegments[0] === "dasboard"){
      isdashboard = true;
    }

  }
  return (

    <nav className={`${(pathSegments.length === 0 || isdashboard) && 'd-none'}`} aria-label="breadcrumb">
      <ol className="breadcrumb">
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
