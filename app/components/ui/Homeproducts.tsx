import Image from 'next/image';
import StyleSheet from './Homeproducts.module.scss';

interface ProductsInfo{
    img: string;
    name: string;
    prise: number;
}
interface CategoryInfo{
    name: string;
}
interface ProductsProps {
    productitem: ProductsInfo[];
    categoryitem: CategoryInfo[];
    title: string;
}
export function Products ({productitem, categoryitem, title} : ProductsProps) {
    return(
        <div className={StyleSheet.homeproducts}>
            <div className={StyleSheet.homeproductstop}>
                <h3>{title}</h3>
                <div className={StyleSheet.homeproductscat}>
                    {
                        categoryitem.map((el, index) => (
                            <button key={index}>{el.name}</button>
                        ))
                    }
                </div>
            </div>
            <div className={StyleSheet.homeproductsbottom}>
                {
                    productitem.map((item, index) => (
                        <div key={index}>
                            <div className={StyleSheet.homeproductsbottomimg}>
                                <Image
                                    src={item.img}
                                    alt={item.img}
                                    priority
                                    fill
                                    style={{objectFit: 'cover'}} 
                                />
                            </div>
                            <div className={StyleSheet.homeproductsbottominfo}>
                                <div className={StyleSheet.homeproductsbottominfoleft}>
                                    <span>{item.name}</span>
                                    <span>${item.prise} USD</span>
                                </div>
                                <button>&#8594;</button>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}