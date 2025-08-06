import { Button } from "@/components/ui/button";
import { BookOpen, Search, Bell, User, Menu } from "lucide-react";

const Header = () => {
  return (
    <header className="bg-card border-b shadow-soft sticky top-0 z-50">
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          {/* Logo and Navigation */}
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2">
              <BookOpen className="h-8 w-8 text-primary" />
              <h1 className="text-xl font-bold text-foreground">منصة التعلم</h1>
            </div>
            
            <nav className="hidden md:flex items-center gap-6">
              <a href="#" className="text-foreground hover:text-primary transition-colors font-medium">
                الرئيسية
              </a>
              <a href="#" className="text-foreground hover:text-primary transition-colors font-medium">
                الدورات
              </a>
              <a href="#" className="text-foreground hover:text-primary transition-colors font-medium">
                لوحة التحكم
              </a>
              <a href="#" className="text-foreground hover:text-primary transition-colors font-medium">
                حول المنصة
              </a>
            </nav>
          </div>

          {/* Search and Actions */}
          <div className="flex items-center gap-4">
            {/* Search */}
            <div className="hidden lg:flex items-center gap-2 bg-muted rounded-lg px-3 py-2 min-w-[200px]">
              <Search className="h-4 w-4 text-muted-foreground" />
              <input 
                type="text" 
                placeholder="ابحث عن الدورات..."
                className="bg-transparent border-none outline-none text-sm flex-1"
              />
            </div>

            {/* Actions */}
            <Button variant="ghost" size="sm" className="relative">
              <Bell className="h-5 w-5" />
              <span className="absolute -top-1 -right-1 bg-warning text-warning-foreground rounded-full text-xs w-5 h-5 flex items-center justify-center">
                3
              </span>
            </Button>

            <Button variant="ghost" size="sm">
              <User className="h-5 w-5" />
            </Button>

            <Button className="hidden md:inline-flex bg-gradient-primary hover:opacity-90 transition-opacity">
              تسجيل الدخول
            </Button>

            <Button variant="ghost" size="sm" className="md:hidden">
              <Menu className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;