import React, { useState } from "react";

const Settings = () => {
  const [activeTab, setActiveTab] = useState("profile");

  // Profile state
  const [profilePic, setProfilePic] = useState(null);
  const [fullname, setFullname] = useState("");
  const [username, setUsername] = useState("");

  // Password state
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleProfileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setProfilePic(URL.createObjectURL(file));
    }
  };

  const handleUpdateProfile = (e) => {
    e.preventDefault();
    console.log("Profile Updated:", { fullname, username, profilePic });
    // Call your API here
  };

  const handleResetProfile = () => {
    setProfilePic(null);
    setFullname("");
    setUsername("");
  };

  const handleUpdatePassword = (e) => {
    e.preventDefault();
    if (newPassword !== confirmPassword) {
      alert("Passwords do not match!");
      return;
    }
    console.log("Password Updated:", { currentPassword, newPassword });
    // Call your API here
  };

  const handleResetPassword = () => {
    setCurrentPassword("");
    setNewPassword("");
    setConfirmPassword("");
  };

  return (
    <div className="max-w-md mx-auto p-6 bg-white rounded shadow">
      <h2 className="text-xl font-semibold mb-4">Account Settings</h2>

      {/* Tabs */}
      <div className="flex mb-6 border-b">
        <button
          className={`px-4 py-2 ${activeTab === "profile" ? "border-b-2 border-blue-600 font-semibold" : ""}`}
          onClick={() => setActiveTab("profile")}
        >
          Profile Info
        </button>
        <button
          className={`px-4 py-2 ${activeTab === "password" ? "border-b-2 border-blue-600 font-semibold" : ""}`}
          onClick={() => setActiveTab("password")}
        >
          Reset Password
        </button>
      </div>

      {/* Tab content */}
      {activeTab === "profile" && (
        <form>
          <div className="mb-4">
            <label className="block text-gray-700 mb-2">Profile Picture</label>
            <div className="border-dashed border-2 border-gray-300 p-4 text-center rounded">
              {profilePic ? (
                <img
                  src={profilePic}
                  alt="Profile"
                  className="w-24 h-24 rounded-full mx-auto mb-2"
                />
              ) : (
                <p>Upload your photo</p>
              )}
              <input
                type="file"
                accept="image/*"
                onChange={handleProfileChange}
                className="mt-2"
              />
            </div>
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 mb-1">Fullname</label>
            <input
              type="text"
              placeholder="Please enter your fullname"
              value={fullname}
              onChange={(e) => setFullname(e.target.value)}
              className="w-full border px-3 py-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 mb-1">Username</label>
            <input
              type="text"
              placeholder="Please enter your username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="w-full border px-3 py-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div className="flex gap-4">
            <button
              onClick={handleUpdateProfile}
              className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
            >
              Update Profile
            </button>
            <button
              onClick={handleResetProfile}
              className="text-gray-700 px-4 py-2 rounded border hover:bg-gray-100"
            >
              Reset
            </button>
          </div>
        </form>
      )}

      {activeTab === "password" && (
        <form>
          <div className="mb-4">
            <label className="block text-gray-700 mb-1">Current Password</label>
            <input
              type="password"
              placeholder="Current password"
              value={currentPassword}
              onChange={(e) => setCurrentPassword(e.target.value)}
              className="w-full border px-3 py-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 mb-1">New Password</label>
            <input
              type="password"
              placeholder="New password"
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
              className="w-full border px-3 py-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 mb-1">Confirm Password</label>
            <input
              type="password"
              placeholder="Confirm new password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              className="w-full border px-3 py-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div className="flex gap-4">
            <button
              onClick={handleUpdatePassword}
              className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
            >
              Update Password
            </button>
            <button
              onClick={handleResetPassword}
              className="text-gray-700 px-4 py-2 rounded border hover:bg-gray-100"
            >
              Reset
            </button>
          </div>
        </form>
      )}
    </div>
  );
};

export default Settings;
