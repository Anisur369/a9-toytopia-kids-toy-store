import { useState, use, useEffect } from "react";
import { AuthContext } from "../context/AuthContext";
import { updateProfile } from "firebase/auth";

export default function Profile() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [photoURL, setPhotoURL] = useState(
    "https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
  );
  const { user } = use(AuthContext);

  if (!user) {
    return <div>Loading...</div>;
  }

  useEffect(() => {
    setName(user.displayName || "");
    setEmail(user.email || "");
    setPhotoURL(user.photoURL || "");
  }, [user]);

  const handleUpdate = () => {
    // ✅ Update logic here (Firebase, API, etc.)
    updateProfile(user, { displayName: name, photoURL: photoURL });
    alert("Profile updated successfully!");
  };

  return (
    <div className="max-w-xl mx-auto mt-10 p-6 bg-base-200 rounded-lg shadow-lg mb-30">
      <h2 className="text-2xl font-bold text-center mb-6">Profile Page</h2>

      <div className="flex flex-col items-center mb-6">
        <img
          src={photoURL}
          alt="Profile"
          className="w-24 h-24 rounded-full object-cover shadow-md"
        />
        <input
          type="url"
          value={photoURL}
          onChange={(e) => setPhotoURL(e.target.value)}
          className="input input-bordered w-full mt-4"
          placeholder="Profile Photo URL"
        />
      </div>

      <div className="space-y-4">
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="input input-bordered w-full"
          placeholder="Full Name"
        />
        {/* <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="input input-bordered w-full"
          placeholder="Email Address"
        /> */}
        <p className="text-gray-500">
          <b>Email:</b> {email}
        </p>
        <button onClick={handleUpdate} className="btn btn-primary w-full mt-4">
          Update Profile
        </button>
      </div>
    </div>
  );
}
