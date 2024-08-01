import React, { useState, useEffect } from "react";

interface ShareOption {
  name: string;
  iconClass?: string;
  iconUrl?: string;
  onClick: () => void;
}

interface ShareComponentProps {
  isOpen: boolean;
  onClose: () => void;
  shortLink: string;
  shortTitle: string;
  shortImage: string;
  shortId: number;
}

const ShareComponent = ({ isOpen, onClose, shortLink, shortTitle, shortImage, shortId }: ShareComponentProps) => {
  const [shareOptions, setShareOptions] = useState<ShareOption[]>([]);

  useEffect(() => {
    const handleCopyLink = () => {
      navigator.clipboard.writeText(shortLink)
        .then(() => {
          console.log('Link copied to clipboard');
          setShareOptions(prevOptions => 
            prevOptions.map(option => 
              option.name === 'Kopieren' ? { ...option, name: 'kopiert!' } : option
            )
          );
          setTimeout(() => {
            setShareOptions(prevOptions => 
              prevOptions.map(option => 
                option.name === 'kopiert!' ? { ...option, name: 'Kopieren' } : option
              )
            );
          }, 2000); 
        })
        .catch(err => {
          console.error('Failed to copy: ', err);
        });
    };

    setShareOptions([
      { 
        name: 'Kopieren', 
        iconUrl: 'src/img/share_icons/copy.svg',
        onClick: handleCopyLink 
      },
      { 
        name: 'WhatsApp', 
        iconUrl: 'src/img/share_icons/whatsapp.svg',
        onClick: () => {
          const url = `https://api.whatsapp.com/send?text=${encodeURIComponent(shortTitle)}%20${encodeURIComponent(shortLink)}%20${encodeURIComponent(shortImage)}`;
          console.log(url);
          window.open(url, '_blank');
        } 
      },
      { 
        name: 'LinkedIn', 
        iconUrl: 'src/img/share_icons/likedIn.svg',
        onClick: () => {
          const url = `https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(shortLink)}&title=${encodeURIComponent(shortTitle)}`;
          window.open(url, '_blank');
        } 
      },
      { 
        name: 'Meta', 
        iconUrl: 'src/img/share_icons/meta.svg',
        onClick: () => {
          const url = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shortLink)}&quote=${encodeURIComponent(shortTitle)}`;
          window.open(url, '_blank');
        } 
      },
      { 
        name: 'Weitere', 
        iconUrl: 'src/img/share_icons/more.svg',
        onClick: () => {
          console.log(`Sharing Short ID: ${shortId}`);
          console.log(`Image URL: ${shortImage}`);
        }
      }
    ]);
  }, [shortLink, shortTitle, shortImage, shortId]);

  if (!isOpen) {
    return null;
  }

  return (
    <div className="animate-fadeIn fixed inset-0 flex items-center justify-center bg-black bg-opacity-10 z-50">
      <div className="animate-slideIn flex flex-col bg-heise-light-grey text-heise-white py-2 px-4 rounded-md w-120">
        <div className="flex flex-row justify-between">
          <h3 className="text-base font-semibold mb-4">Teilen</h3>
          <i className={`fa-solid fa-xmark`} onClick={onClose}></i>
        </div>
        <div className="flex justify-start flex-wrap -px-4 -mx-2">
          {shareOptions.map((option) => (
            <div 
              key={option.name} 
              className="flex flex-col items-center text-center -px-4 w-20 mb-2 mx-0"
              onClick={option.onClick}
            >
                <img src={option.iconUrl} alt={option.name} className="w-10 h-10" />
                <p className="text-sm mt-2 mb-1 text-heise-white">{option.name}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ShareComponent;
