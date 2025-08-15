import myimage from "../../assets/img 6.webp";
import myimage1 from "../../assets/img 11.webp"
import DesignProjects from "../DesignProjects";
import FollowUsSection from "../FollowUs";

const About = () => {
  return (
    <div className="min-h-screen bg-cream py-16">
      <div className="container mx-auto px-8 md:px-12 lg:px-20">
        {/* First Section - Welcome Text and Blog Intro */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Column - Text Content */}
          <div className="space-y-8">
            <div className="space-y-6">
              <p className="text-sage-green-light text-lg font-medium tracking-wider uppercase">
                ABOUT US
              </p>

              <h1 className="text-4xl lg:text-5xl font-light text-sage-green leading-tight">
                WELCOME TO
                <br />
                MY BLOG!
              </h1>

              <div className="prose prose-lg text-sage-green-light leading-relaxed max-w-none">
                <p>
                  I set up this blog to share interior design, travel, and
                  lifestyle inspiration for simple, relaxed living at home and
                  beyond. You'll find home tours, advice and tips, interviews,
                  reviews, postcards from places I love and more – always with a
                  focus on minimalism, muted colours, and timeless, considered
                  design.
                </p>
              </div>
            </div>
          </div>

          {/* Right Column - Image Layout */}
          <div className="relative">
            {/* Bedroom Image container with green background */}
            <div className="relative">
              {/* Decorative background elements */}
              <div className="absolute -top-8 -left-8 w-72 h-24 bg-sage-green rounded-sm opacity-80"></div>
              <div className="absolute -top-16 -right-4 w-64 h-32 bg-warm-beige rounded-sm opacity-90"></div>

              {/* Main image */}
              <div className="relative z-10 bg-sage-green p-8 rounded-sm">
                <img
                  src={myimage}
                  alt="Cozy bedroom interior with sage green shelving, natural textures, and minimalist design"
                  className="w-full h-[400px] md:h-[500px] lg:h-[600px] object-cover rounded-sm"
                />
              </div>

              {/* Decorative elements */}
              <div className="absolute -bottom-4 -right-8 w-24 h-24 bg-natural-brown rounded-full opacity-80"></div>
              <div className="absolute -bottom-2 -right-6 w-20 h-20 bg-warm-beige rounded-full"></div>

              <div className="absolute bottom-8 -left-6 w-32 h-16 bg-terracotta rounded-sm opacity-90"></div>
              <div className="absolute bottom-4 -left-4 w-28 h-12 bg-soft-white rounded-sm"></div>
            </div>
          </div>
        </div>

        {/* Second Section - About My Work */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 py-16">
          {/* Left Column - Image */}
          <div className="relative">
            <img
              src={myimage1}
              alt="Work related image"
              className="w-full h-[400px] md:h-[500px] lg:h-[600px] object-cover rounded-sm"
            />
          </div>

          {/* Right Column - Text Content */}
          <div className="space-y-6">
            <h2 className="text-3xl lg:text-4xl font-light text-sage-green leading-tight">
              About My Work
            </h2>
            <div className="prose prose-lg text-sage-green-light leading-relaxed max-w-none">
              <p>
                Our curriculum appeals to student diversity and interest, and is
                rigorous and challenging. We understand each child comes to us
                with different talents, learning styles, and identities. And we
                celebrate that difference because our diversity is our strength.
              </p>
              <p>
                Community is everything at Corlears. It’s who we are and how
                things get done. Everyone here is motivated by a deep commitment
                to making sure each child and family feels welcome and included.
                When everyone feels like they belong, we are stronger and
                smarter together. We’re a community driven to make the world a
                better place—starting in our own backyard.
              </p>
            </div>
          </div>
        </div>
      </div>
      <DesignProjects/>
      <FollowUsSection/>
      
    </div>
  );
};

export default About;
