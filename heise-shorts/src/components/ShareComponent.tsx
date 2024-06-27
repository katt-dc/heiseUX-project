import { useState } from "react";

interface ShareOption {
  name: string;
  iconClass: string;
  onClick: () => void;
}

interface ShareComponentProps {
    isOpen: boolean;
    onClose: () => void;
  }

const initialShareOptions = (handleCopyLink: () => void): ShareOption[] => [
    { 
    name: 'Kopieren', 
    iconClass: 'fa-solid fa-copy', 
    onClick: () => {
        const url = 'https://link_kopieren.com/test'; 
        navigator.clipboard.writeText(url)
            .then(() => {
                handleCopyLink();
                console.log('*Link kopieren* clicked and copied to clipboard');
            })
            .catch(err => {
                console.error('Failed to copy: ', err);
            }); 
        }
    },
    { 
        name: 'WhatsApp', 
        iconClass: 'fa-brands fa-whatsapp', 
        onClick: () => {
            const url = 'https://whatsapp.com/test'; 
            window.open(url, '_blank');
        } 
    },
    { 
        name: 'LinkedIn', 
        iconClass: 'fa-brands fa-linkedin', 
        onClick: () => {
            const url = 'https://linkedin.com/test'; 
            window.open(url, '_blank');} 
        },
  
    { 
        name: 'Meta', 
        iconClass: 'fa-brands fa-meta', 
        onClick: () => {
            const url = 'https://meta.com/test'; 
            window.open(url, '_blank');} 
        },

    { 
        name: 'Weitere', 
        iconClass: 'fa-solid fa-ellipsis-h', 
        onClick: () => {
            console.log('Weitere clicked');
        }
    },
];

function ShareComponent(props: ShareComponentProps) {
    
    const [shareOptions, setShareOptions] = useState(initialShareOptions(handleCopyLink));

    function handleCopyLink() {
        setShareOptions(prevOptions => 
        prevOptions.map(option => 
            option.name === 'Kopieren' ? { ...option, name: 'kopiert!' } : option
        )
        );
    }

    const closeShareComponent = () => {
        setShareOptions(prevOptions => 
            prevOptions.map(option => 
                option.name === 'kopiert!' ? { ...option, name: 'Kopieren' } : option
            )
            );
        props.onClose(); // Call the onClose callback provided by parent
    };

    // Render based on props.isOpen
    if (!props.isOpen) {
        return null; // If not visible, don't render anything
    }


  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-10">
        <div className="flex flex-col bg-heise-light-grey text-heise-white py-2 px-4 rounded-md w-120">
            <div className="flex flex-row justify-between">
                <h3 className="text-base font-semibold mb-4">Teilen</h3>
                <i className={`fa-solid fa-xmark`} onClick={closeShareComponent}></i>
            </div>

            <div className="flex justify-start flex-wrap -px-4 -mx-2">
                {shareOptions.map((option) => (
                    <div 
                        key={option.name} 
                        className="flex flex-col items-center text-center -px-4 w-20 mb-2 mx-0"
                        onClick={option.onClick}
                    >
                        <i className={`${option.iconClass} text-2xl text-heise-white`}></i>
                        <p className="text-sm mt-2 mb-1 text-heise-white">{option.name}</p>
                    </div>
                ))}
            </div>
        </div>
    </div>
  );
}

export default ShareComponent;
