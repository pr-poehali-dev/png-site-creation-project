import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import Icon from "@/components/ui/icon";
import { useState } from "react";

const Index = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const partners = [
    { name: "TechCorp", industry: "Технологии" },
    { name: "GlobalBank", industry: "Финансы" },
    { name: "InnovateLab", industry: "Инновации" },
    { name: "CloudSystems", industry: "IT-решения" },
    { name: "DataPro", industry: "Аналитика" },
    { name: "SmartBiz", industry: "Консалтинг" }
  ];

  const features = [
    {
      icon: "Target",
      title: "Стратегический подход",
      description: "Разрабатываем решения, ориентированные на достижение бизнес-целей"
    },
    {
      icon: "Users",
      title: "Экспертная команда",
      description: "Профессионалы с многолетним опытом работы на рынке"
    },
    {
      icon: "Award",
      title: "Доказанное качество",
      description: "Реализовано более 500 успешных проектов по всему миру"
    },
    {
      icon: "TrendingUp",
      title: "Рост и развитие",
      description: "Помогаем бизнесу масштабироваться и достигать новых высот"
    }
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  return (
    <div className="min-h-screen bg-background">
      <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md z-50 border-b">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="text-2xl font-bold text-primary">BizCorp</div>
          <div className="hidden md:flex items-center gap-8">
            <a href="#about" className="text-foreground hover:text-primary transition-colors">О компании</a>
            <a href="#partners" className="text-foreground hover:text-primary transition-colors">Партнёры</a>
            <a href="#contact" className="text-foreground hover:text-primary transition-colors">Контакты</a>
            <Button>Связаться</Button>
          </div>
          <button className="md:hidden">
            <Icon name="Menu" size={24} />
          </button>
        </div>
      </nav>

      <section className="relative pt-32 pb-20 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5"></div>
        <div className="container mx-auto relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 animate-fade-in">
              <h1 className="text-5xl md:text-7xl font-bold leading-tight">
                Создаём будущее
                <span className="block text-primary">вашего бизнеса</span>
              </h1>
              <p className="text-xl text-muted-foreground">
                Комплексные решения для цифровой трансформации компаний любого масштаба
              </p>
              <div className="flex gap-4">
                <Button size="lg" className="text-lg px-8">
                  Начать проект
                  <Icon name="ArrowRight" size={20} className="ml-2" />
                </Button>
                <Button size="lg" variant="outline" className="text-lg px-8">
                  Узнать больше
                </Button>
              </div>
            </div>
            <div className="relative h-[500px] animate-scale-in">
              <img 
                src="https://cdn.poehali.dev/projects/e2c5dca6-09de-4da8-b327-9c7a56295ee3/files/c2b658f0-fc61-44ca-99c8-c2fe783bba75.jpg"
                alt="Modern office"
                className="w-full h-full object-cover rounded-2xl shadow-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-2xl"></div>
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Почему выбирают нас</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Мы объединяем инновационные технологии и глубокую экспертизу для достижения выдающихся результатов
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <Card 
                key={index} 
                className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 animate-fade-in border-2"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-6 space-y-4">
                  <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                    <Icon name={feature.icon as any} size={28} className="text-primary group-hover:text-white transition-colors" />
                  </div>
                  <h3 className="text-xl font-bold">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="partners" className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Наши партнёры</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Мы гордимся сотрудничеством с ведущими компаниями в различных отраслях
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6 mb-12">
            {partners.map((partner, index) => (
              <Card 
                key={index} 
                className="group hover:shadow-lg transition-all duration-300 hover:scale-105 cursor-pointer animate-scale-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-8 text-center space-y-3">
                  <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4 group-hover:bg-primary transition-colors">
                    <Icon name="Building2" size={32} className="text-primary group-hover:text-white transition-colors" />
                  </div>
                  <h3 className="text-xl font-bold">{partner.name}</h3>
                  <p className="text-sm text-muted-foreground">{partner.industry}</p>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="relative rounded-2xl overflow-hidden h-[400px] animate-fade-in">
            <img 
              src="https://cdn.poehali.dev/projects/e2c5dca6-09de-4da8-b327-9c7a56295ee3/files/c3f1fe11-0c93-4270-90b7-25e8870b5eb1.jpg"
              alt="Partners"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-primary/80 to-accent/80 flex items-center justify-center">
              <div className="text-center text-white space-y-4 px-4">
                <h3 className="text-4xl font-bold">Станьте нашим партнёром</h3>
                <p className="text-xl opacity-90">Присоединяйтесь к экосистеме успешных компаний</p>
                <Button size="lg" variant="secondary" className="mt-4">
                  Узнать условия
                  <Icon name="ChevronRight" size={20} className="ml-2" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Свяжитесь с нами</h2>
            <p className="text-xl text-muted-foreground">
              Готовы обсудить ваш проект? Оставьте заявку, и мы свяжемся с вами в ближайшее время
            </p>
          </div>
          <Card className="animate-scale-in">
            <CardContent className="p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Имя</label>
                    <Input 
                      placeholder="Ваше имя" 
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                      className="h-12"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Email</label>
                    <Input 
                      type="email" 
                      placeholder="email@example.com" 
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                      className="h-12"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium">Сообщение</label>
                  <Textarea 
                    placeholder="Расскажите о вашем проекте..." 
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                    className="min-h-[150px]"
                  />
                </div>
                <Button type="submit" size="lg" className="w-full text-lg">
                  Отправить заявку
                  <Icon name="Send" size={20} className="ml-2" />
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>

      <footer className="bg-primary text-white py-12 px-4">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <h3 className="text-2xl font-bold mb-4">BizCorp</h3>
              <p className="opacity-90">Инновационные решения для вашего бизнеса</p>
            </div>
            <div>
              <h4 className="font-bold mb-4">Компания</h4>
              <ul className="space-y-2 opacity-90">
                <li><a href="#" className="hover:underline">О нас</a></li>
                <li><a href="#" className="hover:underline">Команда</a></li>
                <li><a href="#" className="hover:underline">Карьера</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Услуги</h4>
              <ul className="space-y-2 opacity-90">
                <li><a href="#" className="hover:underline">Консалтинг</a></li>
                <li><a href="#" className="hover:underline">Разработка</a></li>
                <li><a href="#" className="hover:underline">Поддержка</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Контакты</h4>
              <div className="space-y-2 opacity-90">
                <p className="flex items-center gap-2">
                  <Icon name="Mail" size={18} />
                  info@bizcorp.ru
                </p>
                <p className="flex items-center gap-2">
                  <Icon name="Phone" size={18} />
                  +7 (495) 123-45-67
                </p>
              </div>
            </div>
          </div>
          <div className="border-t border-white/20 pt-8 text-center opacity-90">
            <p>&copy; 2024 BizCorp. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
