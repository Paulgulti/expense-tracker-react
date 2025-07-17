'use state'
import { useState } from "react"
import { ModeToggle } from "./mode-toggle"
import { Button } from "./ui/button"
import { XSquareIcon } from "lucide-react"
import clsx from "clsx"
import { Link } from "react-router"

const Header = () => {
    const [menuBarStatus, setMenuBarStatus] = useState<boolean>(false)
    function toogleMenuBar() {
        setMenuBarStatus(!menuBarStatus)
    }
    return (
        <header className="bg-slate-900 text-cyan-400  flex items-center h-[60px] z-100">
            <nav className="flex container mx-auto justify-between items-center">
                <Link to={'/'} className="font-bold">Expense Tracker</Link>
                <ul className={clsx(
                    "bg-slate-900 text-inherit z-100 absolute md:static md:w-auto md:min-h-fit flex items-center gap-4 md:gap-6 flex-col md:flex-row left-0 w-full  min-h-[60vh]",
                    {
                        'top-[-1000px]': !menuBarStatus,
                        'top-[60px]': menuBarStatus,
                    },
                    )}>
                    <li><a href="/">Home</a></li>
                    <li><a href="">about</a></li>
                    <li><a href="/dashboard">dashboard</a></li>
                    <li><a href="">contact</a></li>
                    <li>
                        <Button className="md:hidden" variant={'secondary'}>Signup</Button>
                    </li>
                    <li>
                        <Button className="md:hidden">signin</Button>
                    </li>
                </ul>
                <div className="md:hidden flex items-center gap-2">
                    <ModeToggle />
                    {menuBarStatus ? (
                        <XSquareIcon className="w-8 h-8" onClick={toogleMenuBar}/>
                    ) : (
                    <svg
                    onClick={toogleMenuBar}
                        className="w-6 h-6" 
                        fill="#17C8EC" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                        <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
                        <g id="SVGRepo_iconCarrier"><path d="M2,4A1,1,0,0,1,3,3H21a1,1,0,0,1,0,2H3A1,1,0,0,1,2,4Zm1,9H21a1,1,0,0,0,0-2H3a1,1,0,0,0,0,2Zm0,8H21a1,1,0,0,0,0-2H3a1,1,0,0,0,0,2Z"></path></g>
                    </svg>
                    )}
                </div>
                <div className="hidden md:flex gap-2 ">
                    <ModeToggle />
                    <Button variant={'secondary'}>Signup</Button>
                    <Button>signin</Button>
                </div>
            </nav>

        </header>
    )
}

export default Header
