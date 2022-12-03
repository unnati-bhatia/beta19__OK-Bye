import Link from 'next/link';
import styles from '../../Card.module.css'
import Card from "../components/Card";

const UserCard = ({user}) => {
return (
<div className={styles.card}>

<Card
        image="/images/bootcamp1.jpg"
        title="Fundamentals"
        description="Hmtl 5 and CSS3, Sass/Scss, Bootstrap and Tailwind, Adobe XD, Git, Github, Devtools"
        link="https://developer.mozilla.org/en-US/docs/Learn"
      />

<img src={user.avatar} alt="Avatar" style={{width: '100%'}} />
<div className={styles.container}>
<h4><b>{user.first_name} {user.last_name}</b></h4>
<p>{user.email}</p>
</div>
</div>


);
}
export default UserCard;