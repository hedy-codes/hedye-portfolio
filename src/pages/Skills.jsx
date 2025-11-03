import { useState, useEffect } from "react";
import Title from "../components/Title";
import SkillsData from "./../data/skills.json";

export default function Skills() {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setAnimate(true);
    }, 200);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="w-[800px] flex flex-col mx-auto">
      <Title text={"مهارت های من"} />
      <p className="text-center text-gray-500 leading-7">
        در طول مسیر یادگیری و کارم، مهارت‌هایی رو کسب کردم که بهم امکان می‌ده
        پروژه‌های مختلف رو با کیفیت بالا پیاده‌سازی کنم. همیشه به دنبال یادگیری
        فناوری‌های جدید هستم و سعی می‌کنم در کنار دانش فنی، به جزئیات و تجربه‌ی
        کاربری هم توجه ویژه‌ای داشته باشم. در ادامه می‌تونید خلاصه‌ای از
        مهارت‌های من و میزان تسلطم در هر کدوم رو ببینید.
      </p>
      <div className="w-full h-[380px] flex items-end justify-between bg-[#8d8d8d60] opacity-0.2 mt-10 rounded-lg p-5">
        {SkillsData?.map((skill, index) => {
          return (
            <div key={index} className="w-1/2 flex flex-col items-center">
              <div
                style={{
                  background: skill?.color,
                  height: animate ? skill?.level * 3 : "0",
                }}
                title={`${skill?.name} : ${skill?.level}`}
                className="w-12 rounded-t-md duration-1000"
              ></div>
              <span className="rotate-[10deg] mt-5 font-mono text-black text-md">
                {skill?.name}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
}
