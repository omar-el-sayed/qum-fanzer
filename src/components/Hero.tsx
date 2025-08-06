import { Button } from "@/components/ui/button";
import { Play, Star, Users, BookOpen } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative bg-gradient-hero text-white py-20 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 right-10 w-20 h-20 border-2 border-white rounded-full"></div>
        <div className="absolute bottom-20 left-20 w-16 h-16 border-2 border-white rounded-lg rotate-45"></div>
        <div className="absolute top-1/2 left-1/3 w-12 h-12 border border-white rounded-full"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="text-center lg:text-right">
            <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm rounded-full px-4 py-2 mb-6">
              <Star className="h-4 w-4 text-yellow-300" />
              <span className="text-sm font-medium">منصة تعليمية معتمدة</span>
            </div>

            <h1 className="text-4xl lg:text-6xl font-bold mb-6 leading-tight">
              تعلم المهارات
              <br />
              <span className="text-yellow-300">المستقبلية</span>
              <br />
              معنا
            </h1>

            <p className="text-xl text-white/90 mb-8 max-w-lg mx-auto lg:mx-0">
              اكتشف آلاف الدورات التعليمية عالية الجودة من خبراء متخصصين. 
              ابدأ رحلتك التعليمية اليوم وطور مهاراتك المهنية.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button size="lg" className="bg-white text-primary hover:bg-white/90 font-semibold px-8">
                ابدأ التعلم المجاني
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-white text-white hover:bg-white hover:text-primary transition-all duration-300"
              >
                <Play className="h-5 w-5 ml-2" />
                شاهد العرض التوضيحي
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 mt-12 pt-8 border-t border-white/20">
              <div className="text-center">
                <div className="flex items-center justify-center mb-2">
                  <Users className="h-6 w-6 ml-2" />
                  <span className="text-2xl font-bold">15K+</span>
                </div>
                <p className="text-white/80 text-sm">طالب نشط</p>
              </div>
              <div className="text-center">
                <div className="flex items-center justify-center mb-2">
                  <BookOpen className="h-6 w-6 ml-2" />
                  <span className="text-2xl font-bold">500+</span>
                </div>
                <p className="text-white/80 text-sm">دورة تعليمية</p>
              </div>
              <div className="text-center">
                <div className="flex items-center justify-center mb-2">
                  <Star className="h-6 w-6 ml-2" />
                  <span className="text-2xl font-bold">4.9</span>
                </div>
                <p className="text-white/80 text-sm">تقييم المنصة</p>
              </div>
            </div>
          </div>

          {/* Hero Image/Illustration */}
          <div className="relative">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 shadow-large">
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white/20 rounded-xl p-4 h-32 flex items-center justify-center">
                  <BookOpen className="h-12 w-12 text-white" />
                </div>
                <div className="bg-white/20 rounded-xl p-4 h-32 flex items-center justify-center">
                  <Play className="h-12 w-12 text-white" />
                </div>
                <div className="bg-white/20 rounded-xl p-4 h-32 flex items-center justify-center col-span-2">
                  <Users className="h-12 w-12 text-white ml-4" />
                  <div className="text-right">
                    <p className="text-lg font-semibold">تعلم تفاعلي</p>
                    <p className="text-white/80 text-sm">مع مجتمع من المتعلمين</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;