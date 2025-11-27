"use client";

import { useState, useMemo } from "react";
import Image from "next/image";
import StyleSheet from "./Homeproducts.module.scss";

interface ProductsInfo {
  img: string;
  name: string;
  prise: number;
  category: string;
}

interface CategoryInfo {
  name: string;
}

interface ProductsProps {
  productitem: ProductsInfo[];
  categoryitem: CategoryInfo[];
  title: string;
}

export function Products({ productitem, categoryitem, title }: ProductsProps) {
  const [activeCategory, setActiveCategory] = useState<string>("all");

  const filteredProducts = useMemo(() => {
    if (activeCategory === "all") return productitem;
    return productitem.filter(
      (item) => item.category === activeCategory
    );
  }, [productitem, activeCategory]);

  return (
    <div className={StyleSheet.homeproducts}>
      <div className={StyleSheet.homeproductstop}>
        <h3>{title}</h3>

        <div className={StyleSheet.homeproductscat}>
          {/* Кнопка "Все" */}
          <button
            type="button"
            onClick={() => setActiveCategory("all")}
            className={
              activeCategory === "all"
                ? StyleSheet.activeCat
                : ""
            }
          >
            Barchasi
          </button>

          {/* Кнопки категорий */}
          {categoryitem.map((el, index) => (
            <button
              key={index}
              type="button"
              onClick={() => setActiveCategory(el.name)}
              className={
                activeCategory === el.name
                  ? StyleSheet.activeCat
                  : ""
              }
            >
              {el.name}
            </button>
          ))}
        </div>
      </div>

      <div className={StyleSheet.homeproductsbottom}>
        {filteredProducts.map((item, index) => (
          <div
            key={index}
            className={StyleSheet.homeproductsbottomitem}
          >
            <div className={StyleSheet.homeproductsbottomimg}>
              <Image
                src={item.img}
                alt={item.name}
                fill
                style={{ objectFit: "cover" }}
              />
            </div>

            <div className={StyleSheet.homeproductsbottominfo}>
              <div
                className={StyleSheet.homeproductsbottominfoleft}
              >
                <span>
                  {item.name.length > 20
                    ? item.name.slice(0, 20) + "…"
                    : item.name}
                </span>
                <span>${item.prise} USD</span>
              </div>
              <button>&#8594;</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
