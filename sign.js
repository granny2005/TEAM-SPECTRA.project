import { React} from 'React'
import { Input } from "@/components/ui/input"  
import { Button } from "@/components/ui/button"

export default function Component() {
  return (
    <div className="bg-white rounded-lg p-8 max-w-md mx-auto mt-12 shadow-lg">
      <div className="text-right text-gray-400 cursor-pointer">✕</div>
      <h2 className="text-2xl font-semibold mb-2">Welcome back!</h2>
      <p className="mb-6 text-gray-600">Sign In to access your dashboard, settings and projects.</p>
      <form>
        <div className="mb-4">
          <Input defaultValue="hello@123d.one" id="email" placeholder="Email address" type="email" />
        </div>
        <div className="mb-4">
          <Input defaultValue="••••••••" id="password" placeholder="Password" type="password" />
        </div>
        <div className="flex items-center justify-between mb-6">
          <label className="flex items-center">
            <input className="form-checkbox" type="checkbox" />
            <span className="ml-2">Keep me signed in</span>
          </label>
          <Button className="text-blue-600 hover:underline" variant="ghost">
            Forgot password?
          </Button>
        </div>
        <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Sign In</Button>
        <p className="mt-6 text-center">
          Don’t have an account?
          <Button className="text-blue-600 hover:underline" variant="ghost">
            Sign Up
          </Button>
        </p>
      </form>
    </div>
  )
}