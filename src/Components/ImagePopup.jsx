function ImagePopup({ imageSrc, isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50"
      onClick={onClose}
    >
      <div
        className="relative bg-white p-4 rounded-lg"
        onClick={(e) => e.stopPropagation()}
      >
        <img src={imageSrc} alt="Popup" className="w-full max-w-md" />
        <button
          className="absolute w-6 h-6 flex items-center justify-center top-2 right-2 text-white bg-black pb-1 rounded-full"
          onClick={onClose}
        >
          &times;
        </button>
      </div>
    </div>
  );
}

export default ImagePopup;
