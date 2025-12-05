"use client";

import { useHomepageQuery } from "@/hooks/useHomepageQuery";
import { buildAbsoluteUrl } from "@/lib/utils";
import { useState, useMemo } from "react";
import Image from "next/image";
import StyleSheet from "./Homeproducts.module.scss";


// То, чем реально будем оперировать внутри компонента
interface ProductsInfo {
  img: string;
  name: string;
  prise: number;
  categories: string[];   // список фильтров из fillters
  alt: string;
}

interface ProductsProps {
  title: string;
}

export function Products({ title }: ProductsProps) {
  const { data, loading, error } = useHomepageQuery();

  const [activeCategory, setActiveCategory] = useState<string>("all");

  // ---- Приводим продукты из API к удобной структуре ----
  const products: ProductsInfo[] = useMemo(() => {
    if (!data?.products) return [];

    return data.products.map((p) => ({
      img: p.Img.url,                               // "/uploads/1_e396328560.png"
      name: p.Name,                                 // "Oshxona garniturlari"
      prise: p.Prise,                               // 200
      categories: p.fillters?.map(f => f.Filltername) ?? [], // ["Bolalar xonasi", ...]
      alt: p.Img.alternativeText ?? p.Name,
    }));
  }, [data]);

  // ---- Собираем список всех категорий (фильтров) из продуктов ----
  const categories: string[] = useMemo(() => {
    const set = new Set<string>();

    data?.products?.forEach((p) => {
      p.fillters?.forEach((f) => set.add(f.Filltername));
    });

    return Array.from(set);
  }, [data]);

  // ---- Фильтрация продуктов по активной категории ----
  const filteredProducts = useMemo(() => {
    if (activeCategory === "all") return products;
    return products.filter((item) =>
      item.categories.includes(activeCategory)
    );
  }, [products, activeCategory]);

  // ---- Состояние загрузки ----
  if (loading) {
    return (
      <div className={StyleSheet.homeproducts}>
        <div className={StyleSheet.homeproductstop}>
          <h3>{title}</h3>

          <div className={StyleSheet.homeproductscat}>
            <button
              type="button"
              onClick={() => setActiveCategory("all")}
              className={
                activeCategory === "all" ? StyleSheet.activeCat : ""
              }
            >
              Barchasi
            </button>
            yuklanilmoqda...
          </div>
        </div>

        <div className={StyleSheet.homeproductsbottom}>
          yuklanilmoqda...
        </div>
      </div>
    );
  }

  // ---- Ошибка или нет данных ----
  if (error || !data) {
    return (
      <div className={StyleSheet.homeproducts}>
        <div className={StyleSheet.homeproductstop}>
          <h3>{title}</h3>

          <div className={StyleSheet.homeproductscat}>
            <button
              type="button"
              onClick={() => setActiveCategory("all")}
              className={
                activeCategory === "all" ? StyleSheet.activeCat : ""
              }
            >
              Barchasi
            </button>
            yuklanilmadi...
          </div>
        </div>

        <div className={StyleSheet.homeproductsbottom}>
          yuklanilmadi...
        </div>
      </div>
    );
  }

  // ---- Основной рендер ----
  return (
    <div className={StyleSheet.homeproducts}>
      <div className={StyleSheet.homeproductstop}>
        <h3>{title}</h3>

        <div className={StyleSheet.homeproductscat}>
          {/* "Все" */}
          <button
            type="button"
            onClick={() => setActiveCategory("all")}
            className={
              activeCategory === "all" ? StyleSheet.activeCat : ""
            }
          >
            Barchasi
          </button>

          {/* Кнопки категорий из fillters */}
          {categories.map((cat) => (
            <button
              key={cat}
              type="button"
              onClick={() => setActiveCategory(cat)}
              className={
                activeCategory === cat ? StyleSheet.activeCat : ""
              }
            >
              {cat}
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
                src={buildAbsoluteUrl(item.img)}
                alt={item.alt}
                unoptimized
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
