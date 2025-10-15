import Button from "./../components/Button";
import TypeEffect from "./../components/TypeEffect";

export default function Home() {
  return (
    <div className="flex items-center justify-center mt-20">
      <div className="w-[400px]">
        <img src="/img/img.png" alt="logo" className="rounded-[70px]" />
      </div>
      <div className=" w-[400px] flex items-center justify-center flex-col gap-5">
        <h1 className="text-[60px] font-bold text-blue-800">هدیه عزیزی</h1>
        <div className="text-center leading-10 text-xl h-[100px]">
          <TypeEffect />
        </div>
        <Button lable={"درباره من"} className="w-[150px] animate-pulse" />
      </div>
    </div>
  );
}
