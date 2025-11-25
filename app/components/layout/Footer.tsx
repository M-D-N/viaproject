import styles from './Footer.module.scss';
import Link from 'next/link';
import Image from 'next/image';
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
export function Footer({itemssahifa, itemsaloqa, itemsishvaqti, itemssocial, description, copyright}: FooterProps){
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
                            {
                                itemsaloqa.map((item, index) => (
                                    <li key={index}>
                                        <Image src={item.img} alt={item.title} width={20} height={20} />
                                        <Link href={item.link}>{item.title}</Link>
                                    </li>
                                ))
                            }
                        </ul>
                    </div>
                    <div className={styles.footerRightItems}>
                        <h3>Ish vaqti</h3>
                        <ul>
                            {
                                itemsishvaqti.map((item, index) => (
                                    <li key={index}>
                                        <span>{item.days}</span>
                                        <span>
                                            <span>{item.hourfrom}</span>
                                            <span>{item.hourto}</span>
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