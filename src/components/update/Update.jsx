import React from "react";
import Warning from "../warning/Warning";
import "./update.css";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { remove, update } from "../../redux/userSlice";
import { updateUser } from "../../redux/apiCalls";

export default function Update() { 
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const {userInfo, pending, error }= useSelector((state) => state.user)
  const dispatch = useDispatch();

  const handleUpdate = (e) => {
    e.preventDefault();
    updateUser({name, email}, dispatch)
  }
  const handleDelete = (e) => {
	  e.preventDefault();
	  dispatch()
  }

  return (
		<div className='update'>
			<div className='updateWrapper'>
				<h3 className='updateTitle'>Update Your Account</h3>
				<Warning />
				<button className='delete' onClick={handleDelete}>
					Delete Account
				</button>
				<div className='updateContainer'>
					<form>
						<div className='formItem'>
							<label>Profile Picture</label>
							<div className='profilePic'>
								<img
									className='avatar'
									src='https://images.pexels.com/photos/3024627/pexels-photo-3024627.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500'
									alt=''
								/>
								<span className='change'>Change</span>
							</div>
						</div>
						<div className='formItem'>
							<label>Username</label>
							<input
								className='formInput'
								type='text'
								placeholder={userInfo.name}
								onChange={(e) => setName(e.target.value)}
							/>
						</div>
						<div className='formItem'>
							<label>Email</label>
							<input
								className='formInput'
								type='text'
								placeholder={userInfo.email}
								onChange={(e) => setEmail(e.target.value)}
							/>
						</div>
						<div className='formItem'>
							<label>Password</label>
							<input className='formInput' type='password' />
						</div>
						<button
							disabled={pending}
							className='updateButton'
							onClick={handleUpdate}>
							Update
						</button>
						{error && <span className='error'>Something went wrong</span>}
						{pending === false && <span className='success'>Account have been updated</span>}
					</form>
				</div>
			</div>
		</div>
	);
}
