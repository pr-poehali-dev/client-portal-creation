import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black/20 backdrop-blur-md border-b border-white/10">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-r from-red-600 to-red-700 rounded-lg flex items-center justify-center">
              <Icon name="Zap" size={20} className="text-white" />
            </div>
            <h1 className="text-xl font-bold text-white">CheatClient</h1>
          </div>

          <nav className="hidden md:flex items-center space-x-8">
            <a
              href="#"
              className="text-gray-300 hover:text-red-400 transition-colors"
            >
              Главная
            </a>
            <a
              href="#"
              className="text-gray-300 hover:text-red-400 transition-colors"
            >
              Возможности
            </a>
            <a
              href="#"
              className="text-gray-300 hover:text-red-400 transition-colors"
            >
              Цены
            </a>
            <a
              href="#"
              className="text-gray-300 hover:text-red-400 transition-colors"
            >
              Поддержка
            </a>
          </nav>

          <div className="flex items-center space-x-4">
            <Button variant="ghost" className="text-white hover:text-red-400">
              Войти
            </Button>
            <Button className="cheat-gradient text-white hover:scale-105 transition-transform">
              Регистрация
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}
