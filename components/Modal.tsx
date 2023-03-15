
type ModalProps = {
    isOpen: boolean;
    setIsOpen: (isOpen: boolean) => void;
    content: JSX.Element;
    btn: JSX.Element;
    title: string;
}

function Modal({isOpen, setIsOpen, content, btn, title}: ModalProps) {
    return (
        <>
            <div id="defaultModal" className="fixed top-10 z-50 w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%-1rem)]">
                <div className="relative w-full h-full">
                    <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
                        <div className="flex items-start justify-between p-4 border-b rounded-t dark:border-gray-600">
                            <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                                {title}
                            </h3>
                            <button 
                                onClick={() => setIsOpen(false)}
                                type="button" className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white" data-modal-hide="defaultModal">
                                <svg aria-hidden="true" className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                                <span className="sr-only">Close modal</span>
                            </button>
                        </div>
                        <div className="p-6 space-y-6">
                            {content}
                        </div>
                        <div className="flex items-center p-6 space-x-2 border-t border-gray-200 rounded-b dark:border-gray-600">
                            {
                                btn
                            }
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