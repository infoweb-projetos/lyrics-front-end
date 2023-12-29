'use client'

import * as React from 'react';
import { useEffect, useState } from 'react';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';

export default function SwitchPallete() {
    const [theme,setTheme] = useState(true)

    useEffect(() => {
      if (theme) {
        document.documentElement.classList.add('dark')
        localStorage.setItem('theme','dark')
    }
      else {
        document.documentElement.classList.remove('dark')
        localStorage.removeItem('theme')
    }
    })
    
    function handle() {
      setTheme(!theme)
    }

    return (
        <button onClick={handle}>
            {theme === true 
                ? <div className='flex items-center gap-2'>
                    <Brightness7Icon />
                </div> 
                : <div className='flex items-center gap-2'>
                    <Brightness4Icon />
                </div>
        }
        </button>
        
    );
}