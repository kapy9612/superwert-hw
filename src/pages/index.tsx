import PeopleLayout from '@/components/PeopleLayout/PeopleLayout';
import styles from '@/styles/Home.module.css';

export default function Home() {
    return (
        <main className={`${styles.main}`}>
            <PeopleLayout />
        </main>
    );
}
