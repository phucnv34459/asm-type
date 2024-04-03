
import axios from 'axios';
import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';


const Login = () => {
    const navigate = useNavigate();
    const {register, handleSubmit, formState:{errors},} = useForm();
    useEffect(()=>{
      (async()=>{
         const {user} = await axios.get(`http://localhost:3000/users`,user);
      })();
    },[]);
    const onSubmit = async (data:any) =>{
      localStorage.setItem('user' , JSON.stringify(data));
      toast.success("Bạn đã đăng nhập thành công");
     navigate("/admin")
    }
  return (
    <div><form onSubmit={handleSubmit(onSubmit)}>
    <h1 style={{textAlign:"center"}}>Login</h1>
    <div className="form-group mx-5">
      <label htmlFor="title">email</label>
      <input
        type="email"
        id="email"
        className="form-control"
        {...register("email", {
          required: true,
         
        })}
      />
      {errors.email && (
        <div className="text-danger">{errors.email.message}</div>
      )}
    </div>
    <div className="form-group mx-5">
      <label htmlFor="">password</label>
      <input
        type="password"
        id="password"
        className="form-control"
        {...register("password",{
            required: true,
            minLength:6,
        }
        )}
      />
      {errors.password && (
        <div className="text-danger">{errors.password.message}</div>
      )}
    </div>
   
    <button style={{marginLeft:"45px"}} className="btn btn-primary mt-3">Submit</button>
  </form></div>
  )
}

export default Login