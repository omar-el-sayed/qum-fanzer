import { Button } from "@/components/ui/button";
import { Star, Clock, Users, BookOpen } from "lucide-react";

interface CourseCardProps {
  title: string;
  instructor: string;
  rating: number;
  students: number;
  duration: string;
  price: string;
  image: string;
  level: string;
  category: string;
}

const CourseCard = ({ 
  title, 
  instructor, 
  rating, 
  students, 
  duration, 
  price, 
  image, 
  level, 
  category 
}: CourseCardProps) => {
  return (
    <div className="bg-card rounded-xl shadow-medium hover:shadow-large transition-all duration-300 overflow-hidden group">
      {/* Course Image */}
      <div className="relative h-48 bg-gradient-primary overflow-hidden">
        <div className="absolute inset-0 bg-primary/20 group-hover:bg-primary/30 transition-colors duration-300 flex items-center justify-center">
          <BookOpen className="h-16 w-16 text-white" />
        </div>
        <div className="absolute top-3 right-3 bg-success text-success-foreground px-2 py-1 rounded-lg text-xs font-medium">
          {category}
        </div>
        <div className="absolute bottom-3 left-3 bg-white/90 text-primary px-2 py-1 rounded-lg text-xs font-medium">
          {level}
        </div>
      </div>

      {/* Course Content */}
      <div className="p-6">
        <h3 className="font-bold text-lg mb-2 text-foreground group-hover:text-primary transition-colors line-clamp-2">
          {title}
        </h3>
        
        <p className="text-muted-foreground text-sm mb-4">
          بواسطة {instructor}
        </p>

        {/* Course Stats */}
        <div className="flex items-center gap-4 mb-4 text-sm text-muted-foreground">
          <div className="flex items-center gap-1">
            <Star className="h-4 w-4 text-yellow-500 fill-current" />
            <span className="font-medium">{rating}</span>
          </div>
          <div className="flex items-center gap-1">
            <Users className="h-4 w-4" />
            <span>{students.toLocaleString()}</span>
          </div>
          <div className="flex items-center gap-1">
            <Clock className="h-4 w-4" />
            <span>{duration}</span>
          </div>
        </div>

        {/* Price and Action */}
        <div className="flex items-center justify-between">
          <div className="text-right">
            <span className="text-2xl font-bold text-primary">{price}</span>
            <span className="text-sm text-muted-foreground"> ريال</span>
          </div>
          <Button size="sm" className="bg-gradient-primary hover:opacity-90 transition-opacity">
            التسجيل الآن
          </Button>
        </div>
      </div>
    </div>
  );
};

export default CourseCard;