import {useNavigate} from 'react-router-dom';

const Navbar = ({setSearchKeyword}) =>{
    const username = localStorage.getItem('username');
    const navigate = useNavigate();
    const signout = event =>{
        localStorage.removeItem('username');
        navigate('/');
    }
    return(
        <nav className="nav">
            <ul>
                <li className="title" onClick={() => navigate('/')}>Tuner</li>
                <li>
                    <input type="search" name="search" onChange={event => setSearchKeyword(event.target.value)} id="search" placeholder="Search" />
                </li>
                <li>
                    {
                        localStorage.getItem('username') ?
                        <>
                            <span onClick={() => navigate(`/user/${username}`)}>My Videos</span>
                            <span>|</span>
                            <span onClick={() => navigate('/upload')}>Upload</span>
                            <span>|</span>
                            <span onClick={signout}>Signout</span>
                        </> :
                        <>
                            <span onClick={() => navigate('/register')}>Register</span>
                            <span>|</span>
                            <span onClick={() => navigate('/login')}>Login</span>
                        </>
                    }
                    
                </li>
            </ul>
        </nav>
    )
}

export default Navbar;