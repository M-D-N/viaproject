"use client"
import Image from "next/image";

import { Homeabout } from "../ui/Homeabout";
import { Homehero } from "../ui/Homehero";
import { Hometop } from "../ui/Hometop";
import { Form } from "../ui/Homeform";
import { Products } from "../ui/Homeproducts";

export default function App() {
  return (
    <div>
      <div className="container">
        <Hometop 
          title="Trenddagi kolleksiyalar va professional yondashuv" 
          description="Zamonaviy mebel dizayni, yuqori sifat va mutlaqo sizga mos yechimlar – VIA bilan uyingizda o‘zgarish boshlanadi." 
          btn="Batafsil ma’lumot" 
        />
      </div>
      
      <Homehero heroes = {[
        {img: "/1.png", title: "Yangi kolleksiyalar bilan tanishing", description: "VIA mebel do'koni sizga zamonaviy va qulay mebellar taklif etadi.", btn: "Katalogga o'tish"},
        {img: "/2.png", title: "Sifat va dizayn uyg'unligi", description: "Bizning mebellarimiz nafaqat chiroyli, balki uzoq muddat xizmat qiladi.", btn: "Mahsulotlarni ko'rish"},
        {img: "/3.png", title: "Maxsus takliflar va chegirmalar", description: "VIA bilan xarid qilish endi yanada foydaliroq va arzonroq.", btn: "Chegirmalarni ko'rish"}
      ]}/>
      
      <div className="container">
        <Homeabout 
          title = "Bizning kompaniyamiz haqida"
          description = "Zamonaviy, klassik va minimalist mebellar — barchasi bir joyda. Har bir buyum – sifatli material va o‘ziga xos dizayn. Qulay narx, tez yetkazib berish va individual yondashuv kafolatlangan"
          contents = {[
            {
              img: "/about1.png",
              items: [
                {number: 15, numTitle: "Yillik tajriba", numDesc: "Bozorni chuqur tushunamiz, har bir mijozga to‘g‘ri yondashamiz." }
              ]
            },
            {
              img: "/about2.png",
              items: [
                {number: 1000, numTitle: "Yillik tajriba", numDesc: "Bozorni chuqur tushunamiz, har bir mijozga to‘g‘ri yondashamiz." },
                {number: 60, numTitle: "Turli assortiment", numDesc: "Zamonaviy, klassik va minimalist uslubdagi keng tanlov." }
              ]
            },
            {
              img: "/about3.png",
              items: [
                {number: 100, numTitle: "Sifatli natija", numDesc: "Har bir mebel ishonchli materiallardan va puxta ishlab chiqiladi" }
              ]
            }
          ]}
        />
      </div>
      
      <Image className="line" src="/line.svg" alt="Line" priority fill />

      <div className="container">
        <Products
          title="Mahsulotlar"
          categoryitem={[
            { name: "Yotoqxona" },
            { name: "Oshxona" },
            { name: "Bolalar xonasi" },
            { name: "Mehmonxona" },
            { name: "Yumshoq mebel" },
          ]}
          productitem={[
            {
              img: "/1.png",
              name: "Oshxona garniturlari",
              prise: 200,
              category: "Oshxona",
            },
            {
              img: "/2.png",
              name: "Modern stol stul",
              prise: 250,
              category: "Mehmonxona",
            },
            {
              img: "/3.png",
              name: "Zamonaviy ovqatlanish stoli",
              prise: 350,
              category: "Oshxona",
            },
            {
              img: "/3.png",
              name: "Zamonaviy ovqatlanish stoli",
              prise: 350,
              category: "Yotoqxona",
            },
            {
              img: "/2.png",
              name: "Modern stol stul",
              prise: 250,
              category: "Yumshoq mebel",
            },
            {
              img: "/1.png",
              name: "Oshxona garniturlari",
              prise: 200,
              category: "Bolalar xonasi",
            },
          ]}
        />
      </div>

      <Form
        title = "Biz bilan bog‘laning"
        subtitle = "Savolingiz bormi? Biz sizga tez orada javob beramiz"
        name = "Ism"
        nameinput = "Brian Clark"
        phone = "Telfon raqami"
        phoneinput = "(90) 456 - 7890"
        comment = "Xabar matni"
        commentinput = "Xabaringizni shu yerga yozing..."
        btn = "Xabarni yuborish"
        leftimg = "/formleft.png"
        rightimg = "/formright.png"
      />
    </div>
  );
}
