export const PRODUCTS = [
  { id: 1, name: "Premium Vanamei (White Shrimp)", origin: "Samut Sakhon, Thailand", size: "30-40 pcs/kg", price: 280, currency: "THB", rating: 4.9, tags: ["GAP", "BAP"], image: "https://images.unsplash.com/photo-1559740038-00624d85e054?auto=format&fit=crop&q=80&w=300", type: "White Shrimp", farm: "Vichai Farm" },
  { id: 2, name: "Black Tiger Prawns (Jumbo)", origin: "Trat, Thailand", size: "10-15 pcs/kg", price: 450, currency: "THB", rating: 4.8, tags: ["Organic", "Premium"], image: "https://images.unsplash.com/photo-1590402030613-268800539169?auto=format&fit=crop&q=80&w=300", type: "Black Tiger", farm: "Siam Seafood" },
  { id: 3, name: "River Prawn (Giant)", origin: "Ayutthaya, Thailand", size: "3-4 pcs/kg", price: 1200, currency: "THB", rating: 5.0, tags: ["Wild Caught"], image: "https://images.unsplash.com/photo-1625937285779-880c1071d09e?auto=format&fit=crop&q=80&w=300", type: "River Prawn", farm: "River Side Co." },
  { id: 4, name: "Frozen Cooked Prawns", origin: "Chonburi, Thailand", size: "50-60 pcs/kg", price: 190, currency: "THB", rating: 4.5, tags: ["HACCP"], image: "https://images.unsplash.com/photo-1615141982883-c7ad0e69fd62?auto=format&fit=crop&q=80&w=300", type: "White Shrimp", farm: "Coastal King" },
];

export const AUCTION_ITEM = {
  id: "AUC-99",
  name: "Live Vanamei - Export Grade (A+)",
  lotSize: "500 kg",
  startPrice: 200,
  currentBid: 245,
  timer: 345, // seconds
  labResult: { survival: "98%", antibioticFree: true, salinity: "25 ppt" },
  history: [
    { bidder: "GlobalTrade_HK", amount: 245, time: "2 min ago" },
    { bidder: "ThaiExport_Co", amount: 240, time: "5 min ago" },
    { bidder: "SeafoodExpress", amount: 230, time: "8 min ago" },
  ]
};
