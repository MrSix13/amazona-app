import {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux';
import { register } from '../actions/userActions';
import LoadingBox from '../components/LoadingBox';
import MessageBox from '../components/MessageBox';

const RegisterScreen = (props) => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');
    const [confirmPassword, setConfirmPassword]=useState('');

    const redirect = props.location.search? props.location.search.split('=')[1]:'/';
    

    const userRegister = useSelector((state)=>state.userRegister);
    const {userInfo, loading, error} = userRegister;
    const dispatch = useDispatch();

    const submitHandler = (e)=>{
        e.preventDefault();
        if(password !==confirmPassword){
            alert('Password and confirm password are not match')
        }else{
            dispatch(register(email,password,name))
        }
    }
    useEffect(()=>{
        if(userInfo){
            props.history.push(redirect)
        }
    },[props.history,redirect,userInfo]);
    return (
        <div>
            <form className="form" onSubmit={submitHandler}>
                <div><h1>Register</h1></div>
                {loading && <LoadingBox></LoadingBox>}
                {error && <MessageBox variant="danger">{error}</MessageBox> }

                <div>
                    <label htmlFor="name">Name</label>
                    <input
                     type="text"
                     id="name"
                     placeholder="Enter Name"
                     required
                     onChange={(e)=>setName(e.target.value)}
                    
                    >
                    </input>
                </div>
                <div>
                    <label htmlFor="email">Email</label>
                    <input
                     type="email"
                     id="email"
                     placeholder="Enter Email"
                     required
                     onChange={(e)=>setEmail(e.target.value)}
                    
                    >
                    </input>
                </div>
                <div>
                        <label htmlFor="password">Password</label>
                        <input
                        type="password"
                        id="password"
                        placeholder="Enter Password"
                        required
                        onChange={(e)=>setPassword(e.target.value)}
                        
                        >
                        </input>
                </div>
                <div>
                    <label htmlFor="confirmPassword">Confirm Password</label>
                    <input
                     type="password"
                     id="confirmPassword"
                     placeholder="Enter Confirm Password"
                     required
                     onChange={(e)=>setConfirmPassword(e.target.value)}
                    
                    >
                    </input>
                </div>
                <div>
                    <label/>
                    <button className="primary" type="submit">Sign In</button>
                </div>
                <div>
                    <label/>
                    <div>
                        Already Have an account? <Link to={`/signin?redirect=${redirect}`}>Sign-In</Link>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default RegisterScreen;