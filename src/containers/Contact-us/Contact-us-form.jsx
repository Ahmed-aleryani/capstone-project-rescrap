import React from 'react'

 
const ContactUsForm = () => {
     return <div className='sm:h-full lg:h-screen w-full px-20'>
                 <form  className='bg-white px-4 pb-16 pt-5 '>
                 <h1 className='text-3xl normal text-green-100 pb-1'>Let's Contact!!<h1/>
                </h1>
          <div className="py-1">
      <label className='text-sm'>Name</label>
      <input className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username'
        placeholder="Name"
        
      />
      </div>
      <div className="py-1">
      <label className='text-sm'>Subject</label>
      <input className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username'
        placeholder="Subject"
        
      />
      </div>
      
      <div className="py-1">
      <label className='text-sm'>Email</label>
      <input className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username'
        placeholder="Email"
        
      />
      </div>

      <div className="py-1">
      <label className='text-sm'>Message</label>
      <textarea className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username'
        placeholder="Message"
        
      ></textarea>
      </div>
     <div className=" text-center py-1">
       <button className='bg-green-100 py-4 w-4/5 border rounded text-white '
        type="submit"
        
      >
        Submit
      </button>
      </div>

    </form>
     </div> ;
   };
 
   export default ContactUsForm; 