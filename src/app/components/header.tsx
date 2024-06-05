import Image from 'next/image'
import Link from 'next/link'
import Logo from '../../../public/assets/boxLogo.png'
import { SlSocialInstagram } from "react-icons/sl";

const Header:React.FC = () => {
    return (
        <header className="w-full h-16 bg-black/30 flex justify-around px-10 fixed z-50 backdrop-blur-sm">
            <div className='flex items-center blur-none'>
                <Image src={Logo} priority width={100} height={100} alt='Logo' />
            </div>
            <nav className='text-gray-300 flex items-center'>
                <ul className='flex gap-8 lg:text-xl font-semibold'>
                    <Link className='hover:text-red-600 duration-300 hover:scale-110' href={'/'}>Home</Link>
                    <Link className='hover:text-red-600 duration-300 hover:scale-110' href={'/pages/trajetoria'}>Trajetória</Link>
                    <Link className='hover:text-red-600 duration-300 hover:scale-110' href={'/pages/cases'}>Cases</Link>
                    <Link className='hover:text-red-600 duration-300 hover:scale-110' href={'/'}>Serviços</Link>
                    <Link className='hover:text-red-600 duration-300 hover:scale-110' href="#contato">Contato</Link>
                    <Link className='mt-1 hover:text-red-600 duration-300 hover:scale-110'
                    href='https://www.instagram.com/box23filmes/' 
                    target='_blank'>
                        <SlSocialInstagram/>
                    </Link>
                </ul>
            </nav>
        </header>
    )
}

export default Header