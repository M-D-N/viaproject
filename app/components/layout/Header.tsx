import Link from "next/link";
import styles from "./Header.module.scss";
import Image from "next/image";

interface NavItem {
    title: string;
    link: string;
}
interface HeaderProps{
    items: NavItem[];
    phone: string;

}
export function Header ({ items, phone }: HeaderProps) {
    return (
        <header className={styles.header}>
            <nav>
                <Image src="/logo.svg" alt="Logo" width={50} height={50} />
                <ul>
                    {items.map((item, index) => (
                        <li key={index}>
                            <Link href={item.link}>
                                {item.title}
                            </Link>
                        </li>
                    ))}
                </ul>
                <a className={styles.headerContact} href={`tel:${phone}`}>{phone}</a>
            </nav>
        </header>
    )
}