import { useState } from "react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CourseCard from "@/components/CourseCard";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Search, Filter } from "lucide-react";

const AllCourses = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedLevel, setSelectedLevel] = useState("all");

  const allCourses = [
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
    },
    {
      title: "تطوير تطبيقات الهاتف المحمول باستخدام Flutter",
      instructor: "عبدالرحمن خالد",
      rating: 4.7,
      students: 1100,
      duration: "45 ساعة",
      price: "329",
      image: "/placeholder.svg",
      level: "متوسط",
      category: "برمجة"
    },
    {
      title: "التصوير الفوتوغرافي وتحرير الصور",
      instructor: "لينا محمود",
      rating: 4.5,
      students: 670,
      duration: "18 ساعة",
      price: "129",
      image: "/placeholder.svg",
      level: "مبتدئ",
      category: "تصميم"
    },
    {
      title: "إدارة الموارد البشرية والقيادة",
      instructor: "يوسف أحمد",
      rating: 4.6,
      students: 850,
      duration: "28 ساعة",
      price: "219",
      image: "/placeholder.svg",
      level: "متوسط",
      category: "إدارة"
    }
  ];

  const filteredCourses = allCourses.filter(course => {
    const matchesSearch = course.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         course.instructor.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === "all" || course.category === selectedCategory;
    const matchesLevel = selectedLevel === "all" || course.level === selectedLevel;
    
    return matchesSearch && matchesCategory && matchesLevel;
  });

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container mx-auto px-4 py-8">
        {/* Page Header */}
        <div className="text-center mb-8">
          <h1 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            جميع الدورات التعليمية
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            اختر من مجموعة واسعة من الدورات التعليمية المتخصصة لتطوير مهاراتك المهنية
          </p>
        </div>

        {/* Search and Filter Section */}
        <div className="bg-card rounded-lg p-6 mb-8 shadow-sm">
          <div className="grid md:grid-cols-3 gap-4">
            {/* Search */}
            <div className="relative">
              <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
              <Input
                placeholder="البحث في الدورات..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pr-10"
              />
            </div>

            {/* Category Filter */}
            <Select value={selectedCategory} onValueChange={setSelectedCategory}>
              <SelectTrigger>
                <SelectValue placeholder="اختر التخصص" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">جميع التخصصات</SelectItem>
                <SelectItem value="برمجة">برمجة</SelectItem>
                <SelectItem value="تصميم">تصميم</SelectItem>
                <SelectItem value="إدارة">إدارة</SelectItem>
                <SelectItem value="بيانات">بيانات</SelectItem>
                <SelectItem value="تسويق">تسويق</SelectItem>
                <SelectItem value="أمن">أمن</SelectItem>
              </SelectContent>
            </Select>

            {/* Level Filter */}
            <Select value={selectedLevel} onValueChange={setSelectedLevel}>
              <SelectTrigger>
                <SelectValue placeholder="اختر المستوى" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">جميع المستويات</SelectItem>
                <SelectItem value="مبتدئ">مبتدئ</SelectItem>
                <SelectItem value="متوسط">متوسط</SelectItem>
                <SelectItem value="متقدم">متقدم</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        {/* Results Count */}
        <div className="mb-6">
          <p className="text-muted-foreground">
            عرض {filteredCourses.length} من أصل {allCourses.length} دورة
          </p>
        </div>

        {/* Courses Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCourses.map((course, index) => (
            <CourseCard key={index} {...course} />
          ))}
        </div>

        {/* No Results */}
        {filteredCourses.length === 0 && (
          <div className="text-center py-12">
            <Filter className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
            <h3 className="text-lg font-semibold text-foreground mb-2">
              لا توجد دورات تطابق معايير البحث
            </h3>
            <p className="text-muted-foreground mb-4">
              جرب تغيير معايير البحث أو المرشحات
            </p>
            <Button 
              onClick={() => {
                setSearchTerm("");
                setSelectedCategory("all");
                setSelectedLevel("all");
              }}
              variant="outline"
            >
              إعادة تعيين المرشحات
            </Button>
          </div>
        )}
      </main>

      <Footer />
    </div>
  );
};

export default AllCourses;