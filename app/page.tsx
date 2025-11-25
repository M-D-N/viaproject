// import Image from "next/image";

import { Homehero } from "./components/ui/Homehero";
import { Hometop } from "./components/ui/Hometop";

export default function Home() {
  return (
    <main>
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
    </main>
  );
}
