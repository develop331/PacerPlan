import { useLocation, Link } from 'react-router'

export function Navigation() {
    const location = useLocation()
    console.log(location)
    console.log(location.pathname==='/')
    return (
        <div className="m-3 p-3 bg-zinc-300 h-10% w-90% rounded-lg flex flex-row">
            <div className="basis-2/3"> {/* leftmost */}
                <Link to="/" className={"p-2 "+(location.pathname==='/'?'font-semibold':'hover:text-mist-400')}>Home</Link>
                <Link to="/ltp" className={"p-2 "+(location.pathname==='/ltp'?'font-semibold':'hover:text-mist-400')}>LTP</Link>
                <Link to="/stp" className={"p-2 "+(location.pathname==='/stp'?'font-semibold':'hover:text-mist-400')}>vSTP</Link>
            </div>
            <div className="basis-auto text-right w-full"> {/* rightmost */}
                <Link to="/login" className={"p-2 "+(location.pathname==='/login'?'font-semibold':'hover:text-mist-400')}>Login</Link>
            </div>
        </div>
    )
}