import Image from 'next/image';
import StyleSheet from './Homeform.module.scss';

interface FormProps {
    title: string;
    subtitle: string;
    name: string;
    nameinput: string;
    phone: string;
    phoneinput: string;
    comment: string;
    commentinput: string;
    btn: string;
    leftimg: string;
    rightimg: string;
}

export function Form ({title, subtitle, name, nameinput, phone, phoneinput, comment, commentinput, btn, leftimg, rightimg}: FormProps){
    return(
        <div className={StyleSheet.formcontent}>
            <div className={StyleSheet.formcontentleft}>
                <Image
                    src={leftimg}
                    alt="Slide1"
                    priority
                    fill
                    style={{ objectFit: "cover" }} 
                />
                <div className={StyleSheet.formcontentleftcontent}>
                    <h3>{title}</h3>
                    <p>{subtitle}</p>
                </div>
            </div>
            <div className={StyleSheet.formcontentright}>
                <Image
                    src={rightimg}
                    alt="Slide1"
                    priority
                    fill
                    style={{ objectFit: "cover" }} 
                />
                <form action="" method="post">
                    <label htmlFor="">
                        <span>{name}</span>
                        <input type="text" placeholder={nameinput} />
                    </label>
                    <label htmlFor="">
                        <span>{phone}</span>
                        <input type="phone" placeholder={phoneinput} />
                    </label>
                    <label htmlFor="">
                        <span>{comment}</span>
                        <textarea name="comment" id="" placeholder={commentinput}></textarea>
                    </label>
                    <button type="submit">{btn}</button>
                </form>
            </div>
        </div>
    )
}