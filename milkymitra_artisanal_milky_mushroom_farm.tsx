import React, { useState } from 'react';
import { 
  ShoppingBag, 
  Leaf, 
  Sun, 
  Droplets, 
  Sparkles, 
  CheckCircle2, 
  ChevronDown, 
  Star, 
  X, 
  Plus, 
  Minus, 
  ArrowRight, 
  Sprout, 
  ShieldCheck, 
  Menu, 
  Mail, 
  Phone, 
  MapPin, 
  Instagram, 
  Facebook, 
  Clock, 
  Heart, 
  Flame, 
  Check, 
  Building2, 
  Utensils, 
  Truck, 
  BadgePercent,
  ChefHat
} from 'lucide-react';

// Product Catalog tailored for MilkyMitra (Calocybe indica)
const PRODUCTS = [
  {
    id: 1,
    name: "Farm-Fresh Milky Mushrooms (Calocybe indica)",
    category: "fresh",
    tag: "Signature Harvest",
    price: 120,
    unit: "250g Pack (Chilled Safe)",
    weightOptions: [
      { label: "250g", price: 120 },
      { label: "500g", price: 220 },
      { label: "1 kg", price: 420 }
    ],
    badge: "Harvested Today",
    rating: 4.9,
    reviews: 320,
    shelfLife: "5–7 Days Refrigerator Shelf Life",
    flavor: "Firm, succulent, chicken-like bite, mild earthy umami",
    description: "Snow-white fleshy caps and robust stems that do not turn soggy or shrink away in thick curries. Retains crisp bite.",
    image: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=800&q=80",
    benefits: ["3x longer shelf life than button", "High biological protein", "Retains bite in hot curries"]
  },
  {
    id: 2,
    name: "Sun-Dried Milky Mushroom Dehydrated Slices",
    category: "pantry",
    tag: "Superfood Pantry",
    price: 249,
    unit: "150g Box (Yields 600g reconstituted)",
    weightOptions: [
      { label: "150g", price: 249 },
      { label: "300g", price: 460 }
    ],
    badge: "12-Month Life",
    rating: 4.8,
    reviews: 184,
    shelfLife: "12 Months in cool pantry",
    flavor: "Concentrated umami, ideal for soups, pulao & stocks",
    description: "Naturally sun-cured with solar dryers to lock in bio-available Vitamin D and dietary fiber. Rehydrate in warm water for 15 minutes.",
    image: "https://images.unsplash.com/photo-1588166524941-3bf61a9c41db?auto=format&fit=crop&w=800&q=80",
    benefits: ["Rich in Vitamin D2", "Zero preservatives", "Instant hydration for curries"]
  },
  {
    id: 3,
    name: "MilkyMitra High-Protein Mushroom Powder",
    category: "pantry",
    tag: "Daily Wellness",
    price: 399,
    unit: "250g Tin (30 Servings)",
    weightOptions: [
      { label: "250g", price: 399 },
      { label: "500g", price: 720 }
    ],
    badge: "Dietitian Approved",
    rating: 5.0,
    reviews: 210,
    shelfLife: "9 Months sealed",
    flavor: "Mild roasted nutty note, neutral flavor enhancer",
    description: "Pure micronized Calocybe indica powder. Blend 1-2 spoons into daily roti dough, dal, morning smoothies, or soups.",
    image: "https://images.unsplash.com/photo-1608571423902-eed4a5ad8108?auto=format&fit=crop&w=800&q=80",
    benefits: ["32% Pure Plant Protein", "Low Glycemic Index", "Natural gut prebiotics"]
  },
  {
    id: 4,
    name: "Milky Mushroom Spicy Gourmet Achar (Relish)",
    category: "pantry",
    tag: "Gourmet Pickle",
    price: 199,
    unit: "300g Glass Jar",
    weightOptions: [
      { label: "300g", price: 199 },
      { label: "600g", price: 360 }
    ],
    badge: "Traditional Recipe",
    rating: 4.9,
    reviews: 412,
    shelfLife: "6 Months shelf life",
    flavor: "Tangy, mustard-spiced, garlicky with meaty chew",
    description: "Sun-dried milky mushroom chunks steeped in cold-pressed mustard oil, fenugreek, hand-ground spices, and Himalayan rock salt.",
    image: "https://images.unsplash.com/photo-1509358271058-acd22cc93898?auto=format&fit=crop&w=800&q=80",
    benefits: ["Probiotic friendly", "Cold-pressed kachi ghani oil", "Zero artificial colors"]
  },
  {
    id: 5,
    name: "Milky Mushroom Home Grow Kit & Spawn Block",
    category: "kits",
    tag: "Grow at Home",
    price: 349,
    unit: "Ready-to-fruit colonized block",
    weightOptions: [
      { label: "1 Block Kit", price: 349 },
      { label: "Pack of 3 Blocks", price: 899 }
    ],
    badge: "Tropical Strain",
    rating: 4.8,
    reviews: 165,
    shelfLife: "Fruits within 14–18 days",
    flavor: "Harvest crisp milky white stems at home",
    description: "Pre-inoculated, pasteurized paddy straw block with high-potency Calocybe spawn. Ideal for Indian tropical climates (28°C–35°C).",
    image: "https://images.unsplash.com/photo-1518531933037-91b2f5f229cc?auto=format&fit=crop&w=800&q=80",
    benefits: ["Includes casing soil & mister", "Flourishes in warm Indian climates", "100% Guaranteed First Flush"]
  },
  {
    id: 6,
    name: "Pure First-Generation Grain Spawn (Mother Spawn)",
    category: "kits",
    tag: "Commercial Spawn",
    price: 180,
    unit: "1 kg Sealed Autoclave Bag",
    weightOptions: [
      { label: "1 kg Bag", price: 180 },
      { label: "5 kg Commercial Pack", price: 790 }
    ],
    badge: "Lab Cultured",
    rating: 5.0,
    reviews: 94,
    shelfLife: "30 Days storage at 15-20°C",
    flavor: "Dense pure white master mycelium on sorghum grains",
    description: "Prepared in sterile laminar airflow chambers from certified Calocybe mother cultures for commercial growers and farm setups.",
    image: "https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=800&q=80",
    benefits: ["Contamination-free verified", "High biological yield ratio", "Vigorous colonization"]
  }
];

const RECIPES = [
  {
    title: "Milky Mushroom Kadhai Masala",
    time: "25 Mins",
    difficulty: "Easy",
    desc: "Thick stems sliced into medallions, tossed with crunchy bell peppers, onions, and freshly pounded coriander & red chilies.",
    tag: "Chef's Special"
  },
  {
    title: "Crispy Chettinad Pepper Fry",
    time: "20 Mins",
    difficulty: "Medium",
    desc: "Shredded milky mushroom stems shallow-fried with curry leaves, cracked tellicherry black pepper, shallots, and fennel.",
    tag: "Quick Snack"
  },
  {
    title: "Rich Vegan Mushroom Biryani",
    time: "40 Mins",
    difficulty: "Festive",
    desc: "Because milky mushrooms don't get mushy under pressure cooking, they hold the aromatic saffron dum-biryani flavors like succulent paneer.",
    tag: "Sunday Feast"
  }
];

