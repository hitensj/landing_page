export default function Hero(){
return (
<section className="max-w-5xl mx-auto p-6">
<div className="bg-gradient-to-b from-green-50 to-white rounded-2xl p-10 shadow-md">
<h1 className="text-4xl font-bold mb-4">Supercharge Your Business with AI-Powered Automation</h1>
<p className="text-gray-700 mb-6">Our AI SaaS platform helps teams save time, cut costs, and unlock smarter decision-making.</p>
<div className="flex gap-4">
<button className="px-6 py-3 rounded-full bg-green-600 text-white">Start Free Trial</button>
<button className="px-6 py-3 rounded-full border">Book a Demo</button>
</div>


{/* small stats grid */}
<div className="mt-8 grid grid-cols-3 gap-4">
<div className="p-4 bg-white rounded-lg shadow-sm">
<div className="text-xs text-gray-400">Daily AI Tasks Automated</div>
<div className="text-xl font-bold">12,500</div>
</div>
<div className="p-4 bg-white rounded-lg shadow-sm">
<div className="text-xs text-gray-400">Cost Savings Generated</div>
<div className="text-xl font-bold">$480,000</div>
</div>
<div className="p-4 bg-white rounded-lg shadow-sm">
<div className="text-xs text-gray-400">Global Users</div>
<div className="text-xl font-bold">150k+</div>
</div>
</div>


</div>
</section>
)
}