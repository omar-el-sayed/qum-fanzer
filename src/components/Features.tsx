import { BookOpen, Users, Award, Smartphone, Globe, HeartHandshake } from "lucide-react";

const Features = () => {
  const features = [
    {
      icon: BookOpen,
      title: "محتوى تعليمي متميز",
      description: "دورات عالية الجودة من خبراء متخصصين في مختلف المجالات"
    },
    {
      icon: Users,
      title: "مجتمع تفاعلي",
      description: "تفاعل مع المدرسين والطلاب في منصة تعليمية تفاعلية"
    },
    {
      icon: Award,
      title: "شهادات معتمدة",
      description: "احصل على شهادات معتمدة عند إتمام الدورات بنجاح"
    },
    {
      icon: Smartphone,
      title: "تعلم في أي وقت",
      description: "ادرس من أي مكان وفي أي وقت عبر جميع الأجهزة"
    },
    {
      icon: Globe,
      title: "محتوى باللغة العربية",
      description: "جميع الدورات متوفرة باللغة العربية لسهولة التعلم"
    },
    {
      icon: HeartHandshake,
      title: "دعم مستمر",
      description: "فريق دعم متاح 24/7 لمساعدتك في رحلتك التعليمية"
    }
  ];

  return (
    <section className="py-16 bg-muted/30">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            لماذا تختار منصتنا؟
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            نوفر لك أفضل تجربة تعليمية مع مميزات فريدة تساعدك على تحقيق أهدافك التعليمية
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div 
                key={index}
                className="bg-card rounded-xl p-6 shadow-soft hover:shadow-medium transition-all duration-300 text-center group"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-primary rounded-full mb-4 group-hover:scale-110 transition-transform duration-300">
                  <Icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Features;