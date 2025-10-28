

export default function Footer() {
    return (
        <footer className="bg-gray-800 text-white p-4 text-center">
            <p className="text-sm">
                © {new Date().getFullYear()} Your Company. All rights reserved.
            </p>
            <p className="text-xs mt-2">
                Built with <a href="https://react.dev" className="text-blue-400">React</a> and <a href="https://vite.dev" className="text-blue-400">Vite</a>.
            </p>
        </footer>
    );
}