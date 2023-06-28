
import './Breadcrumd.css';
import useBreadcrumbs from 'use-react-router-breadcrumbs'
import { Link } from 'react-router-dom'

const routes = [
  { path: '/users/:userId', breadcrumb: 'Example 1' },
  { path: '/data', breadcrumb: 'Example 2' }
];  

function Breadcrumbs() {
  const breadcrumbs = useBreadcrumbs(routes);
  console.log(breadcrumbs)

  return (
    <nav>
      {breadcrumbs.map(({ match, breadcrumb }) => (
        <Link key={match.url} to={match.url} style={{ color: 'black', textDecoration: 'none' }}>
          {breadcrumb}  <span> &gt; </span>
        </Link>
      ))}
    </nav>
  );
}

export default Breadcrumbs;