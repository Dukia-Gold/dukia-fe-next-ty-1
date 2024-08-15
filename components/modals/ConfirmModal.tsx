import React, { useEffect, useState } from "react";

type ConfirmModalProps = {
  isOpen: boolean;
  title?: string;
  message?: string;
  onConfirm: () => void;
  onCancel: () => void;
};

const ConfirmModal: React.FC<ConfirmModalProps> = ({
  isOpen,
  title = "Confirm Action",
  message = "Are you sure you want to proceed?",
  onConfirm,
  onCancel,
}) => {
  const [show, setShow] = useState(isOpen);
  const [countdown, setCountdown] = useState(10);

  useEffect(() => {
    if (isOpen) {
      setShow(true);
      setCountdown(10);

      const autoCloseTimeout = setTimeout(() => {
        onCancel();
      }, 10000);

      const countdownInterval = setInterval(() => {
        setCountdown((prev) => prev - 1);
      }, 1000);

      return () => {
        clearTimeout(autoCloseTimeout);
        clearInterval(countdownInterval);
      };
    } else {
      const fadeOutTimeout = setTimeout(() => setShow(false), 200);
      return () => clearTimeout(fadeOutTimeout);
    }
  }, [isOpen, onCancel]);

  if (!show) return null;

  return (
    <div
      className={`fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 transition-opacity duration-200 ${
        isOpen ? "opacity-100" : "opacity-0"
      }`}
    >
      <div className="bg-white rounded-2xl border-[0.5px] border-[#E8E9ED] shadow-lg p-6 w-full text-dukiaBlue max-w-md">
        <h2 className="text-xl font-bold mb-4">{title}</h2>
        <p className="mb-6">{message}</p>
        <p className="mb-4 text-sm animate-flash">
          This will close automatically in {countdown} seconds...
        </p>
        <div className="flex justify-end space-x-4 font-semibold">
          <button
            className="px-6 py-3 text-dukiaBlue bg-gray-200 rounded-lg hover:bg-gray-300"
            onClick={onCancel}
          >
            Cancel
          </button>
          <button
            className="px-6 py-3 text-white bg-dukiaBlue rounded-lg hover:bg-dukiaGold hover:text-dukiaBlue"
            onClick={() => {
              onConfirm();
              onCancel();
            }}
          >
            Confirm
          </button>
        </div>
      </div>
    </div>
  );
};

export default ConfirmModal;
