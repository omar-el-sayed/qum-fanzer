import { BookOpen, Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin } from "lucide-react";
import { Button } from "@/components/ui/button";

const Footer = () => {
  return (
    <footer className="bg-foreground text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <BookOpen className="h-8 w-8 text-primary" />
              <h3 className="text-xl font-bold">منصة التعلم</h3>
            </div>
            <p className="text-white/80 mb-4 leading-relaxed">
              منصة تعليمية رائدة تهدف إلى تطوير المهارات والمعرفة في العالم العربي من خلال دورات عالية الجودة.
            </p>
            <div className="flex gap-3">
              <Button size="sm" variant="ghost" className="text-white hover:text-primary hover:bg-white/10">
                <Facebook className="h-5 w-5" />
              </Button>
              <Button size="sm" variant="ghost" className="text-white hover:text-primary hover:bg-white/10">
                <Twitter className="h-5 w-5" />
              </Button>
              <Button size="sm" variant="ghost" className="text-white hover:text-primary hover:bg-white/10">
                <Instagram className="h-5 w-5" />
              </Button>
              <Button size="sm" variant="ghost" className="text-white hover:text-primary hover:bg-white/10">
                <Linkedin className="h-5 w-5" />
              </Button>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">روابط سريعة</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-white/80 hover:text-white transition-colors">الرئيسية</a></li>
              <li><a href="#" className="text-white/80 hover:text-white transition-colors">الدورات</a></li>
              <li><a href="#" className="text-white/80 hover:text-white transition-colors">المدرسين</a></li>
              <li><a href="#" className="text-white/80 hover:text-white transition-colors">حول المنصة</a></li>
              <li><a href="#" className="text-white/80 hover:text-white transition-colors">الأسئلة الشائعة</a></li>
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h4 className="text-lg font-semibold mb-4">التصنيفات</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-white/80 hover:text-white transition-colors">البرمجة والتطوير</a></li>
              <li><a href="#" className="text-white/80 hover:text-white transition-colors">التصميم والفنون</a></li>
              <li><a href="#" className="text-white/80 hover:text-white transition-colors">إدارة الأعمال</a></li>
              <li><a href="#" className="text-white/80 hover:text-white transition-colors">التسويق الرقمي</a></li>
              <li><a href="#" className="text-white/80 hover:text-white transition-colors">تحليل البيانات</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-semibold mb-4">تواصل معنا</h4>
            <div className="space-y-3">
              <div className="flex items-center gap-3 text-white/80">
                <Mail className="h-5 w-5 text-primary" />
                <span>info@platform.com</span>
              </div>
              <div className="flex items-center gap-3 text-white/80">
                <Phone className="h-5 w-5 text-primary" />
                <span>+966 50 123 4567</span>
              </div>
              <div className="flex items-center gap-3 text-white/80">
                <MapPin className="h-5 w-5 text-primary" />
                <span>الرياض، المملكة العربية السعودية</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-white/20 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-white/60 text-sm">
            © 2024 منصة التعلم. جميع الحقوق محفوظة.
          </p>
          <div className="flex gap-6 text-sm">
            <a href="#" className="text-white/60 hover:text-white transition-colors">
              سياسة الخصوصية
            </a>
            <a href="#" className="text-white/60 hover:text-white transition-colors">
              شروط الاستخدام
            </a>
            <a href="#" className="text-white/60 hover:text-white transition-colors">
              اتفاقية الاستخدام
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;