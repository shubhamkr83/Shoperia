import Head from 'next/head'
import Image from 'next/image'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Shopperia</title>
        <meta name="Ecommerce Website, online shopping website" content="Reactjs, Nextjs, JavaScript, nodejs, expressjs, tailwind css" />
        <meta name="Shubham, Shivam, Ojas, Nikhil, Mrunali" content="Shubham" />
        <meta name="Make Your Day Shub" content="Ecomm-express" />
        <link rel="icon" href="/public/profile.png" />
      </Head>


      {/* hero section */}

      <div className="flex justify-center  my-12">
        <div className="flex flex-col items-center justify-center">

          <div className="flex flex-col  max-w-7xl justify-center items-center space-y-3 w-full ">
            <div className="flex flex-col   md:items-start items-center justify-center  space-y-3 px-8 text-center ">
              <div className="text-3xl md:text-7xl font-bold ">
                Make Your Fashion Look More Charming</div>
            </div>
            <div
              className="flex flex-col lg:flex-row space-x-2 space-y-3 md:space-x-6   w-full items-center justify-center ">

              <div className="lg:w-40 w-64 h-40  overflow-hidden rounded-xl ">
                <img src="https://source.unsplash.com/random/300x500/?man
                                    
                                                            " alt="" className="" />
              </div>
              <div className="flex flex-row lg:flex-col space-x-3 space-y-6 items-center justify-center">
                <div className="w-32 lg:w-40 h-32  overflow-hidden rounded-xl ">
                  <img src="https://source.unsplash.com/random/300x500/?man
                                    
                                                                " alt="" className="" />
                </div>
                <div className="w-32 lg:w-40 h-48  overflow-hidden rounded-xl ">
                  <img src="https://source.unsplash.com/random/300x500/?man
                                    
                                                                " alt="" className="" />
                </div>
              </div>
              <div className="lg:w-60 w-64 h-96  overflow-hidden rounded-xl ">
                <img src="https://source.unsplash.com/random/300x500/?man
                                    
                                                            " alt="" className="" />
              </div>
              <div className="flex flex-row lg:flex-col space-x-3 space-y-6 items-center justify-center ">
                <div className="w-32 lg:w-40 h-48  overflow-hidden rounded-xl ">
                  <img src="https://source.unsplash.com/random/300x500/?man
                                    
                                                                " alt="" className="" />
                </div>
                <div className="w-32 lg:w-40 h-32  overflow-hidden rounded-xl ">
                  <img src="https://source.unsplash.com/random/300x500/?man
                                    
                                                                " alt="" className="" />
                </div>
              </div>
              <div className="lg:w-40 w-64 h-40  overflow-hidden rounded-xl ">
                <img src="https://source.unsplash.com/random/300x500/?man
                                    
                                                            " alt="" className="" />
              </div>


            </div>

          </div>
        </div>
      </div>
      <script src="https://cdn.tailwindcss.com"></script>
      <script src="https://use.fontawesome.com/03f8a0ebd4.js"></script>


      {/* products */}
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-20 mx-auto">
          <div className="flex flex-wrap w-full mb-20">
            <div className="lg:w-1/2 w-full mb-6 lg:mb-0">
              <div className="text-3xl text-purple-700 font-bold mt-4 ">Best Seller</div>
              <div className="h-1 w-24 bg-indigo-500 rounded"></div>
            </div>

          </div>
          <div className="flex flex-wrap -m-4">
            <div className="xl:w-1/4 md:w-1/2 p-4">
              <div className="bg-gray-100 p-6 rounded-lg">
                <img className="h-75 rounded w-full object-cover object-center mb-6" src="https://m.media-amazon.com/images/I/6156DBMN-RL._SL1500_.jpg" alt="content" />
                <h3 className="tracking-widest text-indigo-500 text-xs font-medium title-font">SUBTITLE</h3>
                <h2 className="text-lg text-gray-900 font-medium title-font mb-4">Chichen Itza</h2>
                <p className="leading-relaxed text-base">Fingerstache flexitarian street art 8-bit waistcoat. Distillery hexagon disrupt edison bulbche.</p>
              </div>
            </div>
            <div className="xl:w-1/4 md:w-1/2 p-4">
              <div className="bg-gray-100 p-6 rounded-lg">
                <img className="h-75 rounded w-full object-cover object-center mb-6" src="https://m.media-amazon.com/images/I/71--IQUHVwL._SL1500_.jpg" alt="content" />
                <h3 className="tracking-widest text-indigo-500 text-xs font-medium title-font">SUBTITLE</h3>
                <h2 className="text-lg text-gray-900 font-medium title-font mb-4">Colosseum Roma</h2>
                <p className="leading-relaxed text-base">Fingerstache flexitarian street art 8-bit waistcoat. Distillery hexagon disrupt edison bulbche.</p>
              </div>
            </div>
            <div className="xl:w-1/4 md:w-1/2 p-4">
              <div className="bg-gray-100 p-6 rounded-lg">
                <img className="h-75 rounded w-full object-cover object-center mb-6" src="https://m.media-amazon.com/images/I/71Zab0k1chL._SL1500_.jpg" alt="content" />
                <h3 className="tracking-widest text-indigo-500 text-xs font-medium title-font">SUBTITLE</h3>
                <h2 className="text-lg text-gray-900 font-medium title-font mb-4">Great Pyramid of Giza</h2>
                <p className="leading-relaxed text-base">Fingerstache flexitarian street art 8-bit waistcoat. Distillery hexagon disrupt edison bulbche.</p>
              </div>
            </div>
            <div className="xl:w-1/4 md:w-1/2 p-4">
              <div className="bg-gray-100 p-6 rounded-lg">
                <img className="h-75 rounded w-full object-cover object-center mb-6" src="https://m.media-amazon.com/images/I/61i8Vjb17SL._SL1500_.jpg" alt="content" />
                <h3 className="tracking-widest text-indigo-500 text-xs font-medium title-font">SUBTITLE</h3>
                <h2 className="text-lg text-gray-900 font-medium title-font mb-4">San Francisco</h2>
                <p className="leading-relaxed text-base">Fingerstache flexitarian street art 8-bit waistcoat. Distillery hexagon disrupt edison bulbche.</p>
              </div>
            </div>
            <div className="xl:w-1/4 md:w-1/2 p-4">
              <div className="bg-gray-100 p-6 rounded-lg">
                <img className="h-75 rounded w-full object-cover object-center mb-6" src="https://m.media-amazon.com/images/I/71Zab0k1chL._SL1500_.jpg" alt="content" />
                <h3 className="tracking-widest text-indigo-500 text-xs font-medium title-font">SUBTITLE</h3>
                <h2 className="text-lg text-gray-900 font-medium title-font mb-4">Great Pyramid of Giza</h2>
                <p className="leading-relaxed text-base">Fingerstache flexitarian street art 8-bit waistcoat. Distillery hexagon disrupt edison bulbche.</p>
              </div>
            </div>
            <div className="xl:w-1/4 md:w-1/2 p-4">
              <div className="bg-gray-100 p-6 rounded-lg">
                <img className="h-75 rounded w-full object-cover object-center mb-6" src="https://m.media-amazon.com/images/I/6156DBMN-RL._SL1500_.jpg" alt="content" />
                <h3 className="tracking-widest text-indigo-500 text-xs font-medium title-font">SUBTITLE</h3>
                <h2 className="text-lg text-gray-900 font-medium title-font mb-4">Chichen Itza</h2>
                <p className="leading-relaxed text-base">Fingerstache flexitarian street art 8-bit waistcoat. Distillery hexagon disrupt edison bulbche.</p>
              </div>
            </div>
            <div className="xl:w-1/4 md:w-1/2 p-4">
              <div className="bg-gray-100 p-6 rounded-lg">
                <img className="h-75 rounded w-full object-cover object-center mb-6" src="https://m.media-amazon.com/images/I/61i8Vjb17SL._SL1500_.jpg" alt="content" />
                <h3 className="tracking-widest text-indigo-500 text-xs font-medium title-font">SUBTITLE</h3>
                <h2 className="text-lg text-gray-900 font-medium title-font mb-4">San Francisco</h2>
                <p className="leading-relaxed text-base">Fingerstache flexitarian street art 8-bit waistcoat. Distillery hexagon disrupt edison bulbche.</p>
              </div>
            </div>
            <div className="xl:w-1/4 md:w-1/2 p-4">
              <div className="bg-gray-100 p-6 rounded-lg">
                <img className="h-75 rounded w-full object-cover object-center mb-6" src="https://m.media-amazon.com/images/I/71--IQUHVwL._SL1500_.jpg" alt="content" />
                <h3 className="tracking-widest text-indigo-500 text-xs font-medium title-font">SUBTITLE</h3>
                <h2 className="text-lg text-gray-900 font-medium title-font mb-4">Colosseum Roma</h2>
                <p className="leading-relaxed text-base">Fingerstache flexitarian street art 8-bit waistcoat. Distillery hexagon disrupt edison bulbche.</p>
              </div>
            </div>

          </div>
        </div>
      </section>


      {/* Testimonial section */}
      <div className="flex justify-center ">
        <div className="flex flex-col justify-center items-center max-w-7xl">
          <div className="text-3xl text-purple-700 font-bold mt-4 ">Testimonial</div>
          <div className="text-2xl text-black font-bold mt-2 ">What our Customers Say</div>
          <div className="flex flex-col items-center justify-evenly my-12 lg:px-10 lg:flex-row space-y-8 lg:space-y-0 ">
            <div
              className="flex flex-col justify-center items-center p-10 bg-white shadow w-[90%] md:w-[70%] lg:w-[30%] overflow-hidden">
              <div className="  "></div>
              <div className="flex flex-col -mt-20 -mr-[352px] hidden xl:block">
                <div className="w-2 h-14 bg-sky-500"></div>
                <div className="w-2 h-14 bg-purple-700"></div>
              </div>
              <h1 className="text-xl tracking-tight font-semibold text-purple-700 uppercase   ">1. Best Components</h1>
              <p className="text-black mt-3 text-center w-[90%] lg:w-[100%]"> Tailblocks provides best Tailwind CSS
                Components and Blocks to create an unique websites within minutes. It has upto 60+ free
                components for front-end Web Development.</p>
              <img src="https://source.unsplash.com/150x150/?man" className="rounded-full mt-4" alt="" />
              <div className="flex flex-col -ml-[352px] mt-72 absolute hidden xl:block">
                <div className="w-2 h-14 bg-sky-500"></div>
                <div className="w-2 h-14 bg-purple-700"></div>
              </div>
              <h1 className="text-lg font-semibold text-purple-700 uppercase mt-1">mark warner</h1>
              <h1 className="text-lg font-semibold text-black uppercase -mt-1">ceo / director</h1>
            </div>
            <div
              className="flex flex-col justify-center items-center p-10 bg-white shadow w-[90%] md:w-[70%] lg:w-[30%] overflow-hidden">
              <div className="  "></div>
              <div className="flex flex-col -mt-20 -mr-[352px] hidden xl:block">
                <div className="w-2 h-14 bg-sky-500"></div>
                <div className="w-2 h-14 bg-purple-700"></div>
              </div>
              <h1 className="text-xl tracking-tight font-semibold text-purple-700 uppercase   ">2. Amazing Designs</h1>
              <p className="text-black mt-3 text-center w-[90%] lg:w-[100%]"> Tailblocks provides best Tailwind CSS
                Components and Blocks to create an unique websites within minutes. It has upto 60+ free
                components for front-end Web Development.</p>
              <img src="https://source.unsplash.com/150x150/?girl" className="rounded-full mt-4" alt="" />
              <div className="flex flex-col -ml-[352px] mt-72 absolute hidden xl:block">
                <div className="w-2 h-14 bg-sky-500"></div>
                <div className="w-2 h-14 bg-purple-700"></div>
              </div>
              <h1 className="text-lg font-semibold text-purple-700 uppercase mt-1">alexa daniel</h1>
              <h1 className="text-lg font-semibold text-black uppercase -mt-1">ceo / director</h1>
            </div>
            <div
              className="flex flex-col justify-center items-center p-10 bg-white shadow w-[90%]  md:w-[70%] lg:w-[30%] overflow-hidden">
              <div className="  "></div>
              <div className="flex flex-col -mt-20 -mr-[352px] hidden xl:block">
                <div className="w-2 h-14 bg-sky-500"></div>
                <div className="w-2 h-14 bg-purple-700"></div>
              </div>
              <h1 className="text-xl tracking-tight font-semibold text-purple-700 uppercase   ">3. Impressive</h1>
              <p className="text-black mt-3 text-center w-[90%] lg:w-[100%]"> Tailblocks provides best Tailwind CSS
                Components and Blocks to create an unique websites within minutes. It has upto 60+ free
                components for front-end Web Development.</p>
              <img src="https://source.unsplash.com/150x150/?woman" className="rounded-full mt-4" alt="" />
              <div className="flex flex-col -ml-[352px] mt-72 absolute hidden xl:block">
                <div className="w-2 h-14 bg-sky-500"></div>
                <div className="w-2 h-14 bg-purple-700"></div>
              </div>
              <h1 className="text-lg font-semibold text-purple-700 uppercase mt-1">jessy bush</h1>
              <h1 className="text-lg font-semibold text-black uppercase -mt-1">ceo / director</h1>
            </div>
          </div>
        </div>
      </div>


    </div>


  )
}
