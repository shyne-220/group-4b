// ===== SALON COMPANY INFO =====
const salonInfo = {
    name: "RoyalTouch Beauty Salon",
    description: "Your Premier Destination for Luxury Beauty & Wellness Services",
    aboutText: "RoyalTouch Beauty Salon is your one-stop destination for premium beauty and wellness services. With over 10 years of excellence, we pride ourselves on delivering exceptional results and unforgettable experiences to our valued clients.",
    contact: {
        phone: "(555) 123-4567",
        email: "info@royaltouch.com",
        address: "123 Beauty Lane, Glamour City",
        hours: {
            monday: "9:00 AM - 6:00 PM",
            tuesday: "9:00 AM - 6:00 PM",
            wednesday: "9:00 AM - 6:00 PM",
            thursday: "9:00 AM - 8:00 PM",
            friday: "9:00 AM - 8:00 PM",
            saturday: "10:00 AM - 6:00 PM",
            sunday: "12:00 PM - 5:00 PM"
        }
    },
    colors: {
        primary: "#5a4a7d",
        accent: "#d4af37",
        secondary: "#3d2f52",
        lightBg: "#f9f7f4"
    }
};

// ===== SERVICES DATABASE (DYNAMIC) =====
let servicesDatabase = JSON.parse(localStorage.getItem('servicesDatabase')) || [
    {
        id: 1,
        name: 'Manicure',
        description: 'Professional nail care and beautiful designs',
        price: 25,
        duration: 45,
        category: 'nails',
        icon: 'fa-hand-sparkles',
        image: 'manicure.jpg',
        available: true
    },
    {
        id: 2,
        name: 'Pedicure',
        description: 'Relaxing foot care and stylish treatments',
        price: 35,
        duration: 60,
        category: 'feet',
        icon: 'fa-spa',
        image: 'pedicure.jpg',
        available: true
    },
    {
        id: 3,
        name: 'Hair Styling',
        description: 'Professional cutting and styling expertise',
        price: 50,
        duration: 90,
        category: 'hair',
        icon: 'fa-scissors',
        image: 'hairstyling.jpg',
        available: true
    },
    {
        id: 4,
        name: 'Hair Coloring',
        description: 'Full or partial coloring with premium dyes',
        price: 60,
        duration: 120,
        category: 'hair',
        icon: 'fa-palette',
        image: 'haircolouring.jpg',
        available: true
    },
    {
        id: 5,
        name: 'Facial Treatment',
        description: 'Rejuvenating facials for all skin types',
        price: 45,
        duration: 60,
        category: 'facial',
        icon: 'fa-face-smile',
        image: 'facials.jpg',
        available: true
    },
    {
        id: 6,
        name: 'Massage Therapy',
        description: 'Relaxing and therapeutic massage sessions',
        price: 55,
        duration: 60,
        category: 'massage',
        icon: 'fa-hands',
        image: 'massage.jpg',
        available: true
    }
];

// ===== HAIR GALLERY DATABASE (DYNAMIC) =====
let hairGalleryDatabase = JSON.parse(localStorage.getItem('hairGalleryDatabase')) || [
    {
        id: 1,
        name: 'Classic Bob',
        length: 'Short',
        category: ['short', 'straight'],
        features: ['Professional', 'Timeless', 'Easy Maintenance'],
        description: 'A chic and classic short hairstyle that frames the face beautifully. Perfect for the modern professional.',
        price: 45,
        icon: '✂️',
        difficulty: 'Easy',
        maintenance: 'Low'
    },
    {
        id: 2,
        name: 'Pixie Cut',
        length: 'Short',
        category: ['short'],
        features: ['Bold', 'Trendy', 'Low Maintenance'],
        description: 'A bold and daring short cut that showcases your features. Perfect for confident individuals.',
        price: 40,
        icon: '✨',
        difficulty: 'Medium',
        maintenance: 'Low'
    },
    {
        id: 3,
        name: 'Textured Waves',
        length: 'Medium',
        category: ['medium', 'curly'],
        features: ['Voluminous', 'Textured', 'Bohemian'],
        description: 'Soft, flowing waves that add texture and movement. Great for any face shape.',
        price: 55,
        icon: '🌊',
        difficulty: 'Medium',
        maintenance: 'Medium'
    },
    {
        id: 4,
        name: 'Sleek Lob',
        length: 'Medium',
        category: ['medium', 'straight'],
        features: ['Elegant', 'Versatile', 'Modern'],
        description: 'A modern take on the bob, hitting just below the shoulders. Perfect for a polished look.',
        price: 50,
        icon: '💎',
        difficulty: 'Easy',
        maintenance: 'Low'
    },
    {
        id: 5,
        name: 'Beach Waves',
        length: 'Long',
        category: ['long', 'curly'],
        features: ['Romantic', 'Effortless', 'Summer Vibes'],
        description: 'Loose, romantic waves perfect for a beach-inspired look. Timeless and flattering.',
        price: 65,
        icon: '🏖️',
        difficulty: 'Medium',
        maintenance: 'Medium'
    },
    {
        id: 6,
        name: 'Silk Straight',
        length: 'Long',
        category: ['long', 'straight'],
        features: ['Sleek', 'Luxurious', 'Shiny'],
        description: 'Smooth, glossy long hair that flows beautifully. Perfect for an elegant appearance.',
        price: 70,
        icon: '✨',
        difficulty: 'Easy',
        maintenance: 'Medium'
    },
    {
        id: 7,
        name: 'Curly Crown',
        length: 'Medium',
        category: ['medium', 'curly'],
        features: ['Playful', 'Voluminous', 'Textured'],
        description: 'Defined curls that create a beautiful crown of texture. Celebrates natural curls.',
        price: 60,
        icon: '👑',
        difficulty: 'Hard',
        maintenance: 'High'
    },
    {
        id: 8,
        name: 'Sideswept Bangs',
        length: 'Short',
        category: ['short'],
        features: ['Flattering', 'Chic', 'Face-Framing'],
        description: 'Short hair with stylish sideswept bangs for a trendy, modern look.',
        price: 50,
        icon: '😎',
        difficulty: 'Medium',
        maintenance: 'Low'
    },
    {
        id: 9,
        name: 'Balayage Waves',
        length: 'Long',
        category: ['long', 'curly'],
        features: ['Dimensional', 'Highlight', 'Sun-Kissed'],
        description: 'Long flowing waves with beautiful balayage highlights. Perfect for a sun-kissed glow.',
        price: 80,
        icon: '☀️',
        difficulty: 'Hard',
        maintenance: 'Medium'
    },
    {
        id: 10,
        name: 'Shag Cut',
        length: 'Medium',
        category: ['medium'],
        features: ['Edgy', 'Layered', 'Rock & Roll'],
        description: 'A layered, textured cut that adds movement and edge. Great for a rock & roll vibe.',
        price: 55,
        icon: '🎸',
        difficulty: 'Medium',
        maintenance: 'Medium'
    },
    {
        id: 11,
        name: 'Space Buns',
        length: 'Short',
        category: ['short'],
        features: ['Fun', 'Playful', 'Trendy'],
        description: 'Cute and fun double buns style. Perfect for a bold, playful statement.',
        price: 35,
        icon: '🎀',
        difficulty: 'Easy',
        maintenance: 'Low'
    },
    {
        id: 12,
        name: 'Mermaid Waves',
        length: 'Long',
        category: ['long', 'curly'],
        features: ['Glamorous', 'Voluminous', 'Magical'],
        description: 'Long, voluminous waves that cascade beautifully. Perfect for a glamorous look.',
        price: 75,
        icon: '🧜‍♀️',
        difficulty: 'Medium',
        maintenance: 'High'
    }
];

