// products-data.js
const productsData = {
    products: [
        {
            id: 1,
            model: "NO1B00",
            title: "General Purpose IEPE Impact Hammer",
            category: "Impact Hammers",
            sensitivity: "4.5mV/lbf",
            range: "1111 lbf pk",
            tempRange: "-55~120°C",
            connector: "BNC",
            sku: "NO1B00",
            availability: "In Stock",
            warranty: "2 Years",
            image: "../assets/hammer1.png",
            thumbnail: "../assets/hammer1.png",
            description: "The NO1B00 is a high-force general purpose IEPE impact hammer designed for modal testing of large and heavy structures.",
            detailedDescription: `The NO1B00 is a high-force general purpose IEPE impact hammer designed for modal testing of large and heavy structures. Its robust construction and high-force capability make it ideal for applications requiring significant excitation force while maintaining exceptional accuracy.

Featuring a durable stainless steel housing and IP67 sealing, this impact hammer is built to withstand demanding industrial environments. The BNC connector ensures reliable signal transmission, while the wide temperature range allows for operation in various climate conditions.

This hammer is perfect for automotive, aerospace, and civil engineering applications where reliable, high-force impacts are required for structural analysis and modal testing.`,
            technicalSpecs: [
                { name: "Max Temperature", value: "120°C" },
                { name: "Resolution", value: "0.35 lbf" },
                { name: "Linearity", value: "1.5%" },
                { name: "Weight", value: "320g" }
            ],
            specifications: [
                { name: "Sensitivity", value: "4.5 mV/lbf ±1%" },
                { name: "Range", value: "±1111 lbf pk" },
                { name: "Resolution", value: "0.35 lbf" },
                { name: "Linearity", value: "±1.5% FSO" },
                { name: "Hysteresis", value: "< 0.5% FSO" },
                { name: "Temperature Range", value: "-55 to +120 °C" },
                { name: "Temperature Coefficient", value: "±0.02% / °C" },
                { name: "Housing Material", value: "Stainless Steel 316L" },
                { name: "Connector", value: "BNC (Male)" },
                { name: "Weight", value: "320 g" },
                { name: "Length", value: "165 mm" },
                { name: "Diameter", value: "25 mm" },
                { name: "Sealing", value: "IP67 (Waterproof)" },
                { name: "Excitation Voltage", value: "20-30 VDC" },
                { name: "Output Impedance", value: "100 Ω" },
                { name: "Output Bias Voltage", value: "8-12 VDC" },
                { name: "Frequency Response", value: "0.5 Hz to 10 kHz (±3 dB)" },
                { name: "Resonant Frequency", value: "> 22 kHz" },
                { name: "Shock Limit", value: "5000 lbf" },
                { name: "Cable Length", value: "2 meters (standard)" }
            ],
            downloads: [
                { name: "Datasheet (PDF): NO1B00", description: "Complete technical specifications, performance data, and dimensional drawings", icon: "file-pdf" },
                
            ],
            applications: [
                { title: "Automotive Testing", description: "Modal analysis of vehicle chassis, engine components, and body structures", icon: "car" },
                { title: "Aerospace", description: "Testing aircraft components, wings, and structural elements", icon: "plane" },
                { title: "Industrial Machinery", description: "Vibration analysis of large machinery and industrial equipment", icon: "industry" },
                { title: "Civil Engineering", description: "Structural testing of bridges, buildings, and infrastructure", icon: "bridge" }
            ],
            relatedProducts: [2, 3]
        },
        {
            id: 2,
            model: "N02B00",
            title: "General Purpose IEPE Impact Hammer",
            category: "Impact Hammers",
            sensitivity: "11.1mV/lbf",
            range: "450 lbf pk",
            tempRange: "-55~120°C",
            connector: "BNC",
            sku: "N02B00",
            availability: "In Stock",
            warranty: "2 Years",
            image: "../assets/hammer2.png",
            thumbnail: "../assets/hammer2.png",
            description: "The N02B00 is a versatile medium-range IEPE impact hammer that offers the perfect balance between force range and sensitivity.",
            detailedDescription: `The N02B00 is a versatile medium-range IEPE impact hammer that offers the perfect balance between force range and sensitivity for most modal testing applications. Its compact design and reliable performance make it an industry favorite for general-purpose vibration analysis.

With its optimized sensitivity and force range, this hammer is suitable for testing a wide variety of structures from automotive components to industrial machinery. The lightweight design reduces operator fatigue during extended testing sessions.

Perfect for educational institutions, research facilities, and quality control departments, the N02B00 delivers consistent, repeatable impacts for accurate modal analysis and structural testing.`,
            technicalSpecs: [
                { name: "Max Temperature", value: "120°C" },
                { name: "Resolution", value: "0.14 lbf" },
                { name: "Linearity", value: "1%" },
                { name: "Weight", value: "158g" }
            ],
            specifications: [
                { name: "Sensitivity", value: "11.1 mV/lbf ±1%" },
                { name: "Range", value: "±450 lbf pk" },
                { name: "Resolution", value: "0.14 lbf" },
                { name: "Linearity", value: "±1% FSO" },
                { name: "Hysteresis", value: "< 0.5% FSO" },
                { name: "Temperature Range", value: "-55 to +120 °C" },
                { name: "Temperature Coefficient", value: "±0.02% / °C" },
                { name: "Housing Material", value: "Stainless Steel 304" },
                { name: "Connector", value: "BNC (Male)" },
                { name: "Weight", value: "158 g" },
                { name: "Length", value: "145 mm" },
                { name: "Diameter", value: "22 mm" },
                { name: "Sealing", value: "IP67 (Waterproof)" },
                { name: "Excitation Voltage", value: "20-30 VDC" },
                { name: "Output Impedance", value: "100 Ω" },
                { name: "Output Bias Voltage", value: "8-12 VDC" },
                { name: "Frequency Response", value: "0.5 Hz to 10 kHz (±3 dB)" },
                { name: "Resonant Frequency", value: "> 25 kHz" },
                { name: "Shock Limit", value: "2000 lbf" },
                { name: "Cable Length", value: "2 meters (standard)" }
            ],
            downloads: [
                { name: "Datasheet (PDF): N02B00", description: "Complete technical specifications, performance data, and dimensional drawings", icon: "file-pdf" },
               
            ],
            applications: [
                { title: "Laboratory Testing", description: "Research and development in academic and industrial labs", icon: "flask" },
                { title: "Quality Control", description: "Production line testing and quality assurance", icon: "check-circle" },
                { title: "Educational Use", description: "Teaching vibration analysis in universities and colleges", icon: "graduation-cap" },
                { title: "General Engineering", description: "General-purpose structural testing and analysis", icon: "cogs" }
            ],
            relatedProducts: [1, 3]
        },
        {
            id: 3,
            model: "N03B00",
            title: "General Purpose IEPE Impact Hammer",
            category: "Impact Hammers",
            sensitivity: "44.5mV/lbf",
            range: "112 lbf pk",
            tempRange: "-55~120°C",
            connector: "BNC",
            sku: "N03B00",
            availability: "In Stock",
            warranty: "2 Years",
            image: "../assets/hammer3.png",
            thumbnail: "../assets/hammer3.png",
            description: "The N03B00 is a high-sensitivity mini IEPE impact hammer specifically designed for testing small and delicate structures.",
            detailedDescription: `The N03B00 is a high-sensitivity mini IEPE impact hammer specifically designed for testing small and delicate structures. Its ultra-lightweight design and precise force control make it ideal for applications where overloading could damage sensitive components.

With exceptional sensitivity and fine force control, this hammer is perfect for testing electronic components, small mechanical parts, biomedical devices, and precision instruments. The compact size allows for easy handling in confined spaces.

Ideal for research laboratories, micro-mechanics studies, and precision engineering applications, the N03B00 delivers the accuracy and control needed for testing the most delicate structures.`,
            technicalSpecs: [
                { name: "Max Temperature", value: "120°C" },
                { name: "Housing Material", value: "Stainless Steel" },
                { name: "Resolution", value: "0.04 lbf" },
                { name: "Linearity", value: "1%" }
            ],
            specifications: [
                { name: "Sensitivity", value: "44.5 mV/lbf ±0.8%" },
                { name: "Range", value: "±112 lbf pk" },
                { name: "Resolution", value: "0.04 lbf" },
                { name: "Linearity", value: "±1% FSO" },
                { name: "Hysteresis", value: "< 0.5% FSO" },
                { name: "Temperature Range", value: "-55 to +120 °C" },
                { name: "Temperature Coefficient", value: "±0.02% / °C" },
                { name: "Housing Material", value: "Stainless Steel 316L" },
                { name: "Connector", value: "BNC (Male)" },
                { name: "Weight", value: "98 g" },
                { name: "Length", value: "120 mm" },
                { name: "Diameter", value: "18 mm" },
                { name: "Sealing", value: "IP67 (Waterproof)" },
                { name: "Excitation Voltage", value: "20-30 VDC" },
                { name: "Output Impedance", value: "100 Ω" },
                { name: "Output Bias Voltage", value: "8-12 VDC" },
                { name: "Frequency Response", value: "0.5 Hz to 15 kHz (±3 dB)" },
                { name: "Resonant Frequency", value: "> 30 kHz" },
                { name: "Shock Limit", value: "500 lbf" },
                { name: "Cable Length", value: "1.5 meters (standard)" }
            ],
            downloads: [
                { name: "Datasheet (PDF): N03B00", description: "Complete technical specifications, performance data, and dimensional drawings", icon: "file-pdf" },
               
            ],
            applications: [
                { title: "Electronics Testing", description: "Vibration analysis of PCBs and electronic components", icon: "microchip" },
                { title: "Biomedical Devices", description: "Testing medical equipment and implantable devices", icon: "heartbeat" },
                { title: "Precision Instruments", description: "Analysis of sensitive measuring instruments", icon: "ruler-combined" },
                { title: "Research & Development", description: "Advanced research in micro-mechanics", icon: "search" }
            ],
            relatedProducts: [1, 2]
        }
    ],

    // Function to get product by ID
    getProductById: function(id) {
        return this.products.find(product => product.id === parseInt(id));
    },

    // Function to get related products
    getRelatedProducts: function(productId) {
        const product = this.getProductById(productId);
        if (!product || !product.relatedProducts) return [];
        
        return product.relatedProducts.map(id => this.getProductById(id)).filter(p => p !== undefined);
    }
};

// Make it globally available
window.productsData = productsData;