const FAQS = [
  {
    q: "Why are Milky Mushrooms (Calocybe indica) better than Button Mushrooms?",
    a: "Milky mushrooms possess a naturally firmer, meaty texture with 3 to 5 times longer fresh shelf life (they don't turn black or soggy rapidly in the fridge). They retain their size and toothsome texture in hot Indian gravies, and are naturally adapted to warm tropical conditions."
  },
  {
    q: "How long does farm-fresh delivery take, and how are they packed?",
    a: "We harvest early in the morning and pack in perforated breathable food-grade punnets. Orders are dispatched the same or next day via temperature-monitored courier or local express delivery to ensure crisp white condition upon arrival."
  },
  {
    q: "Can I grow Milky Mushrooms in warm climates like Central or South India?",
    a: "Yes! Unlike button mushrooms which need chilled air-conditioned rooms (16°C–18°C), Milky Mushrooms thrive in tropical Indian conditions between 28°C and 36°C with 80% humidity, making them ideal for home grow kits across India."
  },
  {
    q: "Do you supply wholesale for HoReCa (Hotels, Restaurants, Caterers)?",
    a: "Yes, we ship fresh batches in 5kg, 10kg, and 25kg crates directly to culinary kitchens, premium supermarkets, and cloud kitchens with consistent weekly contracts. Use our B2B form below to request a wholesale rate card."
  }
];

