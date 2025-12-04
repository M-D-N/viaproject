"use client";
import { useHomepageQuery } from "@/hooks/useHomepageQuery";
import styles from './Footer.module.scss';
import Link from 'next/link';
import Image from 'next/image';
import { buildAbsoluteUrl } from "@/lib/utils";


interface Sahifalar{
    title: string;
    link: string;
}
interface Aloqauchun{
    title: string;
    link: string;
    img: string;
}
interface IshVaqti{
    days: string;
    hourfrom: string;
    hourto: string;
}
interface SocialMedia{
    platform: string;
    link: string;
    icon: string;
}
interface FooterProps{
    itemssahifa: Sahifalar[];
    itemsaloqa: Aloqauchun[];
    itemsishvaqti: IshVaqti[];
    itemssocial: SocialMedia[];
    description: string;
    copyright: string;
}
export function Footer({itemssahifa, itemssocial, description, copyright}: FooterProps){
    const { data, loading, error } = useHomepageQuery();

    const contactInfo = data?.homepage.contact_info.contactcontent;
    const worksInfo = data?.homepage.works;

    if(loading){
        return(
            <footer className={styles.footer}>
                <div className={styles.footerContainer}>
                    <div className={styles.footerLeft}>
                        <Image src="/logo.svg" alt="Logo" width={50} height={50} />
                        <p>{description}</p>
                    </div>
                    <div className={styles.footerRight}>
                        <div className={styles.footerRightItems}>
                            <h3>Sahifalar</h3>
                            <ul>
                                {
                                    itemssahifa.map((item, index) => (
                                        <li key={index}>
                                            <Link href={item.link}>{item.title}</Link>
                                        </li>
                                    ))
                                }
                            </ul>
                        </div>
                        <div className={styles.footerRightItems}>
                            <h3>Aloqa uchun</h3>
                            <ul>
                                <li>yuklanmoqda...</li>
                            </ul>
                        </div>
                        <div className={styles.footerRightItems}>
                            <h3>Ish vaqti</h3>
                            <ul>
                                <li>yuklanmoqda...</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className={styles.footerBottom}>
                    <span>{copyright}</span>
                    <div className={styles.socialMedia}>
                        {
                            itemssocial.map((item, index) => (
                                <a target='__blank' key={index} href={item.link}>
                                    <Image src={item.icon} alt={item.platform} width={20} height={20} />
                                </a>
                            ))
                        }
                    </div>
                </div>
            </footer>
        )
    }
    if(error || !data){
        return(
            <footer className={styles.footer}>
                <div className={styles.footerContainer}>
                    <div className={styles.footerLeft}>
                        <Image src="/logo.svg" alt="Logo" width={50} height={50} />
                        <p>{description}</p>
                    </div>
                    <div className={styles.footerRight}>
                        <div className={styles.footerRightItems}>
                            <h3>Sahifalar</h3>
                            <ul>
                                {
                                    itemssahifa.map((item, index) => (
                                        <li key={index}>
                                            <Link href={item.link}>{item.title}</Link>
                                        </li>
                                    ))
                                }
                            </ul>
                        </div>
                        <div className={styles.footerRightItems}>
                            <h3>Aloqa uchun</h3>
                            <ul>
                                <li>yuklanilmadi...</li>
                            </ul>
                        </div>
                        <div className={styles.footerRightItems}>
                            <h3>Ish vaqti</h3>
                            <ul>
                                <li>yuklanilmadi...</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className={styles.footerBottom}>
                    <span>{copyright}</span>
                    <div className={styles.socialMedia}>
                        {
                            itemssocial.map((item, index) => (
                                <a target='__blank' key={index} href={item.link}>
                                    <Image src={item.icon} alt={item.platform} width={20} height={20} />
                                </a>
                            ))
                        }
                    </div>
                </div>
            </footer>
        )
    }

    return(
        <footer className={styles.footer}>
            <div className={styles.footerContainer}>
                <div className={styles.footerLeft}>
                    <Image src={buildAbsoluteUrl(data?.homepage.logo.url)} alt="Logo" width={50} height={50} />
                    <p>{data?.homepage.footerdescription}</p>
                </div>
                <div className={styles.footerRight}>
                    <div className={styles.footerRightItems}>
                        <h3>Sahifalar</h3>
                        <ul>
                            {
                                itemssahifa.map((item, index) => (
                                    <li key={index}>
                                        <Link href={item.link}>{item.title}</Link>
                                    </li>
                                ))
                            }
                        </ul>
                    </div>
                    <div className={styles.footerRightItems}>
                        <h3>Aloqa uchun</h3>
                        <ul>
                            {
                                contactInfo?.map((item, index) => (
                                    <li key={index}>
                                        <Image src={buildAbsoluteUrl(item.iconimg.url)} alt={item.text} width={20} height={20} />
                                        <Link href={item.text}>{item.text}</Link>
                                    </li>
                                ))
                            }
                        </ul>
                    </div>
                    <div className={styles.footerRightItems}>
                        <h3>Ish vaqti</h3>
                        <ul>
                            {
                                worksInfo?.map((item, index) => (
                                    <li key={index}>
                                        <span>{item.work_days}</span>
                                        <span>
                                            <span>{item.work_time_from}</span>
                                            <span>{item.work_time_to}</span>
                                        </span>
                                    </li>
                                ))
                            }
                        </ul>
                    </div>
                </div>
            </div>
            <div className={styles.footerBottom}>
                <span>{copyright}</span>
                <div className={styles.socialMedia}>
                    {
                        itemssocial.map((item, index) => (
                            <a target='__blank' key={index} href={item.link}>
                                <Image src={item.icon} alt={item.platform} width={20} height={20} />
                            </a>
                        ))
                    }
                </div>
            </div>
        </footer>
    )
    
}