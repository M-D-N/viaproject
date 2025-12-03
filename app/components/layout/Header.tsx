'use client'

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
    
    const { data, loading, error } = useHomepageQuery();

    if(loading){
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
    
    if(error || !data){
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

    return (
        <header className={styles.header}>
            <nav>
                <div style={{ position: "relative", width: 50, height: 50 }}>
                    <Image
                        src={buildAbsoluteUrl(data?.homepage.logo.url || "/logo.svg") }
                        alt={data?.homepage.logo.name || "Logo"}
                        fill
                        style={{ objectFit: "contain" }}
                    />
                </div>

                <ul>
                    {items.map((item, index) => (
                        <li key={index}>
                            <Link href={item.link}>{item.title}</Link>
                        </li>
                    ))}
                </ul>

                <a className={styles.headerContact} href={`tel:${data?.homepage.contact_info.contactcontent[0].text}`}>
                    {data?.homepage.contact_info.contactcontent[1].text}</a>
            </nav>
        </header>
    )
}