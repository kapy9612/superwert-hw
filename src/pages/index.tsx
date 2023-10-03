import styles from '@/styles/Home.module.css';
import PeopleLayout from '@/components/PeopleLayout/PeopleLayout';

export default function Home() {
    return (
        <main className={`${styles.main}`}>
            <PeopleLayout />
        </main>
    );
}