export default function App() {
  const [activeCategory, setActiveCategory] = useState("all");
  const [cart, setCart] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [selectedWeights, setSelectedWeights] = useState({
    1: 120, 2: 249, 3: 399, 4: 199, 5: 349, 6: 180
  });
  const [openFaq, setOpenFaq] = useState(0);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [toastMessage, setToastMessage] = useState(null);
  const [b2bSubmitted, setB2bSubmitted] = useState(false);
  const [b2bForm, setB2bForm] = useState({ name: '', phone: '', city: '', businessType: 'Restaurant', volume: '25-50 kg/week' });
  const [isCheckoutModalOpen, setIsCheckoutModalOpen] = useState(false);
  const [checkoutSuccess, setCheckoutSuccess] = useState(false);

  // Filter products
  const filteredProducts = activeCategory === "all"
    ? PRODUCTS
    : PRODUCTS.filter(p => p.category === activeCategory);

  const showToast = (msg) => {
    setToastMessage(msg);
    setTimeout(() => setToastMessage(null), 3000);
  };

  const handleWeightSelect = (productId, price) => {
    setSelectedWeights(prev => ({ ...prev, [productId]: price }));
  };

  const addToCart = (product) => {
    const selectedPrice = selectedWeights[product.id] || product.price;
    const selectedOption = product.weightOptions.find(o => o.price === selectedPrice) || product.weightOptions[0];
    const cartItemId = `${product.id}-${selectedOption.label}`;

    setCart(prev => {
      const existing = prev.find(item => item.cartItemId === cartItemId);
      if (existing) {
        return prev.map(item =>
          item.cartItemId === cartItemId ? { ...item, qty: item.qty + 1 } : item
        );
      }
      return [...prev, {
        cartItemId,
        id: product.id,
        name: product.name,
        price: selectedPrice,
        weightLabel: selectedOption.label,
        image: product.image,
        qty: 1
      }];
    });

    showToast(`Added ${product.name} (${selectedOption.label}) to cart!`);
  };

  const updateQuantity = (cartItemId, delta) => {
    setCart(prev => prev.map(item => {
      if (item.cartItemId === cartItemId) {
        const newQty = item.qty + delta;
        return newQty > 0 ? { ...item, qty: newQty } : null;
      }
      return item;
    }).filter(Boolean));
  };

  const cartTotal = cart.reduce((sum, item) => sum + item.price * item.qty, 0);
  const cartItemCount = cart.reduce((sum, item) => sum + item.qty, 0);
  const freeShippingThreshold = 499;
  const amountNeededForFreeShip = Math.max(0, freeShippingThreshold - cartTotal);

  const handleB2bSubmit = (e) => {
    e.preventDefault();
    setB2bSubmitted(true);
    setTimeout(() => {
      setB2bForm({ name: '', phone: '', city: '', businessType: 'Restaurant', volume: '25-50 kg/week' });
    }, 1000);
  };

  const handleSimulatePayment = (e) => {
    e.preventDefault();
    setCheckoutSuccess(true);
    setTimeout(() => {
      setCart([]);
      setIsCheckoutModalOpen(false);
      setCheckoutSuccess(false);
      setIsCartOpen(false);
      showToast("Order placed successfully! We are preparing your fresh harvest.");
    }, 1800);
  };

  return (
    <div className="min-h-screen bg-[#FAF8F5] text-[#1E2922] font-sans antialiased selection:bg-[#2D6A4F] selection:text-white">
      {/* Toast Alert */}
      {toastMessage && (
        <div className="fixed top-24 right-4 sm:right-6 z-50 bg-[#1B4332] text-white px-5 py-3 rounded-xl shadow-2xl flex items-center space-x-2 border border-[#40916C] text-sm animate-fade-in">
          <Sparkles className="w-4 h-4 text-[#D8F3DC]" />
          <span className="font-medium">{toastMessage}</span>
        </div>
      )}

      {/* Top Ticker */}
      <div className="bg-[#1B4332] text-[#D8F3DC] text-xs font-medium py-2.5 px-4 text-center tracking-wide flex items-center justify-center space-x-2">
        <span className="inline-block w-2 h-2 rounded-full bg-[#52B788] animate-ping"></span>
        <span>TODAY'S MORNING HARVEST DISPATCHING: Order before 2 PM for Next-Day Express Delivery. Free shipping over ₹499!</span>
      </div>

      {/* Main Navigation */}
      <nav className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-[#E7E3DC] shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          {/* Brand Logo */}
          <a href="#" className="flex items-center space-x-3 group">
            <div className="w-11 h-11 rounded-2xl bg-gradient-to-tr from-[#1B4332] to-[#2D6A4F] flex items-center justify-center text-white shadow-md shadow-[#1B4332]/20 group-hover:scale-105 transition">
              <Sprout className="w-6 h-6 text-[#95D5B2]" />
            </div>
            <div>
              <div className="flex items-center space-x-1.5">
                <span className="text-2xl font-serif font-black tracking-tight text-[#1B4332]">Milky<span className="text-[#52B788]">Mitra</span></span>
              </div>
              <span className="block text-[10px] tracking-widest uppercase text-[#738276] font-bold">India's Milky Mushroom Pioneers</span>
            </div>
          </a>

          {/* Desktop Nav Links */}
          <div className="hidden lg:flex items-center space-x-7 text-sm font-semibold text-[#2D3A2F]">
            <a href="#store" className="hover:text-[#2D6A4F] transition">Products</a>
            <a href="#why-milky" className="hover:text-[#2D6A4F] transition">Why Milky Mushroom?</a>
            <a href="#nutrition" className="hover:text-[#2D6A4F] transition">Nutrition & Immunity</a>
            <a href="#recipes" className="hover:text-[#2D6A4F] transition">Recipes</a>
            <a href="#b2b" className="hover:text-[#2D6A4F] transition text-[#B76935]">Wholesale / B2B Supply</a>
            <a href="#faq" className="hover:text-[#2D6A4F] transition">FAQ</a>
          </div>

          {/* Right Action Icons */}
          <div className="flex items-center space-x-4">
            <a 
              href="#b2b"
              className="hidden sm:inline-flex items-center space-x-1 text-xs font-bold px-3 py-1.5 rounded-lg border border-[#2D6A4F] text-[#1B4332] hover:bg-[#E8F5E9] transition"
            >
              <Building2 className="w-3.5 h-3.5 text-[#2D6A4F]" />
              <span>Bulk Orders</span>
            </a>

            <button 
              onClick={() => setIsCartOpen(true)}
              className="relative p-2.5 rounded-xl bg-[#E8F5E9] hover:bg-[#D8F3DC] text-[#1B4332] transition flex items-center justify-center shadow-sm"
              aria-label="View Shopping Basket"
            >
              <ShoppingBag className="w-5 h-5" />
              {cartItemCount > 0 && (
                <span className="absolute -top-1.5 -right-1.5 bg-[#B76935] text-white text-[11px] font-black rounded-full w-5 h-5 flex items-center justify-center shadow">
                  {cartItemCount}
                </span>
              )}
            </button>

            <button 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded-lg text-[#1B4332] hover:bg-[#E8F5E9]"
            >
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </div>

        {/* Mobile Dropdown */}
        {mobileMenuOpen && (
          <div className="lg:hidden border-b border-[#E7E3DC] bg-[#FAF8F5] px-6 py-4 space-y-3 font-semibold text-sm">
            <a href="#store" onClick={() => setMobileMenuOpen(false)} className="block py-1 hover:text-[#2D6A4F]">Our Products</a>
            <a href="#why-milky" onClick={() => setMobileMenuOpen(false)} className="block py-1 hover:text-[#2D6A4F]">Why Milky vs Button</a>
            <a href="#nutrition" onClick={() => setMobileMenuOpen(false)} className="block py-1 hover:text-[#2D6A4F]">Nutrition Benefits</a>
            <a href="#recipes" onClick={() => setMobileMenuOpen(false)} className="block py-1 hover:text-[#2D6A4F]">Indian Recipes</a>
            <a href="#b2b" onClick={() => setMobileMenuOpen(false)} className="block py-1 text-[#B76935]">Wholesale & B2B Inquiry</a>
            <a href="#faq" onClick={() => setMobileMenuOpen(false)} className="block py-1 hover:text-[#2D6A4F]">Grower FAQ</a>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="relative overflow-hidden pt-10 pb-16 lg:pt-16 lg:pb-24 bg-gradient-to-b from-[#F2F7F2] via-[#FAF8F5] to-[#FAF8F5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center space-x-2 px-3 py-1.5 rounded-full bg-[#E0EFE0] border border-[#C1E1C1] text-xs font-bold text-[#1B4332] tracking-wide">
                <Leaf className="w-3.5 h-3.5 text-[#2D6A4F]" />
                <span>Calocybe indica • 100% Pesticide-Free Climate Farming</span>
              </div>
              
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-extrabold text-[#12281D] leading-[1.12]">
                Pure White. Pure Nutrition. <br />
                <span className="text-[#2D6A4F]">Direct From Farm to Table.</span>
              </h1>

              <p className="text-base sm:text-lg text-[#4E5E52] max-w-2xl leading-relaxed">
                Meet <strong>MilkyMitra</strong>—celebrating India's prized indigenous milky mushroom (*Calocybe indica*). Boasting <strong>3–5x longer shelf life</strong> than ordinary button mushrooms, an irresistibly meaty bite, and dense plant protein.
              </p>

              {/* CTAs */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center space-y-3 sm:space-y-0 sm:space-x-4 pt-2">
                <a 
                  href="#store" 
                  className="inline-flex items-center justify-center px-8 py-3.5 rounded-xl bg-[#1B4332] hover:bg-[#2D6A4F] text-white font-bold text-sm shadow-xl shadow-[#1B4332]/25 transition group"
                >
                  <span>Order Fresh Harvest</span>
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </a>
                <a 
                  href="#b2b" 
                  className="inline-flex items-center justify-center px-8 py-3.5 rounded-xl bg-white hover:bg-[#F0EDE6] text-[#1B4332] font-bold text-sm border-2 border-[#1B4332]/30 transition"
                >
                  <Building2 className="w-4 h-4 mr-2 text-[#B76935]" />
                  <span>Wholesale & HoReCa Supply</span>
                </a>
              </div>

              {/* Trust Badges */}
              <div className="pt-6 grid grid-cols-3 gap-3 border-t border-[#E1DAD0]">
                <div>
                  <p className="text-2xl font-serif font-black text-[#1B4332]">5–7 Days</p>
                  <p className="text-xs text-[#5D6B60] font-medium">Fridge Freshness (No Soggy Caps)</p>
                </div>
                <div>
                  <p className="text-2xl font-serif font-black text-[#1B4332]">32%</p>
                  <p className="text-xs text-[#5D6B60] font-medium">Digestible Plant Protein (Dry Wt)</p>
                </div>
                <div>
                  <p className="text-2xl font-serif font-black text-[#1B4332]">Zero</p>
                  <p className="text-xs text-[#5D6B60] font-medium">Synthetic Chemicals or Bleach</p>
                </div>
              </div>
            </div>

            {/* Hero Visual Card */}
            <div className="lg:col-span-5 relative">
              <div className="relative mx-auto max-w-md lg:max-w-none">
                <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white bg-white">
                  <img 
                    src="https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=1000&q=80" 
                    alt="Plump Milky Mushrooms Harvested Fresh" 
                    className="w-full h-[420px] object-cover hover:scale-105 transition duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#12281D]/90 via-[#12281D]/20 to-transparent flex flex-col justify-end p-6 text-white">
                    <span className="bg-[#B76935] text-white text-[11px] font-black px-2.5 py-1 rounded w-fit mb-2 uppercase tracking-wider">
                      Direct Farm Harvest
                    </span>
                    <h3 className="text-xl font-serif font-bold">Lush Calocybe indica Clusters</h3>
                    <p className="text-xs text-[#D8F3DC] mt-1">Cultivated on pasteurized organic paddy straw substrates under pure mountain water misting.</p>
                  </div>
                </div>

                {/* Floating highlight box */}
                <div className="absolute -bottom-6 -left-4 sm:-left-6 bg-white p-4 rounded-2xl shadow-xl border border-[#E0D7C9] flex items-center space-x-3 max-w-xs">
                  <div className="w-11 h-11 rounded-xl bg-[#E8F5E9] flex items-center justify-center flex-shrink-0 text-[#2D6A4F]">
                    <ShieldCheck className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-[#1B4332] uppercase tracking-wider">FSSAI Certified</h4>
                    <p className="text-[11px] text-[#556B5C]">Hygienically cleaned, ozone-rinsed, ready to cook.</p>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Comparison: Milky Mushroom vs Button Mushroom */}
      <section id="why-milky" className="py-16 bg-white border-y border-[#ECE6DC]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="text-xs uppercase tracking-widest text-[#B76935] font-black">Culinary & Agricultural Superiority</span>
            <h2 className="text-3xl sm:text-4xl font-serif font-extrabold text-[#1B4332] mt-2">
              Why Chefs & Homemakers Switch from Button to Milky
            </h2>
            <p className="text-[#596B5E] mt-3 text-sm sm:text-base">
              Button mushrooms (*Agaricus*) are prone to quick darkening and moisture collapse. Discover why Indian kitchens are loving *Calocybe indica*.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* Milky Mushroom Card */}
            <div className="bg-[#F3F9F4] rounded-2xl p-7 border-2 border-[#52B788] shadow-md relative">
              <span className="absolute -top-3.5 right-6 bg-[#2D6A4F] text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                MilkyMitra (Calocybe)
              </span>
              <h3 className="font-serif font-bold text-2xl text-[#1B4332] flex items-center space-x-2">
                <span>Milky Mushrooms</span>
                <Check className="w-5 h-5 text-[#2D6A4F]" />
              </h3>
              <p className="text-xs text-[#52B788] font-bold mt-1">Tropical Indian Pride</p>

              <ul className="mt-6 space-y-3.5 text-sm text-[#27382D]">
                <li className="flex items-start space-x-3">
                  <CheckCircle2 className="w-5 h-5 text-[#2D6A4F] flex-shrink-0 mt-0.5" />
                  <span><strong>5 to 7 Days Freshness:</strong> Stays pristine milky-white; does not turn slimy or bruised easily.</span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle2 className="w-5 h-5 text-[#2D6A4F] flex-shrink-0 mt-0.5" />
                  <span><strong>Doesn't Shrink in Gravy:</strong> Holds hearty succulent shape; cooks like tender paneer or chicken.</span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle2 className="w-5 h-5 text-[#2D6A4F] flex-shrink-0 mt-0.5" />
                  <span><strong>Higher Fiber & Protein:</strong> Over 17% higher dietary fiber aiding gut microflora and satiety.</span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle2 className="w-5 h-5 text-[#2D6A4F] flex-shrink-0 mt-0.5" />
                  <span><strong>Warm-Climate Adapted:</strong> Naturally cultivated in 30°C–35°C without energy-heavy chillers.</span>
                </li>
              </ul>
            </div>

            {/* Ordinary Button Mushroom Card */}
            <div className="bg-[#FAF8F5] rounded-2xl p-7 border border-[#DDD3C4] text-[#69655D]">
              <span className="inline-block bg-[#E3DBD0] text-[#5A554D] text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider mb-2">
                Standard Market
              </span>
              <h3 className="font-serif font-bold text-2xl text-[#3A352F]">Common Button Mushrooms</h3>
              <p className="text-xs text-[#8C8476] font-bold mt-1">Agaricus bisporus</p>

              <ul className="mt-6 space-y-3.5 text-sm">
                <li className="flex items-start space-x-3">
                  <span className="text-red-500 font-bold">✕</span>
                  <span><strong>Short Shelf Life:</strong> Often turns brown, black, and leaky within 24–48 hours of purchase.</span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="text-red-500 font-bold">✕</span>
                  <span><strong>Releases Too Much Water:</strong> Shrinks to 1/3rd of its size when sautéed or boiled in gravies.</span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="text-red-500 font-bold">✕</span>
                  <span><strong>Pesticide Concerns:</strong> Frequently grown using chemical casing mixes to suppress tropical molds.</span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="text-red-500 font-bold">✕</span>
                  <span><strong>High Carbon Footprint:</strong> Requires non-stop air conditioning (16°C) year-round in India.</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Storefront / Catalog */}
      <section id="store" className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10">
          <div>
            <span className="text-xs uppercase tracking-widest text-[#B76935] font-black">Direct Consumer Pantry</span>
            <h2 className="text-3xl sm:text-4xl font-serif font-extrabold text-[#1B4332] mt-1">
              Fresh Harvest & Gourmet Pantry
            </h2>
            <p className="text-sm text-[#5D6B60] mt-1">Packed hygienically with breathable organic liners for unmatched freshness.</p>
          </div>

          {/* Filter Pills */}
          <div className="flex flex-wrap gap-2 mt-5 md:mt-0">
            {[
              { id: "all", label: "All Offerings" },
              { id: "fresh", label: "Fresh Farm Harvest" },
              { id: "pantry", label: "Pantry & Superfood" },
              { id: "kits", label: "Grow Kits & Spawn" }
            ].map(tab => (
              <button
                key={tab.id}
                onClick={() => setActiveCategory(tab.id)}
                className={`px-4 py-2 rounded-xl text-xs font-bold tracking-wide transition ${
                  activeCategory === tab.id 
                    ? "bg-[#1B4332] text-white shadow-md shadow-[#1B4332]/20" 
                    : "bg-[#EAE4D9] text-[#4A453C] hover:bg-[#DDD6C8]"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Product Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProducts.map((product) => {
            const currentPrice = selectedWeights[product.id] || product.price;

            return (
              <div 
                key={product.id} 
                className="bg-white rounded-2xl overflow-hidden border border-[#E6E0D5] shadow-sm hover:shadow-xl transition-all flex flex-col justify-between group"
              >
                <div>
                  <div className="relative h-60 overflow-hidden bg-[#EFECE6]">
                    <img 
                      src={product.image} 
                      alt={product.name} 
                      className="w-full h-full object-cover group-hover:scale-105 transition duration-500" 
                    />
                    <span className="absolute top-3 left-3 bg-[#1B4332] text-white text-[10px] font-black px-2.5 py-1 rounded-full uppercase tracking-wider">
                      {product.badge}
                    </span>
                    <span className="absolute top-3 right-3 bg-white/95 backdrop-blur-md text-[#1B4332] text-xs font-bold px-2 py-0.5 rounded-md flex items-center space-x-1 shadow">
                      <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                      <span>{product.rating}</span>
                      <span className="text-[10px] text-[#78857B]">({product.reviews})</span>
                    </span>
                  </div>

                  <div className="p-5">
                    <span className="text-[11px] font-bold text-[#B76935] uppercase tracking-wider">{product.tag}</span>
                    <h3 className="font-serif font-bold text-lg text-[#1B4332] mt-1 leading-snug">{product.name}</h3>
                    <p className="text-xs text-[#6F7D72] mt-1 italic flex items-center space-x-1">
                      <Clock className="w-3 h-3 text-[#52B788]" />
                      <span>{product.shelfLife}</span>
                    </p>
                    <p className="text-xs text-[#4F5950] mt-2.5 leading-relaxed">{product.description}</p>

                    {/* Weight Pack Selector */}
                    <div className="mt-4">
                      <label className="text-[11px] font-bold text-[#3B473E] uppercase block mb-1.5">Choose Pack Size:</label>
                      <div className="flex flex-wrap gap-2">
                        {product.weightOptions.map((opt) => (
                          <button
                            key={opt.label}
                            onClick={() => handleWeightSelect(product.id, opt.price)}
                            className={`px-3 py-1 text-xs rounded-lg font-semibold border transition ${
                              currentPrice === opt.price
                                ? "border-[#1B4332] bg-[#E8F5E9] text-[#1B4332]"
                                : "border-[#D6CEC1] text-[#696155] hover:border-[#1B4332]"
                            }`}
                          >
                            {opt.label} - ₹{opt.price}
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* Micro Benefits Tag List */}
                    <div className="mt-4 flex flex-wrap gap-1.5">
                      {product.benefits.map((b, i) => (
                        <span key={i} className="text-[10px] bg-[#F2F7F2] text-[#245C3E] px-2 py-0.5 rounded-md font-semibold">
                          ✓ {b}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="p-5 pt-3 border-t border-[#F1EBE0] flex items-center justify-between bg-[#FDFCFB]">
                  <div>
                    <span className="text-2xl font-black font-serif text-[#1B4332]">₹{currentPrice}</span>
                    <span className="block text-[10px] text-[#7C877E]">Tax included</span>
                  </div>

                  <button 
                    onClick={() => addToCart(product)}
                    className="px-4 py-2.5 bg-[#1B4332] hover:bg-[#2D6A4F] text-white rounded-xl transition shadow flex items-center space-x-2 font-bold text-xs"
                  >
                    <Plus className="w-4 h-4" />
                    <span>Add to Basket</span>
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Nutrition & Health Science Highlights */}
      <section id="nutrition" className="py-20 bg-[#163326] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs uppercase tracking-widest text-[#95D5B2] font-black">Nutritional Gold standard</span>
            <h2 className="text-3xl sm:text-4xl font-serif font-extrabold text-white mt-1">
              Why Doctors & Fitness Trainers Recommend Milky Mushrooms
            </h2>
            <p className="text-[#C4D9C8] mt-3 text-sm sm:text-base">
              Naturally low in sodium, zero cholesterol, and exceptionally packed with bio-active compounds.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="bg-[#1F4333] p-6 rounded-2xl border border-[#2D6A4F]">
              <div className="w-12 h-12 rounded-xl bg-[#52B788]/20 text-[#74C69D] flex items-center justify-center mb-4">
                <Flame className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-serif font-bold text-white">High Bio-Protein</h3>
              <p className="text-xs text-[#B7E4C7] mt-2 leading-relaxed">
                Contains up to 32% crude protein (on dry weight basis) with all nine essential amino acids necessary for muscle repair.
              </p>
            </div>

            <div className="bg-[#1F4333] p-6 rounded-2xl border border-[#2D6A4F]">
              <div className="w-12 h-12 rounded-xl bg-[#52B788]/20 text-[#74C69D] flex items-center justify-center mb-4">
                <Heart className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-serif font-bold text-white">Heart & Sugar Control</h3>
              <p className="text-xs text-[#B7E4C7] mt-2 leading-relaxed">
                Extremely low Glycemic Index (GI) and almost zero sugar. Ideal superfood for diabetic diets and cholesterol management.
              </p>
            </div>

            <div className="bg-[#1F4333] p-6 rounded-2xl border border-[#2D6A4F]">
              <div className="w-12 h-12 rounded-xl bg-[#52B788]/20 text-[#74C69D] flex items-center justify-center mb-4">
                <Sun className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-serif font-bold text-white">Natural Vitamin D</h3>
              <p className="text-xs text-[#B7E4C7] mt-2 leading-relaxed">
                Calocybe easily converts ergosterol to Vitamin D2 under sunlight, fighting prevalent urban vitamin D deficiencies.
              </p>
            </div>

            <div className="bg-[#1F4333] p-6 rounded-2xl border border-[#2D6A4F]">
              <div className="w-12 h-12 rounded-xl bg-[#52B788]/20 text-[#74C69D] flex items-center justify-center mb-4">
                <Sparkles className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-serif font-bold text-white">Prebiotic Gut Shield</h3>
              <p className="text-xs text-[#B7E4C7] mt-2 leading-relaxed">
                Loaded with chitin and non-digestible beta-glucans that stimulate beneficial intestinal bacteria for seamless digestion.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Culinary Inspirations / Recipe Corner */}
      <section id="recipes" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="text-xs uppercase tracking-widest text-[#B76935] font-black">Homestyle Kitchen Delights</span>
            <h2 className="text-3xl sm:text-4xl font-serif font-extrabold text-[#1B4332] mt-1">
              Cook with MilkyMitra
            </h2>
            <p className="text-[#596B5E] mt-2 text-sm">
              Because milky mushrooms don't get soggy, they absorb spices deeply while maintaining a hearty, tender texture.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {RECIPES.map((recipe, index) => (
              <div key={index} className="bg-[#FAF8F5] rounded-2xl p-6 border border-[#E6E0D5] hover:border-[#1B4332] transition">
                <div className="flex justify-between items-center mb-4">
                  <span className="text-[11px] font-bold bg-[#E8F5E9] text-[#1B4332] px-2.5 py-1 rounded-md">
                    {recipe.tag}
                  </span>
                  <div className="flex items-center space-x-1 text-xs text-[#7A7366] font-medium">
                    <Clock className="w-3.5 h-3.5" />
                    <span>{recipe.time}</span>
                  </div>
                </div>

                <h3 className="font-serif font-bold text-xl text-[#1B4332]">{recipe.title}</h3>
                <p className="text-xs text-[#5D574B] mt-3 leading-relaxed">{recipe.desc}</p>
                <div className="mt-5 pt-4 border-t border-[#EAE3D6] flex justify-between items-center text-xs">
                  <span className="font-semibold text-[#8C6D4F]">Difficulty: {recipe.difficulty}</span>
                  <button 
                    onClick={() => showToast(`Recipe card for ${recipe.title} downloaded!`)}
                    className="text-[#1B4332] font-bold hover:underline flex items-center space-x-1"
                  >
                    <span>Get Recipe</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* B2B / Bulk Wholesale Inquiries Section */}
      <section id="b2b" className="py-20 bg-[#F4EFE6] border-y border-[#E2DAD0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-6 space-y-5">
              <span className="text-xs uppercase tracking-widest text-[#B76935] font-black">Commercial Supply & Franchise</span>
              <h2 className="text-3xl sm:text-4xl font-serif font-extrabold text-[#1B4332]">
                Supply Milky Mushrooms for Your Restaurant, Supermarket, or Cloud Kitchen
              </h2>
              <p className="text-sm text-[#5C5549] leading-relaxed">
                Save food preparation costs and reduce spoilage losses. Our Milky Mushrooms guarantee 3–5 days extended cold storage without darkening, giving your kitchen consistent food cost margins.
              </p>

              <div className="space-y-3 pt-2">
                <div className="flex items-center space-x-3 text-sm text-[#243529]">
                  <Truck className="w-5 h-5 text-[#2D6A4F] flex-shrink-0" />
                  <span><strong>Consistent Scheduled Deliveries:</strong> 5kg, 10kg & 50kg crates direct from farm.</span>
                </div>
                <div className="flex items-center space-x-3 text-sm text-[#243529]">
                  <BadgePercent className="w-5 h-5 text-[#2D6A4F] flex-shrink-0" />
                  <span><strong>Volume Tier Pricing:</strong> Custom B2B contracts with locked seasonal rates.</span>
                </div>
                <div className="flex items-center space-x-3 text-sm text-[#243529]">
                  <ChefHat className="w-5 h-5 text-[#2D6A4F] flex-shrink-0" />
                  <span><strong>Custom Stem Pre-trimming:</strong> Ready-to-cook specs for kitchen chefs.</span>
                </div>
              </div>
            </div>

            {/* B2B Form Card */}
            <div className="lg:col-span-6">
              <div className="bg-white p-8 rounded-3xl shadow-lg border border-[#E3DBD0]">
                {b2bSubmitted ? (
                  <div className="text-center py-8 space-y-3">
                    <div className="w-16 h-16 bg-[#D8F3DC] text-[#1B4332] rounded-full flex items-center justify-center mx-auto">
                      <Check className="w-8 h-8 stroke-[3]" />
                    </div>
                    <h3 className="font-serif font-bold text-2xl text-[#1B4332]">Inquiry Received!</h3>
                    <p className="text-xs text-[#526356] max-w-sm mx-auto">
                      Our commercial supply manager will contact you within 4 hours with our wholesale catalog and sample schedule.
                    </p>
                    <button 
                      onClick={() => setB2bSubmitted(false)}
                      className="mt-4 text-xs font-bold text-[#1B4332] underline"
                    >
                      Submit another inquiry
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleB2bSubmit} className="space-y-4">
                    <h3 className="font-serif font-bold text-xl text-[#1B4332]">Request Wholesale Rate Sheet</h3>
                    
                    <div>
                      <label className="text-xs font-bold text-[#443E35] block mb-1">Your Full Name or Company</label>
                      <input 
                        type="text" 
                        required
                        value={b2bForm.name}
                        onChange={(e) => setB2bForm({ ...b2bForm, name: e.target.value })}
                        placeholder="e.g. Radisson Hotels / Chef Anita"
                        className="w-full px-4 py-2.5 rounded-xl border border-[#D5CDBD] text-sm focus:outline-none focus:ring-2 focus:ring-[#1B4332]"
                      />
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="text-xs font-bold text-[#443E35] block mb-1">WhatsApp / Phone Number</label>
                        <input 
                          type="tel" 
                          required
                          value={b2bForm.phone}
                          onChange={(e) => setB2bForm({ ...b2bForm, phone: e.target.value })}
                          placeholder="+91 98765 43210"
                          className="w-full px-4 py-2.5 rounded-xl border border-[#D5CDBD] text-sm focus:outline-none focus:ring-2 focus:ring-[#1B4332]"
                        />
                      </div>
                      <div>
                        <label className="text-xs font-bold text-[#443E35] block mb-1">Delivery City</label>
                        <input 
                          type="text" 
                          required
                          value={b2bForm.city}
                          onChange={(e) => setB2bForm({ ...b2bForm, city: e.target.value })}
                          placeholder="e.g. Bengaluru, Hyderabad, Delhi NCR"
                          className="w-full px-4 py-2.5 rounded-xl border border-[#D5CDBD] text-sm focus:outline-none focus:ring-2 focus:ring-[#1B4332]"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="text-xs font-bold text-[#443E35] block mb-1">Business Type</label>
                        <select 
                          value={b2bForm.businessType}
                          onChange={(e) => setB2bForm({ ...b2bForm, businessType: e.target.value })}
                          className="w-full px-4 py-2.5 rounded-xl border border-[#D5CDBD] text-sm focus:outline-none focus:ring-2 focus:ring-[#1B4332]"
                        >
                          <option>Hotel / Fine Dining</option>
                          <option>Cloud Kitchen / Caterer</option>
                          <option>Organic Supermarket / Retailer</option>
                          <option>Mushroom Spawn Reseller</option>
                        </select>
                      </div>
                      <div>
                        <label className="text-xs font-bold text-[#443E35] block mb-1">Estimated Volume (Weekly)</label>
                        <select 
                          value={b2bForm.volume}
                          onChange={(e) => setB2bForm({ ...b2bForm, volume: e.target.value })}
                          className="w-full px-4 py-2.5 rounded-xl border border-[#D5CDBD] text-sm focus:outline-none focus:ring-2 focus:ring-[#1B4332]"
                        >
                          <option>10 - 25 kg / week</option>
                          <option>25 - 50 kg / week</option>
                          <option>100+ kg / week (Commercial)</option>
                          <option>Spawn / Spawn Bags in Bulk</option>
                        </select>
                      </div>
                    </div>

                    <button 
                      type="submit"
                      className="w-full py-3.5 bg-[#1B4332] hover:bg-[#2D6A4F] text-white rounded-xl font-bold text-sm transition shadow-lg shadow-[#1B4332]/25 mt-2"
                    >
                      Get Instant B2B Quote & Free Samples
                    </button>
                  </form>
                )}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* FAQ Accordion */}
      <section id="faq" className="py-20 max-w-4xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-12">
          <span className="text-xs uppercase tracking-widest text-[#B76935] font-black">Clarifications & Guidance</span>
          <h2 className="text-3xl font-serif font-extrabold text-[#1B4332] mt-1">
            Frequently Asked Questions
          </h2>
        </div>

        <div className="space-y-4">
          {FAQS.map((faq, index) => {
            const isOpen = openFaq === index;
            return (
              <div 
                key={index} 
                className="bg-white rounded-2xl border border-[#E7E1D6] overflow-hidden shadow-sm"
              >
                <button
                  onClick={() => setOpenFaq(isOpen ? -1 : index)}
                  className="w-full text-left px-6 py-5 flex items-center justify-between font-serif font-bold text-base sm:text-lg text-[#1B4332] hover:bg-[#FAF8F5]"
                >
                  <span>{faq.q}</span>
                  <ChevronDown className={`w-5 h-5 text-[#887F72] transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`} />
                </button>
                {isOpen && (
                  <div className="px-6 pb-6 text-sm text-[#595246] leading-relaxed border-t border-[#F2ECE2] pt-3">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </section>

      {/* Slide-out Cart Drawer */}
      {isCartOpen && (
        <div className="fixed inset-0 z-50 overflow-hidden bg-black/60 backdrop-blur-sm flex justify-end">
          <div className="w-full max-w-md bg-white h-full shadow-2xl flex flex-col animate-slide-left">
            <div className="p-5 border-b border-[#EAE3D6] flex items-center justify-between bg-[#FDFBF7]">
              <div className="flex items-center space-x-2">
                <ShoppingBag className="w-5 h-5 text-[#1B4332]" />
                <h3 className="font-serif font-bold text-lg text-[#1B4332]">Your Fresh Cart ({cartItemCount})</h3>
              </div>
              <button 
                onClick={() => setIsCartOpen(false)}
                className="p-2 rounded-full hover:bg-[#EAE3D6] text-[#6E685C]"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Free Shipping Progress Indicator */}
            <div className="bg-[#E8F5E9] p-3 text-xs border-b border-[#D8F3DC] text-[#1B4332]">
              {amountNeededForFreeShip === 0 ? (
                <div className="flex items-center space-x-1.5 font-bold">
                  <CheckCircle2 className="w-4 h-4 text-[#2D6A4F]" />
                  <span>Congratulations! You qualify for Free Express Shipping!</span>
                </div>
              ) : (
                <div>
                  <div className="flex justify-between font-semibold mb-1">
                    <span>Add <strong>₹{amountNeededForFreeShip}</strong> more for Free Shipping</span>
                    <span>₹{cartTotal} / ₹{freeShippingThreshold}</span>
                  </div>
                  <div className="w-full bg-[#C2E7C6] h-1.5 rounded-full overflow-hidden">
                    <div 
                      className="bg-[#2D6A4F] h-full transition-all duration-300"
                      style={{ width: `${Math.min(100, (cartTotal / freeShippingThreshold) * 100)}%` }}
                    ></div>
                  </div>
                </div>
              )}
            </div>

            {/* Cart Items List */}
            <div className="flex-1 overflow-y-auto p-5 space-y-4">
              {cart.length === 0 ? (
                <div className="h-full flex flex-col items-center justify-center text-center text-[#7F796E]">
                  <Sprout className="w-12 h-12 text-[#B8AE9D] mb-3 stroke-1" />
                  <p className="font-serif font-bold text-lg text-[#1B4332]">Your basket is empty</p>
                  <p className="text-xs text-[#8A8478] mt-1 max-w-xs">
                    Treat your kitchen to crisp, pure white milky mushrooms harvested this morning!
                  </p>
                </div>
              ) : (
                cart.map(item => (
                  <div key={item.cartItemId} className="flex space-x-3 p-3 bg-[#FAF8F5] rounded-xl border border-[#EBE4D8]">
                    <img src={item.image} alt={item.name} className="w-16 h-16 rounded-lg object-cover" />
                    <div className="flex-1 flex flex-col justify-between">
                      <div>
                        <h4 className="font-serif font-bold text-xs sm:text-sm text-[#1B4332] line-clamp-1">{item.name}</h4>
                        <span className="text-[11px] font-semibold text-[#B76935]">{item.weightLabel}</span>
                        <span className="text-xs text-[#7F8A81] ml-2">₹{item.price}</span>
                      </div>
                      <div className="flex items-center justify-between mt-2">
                        <div className="flex items-center border border-[#DDD5C7] rounded-lg bg-white">
                          <button 
                            onClick={() => updateQuantity(item.cartItemId, -1)}
                            className="p-1 hover:bg-[#F2ECE1] rounded-l"
                          >
                            <Minus className="w-3 h-3 text-[#5C574E]" />
                          </button>
                          <span className="px-2.5 text-xs font-bold">{item.qty}</span>
                          <button 
                            onClick={() => updateQuantity(item.cartItemId, 1)}
                            className="p-1 hover:bg-[#F2ECE1] rounded-r"
                          >
                            <Plus className="w-3 h-3 text-[#5C574E]" />
                          </button>
                        </div>
                        <span className="text-xs font-bold text-[#1B4332]">
                          ₹{item.price * item.qty}
                        </span>
                      </div>
                    </div>
                  </div>
                ))
              )}
            </div>

            {/* Cart Footer */}
            {cart.length > 0 && (
              <div className="p-5 border-t border-[#EAE3D6] bg-[#FDFBF7] space-y-3">
                <div className="space-y-1.5 text-xs">
                  <div className="flex justify-between text-[#686358]">
                    <span>Items Subtotal</span>
                    <span>₹{cartTotal}</span>
                  </div>
                  <div className="flex justify-between text-[#686358]">
                    <span>Farm-Direct Chilled Delivery</span>
                    <span>{cartTotal >= freeShippingThreshold ? <span className="text-[#2D6A4F] font-bold">FREE</span> : "₹50"}</span>
                  </div>
                  <div className="flex justify-between font-serif font-bold text-base text-[#1B4332] pt-2 border-t border-[#EAE3D6]">
                    <span>Grand Total</span>
                    <span>₹{cartTotal + (cartTotal >= freeShippingThreshold ? 0 : 50)}</span>
                  </div>
                </div>

                <button 
                  onClick={() => setIsCheckoutModalOpen(true)}
                  className="w-full py-3.5 rounded-xl bg-[#1B4332] hover:bg-[#2D6A4F] text-white font-bold text-sm transition shadow-lg shadow-[#1B4332]/20 flex items-center justify-center space-x-2"
                >
                  <span>Proceed to Express Checkout</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
                <p className="text-[10px] text-center text-[#8C8578]">
                  🌿 Packed in breathable eco-trays. Dispatched with chilled gel pads.
                </p>
              </div>
            )}
          </div>
        </div>
      )}

      {/* Checkout Simulator Modal */}
      {isCheckoutModalOpen && (
        <div className="fixed inset-0 z-50 overflow-hidden bg-black/60 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-white max-w-lg w-full rounded-3xl p-6 sm:p-8 shadow-2xl relative border border-[#E7DFD0]">
            <button 
              onClick={() => setIsCheckoutModalOpen(false)}
              className="absolute top-5 right-5 p-1.5 rounded-full hover:bg-gray-100 text-gray-500"
            >
              <X className="w-5 h-5" />
            </button>

            {checkoutSuccess ? (
              <div className="text-center py-8 space-y-3">
                <div className="w-16 h-16 bg-[#D8F3DC] text-[#1B4332] rounded-full flex items-center justify-center mx-auto">
                  <Check className="w-8 h-8 stroke-[3]" />
                </div>
                <h3 className="font-serif font-bold text-2xl text-[#1B4332]">Payment Successful!</h3>
                <p className="text-xs text-[#526356]">
                  Order #MM-{Math.floor(100000 + Math.random() * 900000)} has been sent to our harvest station. We will WhatsApp your dispatch details.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSimulatePayment} className="space-y-4">
                <div className="border-b border-[#EDE6DA] pb-3">
                  <h3 className="font-serif font-bold text-xl text-[#1B4332]">Complete MilkyMitra Order</h3>
                  <p className="text-xs text-[#7A7366]">Amount Payable: <strong>₹{cartTotal + (cartTotal >= freeShippingThreshold ? 0 : 50)}</strong></p>
                </div>

                <div>
                  <label className="text-xs font-bold text-[#443E35] block mb-1">Delivery Address & Pincode</label>
                  <textarea 
                    required 
                    rows={2}
                    placeholder="Flat/House No, Street, Landmark, Pincode"
                    className="w-full px-3.5 py-2 rounded-xl border border-[#D5CDBD] text-xs focus:ring-2 focus:ring-[#1B4332] focus:outline-none"
                  ></textarea>
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="text-xs font-bold text-[#443E35] block mb-1">Your Name</label>
                    <input 
                      type="text" 
                      required 
                      placeholder="Receiver's Name"
                      className="w-full px-3 py-2 rounded-xl border border-[#D5CDBD] text-xs focus:ring-2 focus:ring-[#1B4332] focus:outline-none"
                    />
                  </div>
                  <div>
                    <label className="text-xs font-bold text-[#443E35] block mb-1">WhatsApp Mobile</label>
                    <input 
                      type="tel" 
                      required 
                      placeholder="For tracking updates"
                      className="w-full px-3 py-2 rounded-xl border border-[#D5CDBD] text-xs focus:ring-2 focus:ring-[#1B4332] focus:outline-none"
                    />
                  </div>
                </div>

                <div>
                  <label className="text-xs font-bold text-[#443E35] block mb-1.5">Select Payment Option</label>
                  <div className="space-y-2">
                    <label className="flex items-center space-x-2.5 p-2.5 border rounded-xl cursor-pointer hover:bg-[#F8F5EE]">
                      <input type="radio" name="payment" defaultChecked className="text-[#1B4332]" />
                      <span className="text-xs font-bold text-[#1B4332]">UPI (Google Pay, PhonePe, Paytm, BHIM)</span>
                    </label>
                    <label className="flex items-center space-x-2.5 p-2.5 border rounded-xl cursor-pointer hover:bg-[#F8F5EE]">
                      <input type="radio" name="payment" className="text-[#1B4332]" />
                      <span className="text-xs font-bold text-[#1B4332]">Cash on Delivery (Available in Metro Cities)</span>
                    </label>
                  </div>
                </div>

                <button 
                  type="submit"
                  className="w-full py-3 rounded-xl bg-[#1B4332] hover:bg-[#2D6A4F] text-white font-bold text-sm shadow-md transition"
                >
                  Pay ₹{cartTotal + (cartTotal >= freeShippingThreshold ? 0 : 50)} & Confirm
                </button>
              </form>
            )}
          </div>
        </div>
      )}

      {/* Footer */}
      <footer className="bg-[#0F1E16] text-[#CBD9CF] pt-16 pb-12 border-t border-[#1C3627]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-4 gap-10">
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <Sprout className="w-6 h-6 text-[#52B788]" />
              <span className="text-xl font-serif font-black text-white tracking-tight">Milky<span className="text-[#52B788]">Mitra</span></span>
            </div>
            <p className="text-xs text-[#95A89B] leading-relaxed">
              Pioneering the commercial cultivation and distribution of pure white, protein-rich Milky Mushrooms (*Calocybe indica*) across Indian homes and commercial kitchens.
            </p>
            <div className="flex space-x-3 pt-2">
              <a href="#" className="w-8 h-8 rounded-full bg-[#183324] hover:bg-[#52B788] hover:text-black flex items-center justify-center transition text-white">
                <Instagram className="w-4 h-4" />
              </a>
              <a href="#" className="w-8 h-8 rounded-full bg-[#183324] hover:bg-[#52B788] hover:text-black flex items-center justify-center transition text-white">
                <Facebook className="w-4 h-4" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-serif font-bold text-white mb-4 text-xs tracking-wider uppercase">Direct Harvest Links</h4>
            <ul className="space-y-2 text-xs text-[#A9BCB0]">
              <li><a href="#store" className="hover:text-white transition">Fresh Calocybe 250g/500g/1kg</a></li>
              <li><a href="#store" className="hover:text-white transition">Sun-Dried Mushroom Slices</a></li>
              <li><a href="#store" className="hover:text-white transition">Spiced Homestyle Achar / Relish</a></li>
              <li><a href="#store" className="hover:text-white transition">High-Protein Mushroom Powder</a></li>
              <li><a href="#store" className="hover:text-white transition">Tropical Spawn & Grow Kits</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-serif font-bold text-white mb-4 text-xs tracking-wider uppercase">Farm & Central Packhouse</h4>
            <ul className="space-y-2.5 text-xs text-[#A9BCB0]">
              <li className="flex items-start space-x-2">
                <MapPin className="w-4 h-4 text-[#52B788] flex-shrink-0 mt-0.5" />
                <span>Survey No. 48, MilkyMitra Agro Tech Park, Green Valley Farm Road, India</span>
              </li>
              <li className="flex items-center space-x-2">
                <Mail className="w-4 h-4 text-[#52B788] flex-shrink-0" />
                <span>orders@milkymitra.com</span>
              </li>
              <li className="flex items-center space-x-2">
                <Phone className="w-4 h-4 text-[#52B788] flex-shrink-0" />
                <span>+91 98450-MILKY (Mon-Sat, 8am-7pm)</span>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-serif font-bold text-white mb-4 text-xs tracking-wider uppercase">Compliance & Hygiene</h4>
            <p className="text-xs text-[#95A89B] leading-relaxed">
              Every crop cycle follows strict pasteurization, bio-security measures, zero synthetic pesticides, and FSSAI standards.
            </p>
            <div className="mt-4 p-3 bg-[#183324] rounded-xl border border-[#274F39] text-[11px] text-[#A7D1B5] font-semibold">
              🇮🇳 Made in India • 100% Vegetarian & Vegan Superfood
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 pt-6 border-t border-[#1C3627] text-xs text-[#6F8275] flex flex-col sm:flex-row justify-between items-center space-y-3 sm:space-y-0">
          <p>© {new Date().getFullYear()} MilkyMitra Agro Foods Pvt. Ltd. All rights reserved.</p>
          <div className="flex space-x-6">
            <a href="#" className="hover:text-white transition">Privacy Policy</a>
            <a href="#" className="hover:text-white transition">Terms of Harvest & Delivery</a>
            <a href="#" className="hover:text-white transition">FSSAI License #1002400000000</a>
          </div>
        </div>
      </footer>
    </div>
  );
}