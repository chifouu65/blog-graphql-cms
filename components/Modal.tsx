import {AiOutlineClose} from 'react-icons/ai'

type ModalProps = {
    isOpen: boolean;
    setIsOpen: (isOpen: boolean) => void;
    children: JSX.Element;
    title: string;
}

function Modal({isOpen, setIsOpen, children,title}: ModalProps) {
    return (
        <>
            <div className="fixed top-10 z-50 w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%-1rem)]">
                <div className="relative w-full h-full">
                    <div className="relative bg-white rounded-lg shadow">
                        <div className="flex items-start justify-between p-4 border-b rounded-t">
                            <h3 className="text-xl font-semibold text-gray-900">
                                {title}
                            </h3>
                            <button 
                                onClick={() => setIsOpen(false)}
                                type="button" className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center">
                                <AiOutlineClose className="text-xl"/>
                                <span className="sr-only">Close modal</span>
                            </button>
                        </div>
                        <div className="p-6 space-y-6">
                            {children}
                        </div>
                    </div>
                </div>
            </div>
            <div 
            className='fixed bottom-0 right-0
                    w-full h-full flex items-center justify-center
                    bg-black bg-opacity-50'/>
        </>
    )
}

export default Modal