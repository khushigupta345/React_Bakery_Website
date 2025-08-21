
function Contact(){
    return(
< >
<div className="w-full h-120 ml-0 mr-0 mt-0 
  bg-gradient-to-l from-pink-800 via-purple-500 to-blue-400 ">
   
    <form className="m-auto shadow-amber-300 w-50 h-50  p-6 " >
         <h1 className="text-center mb-4 ml-1 underline underline-offset-8 decoration-4 decoration-pink-700   rounded-2xl text-black text-2xl font-bold ">Login Form:</h1>
         <input type="email" placeholder="Please enter your email " className= "border-black border-3 w-56 rounded" /><br></br><br></br>
        <input type="text" placeholder="Please enter your name " className="border-black border-3 w-56 rounded" /><br></br><br></br>
         <input type="text" placeholder="Please enter your contact no" className="border-black border-3 w-56 rounded " /><br></br><br></br>
          <input type="text" placeholder="Please enter your address" className="border-black border-3 w-56 rounded " /><br></br><br></br>
<button className="mt-4 bg-pink-800 w-40 p-2 rounded ">Submit</button>
    </form>
</div>

</>
    );
}
export default Contact;