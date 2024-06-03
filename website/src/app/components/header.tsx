import Image from 'next/image'
import Link from 'next/link'

const Header:React.FC = () => {
    return (
        <header className="w-full h-16 bg-black/20 flex justify-around px-10">
            <div className='border border-red-500'>

            </div>
            <nav className='border border-green-500 text-gray-300 flex items-center'>
                <ul className='flex gap-8 lg:text-xl font-semibold'>
                    <Link href={'/'}>Home</Link>
                    <Link href={'/'}>Sobre</Link>
                    <Link href={'/'}>Cases</Link>
                    <Link href={'/'}>Contato</Link>
                </ul>
            </nav>
        </header>
    )
}

export default Header