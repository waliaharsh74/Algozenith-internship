// pages/index.tsx

import React from 'react';
import './globals.css';
import logo from '../../public/logo.png'
import logo2 from '../../public/logo2.png'

const Home: React.FC = () => {
  return (
    <div className='flex flex-col '>

      {/* first part */}
      <div className='bg-gradient-to-r from-[#033042] to-[#005C83] w-[100]' >
        <div className="lg:flex sm:flec-col">
            <div className='lg:mt-[9em] mt-[65px] lg:ml-[6em] ml-[30px] mr-[20px] ' >
          
          <h1  className='font-extrabold lg:text-[40px] text-[30px] '>Be better at DSA & CP</h1>
          <p className='lg:text-left text-center'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rerum, fugit omnis! Sit non ex repudiandae iure modiule
            
            
         

          </p>
          <div className="lg:flex sm:flec-col mt-10">
              <button className='bg-gradient-to-r from-[#FFFFFF] to-[#DFF6FF] text-[#05445E] text-[22px]   text-center font-bold pt-[9px] pb-[9px] pl-[20px] pr-[20px] rounded-[8px] lg:w-[220px] w-[320px] '> Join now <svg className='inline' stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" height="1em"  xmlns="http://www.w3.org/2000/svg"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
              {/* <span className='font-bold'>&#8594;</span> */}

              </button>
              <button className=' text-[#fff] text-[22px]  text-center font-bold pt-[9px] pb-[9px] pl-[20px] pr-[20px] rounded-[8px] lg:ml-[25px] lg:w-[240px] w-[320px] lg:mt-[0px] mt-[14px]
              border-[#ffffff9a] border-[0.5px]   bg-gradient-to-r from-[#033042] to-[#005C83]'> View Curriculum
              {/* <span className='font-bold'>&#8594;</span> */}

              </button>
              
            </div>
        <div className="flex mt-10">

          <div className="flex flex-col">

            <div className="flex mb-3">

              <div className='lg:w-[40px] w-[50px] h-[40px] border border-gradient-to-r from-[#CFF1FF] to-[#2D5666]  m-[5px] rounded-[8px]'  >
              </div><p className='m-[5px] lg:mt-3' >Lorem ipsum dolor sit </p>

            </div>
            <div className="flex">

              <div className='lg:w-[40px] w-[50px] h-[40px] border border-gradient-to-r from-[#CFF1FF] to-[#2D5666]  m-[5px] rounded-[8px]'  >
              </div><p className='m-[5px] lg:mt-3' >Lorem ipsum dolor sit </p>

            </div>

            
              
              
            

          </div>

          <div className="flex flex-col">

           <div className="flex mb-3 ml-3">

              <div className='lg:w-[40px] w-[50px] h-[40px] border border-gradient-to-r from-[#CFF1FF] to-[#2D5666]  m-[5px] rounded-[8px]'  >
              </div><p className='m-[8px] lg:mt-3' >Lorem ipsum dolor sit </p>

            </div>
            <div className="flex ml-3">

              <div className='lg:w-[40px] w-[50px] h-[40px] border border-gradient-to-r from-[#CFF1FF] to-[#2D5666]  m-[5px] rounded-[8px]'  >
              </div><p className='m-[5px] lg:mt-3' >Lorem ipsum dolor sit </p>

            </div>
          </div>

        </div>


        </div>



        <img className='lg:h-[620px] mr-8   ' src={logo.src} alt="" />
          </div>
        


      </div>

{/* second part */}

     <div className='bg-white w-[100]' >
        <div className=" lg:flex sm:flec-col lg:mr-[32px] mr-[32px]">
            <div className='mt-[275px] lg:ml-[6em] ml-[32px] ' >
          
            <h1  className='font-extrabold text-[36px]  text-center md:text-left lg:text-[60px]  lg:mr-[50px] text-[#000]'>Invest in skills,
            <br />
            <span className='text-[#005C83]'>
            earn 10X  
            </span> of what you paid.</h1>
          <p className='text-[#000]  mt-[20px] sm:mr-[20px] md:mr-[100px] text-center md:text-left text-[20px]'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Culpa, veritatis iusto quasi, ex esse labore obcaecati eveniet autem, delectus nemo atque porro deserunt sed. Voluptatibus molestias ducimus totam fugiat in.
            
            
         

          </p>
         
        <div className="flex mt-10">

          <div className="flex flex-col">

            <div className="flex lg:mb-3 mb-[35px]">

              <div className='lg:w-[50px] md:h-[50px] w-[35px] h-[30px] bg-[#D9D9D9]  m-[5px] rounded-[8px]'  >
              </div>

              <div className='lg:m-[5px] md:text-[18px] text-[14px]  text-[#000] ' >
                <h3 className=' font-bold'>1.2Cr/Year</h3>
                highest fresher package
              </div>
            </div>

            <div className="flex">

              <div className='md:w-[50px] md:h-[50px] w-[30px] h-[30px] bg-[#D9D9D9]  m-[5px] rounded-[8px]'  >
              </div>
              <div className='lg:m-[5px] md:text-[18px] text-[14px]  text-[#000]' >
                <h3 className=' font-bold'> 1000+ Offers</h3>
                from top companies
              </div>
              

            </div>

            
              
              
            

          </div>



          <div className="flex flex-col">

           <div className="flex mb-3 lg:ml-3  ">

              <div className='md:w-[50px] md:h-[50px] w-[35px] h-[30px] bg-[#D9D9D9]  m-[5px] rounded-[8px] '  >
              </div>
              <div className='lg::m-[5px] md:text-[18px]   text-[14px]    text-[#000]' >
                <h3 className='  font-bold'>Multiple &lt; 100 ranks</h3>
                in kickstart last year
              </div>

            </div>
            <div className="flex lg:ml-3">

              <div className='md:w-[50px] md:h-[50px] w-[35px] h-[30px] bg-[#D9D9D9]  m-[5px] rounded-[8px]'  >
              </div>
              <div className='lg:m-[5px] md:text-[18px] text-[14px]  text-[#000]' >
                <h3 className=' font-bold'>Trusted by IITians</h3>
                for their carrer prep
              </div>

            </div>
          </div>




        </div>


        </div>


         <div className='mt-[115px] mr-[50px] lg:ml-[6em] ml-[13px]'>
  <div className="lg:h-[270px] h-[131px] lg:w-[450px] w-[350px] lg:mr-[0px] mr-[32px] border text-[#000] shadow-lg relative overflow-hidden  rounded-tl-lg rounded-tr-lg">

    <div className="flex">
      <div className='lg:mt-[40px] mt-[15px] ml-[20px]'>
        <h5 className='text-[13px] font-medium'>Premium Victory Batch</h5>
        <h3 className='text-[#818181] lg:text-[35px] text-[24px] font-extrabold'><s>₹19,999</s></h3>
        <h3 className='lg:text-[45px] text-[32px] font-extrabold'>
          <span className='bg-gradient-to-r from-[#3F6FC1] to-[#05445E] text-transparent bg-clip-text'>₹13,999</span>
        </h3>
      </div>
      <img className='lg:h-[300px] h-[131px] lg:ml-[0px] ml-[80px] opacity-20  ' src={logo2.src} alt=""  />
    </div>

   

  </div>
   <div className='text-[#fff] bg-gradient-to-r from-[#033042] to-[#005C83] border lg:h-[664px] h-[700px] mb-[50px] rounded-bl-lg rounded-br-lg lg:w-[450px] w-[350px]' >
    
         <div className="flex flex-col mt-[40px] lg:ml-[40px] ml-[15px]">

            <div className="flex mb-[20px] ">

              <div className='w-[60px] h-[60px] border border-gradient-to-r from-[#CFF1FF] to-[#2D5666]  m-[5px] rounded-[8px]'  >
              </div><p className='ml-[15px] mt-3 '  >100+ Hrs Live Content </p>

            </div>
            <div className="flex mb-[20px]">

              <div className='w-[60px] h-[60px] border border-gradient-to-r from-[#CFF1FF] to-[#2D5666]  m-[5px] rounded-[8px]'  >
              </div><p className='ml-[15px] mt-3 ' >50+ Hrs Contest </p>

            </div>
            <div className="flex mb-[20px]">

              <div className='w-[60px] h-[60px] border border-gradient-to-r from-[#CFF1FF] to-[#2D5666]  m-[5px] rounded-[8px]'  >
              </div><p className='ml-[15px] mt-3 ' >500+ Problems </p>

            </div>
            <div className="flex mb-[20px]">

              <div className='lg:w-[90px] w-[120px] h-[60px] border border-gradient-to-r from-[#CFF1FF] to-[#2D5666]  m-[5px] rounded-[8px]'  >
              </div><p className='ml-[15px] mt-3 mr-3 ' >Includes an interview bootcamp and access to a mentor network </p>

            </div>
            <div className="flex mb-[20px]">

              <div className='lg:w-[90px] w-[120px] h-[60px] border border-gradient-to-r from-[#CFF1FF] to-[#2D5666]  m-[5px] rounded-[8px]'  >
              </div><p className='ml-[15px] mt-3 ' >Enjoy access to our content for one year (paid extensions available) </p>

            </div>
            <div className="flex mb-[20px]">

              <div className='lg:w-[90px] w-[120px] h-[60px] border border-gradient-to-r from-[#CFF1FF] to-[#2D5666]  m-[5px] rounded-[8px]'  >
              </div>
              
              
              <p className='ml-[15px] mt-3 ' >Flexible payment options, including no-cost EMI, are available. </p>

            </div>
              
            

            
              
              
            

          </div>
            <button className='bg-gradient-to-r from-[#FFFFFF] to-[#DFF6FF] text-[#05445E] text-[22px]  text-center font-bold pt-[9px] lg:ml-[40px] ml-[15px] lg:mt-[2px] mt-[10px] pb-[9px] pl-[20px] pr-[20px] rounded-[8px] lg:w-[370px] w-[318px] '> Join now <svg className='inline' stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" height="1em"  xmlns="http://www.w3.org/2000/svg"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
              {/* <span className='font-bold'>&#8594;</span> */}

              </button>


    </div>
    </div>



          </div>
        


      </div>
    </div>
  );
};

export default Home;
