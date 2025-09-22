export default function Header(){
return (
<header className="w-full py-6 px-6 flex items-center justify-between">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded bg-green-200 flex items-center justify-center font-bold text-green-800">A</div>
<span className="font-semibold text-lg">Optivize AI</span>
</div>
<nav className="flex items-center gap-4">
<a className="text-sm">Product</a>
<a className="text-sm">Pricing</a>
<a className="text-sm">Solutions</a>
<button className="px-4 py-2 rounded-full bg-green-600 text-white text-sm">Get Start</button>
</nav>
</header>
)
}