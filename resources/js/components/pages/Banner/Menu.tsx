import { Dialog, DialogBackdrop, DialogPanel } from '@headlessui/react';
import { MenuIcon } from 'lucide-react';
import { useState } from 'react';
import { Link } from 'react-scroll';

type MenuItemsProps = {
    handleClose: () => void;
};

function MenuItems({ handleClose }: MenuItemsProps) {
    return (
        <ul className="flex w-full flex-col items-center gap-5 pt-8 lg:mr-4 lg:flex-row lg:gap-2 lg:pr-6 2xl:gap-8 2xl:pr-0">
            <Link to="banner" smooth={true} duration={500} onClick={handleClose} className="w-full">
                <li className="text-typography-primary w-full cursor-pointer py-2 text-center text-sm font-black md:w-auto lg:py-1">
                    <span className="p-2 whitespace-nowrap">Home</span>
                </li>
            </Link>
            <Link to="quem-somos" smooth={true} duration={500} onClick={handleClose} className="w-full">
                <li className="text-typography-primary hover:text-app-primary w-full cursor-pointer py-2 text-center text-sm transition-colors duration-300 md:w-auto lg:py-1">
                    <span className="w-full p-2 whitespace-nowrap">Quem somos</span>
                </li>
            </Link>
            <Link to="servicos" smooth={true} duration={500} onClick={handleClose} className="w-full">
                <li className="text-typography-primary hover:text-app-primary w-full cursor-pointer py-2 text-center text-sm transition-colors duration-300 md:w-auto lg:py-1">
                    <span className="p-2 whitespace-nowrap">Serviços</span>
                </li>
            </Link>
            <Link to="contato" smooth={true} duration={500} onClick={handleClose} className="w-full">
                <li className="text-typography-primary hover:text-app-primary w-full cursor-pointer py-2 text-center text-sm transition-colors duration-300 md:w-auto lg:py-1">
                    <span className="p-2 whitespace-nowrap">Contato</span>
                </li>
            </Link>
        </ul>
    );
}

export default function Menu() {
    const [isOpen, setIsOpen] = useState(false);

    function handleClose() {
        setIsOpen(false);
    }

    return (
        <div className="flex items-center justify-between gap-8">
            <Link to="banner" smooth={true} duration={500} onClick={handleClose}>
                <div className="logo cursor-pointer">
                    <img src="/logo.svg" alt="logo" />
                </div>
            </Link>
            <div className="menu hidden lg:block">
                <MenuItems handleClose={handleClose} />
            </div>
            <button className="mr-6 block lg:hidden" onClick={() => setIsOpen(true)}>
                <MenuIcon className="hover:text-app-primary transition-all duration-300" />
            </button>
            <Dialog
                open={isOpen}
                onClose={() => setIsOpen(false)}
                transition
                className="fixed inset-0 flex w-screen items-center justify-center bg-black/30 p-4 transition duration-300 ease-out data-closed:opacity-0"
            >
                <DialogBackdrop className="fixed inset-0 bg-black/30" />

                <div className="fixed inset-0 flex w-screen items-center justify-end p-4">
                    <DialogPanel
                        transition
                        className="h-full w-[60vw] max-w-lg space-y-4 rounded-2xl border bg-white p-2 py-6 duration-300 ease-out data-closed:translate-x-full"
                    >
                        <Link to="banner" smooth={true} duration={500} onClick={handleClose}>
                            <div className="logo mb-8 flex w-full justify-center">
                                <img src="/logo.svg" alt="logo" />
                            </div>
                        </Link>
                        <MenuItems handleClose={handleClose} />
                    </DialogPanel>
                </div>
            </Dialog>
        </div>
    );
}
