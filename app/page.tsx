// app/page.tsx
"use client"
import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import Image from "next/image";

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

  const teamMembers = [
    { name: "Zachary Kublalsingh", title: "Lead Software Developer", image: "/images/zach.jpg" },
    { name: "Leonardo Villalobos", title: "Lead Circuit Design Engineer", image: "/images/leo.jpg" },
    { name: "Riley Yan", title: "Lead Design Engineer", image: "/images/riley.jpg" },
    { name: "Pedro Lopez", title: "Lead Manufacturer", image: "/images/pedro.jpg" }
  ];
  const productViews = [
    { name: "Front View of Design", image: "/images/front.jpg" },
    { name: "Front View of a Single Glove", image: "/images/front single.jpg" },
    { name: "Back View of Design", image: "/images/inside.jpg" },
  ];
  return (
    <main className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="w-full shadow-sm bg-white sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
          <h1 className="text-2xl font-bold text-black">GRIPSENSE LTD.</h1>
          <h1 className="text-2xl font-bold text-black align-text-middle">FORCE GLOVE</h1>

          {/* Desktop Nav */}
          <nav className="hidden md:flex space-x-4">
            <Link
              href="#about"
              className="text-black hover:text-gray-900 font-medium transition"
            >
              About
            </Link>
            <Link
              href="#team"
              className="text-black hover:text-gray-900 font-medium transition"
            >
              Team
            </Link>
            <Link
              href="#mission"
              className="text-black hover:text-gray-900 font-medium transition"
            >
              Mission Statement
            </Link>
            <Link
              href="#product"
              className="text-black hover:text-gray-900 font-medium transition"
            >
              Product
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden text-black focus:outline-none"
          >
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Nav */}
        {menuOpen && (
          <div className="md:hidden px-4 pb-4 space-y-2">
            <Link
              href="#about"
              className="block text-black hover:text-gray-900 font-medium transition"
              onClick={() => setMenuOpen(false)}
            >
              About
            </Link>
            <Link
              href="#team"
              className="block text-black hover:text-gray-900 font-medium transition"
              onClick={() => setMenuOpen(false)}
            >
              Team
            </Link>
            <Link
              href="#mission"
              className="block text-black hover:text-gray-900 font-medium transition"
              onClick={() => setMenuOpen(false)}
            >
              Mission Statement
            </Link>
            <Link
              href="#product"
              className="block text-black hover:text-gray-900 font-medium transition"
              onClick={() => setMenuOpen(false)}
            >
              Product
            </Link>
          </div>
        )}
      </header>

      {/* Sections */}
      <section id="about" className="py-16 px-4 max-w-4xl mx-auto bg-white">
        <h2 className="text-3xl font-bold text-black mb-4">About</h2>
        <p className="text-black">
          We are a passionate team dedicated to delivering innovative solutions.
        </p>
        <div className="items-center relative w-full h-64 col-span-1 sm:col-span-2 md:col-span-4 overflow-hidden">
            <Image src="/images/team.jpg" alt="Full Team" fill className="object-cover" />
          </div>
      </section>

      <section id="team" className="py-16 px-4 max-w-4xl mx-auto bg-white">
      <h2 className="text-3xl font-bold text-black mb-4">Team</h2>
      <p className="text-black">
          Our team consists of experts in engineering, design, and strategy...
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <div key={index} className="flex flex-col items-center text-center">
              <div className="w-48 h-64 relative overflow-hidden mb-4">
                <Image src={member.image} alt={member.name} fill className="object-cover" />

              </div>
              <h3 className="text-lg font-semibold text-black">{member.name}</h3>
              <p className="text-sm text-black">{member.title}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="mission" className="py-16 px-4 max-w-4xl mx-auto bg-white">
        <h2 className="text-3xl font-bold text-black mb-4">Mission Statement</h2>
        <p className="text-black">
        Increase accessibility to safety and protection for everyone interested in fitness and exercise.
        </p>
      </section>

      <section id="product" className="py-16 px-4 max-w-4xl mx-auto bg-white">
        <h2 className="text-3xl font-bold text-black mb-4">Product</h2>
        <p className="text-black mb-8">
          Have you ever noticed during your work out that one side of your body was producing
          more force than the other? More often than not one side of your body tends
          to take preference during bi-lateral exercises, whether you notice it or not.
          The Force Glove will be your new best friend in effective training.
        </p>
        <div className="flex flex-wrap justify-center gap-8">
          {productViews.map((member, index) => (
            <div key={index} className="flex flex-col items-center text-center">
              <div className="w-48 h-64 relative overflow-hidden mb-4">
                <Image src={member.image} alt={member.name} fill className="object-cover" />
              </div>
              <h3 className="text-lg font-semibold text-black">{member.name}</h3>
            </div>
          ))}
        </div>
      </section>

    </main>
  );
}
