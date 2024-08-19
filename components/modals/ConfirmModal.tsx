import React, { useEffect, useState } from "react";

type ConfirmModalProps = {
  isOpen: boolean;
  type: "success" | "error" | "confirm" | undefined;
  title?: string;
  message?: string;
  onConfirm: () => void;
  onCancel: () => void;
};

const ConfirmModal: React.FC<ConfirmModalProps> = ({
  isOpen,
  type = "confirm",
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
        <div className="flex justify-end font-semibold mb-1.5">
          <p className="text-dukiaGold font-black">{countdown}</p>
        </div>

        <div className="flex flex-col items-center space-y-8">
          <div className="space-y-2.5 flex flex-col items-center">
            <div
              className={`${
                type === "confirm"
                  ? "py-10"
                  : type === "error"
                  ? "py-[1.8075rem]"
                  : type === "success"
                  ? "py-[3.125rem]"
                  : ""
              } rounded-[50%] bg-[#FBF7EB] w-[128px] flex justify-center`}
            >
              {type === "confirm" && (
                <svg
                  width="30"
                  height="49"
                  viewBox="0 0 30 49"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clip-path="url(#clip0_6309_7644)">
                    <path
                      d="M7.5 15.5001C7.5 12.1907 10.1906 9.5001 13.5 9.5001H16.5C19.8094 9.5001 22.5 12.1907 22.5 15.5001V15.8376C22.5 17.8813 21.4594 19.7845 19.7438 20.8813L15.7875 23.422C14.6259 24.1688 13.6704 25.1954 13.0086 26.4075C12.3469 27.6196 12.0001 28.9785 12 30.3595V30.4907C12 32.1501 13.3406 33.4907 15 33.4907C16.6594 33.4907 18 32.1501 18 30.4907V30.3595C18 29.5907 18.3937 28.8782 19.0312 28.4657L22.9875 25.9251C26.4187 23.7126 28.5 19.9157 28.5 15.8282V15.4907C28.5 8.8626 23.1281 3.49072 16.5 3.49072H13.5C6.87188 3.5001 1.5 8.87197 1.5 15.5001C1.5 17.1595 2.84062 18.5001 4.5 18.5001C6.15938 18.5001 7.5 17.1595 7.5 15.5001ZM15 45.5001C15.9946 45.5001 16.9484 45.105 17.6516 44.4017C18.3549 43.6985 18.75 42.7447 18.75 41.7501C18.75 40.7555 18.3549 39.8017 17.6516 39.0984C16.9484 38.3952 15.9946 38.0001 15 38.0001C14.0054 38.0001 13.0516 38.3952 12.3483 39.0984C11.6451 39.8017 11.25 40.7555 11.25 41.7501C11.25 42.7447 11.6451 43.6985 12.3483 44.4017C13.0516 45.105 14.0054 45.5001 15 45.5001Z"
                      fill="#1C254E"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_6309_7644">
                      <rect
                        width="30"
                        height="48"
                        fill="white"
                        transform="translate(0 0.5)"
                      />
                    </clipPath>
                  </defs>
                </svg>
              )}

              {type === "error" && (
                <svg
                  width="71"
                  height="71"
                  viewBox="0 0 71 71"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M35.4974 0.916748C16.3728 0.916748 0.914062 16.3755 0.914062 35.5001C0.914062 54.6247 16.3728 70.0834 35.4974 70.0834C54.622 70.0834 70.0807 54.6247 70.0807 35.5001C70.0807 16.3755 54.622 0.916748 35.4974 0.916748ZM50.3682 50.3709C50.0483 50.6915 49.6683 50.9459 49.2499 51.1194C48.8315 51.2929 48.383 51.3823 47.9301 51.3823C47.4772 51.3823 47.0287 51.2929 46.6103 51.1194C46.192 50.9459 45.8119 50.6915 45.492 50.3709L35.4974 40.3763L25.5028 50.3709C24.8562 51.0175 23.9792 51.3808 23.0647 51.3808C22.1502 51.3808 21.2732 51.0175 20.6266 50.3709C19.9799 49.7243 19.6167 48.8473 19.6167 47.9328C19.6167 47.48 19.7058 47.0316 19.8791 46.6133C20.0524 46.195 20.3064 45.8148 20.6266 45.4947L30.6211 35.5001L20.6266 25.5055C19.9799 24.8589 19.6167 23.9818 19.6167 23.0674C19.6167 22.1529 19.9799 21.2759 20.6266 20.6292C21.2732 19.9826 22.1502 19.6193 23.0647 19.6193C23.9792 19.6193 24.8562 19.9826 25.5028 20.6292L35.4974 30.6238L45.492 20.6292C45.8122 20.3091 46.1923 20.0551 46.6106 19.8818C47.0289 19.7085 47.4773 19.6193 47.9301 19.6193C48.3829 19.6193 48.8313 19.7085 49.2496 19.8818C49.6679 20.0551 50.048 20.3091 50.3682 20.6292C50.6884 20.9494 50.9424 21.3295 51.1157 21.7479C51.2889 22.1662 51.3781 22.6146 51.3781 23.0674C51.3781 23.5202 51.2889 23.9685 51.1157 24.3869C50.9424 24.8052 50.6884 25.1853 50.3682 25.5055L40.3736 35.5001L50.3682 45.4947C51.6824 46.8088 51.6824 49.0222 50.3682 50.3709Z"
                    fill="#1C254E"
                  />
                </svg>
              )}

              {type === "success" && (
                <svg
                  width="36"
                  height="28"
                  viewBox="0 0 36 28"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M35.5 3.49969L11.5 27.4997L0.5 16.4997L3.32 13.6797L11.5 21.8397L32.68 0.679688L35.5 3.49969Z"
                    fill="#1C254E"
                  />
                </svg>
              )}
            </div>

            <div className="space-y-1 font-semibold text-center">
              <p>{title}</p>
              <p className="text-[#676D88] text-xs">{message}</p>
            </div>
          </div>

          {type === "error" && (
            <p
              onClick={onCancel}
              className="underline text-dukiaGold font-semibold cursor-pointer"
            >
              Try again
            </p>
          )}

          {type === "success" && (
            <button
              className="px-6 py-3 text-dukiaBlue rounded-lg bg-dukiaBlue hover:bg-dukiaGold hover:text-dukiaBlue "
              onClick={onCancel}
            >
              Okay
            </button>
          )}

          {type === "confirm" && (
            <div className="flex items-center space-x-6 font-semibold">
              <button
                className="px-6 py-3 rounded-lg bg-dukiaBlue hover:bg-dukiaGold text-white hover:text-dukiaBlue "
                onClick={onCancel}
              >
                Cancel
              </button>

              <button
                className="px-6 py-3 text-dukiaBlue bg-gray-200 rounded-lg hover:bg-gray-300"
                onClick={() => {
                  onConfirm();
                  onCancel();
                }}
              >
                Confirm
              </button>
            </div>
          )}
        </div>
        {/*<p className="mb-6">{message}</p>
        <p className="mb-4 text-sm animate-flash">
          This will close automatically in {countdown} seconds...
        </p> */}
      </div>
    </div>
  );
};

export default ConfirmModal;
