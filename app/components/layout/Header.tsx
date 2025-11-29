"use client";
import { useHomepageQuery } from "@/hooks/useHomepageQuery";
import Link from "next/link";
import styles from "./Header.module.scss";
import Image from "next/image";
import { buildAbsoluteUrl } from "@/lib/utils";


interface NavItem {
    title: string;
    link: string;
}
interface HeaderProps{
    items: NavItem[];

}
export function Header ({ items }: HeaderProps) {
    const { data, isLoading, isError } = useHomepageQuery();

    if(isLoading){
        return(
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
                    <span className={styles.headerContact}>Yuklanmoqda...</span>
                </nav>
            </header>
        )
    }
    if(isError || !data){
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
                <span className={styles.headerContact}>Xato: maʼlumot kelmadi</span>
            </nav>
        </header>
    }

    const { phone, logo } = data!;

    const logoUrl = logo.data?.logo.url
    
    return (
        <header className={styles.header}>
            <nav>
                {logoUrl ? (
                    <div style={{ position: "relative", width: 50, height: 50 }}>
                        <Image
                        src={buildAbsoluteUrl(logoUrl)}
                        alt={logo.data?.attributes?.alternativeText || "Logo"}
                        fill
                        style={{ objectFit: "contain" }}
                        />
                    </div>
                ) : (
                    <Image src="/logo.svg" alt="Logo" width={50} height={50} />
                )}

                <ul>
                    {items.map((item, index) => (
                        <li key={index}>
                            <Link href={item.link}>{item.title}</Link>
                        </li>
                    ))}
                </ul>

                <a className={styles.headerContact} href={`tel:${phone}`}>
                    {phone}
                </a>
            </nav>
        </header>
    )
}