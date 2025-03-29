type PostProps = {
  profilePicture: string;
  text: string;
  name: string;
};

const Post = ({ profilePicture, text, name }: PostProps) => {
  return (
    <div className="max-w-md mx-auto bg-slate-200 border border-slate-300 rounded-2xl p-4 flex items-center space-x-4 relative">
      {/* Lock button in top-right corner */}
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
  );
};

export default Post;
