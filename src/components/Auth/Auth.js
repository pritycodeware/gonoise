import React, { useState, useEffect , useId } from 'react'
import './Auth.css'
import { Link } from 'react-router-dom'
const Auth = () => {
    const [formExchange, setState] = useState(true);
    const [name, SetName] = useState(null);
    const [mail , SetMail] =useState(null);
    const [password , SetPassword] = useState(null);
    const [passwordCon , SetPasswordCon] = useState(null);
    const id= useId()


const loginSubmit =(e)=>{
    e.preventDefault();
   
}
const registerForm=(e)=>{
    e.preventDefault();
    console.log(name+id , mail+id , password+id , passwordCon+id)

}

    return (
        <>
            <div className="bg-white">
                {
                    formExchange ? (
                        <div className='bg:slate-100  rounded- lg:mx-10 md:mx-10 sm:mx-5'>
                            <form onSubmit={loginSubmit}>
                                <div className='loginConatiner py-10'>
                                    <div className='grid'>
                                        <div className='m-auto'>
                                            <h1 className='text-4xl  font-semibold'>Login Now</h1>
                                            <p className='text-sm  mt-1'><span className="cursor-pointer">You don't have </span><span className='font-semibold text-blue-500 font-semibold cursor pointer ' onClick={() => setState(!formExchange)}>Accound  ?</span></p>

                                        </div>
                                    </div>
                                    <div className='grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1'>
                                        <div className='py-10'>
                                            <input type="email" className='form_control rounded outline-none' onChange={(e)=>SetMail(e.target.value)} name="email" placeholder='Mail' required />
                                            <input type="password" className='form_control rounded  outline-none' name="password" onChange={(e)=>SetPassword(e.target.value)} placeholder='Password ' required />

                                            <div className='form_control p-0' style={{ boxShadow: "none", background: "none" }}>
                                                <div className="grid ">

                                                    <button className="py-2 font-semibold text-white px-10 rounded-full button m-auto  lg:text-sm md:text-sm sm:text-xs bg-blue-500 shadow-lg shadow-blue-500/50   hover:bg-blue-600  hover:shadow-blue-500/50 ">SUBMIT</button>

                                                </div>
                                            </div>
                                            <section className='form_control p-0 mb-3 mt-4' style={{ boxShadow: "none", background: "none" }}>
                                                <p className="text-sm text-gray-500"><span>By continuing, you agree to Yujik's  </span><span className='text-blue-500 font-semibold'><Link to="" >Conditions</Link></span> of Use and <span className='text-blue-500 font-semibold'><Link to="" >Privacy</Link></span>  Notice.</p>

                                                <details className='text-sm'>
                                                    <summary className='text-sm  font-semibold'>Need to help ?</summary>
                                                    <div className='text-blue-500 '><Link to="" > Forget Passowrd ?</Link></div>
                                                    <div className='text-blue-500 '><Link to="" >Another  login issues ?</Link></div>
                                                </details>
                                            </section>

                                        </div>
                                        <div className='py-10'>
                                            <div className='grid lg:border-l-2 lg:border-slate-200 md:border-l-2 md:border-slate-200'>
                                                <div className='m-auto'>
                                                    <div>
                                                        {/* google */}
                                                        <div className="grid grid-cols-5 p-2 cursor-pointer rounded-xl" style={{ marginTop: "8px", marginBottom: "8px", boxShadow: "rgba(149, 157, 165, 0.35) 0px 5px 15px 0px" }}>
                                                            <div>
                                                                <img src="https://img.icons8.com/color/48/000000/google-logo.png" />
                                                            </div>
                                                            <div className="col-span-4">
                                                                <div className="grid" style={{ height: "100%" }}>
                                                                    <div className="m-auto font-semibold">Login with Google</div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        {/* facebook */}
                                                        <div className="grid grid-cols-5 p-2  cursor-pointer rounded-xl" style={{ marginTop: "8px", marginBottom: "8px", boxShadow: "rgba(149, 157, 165, 0.35) 0px 5px 15px 0px" }}>
                                                            <div>
                                                                <img src="https://img.icons8.com/fluency/48/000000/facebook-new.png" />
                                                            </div>
                                                            <div className="col-span-4">
                                                                <div className="grid" style={{ height: "100%" }}>
                                                                    <div className="m-auto font-semibold">Login with Facebook</div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        {/* apple */}
                                                        <div className="grid grid-cols-5 p-2  cursor-pointer rounded-xl" style={{ marginTop: "8px", marginBottom: "8px", boxShadow: "rgba(149, 157, 165, 0.35) 0px 5px 15px 0px" }}>
                                                            <div>
                                                                <img src="https://img.icons8.com/material-rounded/48/000000/mac-client.png" />
                                                            </div>
                                                            <div className="col-span-4">
                                                                <div className="grid" style={{ height: "100%" }}>
                                                                    <div className="m-auto font-semibold">Login with Apple</div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                    </div>
                                </div>

                            </form>
                        </div>


                    ) :
                        (
                            <div className='bg:slate-100  rounded- lg:mx-10 md:mx-10 sm:mx-5'>
                                <form onSubmit={registerForm}>
                                    <div className='loginConatiner py-10'>
                                        <div className='grid'>
                                            <div className='m-auto'>
                                                <h1 className='text-4xl  font-semibold'>Sign Up Now</h1>
                                                <p className='text-sm  mt-1'><span>You ' ve already  </span><span className='font-semibold text-blue-500 font-semibold cursor pointer ' onClick={() => setState(!formExchange)}>Accound  ?</span></p>

                                            </div>
                                        </div>
                                        <div className='grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1'>
                                            <div className='py-10'>
                                                <input type="text" className='form_control rounded outline-none' name="name" placeholder='Name' onChange={(e)=>SetName(e.target.value)} required />

                                                <input type="email" className='form_control rounded outline-none' name="email" placeholder='Mail' onChange={(e)=>SetMail(e.target.value)} required />
                                                <input type="password" className='form_control rounded  outline-none' name="password" onChange={(e)=>SetPassword(e.target.value)} placeholder='Password ' required />
                                                <input type="password" className='form_control rounded  outline-none' name="passwordconf" onChange={(e)=>SetPasswordCon(e.target.value)} placeholder='Password confirm ' required />

                                                <div className='form_control p-0' style={{ boxShadow: "none", background: "none" }}>
                                                    <div className="grid ">

                                                        <button className="py-2 font-semibold text-white px-10 rounded-full button m-auto  lg:text-sm md:text-sm sm:text-xs bg-blue-500 shadow-lg shadow-blue-500/50   hover:bg-blue-600  hover:shadow-blue-500/50 ">SUBMIT</button>

                                                    </div>
                                                </div>
                                                <section className='form_control p-0 mb-3 mt-4' style={{ boxShadow: "none", background: "none" }}>
                                                    <p className="text-sm text-gray-500"><span>By continuing, you agree to Yujik's  </span><span className='text-blue-500 font-semibold'><Link to="" >Conditions</Link></span> of Use and <span className='text-blue-500 font-semibold'><Link to="" >Privacy</Link></span>  Notice.</p>

                                                    <details className='text-sm'>
                                                        <summary className='text-sm  font-semibold'>Need to help ?</summary>
                                                        <div className='text-blue-500 '><Link to="" >Any Technical issues ?</Link></div>
                                                    </details>
                                                </section>

                                            </div>
                                            <div className='py-10'>
                                                <div className='grid lg:border-l-2 lg:border-slate-200 md:border-l-2 md:border-slate-200'>
                                                    <div className='m-auto'>
                                                        <div>
                                                            {/* google */}
                                                            <div className="grid grid-cols-5 p-2 cursor-pointer rounded-xl" style={{ marginTop: "8px", marginBottom: "8px", boxShadow: "rgba(149, 157, 165, 0.35) 0px 5px 15px 0px" }}>
                                                                <div>
                                                                    <img src="https://img.icons8.com/color/48/000000/google-logo.png" />
                                                                </div>
                                                                <div className="col-span-4">
                                                                    <div className="grid" style={{ height: "100%" }}>
                                                                        <div className="m-auto font-semibold">Sign Up with Google</div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            {/* facebook */}
                                                            <div className="grid grid-cols-5 p-2  cursor-pointer rounded-xl" style={{ marginTop: "8px", marginBottom: "8px", boxShadow: "rgba(149, 157, 165, 0.35) 0px 5px 15px 0px" }}>
                                                                <div>
                                                                    <img src="https://img.icons8.com/fluency/48/000000/facebook-new.png" />
                                                                </div>
                                                                <div className="col-span-4">
                                                                    <div className="grid" style={{ height: "100%" }}>
                                                                        <div className="m-auto font-semibold">Sign Up with Facebook</div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            {/* apple */}
                                                            <div className="grid grid-cols-5 p-2  cursor-pointer rounded-xl" style={{ marginTop: "8px", marginBottom: "8px", boxShadow: "rgba(149, 157, 165, 0.35) 0px 5px 15px 0px" }}>
                                                                <div>
                                                                    <img src="https://img.icons8.com/material-rounded/48/000000/mac-client.png" />
                                                                </div>
                                                                <div className="col-span-4">
                                                                    <div className="grid" style={{ height: "100%" }}>
                                                                        <div className="m-auto font-semibold">Sign Up with Apple</div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                        </div>
                                    </div>

                                </form>
                            </div>
                        )
                }

            </div >
        </>
    );
}



export default Auth