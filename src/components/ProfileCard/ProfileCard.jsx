import ProfileSection from "./ProfileSection";


  const ProfileCard = () => {
  return (
    <>
      {/* Section 1 - Image Left */}
      <ProfileSection
        img="/t2.jpg"
        reverse={false}
        name="Kiran M"
        title="President"
        desc1="Kiran is a visionary leader with two decades of industry experience..."
        desc2="He believes in innovation, people-first culture, and scalable solutions."
      />

      {/* Section 2 - Image Right */}
      <ProfileSection
        img="/t3.jpg"
        reverse={true}
        name="Kranthi Kiran"
        title="Founder & CEO"
        desc1="Riya leads the engineering teams with passion and precision."
        desc2="Her expertise in cloud, DevOps, and microservices drives performance."
      />
    </>
  );
};

export default ProfileCard;
