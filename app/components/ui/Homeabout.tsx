import Image from 'next/image';
import StyleSheet from './Homeabout.module.scss';

interface BottomItem{
    number: number;
    numTitle: string;
    numDesc: string;
}

interface BottomContent{
    items: BottomItem[];
    img: string;
}

interface TopItem{
    contents: BottomContent[];
    title: string;
    description: string;
}

export function Homeabout({contents, title, description}: TopItem){
    const titleSplit = title.split(' ');
    return(
        <section className={StyleSheet.homeabout}>
            <h3>
                {
                    titleSplit.map((el, index) => (
                        <span key={index}>
                            {index === titleSplit.length-2 ? (
                                <span className={StyleSheet.green}> {el} </span>
                            ) : (
                                <span>{el}</span>
                            )}
                        </span>
                    ))
                }
            </h3>
            <p>{description}</p>
            <div className={StyleSheet.homeaboutitem}>
                {
                    contents.map((content, index) => (
                        <div key={index} className={StyleSheet.homeaboutitemlist}>
                            <div className={StyleSheet.homeaboutitemlistnumbersbox}>
                                {
                                    content.items.map((item, index) => (
                                            <div key={index} className={StyleSheet.homeaboutitemlistnumbers}>
                                                <span>{item.number}+</span>
                                                <span>{item.numTitle}</span>
                                                <span>{item.numDesc}</span>
                                            </div>
                                    ) )
                                }
                            </div>
                            <div className={StyleSheet.homeaboutitemlistimg}>
                                <Image
                                    src={content.img}
                                    alt="Slide1"
                                    priority
                                    fill
                                    style={{ objectFit: "cover" }}
                                />
                            </div>
                        </div>
                    ))
                }
            </div>
        </section>
    )
}