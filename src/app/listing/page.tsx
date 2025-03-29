import Post from "@/components/Post";
import TargetCard from "@/components/TargetCard";
import Wrapper from "@/components/Wrapper";
import targets from "../../../data/targets.json";

const Page = () => {
  return (
    <Wrapper>
      <Post
        profilePicture="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
        text="I am looking for an angel investor for my B2C product"
        name="John Doe"
      />

      <div>You may be looking for these people</div>

      <div className="space-y-2">
        {targets.map((target) => (
          <TargetCard
            name={target.name}
            title={target.jobTitle}
            description={target.description}
            profilePicture={target.profilePicture}
            commonConnectionsProfilePictures={[
              "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
              "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
              "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
              "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
            ]}
          />
        ))}
      </div>
    </Wrapper>
  );
};

export default Page;
