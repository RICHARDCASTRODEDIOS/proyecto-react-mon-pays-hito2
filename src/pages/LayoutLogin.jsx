import React, { useState } from 'react'
import { BsCart4 } from 'react-icons/bs'
import { BiSearch } from 'react-icons/bi'
import { GiHamburgerMenu } from 'react-icons/gi'
import { RiLogoutBoxLine } from 'react-icons/ri'
import { MdFavorite } from 'react-icons/md'
import { Button, Drawer, DrawerBody, DrawerCloseButton, DrawerContent, DrawerFooter, DrawerHeader, DrawerOverlay, Input, useDisclosure } from '@chakra-ui/react'
import { Link, Outlet } from 'react-router-dom'

const LayoutLogin = () => {



    const { isOpen, onOpen, onClose } = useDisclosure()
    const btnRef = React.useRef()


    return (
        <header className='bg-black h-16  '>
            <div className='flex items-center justify-between  text-white h-full md:px-20 lg:px-28 sm:px-16 px-2'>
                <div className='flex md:justify-around items-center md:gap-12 gap-4 '>
                    <Link to="/">
                        <h3 className='text-2xl font-semibold cursor-pointer w-28'>Mon-Pays</h3>
                    </Link>
                    <Link to="/shop">
                        <p className='cursor-pointer text-xl font-light  hidden md:block '>Shop</p>
                    </Link>
                    
                    <div className='md:flex items-center relative mt-1 '>
                        <BiSearch size={24} className="absolute top-2 ml-2 hidden md:block" />
                        <input type="search" placeholder='Search' className='pl-1 md:pl-10 border-2 border-white rounded-lg md:w-40 lg:w-60 bg-black w-24 h-8 md:h-10' />
                    </div>

                </div>

                <div className='md:flex justify-around items-center hidden gap-10'>
                    <div className='flex items-center justify-center  cursor-pointer gap-2'>
                        <MdFavorite size={24} className="mt-1" />
                        <Link to="/WishList">
                            <p className='text-xl'>Favorites</p>
                        </Link>

                        
                    </div>
                    <Link to="/profile">
                        <p className='cursor-pointer text-xl'>Profile</p>
                    </Link>
                    

                    <div className='flex justify-around items-center gap-3 sm:gap-8'>
                        <Link to="/loginEmail">
                            <p className='cursor-pointer text-lg'>Login</p>
                        </Link>
                        <Link to="/registerEmail">
                            <p className='cursor-pointer text-lg'>Register</p>
                        </Link>
                    </div>
                </div>



                <GiHamburgerMenu size={24} className="cursor-pointer md:hidden block" onClick={onOpen} />

                <Drawer
                    isOpen={isOpen}
                    placement='right'
                    onClose={onClose}
                    finalFocusRef={btnRef}
                >
                    <DrawerOverlay />
                    <DrawerContent>
                        <DrawerCloseButton />
                        <DrawerHeader>Mon-Pays</DrawerHeader>

                        <DrawerBody className='mt-32 text-center flex flex-col gap-16'>
                            <Link to="/shop" onClick={onClose}>
                                <p className='cursor-pointer text-2xl font-medium '>Shop</p>
                            </Link>
                            <Link to="/profile" onClick={onClose}>
                                <p className='cursor-pointer text-2xl font-medium '>Profile</p>
                            </Link>
                            <Link to="/WishList" onClick={onClose}>
                                <p className='cursor-pointer text-2xl font-medium '>Favorites</p>
                            </Link>

                            <Link to="/loginEmail" onClick={onClose}>
                                <p className='cursor-pointer text-2xl font-medium '>Login</p>
                            </Link>

                            <Link to="/registerEmail" onClick={onClose}>
                                <p className='cursor-pointer text-2xl font-medium '>Register</p>
                            </Link>
                            
                            <div className='mt-36 flex items-center justify-center gap-2 cursor-pointer '>
                                <p className='text-lg font-medium '>Logout</p>
                                <RiLogoutBoxLine className='mt-1' size={20} />
                            </div>


                        </DrawerBody>

                        <DrawerFooter>
                            <Button variant='outline' mr={3} onClick={onClose}>
                                Cancel
                            </Button>
                            <Button bg='brand.900' className='text-white'>Save</Button>
                        </DrawerFooter>
                    </DrawerContent>
                </Drawer>

            </div>
            <Outlet />
        </header>
    )
}

export default LayoutLogin