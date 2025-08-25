export function About() {
  return (
    <section className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="mb-6">Our Story</h2>
            <p className="mb-6 text-muted-foreground">
              Founded in 1985 by Chef Marco Antonelli, Bella Vista has been a cornerstone of fine dining in the heart of the city. Our commitment to authentic Italian cuisine, combined with modern culinary techniques, creates an extraordinary dining experience.
            </p>
            <p className="mb-6 text-muted-foreground">
              Every dish tells a story of tradition, passion, and innovation. We source our ingredients from local farms and authentic Italian suppliers, ensuring each meal captures the true essence of Mediterranean flavors.
            </p>
            <div className="grid sm:grid-cols-2 gap-6">
              <div>
                <h4 className="mb-2 text-primary">30+ Years</h4>
                <p className="text-muted-foreground">Of culinary excellence</p>
              </div>
              <div>
                <h4 className="mb-2 text-primary">Award Winning</h4>
                <p className="text-muted-foreground">Michelin starred cuisine</p>
              </div>
            </div>
          </div>
          
          <div className="relative">
            <div className="aspect-square rounded-lg overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1750943024048-a4c9912b1425?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxnb3VybWV0JTIwZm9vZCUyMHBsYXRpbmclMjBmaW5lJTIwZGluaW5nfGVufDF8fHx8MTc1NjA4NTgxMXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Gourmet food plating"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}