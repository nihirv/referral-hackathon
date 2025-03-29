"use client";
import { useState } from "react";
import Button from "./Button";
import ShareModal from "./ShareModal";

type PostProps = {
  profilePicture: string;
  text: string;
  name: string;
};

const USERS = [
  "Alice Wonder",
  "Bob Builder",
  "Charlie Day",
  "Dana White",
  "Eve Jones",
];

const Post = ({ profilePicture, text, name }: PostProps) => {
  const [tagInput, setTagInput] = useState("");
  const [taggedUsers, setTaggedUsers] = useState<string[]>([]);
  const [isFocused, setIsFocused] = useState(false);
  const [showShareModal, setShowShareModal] = useState(false);

  const filteredUsers = USERS.filter(
    (user) =>
      user.toLowerCase().includes(tagInput.toLowerCase()) &&
      !taggedUsers.includes(user)
  );

  const handleSelectUser = (user: string) => {
    setTaggedUsers((prev) => [...prev, user]);
    setTagInput("");
  };

  return (
    <div className="space-y-2">
      <div className="max-w-md mx-auto bg-slate-200 border border-slate-300 rounded-2xl p-4 flex items-center space-x-4 relative">
        <button className="absolute top-4 right-2 hover:bg-gray-100">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect>
            <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
          </svg>
        </button>
        <div className="flex gap-4">
          <div className="w-24">
            <img
              src={profilePicture}
              alt="Profile Picture"
              className="w-16 h-16 rounded-full object-cover"
            />
          </div>
          <div>
            <h2 className="text-lg font-semibold text-gray-900">{name}</h2>
            <p className="text-xs">29th March 2025</p>
            <p className="text-gray-600 text-sm">{text}</p>
          </div>
        </div>
      </div>

      {/* Tagged Users */}
      {taggedUsers.length > 0 && (
        <div className="bg-white border border-slate-300 p-2 rounded-lg text-sm">
          <p className="font-medium mb-1">Tagged Friends:</p>
          <div className="flex flex-wrap gap-2">
            {taggedUsers.map((user) => (
              <span
                key={user}
                className="bg-blue-100 text-blue-800 px-2 py-1 rounded-full text-xs"
              >
                @{user}
              </span>
            ))}
          </div>
        </div>
      )}

      {/* Tag Input + Dropdown */}
      <div className="relative">
        <input
          type="text"
          value={tagInput}
          onChange={(e) => setTagInput(e.target.value)}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setTimeout(() => setIsFocused(false), 100)} // delay for click
          placeholder="@your friends"
          className="rounded-lg border border-slate-300 w-full p-2"
        />

        {(isFocused || tagInput) && filteredUsers.length > 0 && (
          <ul className="absolute bg-white border border-slate-300 rounded-md w-full mt-1 z-10 max-h-40 overflow-y-auto">
            {filteredUsers.map((user) => (
              <li
                key={user}
                className="px-4 py-2 hover:bg-slate-100 cursor-pointer"
                onClick={() => handleSelectUser(user)}
              >
                @{user}
              </li>
            ))}
          </ul>
        )}
      </div>

      <div className="flex gap-4">
        <Button
          variant="primary"
          fullWidth
          onClick={() => setShowShareModal(true)}
        >
          Send
        </Button>
        <Button fullWidth>Edit Post</Button>
      </div>
      <ShareModal
        isOpen={showShareModal}
        onClose={() => setShowShareModal(false)}
      />
    </div>
  );
};

export default Post;
