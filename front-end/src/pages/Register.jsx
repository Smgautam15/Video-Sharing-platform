import Left from '../components/Left';
import Right from '../components/Right';
import Navbar from '../components/Navbar';

const Register = () =>{
    const data = {
        title: 'Register',
        desc: 'Register to continue access pages',
        
    }
    return(
        <>
            <Navbar />
            <div className="register">
                <Left text="Sign In" />
                <Right {...data} />
            </div>
        </>
    )
}

export default Register;