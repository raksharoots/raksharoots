"use client";
import React from 'react';
import { Button } from '@/components/ui/button';
import { Logo } from '@/components/logo';
import { ScrollAnimation } from './scroll-animation';
import { ArrowDown } from 'lucide-react';

export function HeroSection() {

  return (
    <section className="relative bg-background overflow-hidden">
      <header className="absolute top-0 left-0 right-0 z-20 p-4 md:p-8">
        <div className="container mx-auto flex justify-between items-center">
          <Logo />
          <nav>
            <Button asChild variant="link" className="text-primary text-md hover:no-underline hover:text-primary/80 transition-colors">
              <a href="#products">Our Products</a>
            </Button>
          </nav>
        </div>
      </header>
      
      <div className="relative z-10 flex flex-col items-center justify-center text-center px-4 pt-32 pb-20 md:pt-40 md:pb-28">
        <ScrollAnimation delay={100}>
          <h1 className="font-headline text-4xl md:text-5xl lg:text-6xl font-semibold text-primary drop-shadow-lg">
            Handmade with Love & Nature
          </h1>
        </ScrollAnimation>
        <ScrollAnimation delay={300}>
          <p className="mt-4 max-w-2xl text-base font-light text-muted-foreground drop-shadow-md">
            Skincare Solutions for Healthy Skin. Explore our products and discover your best skin yet.
          </p>
        </ScrollAnimation>
        <ScrollAnimation delay={500}>
            <Button asChild size="lg" variant="outline" className="mt-8 bg-transparent border-primary text-primary hover:bg-primary hover:text-primary-foreground">
                <a href="#products">
                    Explore Products
                    <ArrowDown className="ml-2 h-5 w-5" />
                </a>
            </Button>
        </ScrollAnimation>
      </div>
    </section>
  );
}