// ===== INVENTORY DATABASE =====
let inventoryDatabase = JSON.parse(localStorage.getItem('inventoryDatabase')) || [
    {
        id: 1,
        name: 'Hair Dye - Black',
        category: 'Hair Products',
        quantity: 45,
        reorderLevel: 10,
        cost: 8.50,
        supplier: 'Premium Beauty Supplies',
        lastRestocked: "2026-03-01T10:00:00Z",
        expiryDate: "2027-03-01"
    },
    {
        id: 2,
        name: 'Nail Polish - Red',
        category: 'Nail Products',
        quantity: 120,
        reorderLevel: 20,
        cost: 4.99,
        supplier: 'Beauty Warehouse',
        lastRestocked: "2026-02-15T10:00:00Z",
        expiryDate: "2027-02-15"
    },
    {
        id: 3,
        name: 'Massage Oil',
        category: 'Massage Supplies',
        quantity: 30,
        reorderLevel: 5,
        cost: 15.00,
        supplier: 'Natural Beauty Co',
        lastRestocked: "2026-03-05T10:00:00Z",
        expiryDate: "2027-03-05"
    },
    {
        id: 4,
        name: 'Facial Cream',
        category: 'Skincare',
        quantity: 50,
        reorderLevel: 15,
        cost: 12.00,
        supplier: 'Dermal Care',
        lastRestocked: "2026-02-20T10:00:00Z",
        expiryDate: "2027-02-20"
    }
];

// ===== STAFF DATABASE =====
const staffDatabase = [
    {
        id: 1,
        name: 'Sarah Johnson',
        position: 'Lead Stylist',
        email: 'sarah@royaltouch.com',
        phone: '(555) 234-5678',
        specialty: 'Hair Styling & Coloring',
        yearsOfExperience: 8,
        rating: 4.9
    },
    {
        id: 2,
        name: 'Emma Williams',
        position: 'Nail Technician',
        email: 'emma@royaltouch.com',
        phone: '(555) 345-6789',
        specialty: 'Manicure & Pedicure',
        yearsOfExperience: 5,
        rating: 4.8
    },
    {
        id: 3,
        name: 'Lisa Chen',
        position: 'Esthetician',
        email: 'lisa@royaltouch.com',
        phone: '(555) 456-7890',
        specialty: 'Facial Treatments',
        yearsOfExperience: 6,
        rating: 4.9
    },
    {
        id: 4,
        name: 'Maya Patel',
        position: 'Massage Therapist',
        email: 'maya@royaltouch.com',
        phone: '(555) 567-8901',
        specialty: 'Massage Therapy',
        yearsOfExperience: 7,
        rating: 4.95
    }
];

// ===== SAVE SERVICES TO LOCALSTORAGE =====
function saveServices() {
    localStorage.setItem('servicesDatabase', JSON.stringify(servicesDatabase));
}

// ===== SAVE HAIR GALLERY TO LOCALSTORAGE =====
function saveHairGallery() {
    localStorage.setItem('hairGalleryDatabase', JSON.stringify(hairGalleryDatabase));
}

// ===== SAVE INVENTORY TO LOCALSTORAGE =====
function saveInventory() {
    localStorage.setItem('inventoryDatabase', JSON.stringify(inventoryDatabase));
}
