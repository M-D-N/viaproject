"use client";
import { useHomepageQuery } from "@/hooks/useHomepageQuery";
import Link from "next/link";
import styles from "./Header.module.scss";
import Image from "next/image";
import { buildAbsoluteUrl } from "@/lib/utils";
import { getHomepage } from "@/lib/strapiClient";

const homepage = await getHomepage();

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

    return (
        <header className={styles.header}>
            <nav>
                <div style={{ position: "relative", width: 50, height: 50 }}>
                    <Image
                        src={buildAbsoluteUrl(homepage.logo.url) || "/logo.svg"}
                        alt={homepage.logo.name || "Logo"}
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

                <a className={styles.headerContact} href={`tel:${homepage.contact_info.phone}`}>
                    {homepage.contact_info.phone}
                </a>
            </nav>
        </header>
    )
}