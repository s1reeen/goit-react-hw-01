import clsx from "clsx";
import css from "./FriendListItem.module.css";

export default function FriendListItem({ friend: { name, avatar, isOnline } }) {
  return (
    <div className={css.item}>
      <img className={css.img} src={avatar} alt="Avatar" width="48" />
      <p className={css.name}>{name}</p>
      <p className={clsx(css.text, isOnline ? css.isOnline : css.isOffline)}>
        {isOnline ? "Online" : "Offline"}
      </p>
    </div>
  );
}
