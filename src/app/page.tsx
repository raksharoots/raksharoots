import Image from "next/image";
import { Instagram, Mail, Leaf, Heart, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { HeroSection } from "@/components/hero-section";
import { ScrollAnimation } from "@/components/scroll-animation";
import { Logo } from "@/components/logo";
import faceMask from "../facemask.webp";
import bodyScrub from "../scrub.webp";

const products = [
  
  {
    name: "Raksha Roots Face Mask",
    price: "₹299",
    description: "A detoxifying and rejuvenating face mask made with natural clays and botanical extracts.",
    image: faceMask,
    hint: "skincare mask clay",
  },
  {
    name: "Raksha Roots Body Scrub",
    price: "₹399",
    description: "An exfoliating body scrub that buffs away dead skin cells, leaving your skin soft and glowing.",
    image: bodyScrub,
    hint: "body scrub natural",
  }
];

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <HeroSection />

      <main className="flex-grow">
        <section id="products" className="py-20 md:py-28">
          <div className="container mx-auto px-4">
            <ScrollAnimation>
              <h2 className="text-2xl md:text-3xl font-headline font-semibold text-center mb-4">
                Skincare Solutions for Healthy Skin
              </h2>
              <p className="text-center text-muted-foreground max-w-2xl mx-auto mb-12">
                Handmade with care in India, our products are crafted with love and nature to help you discover your best skin yet.
              </p>
            </ScrollAnimation>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {products.map((product, index) => (
                <ScrollAnimation key={product.name} delay={index * 100}>
                  <Card className="overflow-hidden group border-none shadow-lg hover:shadow-2xl transition-all duration-500 h-full flex flex-col bg-card relative">
                    <CardHeader className="p-0">
                      <div className="aspect-square overflow-hidden">
                        <Image
                          src={product.image}
                          alt={product.name}
                          data-ai-hint={product.hint}
                          width={600}
                          height={600}
                          className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500"
                        />
                      </div>
                    </CardHeader>
                    <CardContent className="p-6 flex-grow text-center">
                      <CardTitle className="text-lg font-headline font-semibold">{product.name}</CardTitle>
                      <CardDescription className="mt-2 text-sm text-muted-foreground">{product.description}</CardDescription>
                    </CardContent>
                    <CardFooter className="p-6 pt-0">
                      <div className="relative h-10 w-full">
                          <p className="absolute inset-0 flex items-center justify-center text-lg font-bold font-headline text-foreground transition-all duration-300 group-hover:opacity-0 group-hover:-translate-y-2">
                            {product.price}
                          </p>
                          <Button variant="default" className="absolute inset-0 w-full opacity-0 transition-all duration-300 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0">
                            Add to Cart
                          </Button>
                      </div>
                    </CardFooter>
                  </Card>
                </ScrollAnimation>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 md:py-28 bg-secondary/30">
          <div className="container mx-auto px-4">
            <ScrollAnimation>
              <h2 className="text-2xl md:text-3xl font-headline font-semibold text-center mb-12">
                Our Philosophy
              </h2>
            </ScrollAnimation>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center max-w-5xl mx-auto">
              <ScrollAnimation delay={100}>
                <div className="flex flex-col items-center">
                  <div className="flex items-center justify-center h-16 w-16 rounded-full bg-primary/10 mb-6 border border-primary/20">
                    <Leaf className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-headline font-semibold mb-2">Natural Ingredients</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    We believe in the power of nature. Our products are crafted with pure, ethically sourced botanical ingredients.
                  </p>
                </div>
              </ScrollAnimation>
              <ScrollAnimation delay={200}>
                <div className="flex flex-col items-center">
                  <div className="flex items-center justify-center h-16 w-16 rounded-full bg-primary/10 mb-6 border border-primary/20">
                    <Heart className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-headline font-semibold mb-2">Handmade with Love</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    Each product is artfully handmade in small batches, ensuring the highest quality and a personal touch.
                  </p>
                </div>
              </ScrollAnimation>
              <ScrollAnimation delay={300}>
                <div className="flex flex-col items-center">
                  <div className="flex items-center justify-center h-16 w-16 rounded-full bg-primary/10 mb-6 border border-primary/20">
                    <Sparkles className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-headline font-semibold mb-2">Ethical & Kind</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    Our commitment extends to kindness. All our products are cruelty-free and made with sustainable practices.
                  </p>
                </div>
              </ScrollAnimation>
            </div>
          </div>
        </section>

        <section className="py-20 md:py-28 bg-secondary">
          <div className="container mx-auto px-4 text-center">
            <ScrollAnimation>
              <h2 className="text-2xl md:text-3xl font-headline font-semibold mb-4 text-secondary-foreground">More Goodness Coming Soon</h2>
              <p className="max-w-2xl mx-auto text-sm text-secondary-foreground/80">
                We are lovingly crafting new additions to the RakshaRoots family. Stay tuned for more natural skincare treasures.
              </p>
            </ScrollAnimation>
          </div>
        </section>
      </main>

      <footer className="bg-background py-12">
        <div className="container mx-auto px-4 text-center text-muted-foreground">
            <Logo className="justify-center mb-4 text-foreground"/>
            <p className="mb-4 text-sm">Follow our journey and get the latest updates.</p>
            <div className="flex justify-center items-center space-x-6 text-foreground">
                <a href="https://instagram.com/raksharoots" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-primary transition-colors">
                    <Instagram size={20} />
                </a>
                <a href="mailto:raksharoots@gmail.com" className="flex items-center gap-2 hover:text-primary transition-colors">
                    <Mail size={20} />
                </a>
            </div>
             <p className="text-xs text-muted-foreground mt-8">
                &copy; {new Date().getFullYear()} RakshaRoots. All Rights Reserved.
            </p>
        </div>
      </footer>
    </div>
  );
}
