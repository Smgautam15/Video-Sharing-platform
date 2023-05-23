import Left from '../components/Left';
import Right from '../components/Right';
import Navbar from '../components/Navbar';

const Login = () =>{
    const data = {
        title: 'Sign in',
        desc: 'Sign in to continue access pages'
    }
    return(
        <>
        <Navbar />
        <div className="login">
            <Left text="Register" />
            <Right {...data} />
        </div>
        </>
    )
}

export default Login;