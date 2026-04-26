export default {
  nav: {
    home: 'Home',
    philosophy: 'Philosophy',
    ecosystem: 'Ecosystem',
    technology: 'Technology',
    enterprise: 'Enterprise',
  },
  hero: {
    tagline: 'Innovation Hub',
    slogan: 'Where Technology Meets Ambition',
    description: 'We build smart digital solutions that empower businesses to scale and thrive in the modern digital landscape.',
    cta: 'Discover Our Smart Solutions',
  },
  philosophy: {
    title: 'Our Philosophy',
    subtitle: 'We don\'t just write code — we engineer ecosystems.',
    items: {
      ai: {
        title: 'AI-Powered',
        description: 'Integrating artificial intelligence at the core of every solution we build.',
      },
      grpc: {
        title: 'gRPC & Real-time',
        description: 'High-performance communication protocols for seamless real-time experiences.',
      },
      multiTenancy: {
        title: 'Multi-Tenancy',
        description: 'Scalable architecture where each tenant operates in complete isolation.',
      },
      innovation: {
        title: 'Innovation First',
        description: 'Every line of code is an opportunity to push boundaries and reimagine what\'s possible.',
      },
    },
  },
  ecosystem: {
    title: 'Our Ecosystem',
    subtitle: 'Haritna Technologies is the umbrella — our products are the innovation.',
    haritna: {
      title: 'Haritna Technologies',
      description: 'The innovation hub that incubates, develops, and launches smart digital products for the Arab world and beyond.',
    },
    dukkan: {
      title: 'Dukkan',
      badge: 'Flagship Product',
      description: 'A comprehensive e-commerce platform with 4 dedicated portals.',
      cta: 'Explore Dukkan',
      portals: {
        company: 'Company Portal',
        companyDesc: 'Full business management with products, orders, branches, and analytics.',
        staff: 'Staff Portal',
        staffDesc: 'Team management, role-based access, and operational tools.',
        driver: 'Driver Portal',
        driverDesc: 'Delivery management with real-time tracking and route optimization.',
        shop: 'Shop Portal',
        shopDesc: 'Customer-facing storefront with seamless shopping experience.',
      },
    },
  },
  tech: {
    title: 'Technical Excellence',
    subtitle: 'Built with the technologies that define tomorrow.',
    items: {
      cleanCode: {
        title: 'Clean Architecture',
        description: 'Modular monolith design with clear boundaries, repository pattern, and service layers.',
      },
      apiFirst: {
        title: 'API-First Design',
        description: '224+ RESTful endpoints with comprehensive validation and typed resources.',
      },
      performance: {
        title: 'High Performance',
        description: 'Optimized queries, smart caching, and efficient database-per-tenant isolation.',
      },
      ai: {
        title: 'AI Integration',
        description: 'Smart recommendations, automated workflows, and intelligent data processing.',
      },
    },
  },
  enterprise: {
    title: 'Enterprise Ready',
    subtitle: 'Built for scale. Designed for trust.',
    items: {
      isolation: {
        title: 'Data Isolation',
        description: 'Complete database-per-tenant isolation ensures your data never mixes with others.',
      },
      scalability: {
        title: 'Infinite Scalability',
        description: 'Architecture designed to grow from startup to enterprise without rewrites.',
      },
      branding: {
        title: 'Custom Branding',
        description: 'Every tenant gets their own identity — logos, colors, landing pages, and more.',
      },
      security: {
        title: 'Security First',
        description: 'Multi-guard authentication, role-based access control, and encrypted communications.',
      },
    },
  },
  footer: {
    rights: '© {year} Haritna Technologies. All rights reserved.',
    tagline: 'Innovating the future, one product at a time.',
  },
  theme: {
    dark: 'Dark Mode',
    light: 'Light Mode',
  },
  language: {
    ar: 'العربية',
    en: 'English',
  },
  guide: {
    title: 'How to use Dukkan',
    subtitle:
      'A complete guide to every part of the platform — from creating your account to managing orders and deliveries.',
    toc_register: 'Create Account',
    toc_company: 'Company Setup',
    toc_branches: 'Branches',
    toc_categories: 'Categories',
    toc_products: 'Products',
    toc_shop: 'Shop & Cart',
    toc_orders: 'Orders',
    toc_company_mgmt: 'Company Management',
    toc_social: 'Social',
    toc_staff: 'Staff Portal',
    toc_delivery: 'Delivery Portal',
    portal_public: 'Public',
    portal_customer: 'Customer Portal',
    portal_staff: 'Staff Portal',
    portal_delivery: 'Delivery Portal',
    portal_shop: 'Shop',
    good_to_know: 'Good to know',
    get_started: 'Get Started',
    by_haretna: 'Guide by Haretna',
    register_title: 'Create your account',
    register_desc:
      'You can sign up as a customer (to create a store and sell) or as a delivery driver. It takes about a minute.',
    register_step1: 'Open the sign-up page',
    register_step1_desc:
      "Go to /register. At the top you'll see two tabs — Customer and Delivery. Pick the one that fits you.",
    register_step2: 'Fill in your details',
    register_field_name: 'Your real name. Other users and companies will see this.',
    register_field_phone:
      'Mobile number with country code (+966 by default). Used for contact and delivery.',
    register_field_email: "Your login. Make sure you can access it — you'll verify it next.",
    register_field_password:
      'At least one uppercase, one lowercase, and one number (e.g. MyPass1).',
    register_step3: 'Verify with OTP',
    register_step3_desc:
      "Tap 'Send OTP' next to the email field. A 6-digit code will arrive in your inbox. Enter it in the OTP field and tap 'Sign Up'.",
    register_tip:
      "The code expires after 5 minutes. Check spam if it doesn't arrive, or request a new one after the cooldown.",
    company_title: 'Create your company',
    company_desc:
      'After signing in, create your company so you can start adding products and receiving orders.',
    company_step1: 'Go to My Companies',
    company_step1_desc:
      "From the sidebar, open 'My Companies'. If you don't have one yet, tap the create button.",
    company_step2: 'Fill in company details',
    company_field_name:
      "Supports Arabic and English. Tap 'Add Language' for a second language. Shows in the shop and search.",
    company_field_desc: 'What your company does. Also bilingual.',
    company_field_phone: 'Company contact number. Visible on your public page.',
    company_field_logo: 'Square image. Shows in the shop header and product cards.',
    company_field_cover: "Wide banner at the top of your company's public page.",
    company_step3: 'Your company dashboard',
    company_step3_desc:
      "After creating, you'll land on the company dashboard. From here you can manage branches, products, categories, orders, members, and settings.",
    branches_title: 'Branches',
    branches_desc:
      'Each company needs at least one branch. Branches represent your physical locations — stock and delivery distance are calculated per branch.',
    branches_step1: 'Branches list',
    branches_step1_desc: "From your company dashboard, go to 'Branches' to see all your branches.",
    branches_step2: 'Create a branch',
    branches_field_name: "e.g. 'Main Branch' or 'Riyadh - Al Olaya'.",
    branches_field_phone: 'Branch-specific contact number.',
    branches_field_address: 'The full street address.',
    branches_field_map:
      'Tap the map to drop a pin. This is used to calculate delivery distance and fees for orders.',
    categories_title: 'Categories',
    categories_desc:
      'Categories help customers find products. You can create your own company categories, and there are also global categories available to all companies.',
    categories_step1: 'View categories',
    categories_step2: 'Create a category',
    categories_field_name:
      'Bilingual (Arabic + English). This is what customers see when filtering.',
    categories_field_parent:
      'Optional. Nest under another category to create a tree (e.g. Food > Bakery > Cakes).',
    categories_field_active: 'Toggle on to make it visible in the shop.',
    products_title: 'Add your products',
    products_desc:
      'Each product has a name, description, pricing tiers, stock settings, images, and categories. You can start with just a name and price, then fill in the rest later.',
    products_step1: 'Basic information',
    products_field_name:
      "Bilingual. Tap 'Add Language' for the second one. This is the title in the shop.",
    products_field_desc: 'What the product is, ingredients, materials, etc. Also bilingual.',
    products_field_sku: 'Optional internal tracking code (e.g. CAKE-001).',
    products_field_shipping: 'Toggle on if delivery fee should be waived for this product.',
    products_field_status: "'Draft' = hidden. 'Active' = visible in shop and purchasable.",
    products_step2: 'Stock settings',
    products_stock_unlimited: 'Always available. Good for digital or made-to-order items.',
    products_stock_limited:
      "Set quantity per branch. Shows 'Sold Out' when stock reaches zero. Tap 'Add Branch' and set the quantity for each.",
    products_step3: 'Pricing tiers',
    products_step3_desc: "Tap 'Add Price' to create pricing. You can have multiple tiers:",
    products_price_name: "Optional label like 'Regular' or 'Wholesale' (bilingual).",
    products_price_amount: 'Amount in your currency.',
    products_price_discount: 'Percentage or fixed amount off. Optional.',
    products_price_qty: 'e.g. set min=10 for a wholesale tier.',
    products_price_currency: "Defaults to your company's currency.",
    products_step4: 'Images, categories, and SEO',
    products_field_thumb: 'Main image. Shows in product cards and search.',
    products_field_gallery: 'Up to 10 extra images. Show on the product detail page.',
    products_field_cats: 'Tap category badges to assign. Customers filter by these in the shop.',
    products_field_seo: 'Optional meta title, description, and keywords for search engines.',
    products_tip:
      "Save as draft first, then activate after adding all details. Nothing shows in the shop until status is 'Active'.",
    shop_title: 'Browse, cart, and checkout',
    shop_desc:
      'The shop is the public storefront. Customers browse products, add to cart, and place orders with delivery.',
    shop_step1: 'Browse products',
    shop_step1_desc:
      'Open /shop to see all products. Use search, category filters, or sort by newest/price.',
    shop_step2: 'Add to cart',
    shop_step2_desc:
      "Tap a product to see details and prices. Pick a price tier, set quantity, and tap 'Add to Cart'.",
    shop_step3: 'Checkout',
    shop_step3_desc: "At checkout you'll need:",
    shop_field_address: 'Your street address.',
    shop_field_map: "Tap the map or use 'Get Location'. Determines delivery distance and cost.",
    shop_field_vehicle: 'Motorcycle, car, etc. Each has different price and time.',
    shop_field_notes: 'Optional instructions for the driver or store.',
    orders_title: 'Orders and tracking',
    orders_desc: "Track orders from placement to delivery. You'll get notifications at each stage.",
    orders_step1: 'Your orders',
    orders_step1_desc: "Open 'My Orders' to see all orders with status, date, and total.",
    orders_step2: 'Order stages',
    orders_status_pending: 'Just placed, waiting for the store.',
    orders_status_confirmed: 'Store accepted and will prepare it.',
    orders_status_processing: 'Being prepared.',
    orders_status_ready: 'Packed, waiting for driver pickup.',
    orders_status_delivering: 'Driver is on the way. Track on map.',
    orders_status_delivered: 'Done. You can leave reviews.',
    orders_step3: 'As a company: manage incoming orders',
    orders_step3_desc:
      "From your company dashboard, go to 'Orders'. You can confirm, process, mark ready, assign delivery, or cancel orders.",
    mgmt_title: 'Company management',
    mgmt_desc:
      'Beyond products and orders, you can manage team members, company settings, and your public page.',
    mgmt_step1: 'Team members',
    mgmt_step1_desc:
      'Invite people to help manage your company. Each member gets a role with specific permissions (view products, manage orders, etc.).',
    mgmt_step2: 'Company settings',
    mgmt_step2_desc: 'Update your company name, description, contact info, social links, and more.',
    mgmt_step3: 'Your profile',
    mgmt_step3_desc: 'Update your personal name, email, phone, and avatar from the profile page.',
    social_title: 'Social features',
    social_desc:
      'Follow companies, save products to your wishlist, react to products, and leave reviews after delivery.',
    social_step1: 'Wishlist',
    social_step1_desc:
      "Save products you're interested in. You can organize them into custom categories.",
    social_step2: 'Following',
    social_step2_desc:
      'Follow companies or other users to stay updated on their products and activity.',
    social_step3: 'Reactions and reviews',
    social_step3_desc:
      'React to products with like, love, or other reactions. After a delivered order, you can leave a 1-5 star review with a comment for the product, company, or delivery driver.',
    staff_title: 'Staff portal (platform management)',
    staff_desc:
      "The staff portal is for platform administrators. They manage all orders across all companies, delivery personnel, pricing rules, roles, and the app's landing page.",
    staff_step1: 'Dashboard',
    staff_step1_desc:
      'Overview of platform metrics — total orders, revenue, active companies, delivery stats.',
    staff_step2: 'Team and roles',
    staff_step2_desc:
      'Invite staff members by email and assign roles. Each role has specific permissions. Only the owner can create or edit roles.',
    staff_step3: 'Orders management',
    staff_step3_desc:
      'See all orders across all companies. Confirm, assign delivery drivers, track progress, and view order statistics.',
    staff_step4: 'Delivery management',
    staff_step4_desc:
      'Register delivery drivers, manage their vehicles, activate/deactivate them, track their location in real-time, and set delivery pricing rules per vehicle type.',
    staff_step5: 'Page builder',
    staff_step5_desc:
      "Design the app's landing page using 22 section types: hero banner, features grid, testimonials, pricing plans, product showcase, category grid, and more. Deploy, rollback, and manage versions.",
    delivery_title: 'Delivery portal',
    delivery_desc:
      'For delivery drivers. Accept orders, track your deliveries, manage vehicles, and see your earnings.',
    delivery_step1: 'Home and available orders',
    delivery_step1_desc:
      "Your home page shows quick stats and shortcuts. 'Available Orders' shows pending deliveries near you that you can accept.",
    delivery_step2: 'Order actions',
    delivery_step2_desc: 'For each order you can:',
    delivery_action_accept: 'Take this delivery.',
    delivery_action_reject: 'Pass on this one.',
    delivery_action_pickup: 'Confirm you picked up the order from the store.',
    delivery_action_deliver: 'Mark as delivered to the customer.',
    delivery_action_proof: 'Take a photo as proof of delivery.',
    delivery_step3: 'Statistics and history',
    delivery_step3_desc:
      'Track your earnings, completed deliveries, and performance metrics. View your full order history with filters by date and status.',
    landing_title: 'Landing Page',
    landing_desc:
      'The first thing visitors see. Customizable through the Page Builder with hero banners, feature grids, testimonials, and more.',
    product_detail_title: 'Product Details Page',
    product_detail_desc:
      'Customers see full product info — images, descriptions, prices, reviews, and an Add to Cart button.',
    company_public_title: 'Company Public Page',
    company_public_desc:
      'Each company has a public storefront page showing their logo, description, products, and categories. Customizable with the Page Builder.',
    order_detail_title: 'Order Details',
    order_detail_desc:
      'Full order information — items, quantities, prices, delivery address, status timeline, and tracking map.',
    category_tree_title: 'Category Tree View',
    category_tree_desc:
      'See your categories in a hierarchical tree. Drag to reorder, expand/collapse branches.',
    notifications_title: 'Notifications',
    notifications_desc:
      'Get notified about new orders, status changes, delivery updates, and team activity. Available in all portals.',
    chat_title: 'Chat & Messaging',
    chat_desc:
      'Communicate directly with customers, companies, or delivery drivers. Supports text messages and file attachments.',
    reviews_title: 'Reviews & Ratings',
    reviews_desc:
      'After delivery, customers can rate products, companies, and drivers from 1-5 stars with an optional comment. Ratings show on public profiles.',
    company_edit_title: 'Edit Company Profile',
    company_edit_desc:
      'Update your company name, description, phone, social links, and media anytime from the company detail page.',
    staff_roles_title: 'Roles & Permissions',
    staff_roles_desc:
      'Create custom roles with granular permissions. Control who can view orders, manage products, assign deliveries, edit roles, and more.',
    staff_order_detail_title: 'Order Management Detail',
    staff_order_detail_desc:
      'Staff can view full order details, change status, assign or reassign delivery drivers, add notes, upload documentation, and view the activity log.',
    staff_delivery_detail_title: 'Delivery Driver Profile',
    staff_delivery_detail_desc:
      'View driver details, assigned orders, vehicles, performance stats, and real-time location on the map.',
    delivery_current_title: 'Current Deliveries',
    delivery_current_desc:
      "Orders you've accepted and are currently delivering. Shows pickup location, customer address, and navigation.",
    delivery_history_title: 'Delivery History',
    delivery_history_desc:
      'All your completed, cancelled, and rejected deliveries with dates, amounts, and status.',
    page_builder_sections:
      '22 section types available: Hero Banner, Features Grid, Call to Action, Testimonials, Pricing Plans, Stats Counter, Text Block, Image Gallery, Product Showcase, Category Grid, Special Offers, Brands Slider.',
    page_builder_versioning:
      'Every deploy creates a version snapshot. You can rollback to any previous version or restore a draft.',
    pricing_rules_title: 'Delivery Pricing Rules',
    pricing_rules_desc:
      'Set base fare, per-km rate, minimum/maximum fare, and free kilometers for each vehicle type. Rules determine delivery cost at checkout.',
    vehicles_title: 'Vehicle Management',
    vehicles_desc:
      'Drivers can register their vehicles — type, registration number, capacity, color. One vehicle is marked as primary for order assignments.',
  },
  wt: {
    hero: {
      badge: 'Interactive Walkthrough — 15 Flows',
      title1: 'See How ',
      title2: ' Powers Your Business',
      desc: 'From your first login to POS terminals and real-time analytics — follow every step of the all-in-one e-commerce platform built for the Arab world.',
    },
    scenario: 'Scenario',
    stats: {
      flows: 'Feature Flows',
      types: 'Product Types',
      bilingual: 'Fully Bilingual',
      platforms: 'Platforms',
    },
    nav: {
      register: 'Register',
      shop: 'Shop',
      types: 'Product Types',
      cart: 'Cart & Order',
      business: 'My Business',
      catalog: 'Catalog',
      orders: 'Orders',
      social: 'Social',
      builder: 'Page Builder',
      delivery: 'Delivery',
      chat: 'Chat',
      pos: 'POS',
      analytics: 'Analytics',
      tickets: 'Tickets',
      coupons: 'Coupons',
    },
    f1: {
      label: 'Getting Started',
      title: 'Create Your Account & Sign In',
      desc: 'Get started in seconds with OTP-based verification. Choose your role and access your dedicated portal.',
      scenario: 'Sara wants to sell her homemade sweets online. She opens Dukkan, registers as a customer, and verifies her email with a one-time code.',
      s1: {
        tag: 'Step 1 — Sign Up',
        title: 'Choose Your Role & Register',
        desc: 'Sara taps "Sign Up" and selects Customer. She enters her name, phone (+966), email, and password. An OTP is sent to verify her email.',
        b1: 'Customer or Delivery role selection',
        b2: 'Phone country code auto-detects your currency',
        b3: 'OTP sent to email for secure verification',
      },
      s2: {
        tag: 'Step 2 — Sign In',
        title: 'Three Portals, One Login Screen',
        desc: 'Switch between Customer and Delivery tabs on one login screen. Each portal opens a completely different experience with its own features.',
        b1: 'Separate Customer and Delivery portals',
        b2: 'Email + Password + OTP dual verification',
        b3: 'Language (AR/EN) and theme toggle on login',
      },
    },
    f2: {
      label: 'Shopping Experience',
      title: 'Discover & Browse the Marketplace',
      desc: 'Explore featured companies, browse products by category, search, sort, and filter — no login required.',
      scenario: 'Ahmed opens Dukkan to find gaming accessories. He browses featured companies, filters by category, and discovers products with real images and prices.',
      s1: {
        tag: 'Storefront',
        title: 'Discover Featured Companies',
        desc: 'The homepage welcomes visitors with a hero banner and featured companies — each with cover images, descriptions, and follower counts.',
        b1: 'Featured companies: Craft House, Handmade by Noor, Fawdeh Gaming',
        b2: 'Company cards with real branding and stats',
        b3: 'Full dark mode with RTL Arabic support',
      },
      s2: {
        tag: 'Product Browsing',
        title: 'Filter by Category & Product Type',
        desc: 'A rich product grid with real images, prices, and quick-add buttons. Filter by category from the sidebar, or switch between Standard, Custom Order, Service, and Auction.',
        b1: 'Product grid: GTA VI PS5, SteelSeries Arctis, PlayStation 5 Slim',
        b2: 'Category sidebar with 15+ categories',
        b3: 'Search, sort by newest, price, or rating',
      },
      s3: {
        tag: 'Product Detail',
        title: 'Rich Product Pages',
        desc: 'Each product shows company info, images, pricing, category, and social engagement. For auctions, see the sealed bid winner and bid history.',
      },
    },
    f3: {
      label: '4 Product Types',
      title: 'Four Ways to Sell & Buy',
      desc: 'Standard products, custom orders, service bookings, and auctions — each with its own unique experience.',
      standard: {
        title: 'Standard Products',
        desc: 'Traditional e-commerce: fixed price, add to cart, checkout. Multi-tier pricing for bulk discounts. Multi-currency support.',
      },
      custom: {
        title: 'Custom Orders (RFQ)',
        desc: 'Customer describes what they need with add-ons and attachments. Company sends a detailed quote with line-item pricing. Customer accepts, rejects, or requests revision — full quote lifecycle from request to order creation.',
      },
      service: {
        title: 'Service Booking',
        desc: 'Interactive calendar with provider availability. Choose provider, duration, and location type (online/on-site). Real-time slot checking, booking confirmation, reminders, and status tracking (Pending → Confirmed → Completed).',
      },
      auction: {
        title: 'Auction System',
        desc: 'Open or sealed-bid auctions with starting price, bid increment, reserve price, and live countdown. Sealed auctions hide bids until end — winner selected by criteria (highest, lowest, or random from top N). Companies can bid too.',
      },
      create: {
        title: 'Choose Your Product Type',
        desc: 'When creating a product, pick from 4 types. Each has a tailored creation flow with specific fields for pricing, scheduling, or bidding rules.',
      },
    },
    f4: {
      label: 'Purchasing',
      title: 'Cart, Checkout & Order Tracking',
      desc: 'Add products from multiple companies, checkout with map-based delivery, and track in real-time.',
      s1: { title: 'Add to Cart', desc: 'Products auto-group by company in a multi-vendor cart.' },
      s2: { title: 'Review Items', desc: 'Adjust quantities, see taxes and per-company subtotals.' },
      s3: { title: 'Delivery Address', desc: 'Pick location on interactive map. Choose vehicle type.' },
      s4: { title: 'Place Order', desc: 'Confirm and track. Each company group becomes a separate order.' },
      detail: {
        tag: 'Order Tracking',
        title: 'Complete Order Details',
        desc: 'Each order shows: order ID, status badges, total amount, recipient info with Google Maps link, and itemized list with product images, quantities, and prices.',
      },
    },
    f5: {
      label: 'Business Management',
      title: 'Start & Manage Your Business',
      desc: 'Create your company, set up branches, invite team members via email, and manage everything from a powerful dashboard.',
      scenario: 'Sara creates "Sofrety — Home Kitchen" on Dukkan. She uploads her logo, adds branches in Giza, Alexandria, and Cairo, and invites her sister to help manage.',
      s1: {
        tag: 'Setup',
        title: 'Create a Company in Minutes',
        desc: 'Enter bilingual name and description, phone number, and upload logo and cover image. Your company appears immediately in the marketplace.',
        b1: 'Bilingual name & description (EN/AR)',
        b2: 'Logo and cover image upload',
        b3: 'Multiple companies per account',
      },
      s2: {
        tag: 'Dashboard',
        title: 'Everything at a Glance',
        desc: 'Real-time stats: branches, categories, products, team members, orders, followers, rating, and reviews — all in one dashboard with sidebar navigation.',
      },
      s3: {
        tag: 'Branches',
        title: 'Multi-Location Support',
        desc: 'Add branches across cities with GPS coordinates. Mark one as Main. Branches power order fulfillment and delivery routing.',
      },
      s4: {
        tag: 'Team',
        title: 'Invite Members & Assign Roles',
        desc: 'Invite team members via email with role assignment. Track invitation status (Pending/Accepted/Rejected), resend or cancel invitations. Members accept via a secure token link — no login required to accept.',
      },
    },
    f6: {
      label: 'Product Catalog',
      title: 'Organize & List Your Products',
      desc: 'Build a hierarchical category tree, manage a reusable media library, then list products with images, pricing tiers, and bilingual content.',
      cats: {
        title: 'Hierarchical Category Tree',
        desc: 'Create parent/child categories up to 3 levels (Men > Shirts, Pants, Shoes). Toggle active/inactive. View the full tree with expand/collapse.',
      },
      prods: {
        title: 'Manage Every Detail',
        desc: 'Product detail with tabs: Details (bilingual name, SKU, stock), Images (multi-upload), Categories, Prices (multi-tier with discounts and date ranges).',
      },
      media: {
        title: 'Media Library',
        desc: 'Upload and organize images in a reusable media library per company. Attach media from the library to products instead of re-uploading — keep assets organized and consistent across your catalog.',
      },
    },
    f7: {
      label: 'Fulfillment',
      title: 'Order Lifecycle & Tracking',
      desc: 'Track every order from placement to delivery with visual status bars and payment tracking.',
      pending: { title: 'Pending', desc: 'Waiting for company confirmation' },
      confirmed: { title: 'Confirmed', desc: 'Company accepted, preparing order' },
      ready: { title: 'Ready', desc: 'Packed, waiting for pickup' },
      delivered: { title: 'Delivered', desc: 'Customer received, can review' },
      list: {
        title: 'Filter, Search & Track',
        desc: 'Orders list with status filters: Active, Delivered, Custom, Cancelled. Each card shows order ID, status badges, progress bar, company, items, date, and total.',
      },
    },
    f8: {
      label: 'Community',
      title: 'Social Features & Engagement',
      desc: 'Follow companies, save favorites, react to products, and leave reviews — built-in social commerce.',
      follow: {
        title: 'Follow System',
        desc: 'Follow companies and sellers. See follower/following lists. Counts on profiles and company pages.',
      },
      wishlist: {
        title: 'Wishlist',
        desc: 'Save products with one tap. Create custom categories to organize. Toggle add/remove instantly.',
      },
      reviews: {
        title: 'Reviews & Ratings',
        desc: 'Star ratings (1-5) on companies, products, and drivers. Only real buyers can review. 6 reaction types: Like, Love, Haha, Wow, Sad, Angry.',
      },
    },
    f9: {
      label: 'No-Code Builder',
      title: 'Build Your Company Storefront',
      desc: '22 drag-and-drop section types, custom branding, and version control — professional pages without code.',
      sections: {
        title: '22 Section Types',
        desc: 'Hero Banner, Product Showcase, Category Grid, Stats Counter, Testimonials, Call to Action, Text Block, Image Gallery, Features Grid, Pricing Plans, Special Offers, Brands Slider, Audience Tabs, Bento Grid, How It Works, Platforms Banner, Pain Points, Solution Overview, App Showcase, Demo CTA, Member Grid, and Social Links.',
      },
      result: {
        title: 'Professional Branded Pages',
        desc: 'Published result: a beautiful storefront with hero banner, product grid, and custom branding. Version control with deploy, rollback, and restore draft.',
      },
    },
    f10: {
      label: 'Delivery Experience',
      title: 'The Delivery Driver Journey',
      desc: 'Register as a driver, manage your fleet, accept orders, navigate, capture proof, and track your earnings.',
      s1: { title: 'Register & Add Vehicle', desc: 'Sign up as Delivery. Add vehicle: brand, model, color, plate number.' },
      s2: { title: 'Browse Available Orders', desc: 'Map view with distance markers. Filter by 1/3/5/10/20 km radius.' },
      s3: { title: 'Accept & Navigate', desc: 'Accept order. Navigate to pickup with GPS gate enforcement — must be within range to confirm.' },
      s4: { title: 'Deliver & Prove', desc: 'Navigate to customer. Capture mandatory delivery proof photo. GPS-verified location. Mark delivered.' },
    },
    f11: {
      label: 'Communication',
      title: 'Chat, Notifications & Support',
      desc: 'Real-time messaging, multi-channel notifications, Telegram bots, and a built-in ticket system to keep everyone connected.',
      chat: {
        title: 'Real-Time Chat',
        desc: '1:1 conversations between buyers and sellers via WebSocket, linked to specific orders for context.',
        b1: 'Customer ↔ Company and Customer ↔ Delivery messaging',
        b2: 'Typing indicators and read receipts (real-time via Reverb)',
        b3: 'Media attachments (images and files)',
        b4: 'Unread count badges and message history',
      },
      notif: {
        title: 'Multi-Channel Notifications',
        desc: 'Stay informed across 5 channels — never miss an update on your orders or business.',
        b1: 'In-app notification center with read/unread',
        b2: 'Firebase Cloud Messaging push (mobile + desktop, auto-permission)',
        b3: 'Email for important events (orders, payments)',
        b4: 'Telegram bot per company — choose which events trigger messages (orders, reviews, quotes, bookings, auctions)',
      },
      tickets: {
        title: 'Support Ticket System',
        desc: 'Create support tickets with categories (Bug, Feature Request, General). Priority levels from Low to Critical. Each ticket has a linked chat thread for direct communication with the support team.',
      },
    },
    f12: {
      label: 'Point of Sale',
      title: 'In-Store POS Terminal',
      desc: 'A full point-of-sale system built into Dukkan — sell in-person from any branch with barcode scanning, receipts, and daily reports.',
      scenario: 'Noor opens her bakery branch POS terminal. She scans product barcodes, looks up a returning customer, processes a cash payment, and prints the receipt — all synced with her Dukkan inventory in real-time.',
      s1: {
        tag: 'Setup',
        title: 'Select Branch & Open Terminal',
        desc: 'Choose which branch to sell from. The POS terminal loads that branch\'s product catalog with real-time inventory. Multi-branch support means each location has its own terminal.',
        b1: 'Branch-specific product catalog and inventory',
        b2: 'Real-time stock sync with online store',
        b3: 'Multiple terminals per branch supported',
      },
      s2: {
        tag: 'Selling',
        title: 'Scan, Search & Checkout',
        desc: 'Search products by name or scan barcodes with a connected scanner. Add items to cart, look up customers, choose payment method (Cash, Card, Wallet), and process the sale.',
        b1: 'Barcode/SKU scanner integration with heartbeat monitoring',
        b2: 'Customer lookup with avatar display',
        b3: 'Multiple payment methods with change calculation',
      },
      s3: {
        tag: 'After Sale',
        title: 'Receipts & Daily Reports',
        desc: 'Generate and reprint receipts. View daily sales reports with totals, transaction count, and payment method breakdown. Export for accounting.',
        b1: 'Receipt generation and reprinting',
        b2: 'Daily sales summary with payment breakdown',
        b3: 'Product label generation for in-store pricing',
      },
    },
    f13: {
      label: 'Business Intelligence',
      title: 'Analytics & Reports',
      desc: 'Real-time dashboards, revenue charts, and exportable sales reports — make data-driven decisions for your business.',
      s1: {
        tag: 'Dashboard',
        title: 'KPI Widgets & Metrics',
        desc: 'At-a-glance metrics: pending orders, total revenue, conversion rate, and active customers. Compare periods (this month vs last month) to spot trends.',
        b1: 'Revenue, orders, and customer KPI cards',
        b2: 'Period comparison (daily/weekly/monthly)',
        b3: 'Company dashboard with real-time data',
      },
      s2: {
        tag: 'Charts',
        title: 'Revenue & Order Analytics',
        desc: 'Time-series charts for revenue trends. Order status breakdown. Top products by revenue and top customers by spending — all filterable by date range.',
        b1: 'Revenue time-series with daily/weekly/monthly grouping',
        b2: 'Top products and top customers rankings',
        b3: 'Order status distribution charts',
      },
      s3: {
        tag: 'Export',
        title: 'Sales Reports with Export',
        desc: 'Generate detailed sales reports filtered by date range or product. Export to CSV or XLSX for accounting and external analysis.',
        b1: 'Filterable by date and product',
        b2: 'CSV and XLSX export formats',
        b3: 'Detailed transaction-level reports',
      },
    },
    f14: {
      label: 'Customer Support',
      title: 'Tickets & Issue Tracking',
      desc: 'A built-in support ticket system with categories, priorities, and integrated chat — get help without leaving Dukkan.',
      s1: {
        tag: 'Create',
        title: 'Submit a Ticket',
        desc: 'Create tickets from your portal — choose a category (Bug, Feature Request, General Support) and priority level (Low, Normal, High, Critical). Describe the issue with text and attachments.',
        b1: '3 categories: Bug, Feature Request, General',
        b2: '4 priority levels: Low, Normal, High, Critical',
        b3: 'File attachments for screenshots and documents',
      },
      s2: {
        tag: 'Track',
        title: 'Status Lifecycle & Chat',
        desc: 'Each ticket progresses through stages: Open → In Progress → Pending Customer → Resolved → Closed. A linked chat thread lets you discuss the issue directly with the support team.',
        b1: '5-stage status workflow',
        b2: 'Integrated chat thread per ticket',
        b3: 'Real-time updates on ticket progress',
      },
      s3: {
        tag: 'Resolve',
        title: 'Track All Your Tickets',
        desc: 'View all your tickets with filters by status, priority, and category. Get notified when your ticket is updated or resolved.',
        b1: 'Filter by status, priority, and category',
        b2: 'Notification on every update',
        b3: 'Full conversation history preserved',
      },
    },
    f15: {
      label: 'Promotions',
      title: 'Coupons & Discount Codes',
      desc: 'Create targeted discount campaigns — percentage, fixed amount, free shipping, or buy-one-get-one — with smart usage limits, expiry dates, and category targeting.',
      scenario: 'Sara wants to boost sales for her bakery during Ramadan. She creates a "RAMADAN25" coupon for 25% off, limits it to 100 uses, and shares it on social media.',
      s1: {
        tag: 'Create',
        title: 'Design Your Coupon',
        desc: 'Set coupon code, discount type (percentage, fixed, free shipping, or BOGO), amount, minimum order value, usage limit per customer, and expiry date. Each coupon gets a unique QR code for in-store scanning.',
        b1: '4 discount types: percentage, fixed, free shipping & BOGO',
        b2: 'Per-customer and total usage limits',
        b3: 'QR code for in-store POS redemption',
      },
      s2: {
        tag: 'Target',
        title: 'Choose Who Gets It',
        desc: 'Apply coupons to all products or specific categories. Target all customers or select segments. Works across all order entry points — cart, custom orders, and POS terminal.',
        b1: 'Product-wide or category-specific targeting',
        b2: 'Customer segment selection',
        b3: 'Works in Cart, Custom Orders, and POS',
      },
      s3: {
        tag: 'Track',
        title: 'Monitor Performance',
        desc: 'See real-time redemption stats — how many times used, total discount given, and remaining uses. Deactivate or extend coupons anytime from your dashboard.',
        b1: 'Redemption count and discount totals',
        b2: 'Active/inactive toggle',
        b3: 'Edit expiry and limits on the fly',
      },
    },
    tech: {
      label: 'Built Different',
      title: 'Dark Mode, Arabic & Cross-Platform',
      dark: { title: 'Full Dark Mode', desc: 'Toggle dark/light theme anywhere. Persistent preference across sessions.' },
      rtl: { title: 'Arabic-First RTL', desc: 'Native right-to-left from the ground up. Every field, label, and page in Arabic + English.' },
      platforms: { title: '4 Platforms', desc: 'One codebase: Web (PWA), Desktop (Electron), Mobile (Capacitor for Android/iOS).' },
    },
    stories_cta: {
      title: 'See How Real Businesses Use Dukkan',
      desc: 'Follow step-by-step stories of how different professionals — from barbers to restaurants — build their business on Dukkan with POS, analytics, and online sales.',
      all: 'View All Stories',
    },
    footer: 'تجارة بأصولها.. وتكنولوجيا بمستقبلها',
  },
  legal: {
    last_updated: 'Last updated',
    effective_date: '2026-04-25',
    back_home: 'Back to Home',
    contact_email: 'support@haritna.net',
    company_name: 'Haritna Technologies',
    operator_name: 'Mahmoud Sami Khirallah',
    operator_country: 'Arab Republic of Egypt',
    product_name: 'Haretna Dukkan (حارتنا دكان)',
    product_url: 'https://dukkan.haritna.net',
    landing_url: 'https://haritna.net',
    pilot_notice: 'Pilot phase notice: The Service is currently operated by Mahmoud Sami Khirallah as an individual developer based in the Arab Republic of Egypt, doing business under the planned trading name "Haritna Technologies". Once incorporation is complete (expected within ~1 month of the effective date), the data controller will become Haritna Technologies and this notice will be updated. Users will be notified of the transition.',
    nav: {
      privacy: 'Privacy Policy',
      terms: 'Terms of Service',
      data_deletion: 'Data Deletion',
    },
  },
  privacy: {
    title: 'Privacy Policy',
    subtitle: 'How Haretna Dukkan collects, uses, and protects your information.',
    intro: 'This Privacy Policy describes how the operator ("we", "us", "our") collects, uses, and shares information about you when you use (a) the marketing website at haritna.net and (b) Haretna Dukkan (حارتنا دكان) — a multi-tenant e-commerce platform — through dukkan.haritna.net, tenant subdomains under *.dukkan.haritna.net, our mobile applications, and related services (collectively, the "Service"). By using the Service, you agree to the collection and use of information in accordance with this policy. The Service is currently operated by Mahmoud Sami Khirallah as an individual developer based in the Arab Republic of Egypt, doing business under the planned trading name "Haritna Technologies"; once incorporation completes, the data controller will become Haritna Technologies and this Policy will be updated with notice to you.',
    sections: {
      info_collected: {
        title: '1. Information We Collect',
        intro: 'We collect information to provide and improve our Service. The categories of personal information we collect depend on how you use the Service.',
        from_you: {
          heading: 'Information you provide directly',
          items: [
            'Account information: name, email address, phone number, password (hashed), profile picture, preferred language, country, and currency.',
            'Business information (for merchants): business name, address, tax/commercial registration, branches, products, and bank/payment details.',
            'Order and transaction information: products ordered, delivery addresses, payment method (we do not store full card data — see "Payments" below), order history, and reviews you post.',
            'Communications: messages, chat, support tickets, ratings, and any feedback you submit.',
          ],
        },
        from_sso: {
          heading: 'Information from social login (Single Sign-On)',
          intro: 'When you sign in using a third-party identity provider, we receive limited profile information from that provider. The exact data depends on the provider and on the permissions you grant:',
          items: [
            'Google: Google account ID, name, email address, profile picture, locale.',
            'Apple (Sign in with Apple): unique Apple user ID, full name (first sign-in only), email address (real or Apple-relay alias).',
            'Facebook (Meta): Facebook user ID, name, email address (if granted), profile picture.',
            'Microsoft (Entra ID): Microsoft user ID, name, email address, profile picture.',
            'LinkedIn: LinkedIn user ID, name, email address, profile picture.',
            'TikTok: TikTok open ID, display name, avatar (email may not be returned).',
            'Snapchat: Snap external ID, display name, Bitmoji avatar (email is not returned).',
          ],
          note: 'For new users signing up via social login, we additionally require you to provide and verify your phone number before completing registration. This is necessary to enable order delivery, customer support, and order notifications.',
        },
        automatic: {
          heading: 'Information collected automatically',
          items: [
            'Device and connection data: IP address, device type, operating system, browser, app version, and language settings.',
            'Usage data: pages and screens visited, features used, search queries, click events, session duration.',
            'Cookies and similar technologies: see Section 9.',
            'Approximate location derived from IP address (used for currency, language, and tax calculations).',
            'Precise GPS location (only when explicitly granted by delivery personnel and customers using delivery features).',
          ],
        },
      },
      how_used: {
        title: '2. How We Use Your Information',
        items: [
          'Create and manage your account, authenticate you, and keep your account secure.',
          'Provide the core e-commerce features: list and search products, place and fulfill orders, process payments, and coordinate delivery.',
          'Communicate with you: order updates, account notifications, customer support replies, and (with your consent) marketing communications.',
          'Improve and personalize the Service: product recommendations, search results, fraud detection, and analytics.',
          'Comply with legal, regulatory, and tax obligations in the countries we operate in.',
          'Enforce our Terms of Service and protect users from abuse, spam, and fraud.',
        ],
      },
      sharing: {
        title: '3. How We Share Your Information',
        intro: 'We do not sell your personal information. We share it only as described below:',
        items: [
          {
            heading: 'With merchants you interact with',
            body: 'When you place an order, your name, delivery address, phone, and order details are shared with the merchant fulfilling the order so they can prepare and ship it.',
          },
          {
            heading: 'With delivery partners',
            body: 'Your delivery address, phone number, and order details are shared with the delivery person assigned to your order.',
          },
          {
            heading: 'With payment processors',
            body: 'Payment data is transmitted directly to PCI-compliant payment gateways (e.g., Stripe, Tap, Paymob) so we never receive or store your full card details.',
          },
          {
            heading: 'With service providers (sub-processors)',
            body: 'Cloud infrastructure (Cloudflare, R2, Neon PostgreSQL), email/SMS providers, analytics, and AI gateway providers, all under contractual confidentiality and data-processing terms.',
          },
          {
            heading: 'For legal reasons',
            body: 'Law enforcement, courts, regulators, or other authorities when we are legally compelled or to protect rights, safety, and integrity.',
          },
          {
            heading: 'In a corporate transaction',
            body: 'In connection with a merger, acquisition, financing, or sale of assets — with notice to you where required.',
          },
        ],
      },
      retention: {
        title: '4. Data Retention',
        body: 'We retain personal information for as long as your account is active and for a reasonable period afterwards to comply with legal, accounting, and audit requirements (typically 7 years for transaction records). When you delete your account, personal data is anonymized or removed from active systems within 30 days, except where retention is required by law.',
      },
      security: {
        title: '5. Data Security',
        body: 'We use industry-standard safeguards including encryption in transit (HTTPS/TLS), encryption at rest for sensitive fields (passwords, OAuth tokens, payment configuration), least-privilege access controls, multi-tenant database isolation, and regular security reviews. No method of transmission or storage is 100% secure; in the event of a data breach affecting your personal information we will notify you and the relevant authorities as required by applicable law.',
      },
      rights: {
        title: '6. Your Rights',
        intro: 'Subject to applicable law, you have the following rights regarding your personal information:',
        items: [
          'Access: request a copy of the personal information we hold about you.',
          'Correction: ask us to correct inaccurate or incomplete data.',
          'Deletion: request deletion of your account and personal data (see our Data Deletion page for instructions).',
          'Portability: request a machine-readable export of your data.',
          'Objection / Restriction: object to certain processing or ask us to restrict it.',
          'Withdraw consent: where processing is based on consent, you can withdraw at any time.',
          'Revoke social login: you can disconnect any linked social account from your profile settings, and you can revoke our access from your provider\'s security settings (e.g., google.com/security, appleid.apple.com).',
        ],
        contact: 'To exercise any of these rights, email {email} or use the in-app data request tools.',
      },
      children: {
        title: '7. Children\'s Privacy',
        body: 'The Service is not directed to children under 16. We do not knowingly collect personal information from children under 16. If you become aware that a child has provided us with personal information, please contact us and we will delete it.',
      },
      international: {
        title: '8. International Data Transfers',
        body: 'Haretna Dukkan operates primarily for users in the Middle East, North Africa, and globally. Your information may be processed and stored in countries other than your own (notably the European Union and the United States, where some sub-processors are based). We rely on contractual safeguards (such as Standard Contractual Clauses) to protect transferred data.',
      },
      cookies: {
        title: '9. Cookies and Similar Technologies',
        body: 'We use cookies and similar technologies (local storage, IndexedDB) for authentication, session management, language and theme preferences, and analytics. You can control cookies through your browser settings. Disabling essential cookies may break sign-in and order flows.',
      },
      changes: {
        title: '10. Changes to This Policy',
        body: 'We may update this Privacy Policy from time to time. Material changes will be communicated through the app, by email, or by posting a prominent notice on dukkan.haritna.net. Continued use of the Service after changes take effect constitutes acceptance.',
      },
      contact: {
        title: '11. Contact Us',
        body: 'For privacy questions, complaints, or to exercise your rights, contact us at:',
        email: 'support@haritna.net',
        controller: 'Current Data Controller (pilot phase): Mahmoud Sami Khirallah, individual developer, Arab Republic of Egypt. Planned successor: Haritna Technologies (post-incorporation).',
      },
    },
  },
  terms: {
    title: 'Terms of Service',
    subtitle: 'The agreement between you and Haretna Dukkan.',
    intro: 'Welcome to Haretna Dukkan (حارتنا دكان). These Terms of Service ("Terms") govern your access to and use of our website, mobile apps, and related services. The Service is currently operated by Mahmoud Sami Khirallah as an individual developer based in the Arab Republic of Egypt, doing business under the planned trading name "Haritna Technologies" ("we", "us"). Once Haritna Technologies is incorporated (expected within ~1 month of the effective date), it will become the contracting party and these Terms will be updated. By creating an account or otherwise using the Service, you agree to be bound by these Terms. If you do not agree, do not use the Service.',
    sections: {
      eligibility: {
        title: '1. Eligibility & Account Registration',
        items: [
          'You must be at least 16 years old, or the age of legal majority in your jurisdiction, to use the Service.',
          'You agree to provide accurate, current, and complete information when creating an account, including a valid phone number which we may verify by SMS one-time-password (OTP).',
          'You are responsible for maintaining the confidentiality of your credentials and for all activity under your account.',
          'You may sign in with a supported social provider (Google, Apple, Facebook, Microsoft, LinkedIn, TikTok, Snapchat). Linking a social account does not transfer ownership; you remain the account holder.',
          'Accounts are personal. Sharing accounts is not permitted unless explicitly enabled (e.g., a customer adding members to a company).',
        ],
      },
      roles: {
        title: '2. Roles on the Platform',
        intro: 'Haretna Dukkan supports four user roles, each with specific terms:',
        items: [
          'Customer: places orders from merchants on the platform. Subject to consumer protection laws of your country.',
          'Merchant (Company / Staff): lists products, manages orders, and uses fulfillment tools. Responsible for the accuracy of listings, the legality of products, and tax/regulatory compliance.',
          'Delivery: provides last-mile logistics services. Responsible for safe and timely delivery and for any required licenses.',
          'Shop visitor: may browse public storefronts without an account.',
        ],
      },
      conduct: {
        title: '3. Acceptable Use',
        intro: 'You will not, and will not permit anyone to:',
        items: [
          'Violate any applicable law, regulation, or third-party right.',
          'Sell or list prohibited goods (firearms, narcotics, counterfeit items, stolen goods, etc.).',
          'Upload malicious code, attempt unauthorized access, or disrupt the Service.',
          'Scrape, harvest, or use the Service for purposes other than intended.',
          'Impersonate another person or misrepresent your affiliation.',
          'Use automated systems to create accounts, place orders, or post content without our written permission.',
        ],
      },
      orders: {
        title: '4. Orders, Payments, and Refunds',
        items: [
          'Prices, taxes, and fees are displayed at checkout. Currency is determined automatically based on your phone number country.',
          'Payments are processed via third-party gateways. We do not store full card data.',
          'Refunds and returns follow the merchant\'s policy and applicable consumer protection law (e.g., 14-day right of withdrawal in the EU).',
          'In case of disputes between you and a merchant, we may mediate but are not party to the underlying transaction.',
        ],
      },
      ip: {
        title: '5. Intellectual Property',
        items: [
          'The Service, including its software, design, branding, and content created by us, is owned by Haritna Technologies and protected by intellectual property laws.',
          'You retain ownership of content you upload (product images, text, reviews). By uploading, you grant us a worldwide, royalty-free license to host, display, distribute, and modify the content as necessary to operate the Service.',
          'You must have all rights and permissions for content you upload.',
        ],
      },
      termination: {
        title: '6. Suspension and Termination',
        body: 'We may suspend or terminate your account if you breach these Terms, abuse the Service, or for legal reasons. You may close your account at any time from your profile settings. Upon termination, your access ends, and we will delete or anonymize your data per the Privacy Policy.',
      },
      disclaimers: {
        title: '7. Disclaimers',
        body: 'The Service is provided "as is" and "as available" without warranties of any kind, express or implied, including merchantability, fitness for a particular purpose, and non-infringement. We do not guarantee uninterrupted or error-free operation.',
      },
      liability: {
        title: '8. Limitation of Liability',
        body: 'To the maximum extent permitted by law, the operator will not be liable for indirect, incidental, special, consequential, or punitive damages, or any loss of profits, revenues, data, or goodwill. Our aggregate liability for direct damages will not exceed the amount you paid to us in the 12 months preceding the claim.',
      },
      indemnity: {
        title: '9. Indemnification',
        body: 'You agree to indemnify and hold the operator harmless from claims arising out of your breach of these Terms, your content, or your unlawful use of the Service.',
      },
      law: {
        title: '10. Governing Law and Disputes',
        body: 'These Terms are governed by the laws of the Arab Republic of Egypt during the pilot phase, and after incorporation by the laws of the jurisdiction where Haritna Technologies is registered. Disputes will be resolved through good-faith negotiation first, and otherwise by the competent courts of the applicable jurisdiction. Consumer rights granted by mandatory local law in your country of residence are not affected.',
      },
      changes: {
        title: '11. Changes to These Terms',
        body: 'We may update these Terms from time to time. We will provide at least 30 days\' notice for material changes that adversely affect your rights. Continued use after the effective date constitutes acceptance.',
      },
      contact: {
        title: '12. Contact',
        body: 'For questions about these Terms, contact us at support@haritna.net.',
      },
    },
  },
  data_deletion: {
    title: 'Account & Data Deletion',
    subtitle: 'How to request deletion of your Haretna Dukkan account and personal data.',
    intro: 'We respect your right to delete your data. This page explains the steps to permanently remove your account and the personal information we hold about you.',
    sections: {
      in_app: {
        title: 'Option 1 — Delete from the app (recommended)',
        steps: [
          'Sign in to dukkan.haritna.net (or your tenant subdomain) on web or mobile.',
          'Go to Profile → Settings → Account.',
          'Tap "Delete my account" and confirm with your password or OTP.',
          'Your account will be deactivated immediately and permanently deleted within 30 days.',
        ],
      },
      email: {
        title: 'Option 2 — Email request',
        body: 'Send an email to support@haritna.net from the address registered on your account with the subject "Delete my account". Include your full name, the phone number on the account, and (if applicable) the company you belong to. We will verify your identity and confirm deletion within 30 days.',
      },
      what_deleted: {
        title: 'What will be deleted',
        items: [
          'Your profile (name, email, phone, avatar, password, preferences).',
          'Linked social accounts (the link, not your account on the third-party provider).',
          'Personal addresses and saved payment methods.',
          'Reviews, ratings, comments, and chat messages tied to your identity (or anonymized if removal would disrupt other users\' content).',
          'Order history personal details (orders themselves are retained in anonymized form for legal/accounting purposes — typically 7 years).',
          'OAuth tokens, refresh tokens, and session data.',
        ],
      },
      retained: {
        title: 'What may be retained',
        items: [
          'Anonymized transaction records, retained for tax, accounting, and audit obligations (commonly 7 years).',
          'Aggregate usage statistics that cannot be linked back to you.',
          'Information we are required by law to retain.',
        ],
      },
      timeline: {
        title: 'Timeline',
        body: 'Deactivation is immediate. Full deletion completes within 30 days. We will email you a confirmation when deletion is complete.',
      },
      revoke_social: {
        title: 'Revoking social login access',
        body: 'Deleting your account here does not delete your account at Google, Apple, Facebook, etc. To revoke our app\'s access from your social provider, visit:',
        items: [
          'Google: myaccount.google.com → Security → Third-party access',
          'Apple: appleid.apple.com → Sign in with Apple → Apps Using Apple ID',
          'Facebook: facebook.com/settings → Apps and Websites',
          'Microsoft: account.live.com/consent/Manage',
          'LinkedIn: linkedin.com/psettings/permitted-services',
          'TikTok: tiktok.com → Settings → Security → Manage app permissions',
          'Snapchat: accounts.snapchat.com → Apps That Use Snapchat',
        ],
      },
      contact: {
        title: 'Contact',
        body: 'Questions or problems? Email support@haritna.net.',
      },
    },
  },
}
