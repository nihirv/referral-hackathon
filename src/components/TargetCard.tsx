import Button from "./Button";

type TargetCardProps = {
  title: string;
  description: string;
  profilePicture: string;
  name: string;
  commonConnectionsProfilePictures: string[];
};

const TargetCard = ({
  title,
  description,
  profilePicture,
  name,
  commonConnectionsProfilePictures,
}: TargetCardProps) => {
  return (
    <div className="bg-slate-200 p-4 border border-slate-300 rounded-lg space-y-4">
      <div className="flex gap-4">
        <div className="flex-shrink-0 w-16">
          <img
            src={profilePicture}
            alt="Profile Picture"
            className="w-16 h-16 rounded-full object-cover"
          />
          <div className="text-center mt-1 text-sm">{name}</div>
        </div>
        <div className="flex-grow overflow-hidden">
          <div className="text-lg font-medium truncate">{title}</div>
          <div className="text-gray-600 text-sm line-clamp-2">
            {description}
          </div>
        </div>
        <div className="self-center ml-auto">
          <Button>&gt;</Button>
        </div>
      </div>
      <div>
        <div className="text-gray-500 text-sm font-medium">
          Common Connections
        </div>
        <div className="flex gap-2">
          {commonConnectionsProfilePictures.map((profilePicture) => (
            <div>
              <img
                src={profilePicture}
                alt="Profile Picture"
                className="w-8 h-8 rounded-full object-cover"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TargetCard;
