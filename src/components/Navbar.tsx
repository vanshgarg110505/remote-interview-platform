import React from 'react'
import { ModeToggle } from './ModeToggle'
import Link from 'next/link'
import { CodeIcon } from 'lucide-react'
import { SignedIn, UserButton } from '@clerk/nextjs'
import DashboardBtn from './DashboardBtn'

function Navbar() {
  return (
    <nav className='border-b'>
        <div className='flex h-16 items-center px-4 container mx-auto'>
            {/* LEFT SIDE LOGO */}
            <Link
                href="/"
                className="flex items-center gap-2 font-semibold text-2xl mr-6 font-mono hover:opacity-80 transition-opacity"
            >
                <CodeIcon className="size-8 text-emerald-500" />
                <span className="bg-gradient-to-r from-emerald-600 to-teal-500 bg-clip-text text-transparent">
                    CodeSync
                </span>
            </Link>

            {/* RIGHT SIDE ACTIONS */}
            <SignedIn>
                <div className='flex items-center space-x-4 ml-auto'>
                    <DashboardBtn />
                    <ModeToggle />
                    <UserButton />
                </div>
            </SignedIn>
        </div>
    </nav>
  )
}

export default Navbar
