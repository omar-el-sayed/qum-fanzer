import CourseCard from "./CourseCard";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";

const FeaturedCourses = () => {
  const courses = [
    {
      title: "تطوير تطبيقات الويب الحديثة باستخدام React",
      instructor: "أحمد محمد",
      rating: 4.8,
      students: 1250,
      duration: "40 ساعة",
      price: "299",
      image: "/placeholder.svg",
      level: "متوسط",
      category: "برمجة"
    },
    {
      title: "أساسيات التصميم الجرافيكي والهوية البصرية",
      instructor: "فاطمة أحمد",
      rating: 4.9,
      students: 890,
      duration: "25 ساعة",
      price: "199",
      image: "/placeholder.svg",
      level: "مبتدئ",
      category: "تصميم"
    },
    {
      title: "إدارة المشاريع الرقمية وريادة الأعمال",
      instructor: "خالد السعيد",
      rating: 4.7,
      students: 2100,
      duration: "30 ساعة",
      price: "249",
      image: "/placeholder.svg",
      level: "متقدم",
      category: "إدارة"
    },
    {
      title: "تحليل البيانات باستخدام Python والذكاء الاصطناعي",
      instructor: "نورا حسن",
      rating: 4.9,
      students: 1680,
      duration: "50 ساعة",
      price: "399",
      image: "/placeholder.svg",
      level: "متقدم",
      category: "بيانات"
    },
    {
      title: "التسويق الرقمي ووسائل التواصل الاجتماعي",
      instructor: "سارة علي",
      rating: 4.6,
      students: 950,
      duration: "20 ساعة",
      price: "149",
      image: "/placeholder.svg",
      level: "مبتدئ",
      category: "تسويق"
    },
    {
      title: "أمن المعلومات والحماية السيبرانية",
      instructor: "محمد عبدالله",
      rating: 4.8,
      students: 750,
      duration: "35 ساعة",
      price: "349",
      image: "/placeholder.svg",
      level: "متوسط",
      category: "أمن"
    }
  ];

  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            الدورات المميزة
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            اكتشف أفضل الدورات التعليمية المختارة بعناية من قبل خبرائنا لتطوير مهاراتك المهنية
          </p>
        </div>

        {/* Course Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {courses.map((course, index) => (
            <CourseCard key={index} {...course} />
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center">
          <Button size="lg" variant="outline" className="group">
            عرض جميع الدورات
            <ArrowLeft className="h-5 w-5 mr-2 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedCourses;