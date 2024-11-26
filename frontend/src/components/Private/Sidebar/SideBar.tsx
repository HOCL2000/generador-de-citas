import { LinkItem } from '@/types';
import { Archive, LayoutDashboard, LogOut } from 'lucide-react'


const SideBar = () => {
    const nameUrl = location.pathname.split("/")[2]

    function logout(){
        localStorage.clear()
        setTimeout(()=>{
            location.reload()
        },1000)
    }
    
    const links: LinkItem[] = [
        {
            href: "/administrazione/inizio",
            icon: <LayoutDashboard className="text-[#5F56E2]" />,
            iconColor: "#5F56E2",
            label: "Inizio"
        },
        {
            href: "/administrazione/citazioni",
            icon: <Archive className="text-[#5F56E2]" />,
            iconColor: "#5F56E2",
            label: "Citazioni"
        }
    ];

    return (
        <nav className={`hidden overflow-hidden bg-white z-50 lg:fixed h-full min-h-screen lg:border lg:grid lg:grid-rows-[auto,1fr,auto] w-full lg:max-w-[220px]`}>
            <div className='hidden overflow-hidden lg:flex flex-col border-b py-4 items-center justify-between w-full '>
                <p className=' text-[#5F56E2]'>Administrazione</p>
            </div>
            <div className='h-full w-full flex flex-col items-center justify-center lg:items-start  lg:justify-start'>
                <ul className="p-0 m-0 w-full gap-2 items-start flex flex-col justify-center mt-4">
                    {links.map((link, index) => (
                        <li key={index} className="w-full">
                            <a
                                className={`justify-center lg:justify-start w-full flex items-center gap-2 p-2 transition duration-300 hover:bg-[#a9a3ff] ${nameUrl === link.label.toLocaleLowerCase() ? 'bg-[#d7d4ff]' : ''} `}
                                href={link.href}
                            >
                                {link.icon}
                                <span>{link.label}</span>
                            </a>
                        </li>
                    ))}
                </ul>
            </div>
            <div className='flex items-center justify-center w-full'>
                <button onClick={logout} className='text-white w-[90%] flex items-center gap-3 bg-gradient-to-r from-red-500 via-red-600 to-red-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 shadow-lg shadow-red-500/50 dark:shadow-lg dark:shadow-red-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 '>
                    <LogOut /> 
                    <span>
                        Uscire
                    </span>
                </button>
            </div>
        </nav>
    )
}

export default SideBar