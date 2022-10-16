import { ChevronDoubleLeftIcon, XMarkIcon } from '@heroicons/react/24/solid'
import React from 'react'

import { useDispatch } from 'react-redux'
import { setClearCartItems } from '../../app/CartSlice'

const CartCount = ({ onCartToggle, totalQuantity }) => {
  const dispatch = useDispatch()

  const onClearItems = () => {
    dispatch(setClearCartItems())
  }

  return (
    <>
      <div className='bg-white h-11 flex items-center justify-between px-3 sticky top-0 left-0 right-0 w-full'>
        <div className='flex items-center gap-3'>
          <div className='grid items-center cursor-pointer' onClick={onCartToggle}>
            <ChevronDoubleLeftIcon className='w-5 h-5 text-slate-900 hover:text-orange-500 stroke-[2]' />
          </div>
          <div className='grid items-center'>
            <h1 className='text-base font-mediu m text-slate-900'>Your Cart <span className='bg-theme-cart rounded px-1 py-0.55 text-slate-100 font-normal text-xs'>({totalQuantity} Items)</span> </h1>
          </div>
        </div>
        <div className='flex items-center'>
          <button type='button' onClick={() => onClearItems()} className='rounded bg-theme-cart active:scale-90 p-0.5'>
            <XMarkIcon className='w-5 h-5 text-white stroke-[2]' />
          </button>
        </div>
      </div>
    </>
  )
}

export default CartCount