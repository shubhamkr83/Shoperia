import Link from 'next/link'
import React from 'react'
import Product from '../models/product'
import mongoose from 'mongoose';


const Tshirt = ({ products }) => {
    return (
        <div>
            <section className="text-gray-600 body-font">
                <div className="container px-5 py-24 mx-auto">
                    <div className="flex flex-wrap m-auto justify-center">

                        {products.map((item) => {
                            return <Link passHref={true} key={item._id} href={`/product/${item.slug}`}><div className="lg:w-1/5 md:w-1/2 p-4 w-full cursor-pointer shadow-md m-5">
                                <a className="block rounded overflow-hidden px-10">
                                    <img alt="ecommerce" className="m-auto h-[30vh] md:h-[36vh] block" src={item.img} />
                                </a>
                                <div className="mt-4 text-center md:text-left">
                                    <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">T-Shirts</h3>
                                    <h2 className="text-gray-900 title-font text-lg font-medium">{item.title}</h2>
                                    <p className="mt-1">{item.price}</p>
                                    <p className="mt-1">S, M, L, XL, XXL</p>
                                </div>
                            </div>
                            </Link>
                        })}


                    </div>
                </div>
            </section>
        </div>
    )
}
export async function getServerSideProps(context) {
    if (!mongoose.connections[0].readyState) {
        await mongoose.connect(process.env.MONGO_URI)
    }
    let products = await Product.find({ category: 'tshirt' })

    return {
        props: { products: JSON.parse(JSON.stringify(products)) }, // will be passed to the page component as props
    }
}


export default Tshirt