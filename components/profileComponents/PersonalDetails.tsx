const PersonalDetails = ({ user }: { user: any }) => {
  return (
    <div className="p-6">
      <form>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 font-semibold">
          {/* First Name */}
          <div>
            <label
              htmlFor="firstName"
              className="block text-sm text-[#676D88] mb-1"
            >
              First Name
            </label>
            <input
              type="text"
              id="firstName"
              name="firstName"
              disabled
              value={user.first_name || "N/A"}
              className="w-full p-4 border-2 border-[#E8E9ED] rounded-lg"
            />
          </div>

          {/* Middle Name */}
          <div>
            <label
              htmlFor="middleName"
              className="block text-sm text-[#676D88] mb-1"
            >
              Middle Name
            </label>
            <input
              type="text"
              id="middleName"
              name="middleName"
              disabled
              value={user.middle_name || "N/A"}
              className="w-full p-4 border-2 border-[#E8E9ED] rounded-lg"
            />
          </div>

          {/* Last Name */}
          <div>
            <label
              htmlFor="lastName"
              className="block text-sm text-[#676D88] mb-1"
            >
              Last Name
            </label>
            <input
              type="text"
              id="lastName"
              name="lastName"
              disabled
              value={user.last_name || "N/A"}
              className="w-full p-4 border-2 border-[#E8E9ED] rounded-lg"
            />
          </div>

          {/* Email Address */}
          <div>
            <label
              htmlFor="email"
              className="block text-sm text-[#676D88] mb-1"
            >
              Email Address
            </label>
            <input
              type="email"
              id="email"
              name="email"
              disabled
              value={user.email ? user.email.replace(/^(.{2})(.*)(@.*)$/, '$1****$3') : "N/A"}
              className="w-full p-4 border-2 border-[#E8E9ED] rounded-lg"
            />
          </div>

          {/* Phone Number */}
          <div>
            <label
              htmlFor="phoneNumber"
              className="block text-sm text-[#676D88] mb-1"
            >
              Phone Number
            </label>
            <input
              type="tel"
              id="phoneNumber"
              name="phoneNumber"
              disabled
              value={user.phone ? user.phone.replace(/^(.{2})(.*)(@.*)$/, '$1****$3') : "N/A"}
              className="w-full p-4 border-2 border-[#E8E9ED] rounded-lg"
            />
          </div>

          {/* Gender */}
          <div>
            <label
              htmlFor="gender"
              className="block text-sm text-[#676D88] mb-1"
            >
              Gender
            </label>
            <input
              type="text"
              id="gender"
              name="gender"
              disabled
              value={user.gender ? user.gender.charAt(0).toUpperCase() + user.gender.slice(1) : "N/A"}
              className="w-full p-4 border-2 border-[#E8E9ED] rounded-lg"
            />
          </div>
        </div>
      </form>
    </div>
  );
};

export default PersonalDetails;
