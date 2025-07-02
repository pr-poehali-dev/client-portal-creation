import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-red-900/20 to-black/40"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          <div className="animate-slide-up">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
              Профессиональный
              <span className="block bg-gradient-to-r from-red-400 to-red-600 bg-clip-text text-transparent">
                Чит-Клиент
              </span>
            </h1>

            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Получите преимущество в игре с нашим передовым чит-клиентом.
              Безопасно, надежно и с постоянными обновлениями.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Button
                size="lg"
                className="cheat-gradient text-white text-lg px-8 py-4 hover:scale-105 transition-transform cheat-glow"
              >
                <Icon name="Download" className="mr-2" />
                Скачать клиент
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-red-500 text-red-400 hover:bg-red-500 hover:text-white text-lg px-8 py-4"
              >
                <Icon name="Play" className="mr-2" />
                Смотреть демо
              </Button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16">
            <Card className="bg-black/30 border-red-500/30 p-6 hover:border-red-500/60 transition-colors">
              <Icon
                name="Shield"
                size={48}
                className="text-red-400 mb-4 mx-auto"
              />
              <h3 className="text-xl font-semibold text-white mb-2">
                Защита от VAC
              </h3>
              <p className="text-gray-400">
                Продвинутая система обхода античитов
              </p>
            </Card>

            <Card className="bg-black/30 border-red-500/30 p-6 hover:border-red-500/60 transition-colors">
              <Icon
                name="Zap"
                size={48}
                className="text-red-400 mb-4 mx-auto"
              />
              <h3 className="text-xl font-semibold text-white mb-2">
                Быстрые обновления
              </h3>
              <p className="text-gray-400">
                Мгновенные патчи после обновлений игры
              </p>
            </Card>

            <Card className="bg-black/30 border-red-500/30 p-6 hover:border-red-500/60 transition-colors">
              <Icon
                name="Users"
                size={48}
                className="text-red-400 mb-4 mx-auto"
              />
              <h3 className="text-xl font-semibold text-white mb-2">
                Поддержка 24/7
              </h3>
              <p className="text-gray-400">
                Круглосуточная техническая поддержка
              </p>
            </Card>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <Icon name="ChevronDown" size={32} className="text-red-400" />
      </div>
    </section>
  );
}
