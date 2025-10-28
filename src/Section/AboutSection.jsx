

export default function AboutSection() {
    return (
        <section className="relative min-h-screen flex flex-col items-center bg-[#13101c] text-gray-100 overflow-hidden">
            <div className="relative z-10 flex flex-col items-center mt-32">
                <h2 className="text-4xl font-bold mb-4">About Us</h2>
                <p className="text-lg text-center max-w-2xl">
                    We are a team of passionate developers and designers dedicated to creating beautiful and functional web applications.
                </p>
                <div className="flex gap-4 mt-8">
                    <button className="bg-gray-200 text-gray-900 px-8 py-4 rounded-full font-semibold text-lg shadow hover:bg-gray-300 transition">Learn More</button>
                    <button className="bg-[#23202e] text-gray-100 px-8 py-4 rounded-full font-semibold text-lg shadow hover:bg-[#2c2940] transition">Contact Us</button>
                </div>
            </div>
        </section>
    );
}