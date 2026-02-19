import React, { use, useContext } from "react";
import { AuthContext } from "../Auth/AuthContext";
export default function Profile() {
  const { user } = useContext(AuthContext);

  if (!user) return <div>Please login</div>;

  return (
    <div className="p-4 flex flex-col items-center gap-3">
      <img
        src={user.photoURL || "https://via.placeholder.com/120"}
        alt="Profile"
        className="w-30 h-35 border-0  border"
      />

      <div>
        <strong>Name:</strong> {user.displayName || "No name set"}
      </div>
      <div>
        <strong>Email:</strong> {user.email}
      </div>
    </div>
  );
}
