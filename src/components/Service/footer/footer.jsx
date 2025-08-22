function Footer(){
return(
    <>
    <div className="bg-black opacity-90 w-full p-1 h-64 md:h-72 md:p-20 md:pt-20 font-bold font-serif ">
    <h1 className="ml-20 md:text-3xl  underline underline-offset-8 decoration-3 decoration-pink-800 text-white mb-3 md:ml-70  ">Subscribe To Our Newsletter</h1>

<input type="email" placeholder="your email address" className="ml-10 rounded p-2 border-2 w-52 h-11 md:mr-3 text-white md:ml-80 md:mt-5 "/>
<button className="bg-amber-400 text-white p-3">Subscribe</button>
<hr className="text-yellow-200 mt-6 w-full" />
    <ul className=" flex   text-white mt-12  md:ml-70 md:mt-10">
        <li className="ml-5">
            Home
        </li>
        <li className="ml-5">
            About
        </li>
        <li className="ml-5">
          Product
        </li>
        <li className="ml-5">
            Service
        </li>
        <li className="ml-5">Contact</li>
    </ul>
    </div>

    </>

)

}
export default Footer;
