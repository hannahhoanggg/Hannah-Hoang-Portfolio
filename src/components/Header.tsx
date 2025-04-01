// import { useState } from "React";

const Header: React.FC = () => {
    // const [isOpen, setIsOpen] = useState<boolean>(false);

    return (
        <header className="bg-gray-900 text-white fixed w-full top-0 shadow-md">
            <div className="container mx-auto flex justify-between items-center p-4>">
                <h1 className="text-2xl font-bold">Hannah Hoang</h1>
            </div>
        </header>
    )
}

export default Header;