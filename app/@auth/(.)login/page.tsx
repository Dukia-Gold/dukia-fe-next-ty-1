import LoginPage from '@/app/login/page'
import AuthBox from '@/components/authComponents/AuthBox'
 
export default function Page() {
  return (
    <div className="fixed z-20 top-0 left-0 w-full h-full bg-[#00000040] flex justify-center items-center transition-opacity duration-300">
      <AuthBox />
    </div>
  )
}