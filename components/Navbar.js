import Image from 'next/image'
import Link from 'next/link'
import React, { useRef } from 'react'
import { AiOutlineShoppingCart, AiOutlineMinusCircle, AiOutlinePlusCircle, AiFillCloseCircle } from 'react-icons/ai';
import { BsFillBagCheckFill } from 'react-icons/bs';
import { MdAccountCircle } from 'react-icons/md';


const Navbar = ({ cart, addToCart, removeFromCart, clearCart, subTotal }) => {
    const toggleCart = () => {
        if (ref.current.classList.contains('translate-x-full')) {
            ref.current.classList.remove('translate-x-full')
            ref.current.classList.add('translate-x-0')
        }
        else if (!ref.current.classList.contains('translate-x-full')) {
            ref.current.classList.remove('translate-x-0')
            ref.current.classList.add('translate-x-full')
        }

    }
    const ref = useRef()
    return (

        //----------------------- Navbar start ------------------------

        <div className="flex flex-col md:flex-row md:justify-start justify-center items-center py-2 shadow-md sticky top-0 bg-white z-100">
            <div className="logo mx-20">
                <Link href={'/'}><a><Image width={80} height={50} src="/logo.png" alt="logo" /></a></Link>
            </div>
            <div className="nav">
                <ul className="flex items-center space-x-6 font-bold md:text-md ">
                    <Link href={'/'}><a><li> Home </li></a></Link>
                    <Link href={'/hoddies'}><a><li> Hoddies </li></a></Link>
                    <Link href={'/stickers'}><a><li> Laptop </li></a></Link>
                    <Link href={'/mug'}><a><li> Watches </li> </a></Link>
                    <Link href={'/login'}><a><li> Login </li></a></Link>
                    <Link href={'/contact'}><a><li> Contact </li> </a></Link>
                </ul>
            </div>
            <div className="cart absolute top-5 right-9 mx-13 cursor-pointer flex">
                <Link href={'/login'}><a><MdAccountCircle className="md:text-3xl text-2xl mx-3" /></a></Link>
                <AiOutlineShoppingCart onClick={toggleCart} className="md:text-3xl text-2xl" />
            </div>

            {/* ----------------------- Navbar End ------------------------ */}



            {/*---------------------- Cart sidebar start  ----------------------*/}

            <div ref={ref} className={`w-72 h-[100vh] sidecart absolute top-0 right-0 bg-yellow-100 py-10 px-8 transition-transform transform ${Object.keys(cart).length !== 0 ? 'translate-x-0' : 'translate-x-full'}`}>
                <h2 className="font-bold text-xl text-center">Shopping Cart</h2>
                <span onClick={toggleCart} className="absolute top-2 right-2 cursor-pointer text-2xl text-yellow-500"><AiFillCloseCircle /></span>

                <ol className='list-decimal font-semibold'>
                    {Object.keys(cart).length == 0 && <div className="my-4 ">No items present in the cart</div>}
                    {Object.keys(cart).map((k) => {
                        return (
                            <li key={k}>
                                <div className="item flex my-5">
                                    <div className='w-2/3 font-semibold'>{cart[k].name}</div>
                                    <div className='w-1/3 font-semibold items-center justify-center flex text-lg'><AiOutlineMinusCircle onClick={() => { removeFromCart(k, 1, cart[k].price, cart[k].name, cart[k].size, cart[k].variant) }} className='cursor-pointer text-yellow-500' /> <span className='mx-2 text-sm'> {cart[k].qty} </span> <AiOutlinePlusCircle onClick={() => { addToCart(k, 1, cart[k].price, cart[k].name, cart[k].size, cart[k].variant) }} className='cursor-pointer text-yellow-500' /></div>
                                </div>
                            </li>
                        )
                    })}

                </ol>
                <div className="total text-bold">Subtotal: {subTotal}</div>

                <div className="flex">
                    <Link href={"/checkout"}><button className="flex mr-2 mt-10 text-white bg-yellow-500 border-0 py-2 px-2 focus:outline-none hover:bg-yellow-600 rounded text-sm"><BsFillBagCheckFill className='m-1' /> Checkout</button></Link>
                    <button onClick={clearCart} className="flex mr-2 mt-10 text-white bg-yellow-500 border-0 py-2 px-2 focus:outline-none hover:bg-yellow-600 rounded text-sm">Clear Cart</button>
                </div>

            </div>

            {/*---------------------- Cart sidebar End  ----------------------*/}


        </div>

    )
}

export default Navbar