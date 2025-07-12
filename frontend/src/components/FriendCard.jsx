import { Link } from "react-router";
import {  SKILL_TO_ICON } from "../constants";
import { capitalize } from "../lib/utils";

const FriendCard = ({ friend }) => {
  console.log(friend.wantToLearn)
  console.log(friend.canTeach)
  console.log(friend.fullName)
  return (
    <div className="card bg-base-200 hover:shadow-md transition-shadow">
      <div className="card-body p-4">
        {/* USER INFO */}
        <div className="flex items-center gap-3 mb-3">
          <div className="avatar size-12">
            <img src={friend.profilePic} alt={friend.fullName} />
          </div>
          <h3 className="font-semibold truncate">{friend.fullName}</h3>
        </div>

        <div className="flex flex-wrap gap-1.5 mb-3">
          <span className="badge badge-secondary text-xs">
            Can Teach: {getSkillIcon(friend.canTeach)}
             {capitalize(friend.canTeach)}
          </span>
          <span className="badge badge-outline text-xs">
            Want To Learn: {getSkillIcon(friend.wantToLearn)}
             {capitalize(friend.wantToLearn)}
          </span>
        </div>

        <Link to={`/chat/${friend._id}`} className="btn btn-outline w-full">
          Message
        </Link>
      </div>
    </div>
  );
};
export default FriendCard;

// export function getLanguageFlag(language) {
//   if (!language) return null;

//   const langLower = language.toLowerCase();
//   const countryCode = LANGUAGE_TO_FLAG[langLower];

//   if (countryCode) {
//     return (
//       <img
//         src={`https://flagcdn.com/24x18/${countryCode}.png`}
//         alt={`${langLower} flag`}
//         className="h-3 mr-1 inline-block"
//       />
//     );
//   }
//   return null;
// }

export function getSkillIcon(skill) {
  if (!skill) return null;
  const icon = SKILL_TO_ICON[skill.toLowerCase()];
  return icon ? (
    <span className="inline-block mr-1" role="img" aria-label={`${skill} icon`}>
      {icon}
    </span>
  ) : null;
}