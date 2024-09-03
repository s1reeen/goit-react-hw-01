import css from "./Profile.module.css";

const Profile = ({ name, tag, location, stats, image }) => {
  return (
    <div className={css.container}>
      <div className={css.imgcontainer}>
        <img className={css.image} src={image} alt="User avatar" />
        <p className={css.name}>{name}</p>
        <p className={css.tag}>@p{tag}</p>
        <p className={css.location}>{location}</p>
      </div>

      <ul className={css.statsWrapper}>
        <li className={css.item}>
          <span className={css.statsName}>Followers</span>
          <span className={css.statsDescr}>{stats.followers}</span>
        </li>
        <li className={css.item}>
          <span className={css.statsName}>Views</span>
          <span className={css.statsDescr}>{stats.views}</span>
        </li>
        <li className={css.item}>
          <span className={css.statsName}>Likes</span>
          <span className={css.statsDescr}>{stats.likes}</span>
        </li>
      </ul>
    </div>
  );
};

export default Profile;
