export default function Footer() {
  return (
    <div className="flex justify-center items-end mt-60">
      <div className="relative min-w-[200px] w-[30%] h-[10rem]">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-pink-500 opacity-85 blur-4xl rounded-t-full -z-50" />
        <div className="flex justify-center items-center z-10 h-full text-lg text-white ">
          © 2024 Beanie
        </div>
      </div>
    </div>
  )
}
