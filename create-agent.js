// ===== DATA STRUCTURE =====
const globalQuestions = [
  {
    id: "businessType",
    text: "What type of business is this AI agent for? (e.g. Restaurant, Barber Shop, Gym, Clinic...)",
    type: "text",
    required: true,
    placeholder: "Type your business type..."
  },
  {
    id: "businessName",
    text: "What is your business name?",
    type: "text",
    required: true
  },
  {
    id: "adminEmail",
    text: "What is the main admin email address?",
    type: "email",
    required: true
  },
  {
    id: "websiteUrl",
    text: "What is your business website URL?",
    type: "url",
    required: false,
    optional: true
  },
  {
    id: "location",
    text: "In which city and country does your business operate?",
    type: "text",
    required: true
  },
  {
    id: "services",
    text: "Describe your main services or products in detail. Please list them clearly and include anything customers often ask about.",
    type: "textarea",
    required: true
  },
  {
    id: "openingHours",
    text: "What are your opening hours? Please specify days and times.",
    type: "textarea",
    required: true
  },
  {
    id: "handleBookings",
    text: "Should the AI agent handle bookings or appointments automatically?",
    type: "toggle",
    required: true
  },
  {
    id: "transferCalls",
    text: "Should the AI transfer calls to a human in complex or sensitive situations?",
    type: "toggle",
    required: true
  },
  {
    id: "communicationStyle",
    text: "Describe how the AI should communicate. Use three adjectives, for example: professional, friendly, concise.",
    type: "text",
    required: true
  },
  {
    id: "languages",
    text: "Which languages should the AI support?",
    type: "text",
    required: true,
    placeholder: "e.g. Slovak, Czech, English, German"
  }
];

const modeQuestions = {
  "Restaurant": [
    { id: "acceptReservations", text: "Do you accept table reservations?", type: "toggle", required: true },
    { id: "maxGuests", text: "What is the maximum number of guests per reservation?", type: "text", required: true },
    { id: "menuFile", text: "Upload your full menu as PDF or JPG file.", type: "file", required: true, accept: ".pdf,.jpg,.jpeg,.png" },
    { id: "delivery", text: "Do you offer food delivery?", type: "toggle", required: true },
    { id: "takeaway", text: "Do you offer takeaway?", type: "toggle", required: true },
    { id: "dietaryOptions", text: "Do you have special dietary options such as vegan, vegetarian, gluten-free? Please describe.", type: "textarea", required: false, optional: true },
    { id: "cancellationPolicy", text: "What is your reservation cancellation policy?", type: "textarea", required: true },
    { id: "sendReminders", text: "Should the AI send reservation reminders to customers?", type: "toggle", required: true },
    { id: "googleCalendar", text: "Do you want to connect Google Calendar for reservation tracking?", type: "toggle", required: true },
    { id: "specialOffers", text: "Should the AI promote any special offers or daily menus?", type: "toggle", required: false, optional: true },
    { id: "extraNotes", text: "Is there anything specific about your restaurant operations the AI must always mention or follow?", type: "textarea", required: false, optional: true }
  ],
  "Café": [
    { id: "acceptReservations", text: "Do you accept table reservations?", type: "toggle", required: true },
    { id: "maxGuests", text: "What is the maximum number of guests per reservation?", type: "text", required: true },
    { id: "menuFile", text: "Upload your full menu as PDF or JPG file.", type: "file", required: true, accept: ".pdf,.jpg,.jpeg,.png" },
    { id: "delivery", text: "Do you offer food delivery?", type: "toggle", required: true },
    { id: "takeaway", text: "Do you offer takeaway?", type: "toggle", required: true },
    { id: "dietaryOptions", text: "Do you have special dietary options such as vegan, vegetarian, gluten-free? Please describe.", type: "textarea", required: false, optional: true },
    { id: "cancellationPolicy", text: "What is your reservation cancellation policy?", type: "textarea", required: true },
    { id: "sendReminders", text: "Should the AI send reservation reminders to customers?", type: "toggle", required: true },
    { id: "googleCalendar", text: "Do you want to connect Google Calendar for reservation tracking?", type: "toggle", required: true },
    { id: "specialOffers", text: "Should the AI promote any special offers or daily menus?", type: "toggle", required: false, optional: true },
    { id: "extraNotes", text: "Is there anything specific about your café operations the AI must always mention or follow?", type: "textarea", required: false, optional: true }
  ],
  "Barber Shop": [
    { id: "servicesList", text: "List all haircut and grooming services you offer.", type: "textarea", required: true },
    { id: "websiteUrl", text: "Provide your barbershop website URL if available.", type: "url", required: false, optional: true },
    { id: "avgDuration", text: "What is the average duration of a haircut in minutes?", type: "text", required: true },
    { id: "walkIns", text: "Do you allow walk-ins or only appointments?", type: "toggle", required: true },
    { id: "sameDay", text: "Do you allow same-day booking?", type: "toggle", required: true },
    { id: "maxClients", text: "How many clients can be served at the same time?", type: "text", required: true },
    { id: "cancellationPolicy", text: "What is your cancellation policy?", type: "textarea", required: true },
    { id: "googleCalendar", text: "Do you want to connect Google Calendar for appointment scheduling?", type: "toggle", required: true },
    { id: "sendReminders", text: "Should the AI send reminders before appointments?", type: "toggle", required: true },
    { id: "rescheduleViaAI", text: "Can customers reschedule or cancel via phone through the AI?", type: "toggle", required: true },
    { id: "barberSelection", text: "Are there specific barbers customers can choose by name?", type: "toggle", required: false, optional: true },
    { id: "collectPhone", text: "Should the AI collect customer phone number for confirmations?", type: "toggle", required: true },
    { id: "sellProducts", text: "Do you sell products (e.g. hair products)?", type: "toggle", required: false, optional: true },
    { id: "extraNotes", text: "Is there anything specific about your barbershop that the AI should highlight?", type: "textarea", required: false, optional: true }
  ],
  "Hair Salon": [
    { id: "servicesList", text: "List all services offered (haircut, coloring, styling, treatments).", type: "textarea", required: true },
    { id: "websiteUrl", text: "Provide your salon website URL if available.", type: "url", required: false, optional: true },
    { id: "avgDuration", text: "Average duration per service type?", type: "textarea", required: true },
    { id: "durationVaries", text: "Do services vary significantly in time? If yes, explain.", type: "textarea", required: false, optional: true },
    { id: "walkIns", text: "Do you allow walk-ins?", type: "toggle", required: true },
    { id: "sameDay", text: "Same-day booking allowed?", type: "toggle", required: true },
    { id: "cancellationPolicy", text: "Cancellation policy?", type: "textarea", required: true },
    { id: "googleCalendar", text: "Google Calendar integration for bookings?", type: "toggle", required: true },
    { id: "sendReminders", text: "Should the AI send appointment reminders?", type: "toggle", required: true },
    { id: "collectEmail", text: "Should the AI collect email for follow-up promotions?", type: "toggle", required: false, optional: true },
    { id: "stylistSelection", text: "Do clients choose specific stylists?", type: "toggle", required: false, optional: true },
    { id: "packages", text: "Do you offer package services or bundles?", type: "toggle", required: false, optional: true },
    { id: "hygieneInstructions", text: "Any special hygiene or preparation instructions for customers?", type: "textarea", required: false, optional: true },
    { id: "extraNotes", text: "Any additional salon-specific instructions for AI?", type: "textarea", required: false, optional: true }
  ],
  "Gym": [
    { id: "memberships", text: "Do you offer memberships? If yes, list types (monthly, yearly, student, etc.).", type: "textarea", required: true },
    { id: "personalTraining", text: "Do you offer personal training sessions?", type: "toggle", required: true },
    { id: "equipment", text: "List key equipment available in your gym.", type: "textarea", required: true },
    { id: "openingHours", text: "Opening hours (if different from global).", type: "textarea", required: false, optional: true },
    { id: "ptAppointments", text: "Do customers need appointments for personal training?", type: "toggle", required: true },
    { id: "ptDuration", text: "Duration of personal training session?", type: "text", required: false, optional: true },
    { id: "freeTrial", text: "Do you allow free trial sessions?", type: "toggle", required: false, optional: true },
    { id: "googleCalendar", text: "Do you want to connect Google Calendar for PT bookings?", type: "toggle", required: true },
    { id: "freezeCancel", text: "Can members freeze or cancel memberships via AI?", type: "toggle", required: false, optional: true },
    { id: "equipmentQuestions", text: "Should AI answer equipment-related questions?", type: "toggle", required: true },
    { id: "complaints", text: "Should AI handle complaints about facility issues?", type: "toggle", required: false, optional: true },
    { id: "gymRules", text: "Any gym rules customers must know?", type: "textarea", required: false, optional: true }
  ],
  "Cleaning Service": [
    { id: "serviceTypes", text: "What types of cleaning services do you provide?", type: "textarea", required: true },
    { id: "clientType", text: "Do you serve residential, commercial, or both?", type: "select", options: ["Residential", "Commercial", "Both"], required: true },
    { id: "avgDuration", text: "Average duration of cleaning session?", type: "text", required: true },
    { id: "serviceFrequency", text: "Do you offer one-time or recurring cleaning?", type: "select", options: ["One-time", "Recurring", "Both"], required: true },
    { id: "serviceArea", text: "Service area locations?", type: "textarea", required: true },
    { id: "advanceBooking", text: "Do you require advance booking?", type: "toggle", required: true },
    { id: "cancellationPolicy", text: "Cancellation policy?", type: "textarea", required: true },
    { id: "googleCalendar", text: "Google Calendar integration for scheduling?", type: "toggle", required: true },
    { id: "propertySize", text: "Should AI collect property size details?", type: "toggle", required: false, optional: true },
    { id: "pricingEstimate", text: "Should AI calculate estimated pricing?", type: "toggle", required: false, optional: true },
    { id: "prepInstructions", text: "Any preparation instructions customers must follow before cleaning?", type: "textarea", required: false, optional: true },
    { id: "extraNotes", text: "Any custom operational rules?", type: "textarea", required: false, optional: true }
  ],
  "Dental Clinic": [
    { id: "procedures", text: "List all dental procedures offered.", type: "textarea", required: true },
    { id: "avgDuration", text: "Average duration per procedure?", type: "textarea", required: true },
    { id: "emergency", text: "Do you accept emergency appointments?", type: "toggle", required: true },
    { id: "insurance", text: "Insurance accepted?", type: "textarea", required: false, optional: true },
    { id: "patientData", text: "Do you require patient full name, phone, email before booking?", type: "toggle", required: true },
    { id: "googleCalendar", text: "Google Calendar integration for scheduling?", type: "toggle", required: true },
    { id: "sendReminders", text: "Should AI send appointment reminders?", type: "toggle", required: true },
    { id: "rescheduleViaAI", text: "Can patients reschedule or cancel through AI?", type: "toggle", required: true },
    { id: "postTreatment", text: "Should AI provide post-treatment instructions?", type: "toggle", required: false, optional: true },
    { id: "paymentMethods", text: "Payment methods accepted?", type: "textarea", required: true },
    { id: "checkupReminders", text: "Should AI remind patients about checkups?", type: "toggle", required: false, optional: true },
    { id: "compliance", text: "Any compliance or privacy rules the AI must follow?", type: "textarea", required: false, optional: true }
  ],
  "Medical Clinic": [
    { id: "serviceTypes", text: "What type of medical services do you provide?", type: "textarea", required: true },
    { id: "avgDuration", text: "Average appointment duration?", type: "text", required: true },
    { id: "urgentCases", text: "Do you handle urgent cases?", type: "toggle", required: true },
    { id: "patientData", text: "Required patient data before booking?", type: "textarea", required: true },
    { id: "insurance", text: "Insurance accepted?", type: "textarea", required: false, optional: true },
    { id: "googleCalendar", text: "Google Calendar integration?", type: "toggle", required: true },
    { id: "sendReminders", text: "Appointment reminders?", type: "toggle", required: true },
    { id: "rescheduleViaAI", text: "Rescheduling allowed via AI?", type: "toggle", required: true },
    { id: "preVisit", text: "Pre-visit instructions patients must follow?", type: "textarea", required: false, optional: true },
    { id: "followUp", text: "Follow-up communication required?", type: "toggle", required: false, optional: true },
    { id: "compliance", text: "Any legal or compliance constraints?", type: "textarea", required: false, optional: true },
    { id: "doctorAssignment", text: "Any specific doctor assignment logic?", type: "textarea", required: false, optional: true }
  ],
  "E-commerce Store": [
    { id: "shippingCountries", text: "Which countries do you ship to?", type: "textarea", required: true },
    { id: "deliveryTime", text: "What is your average delivery time?", type: "text", required: true },
    { id: "returnPolicy", text: "What is your return and refund policy?", type: "textarea", required: true },
    { id: "cancelBeforeShip", text: "Can customers cancel orders before shipment?", type: "toggle", required: true },
    { id: "trackingNumbers", text: "Do you provide tracking numbers?", type: "toggle", required: true },
    { id: "paymentMethods", text: "Payment methods accepted?", type: "textarea", required: true },
    { id: "orderDatabase", text: "Should AI access order database for status checks?", type: "toggle", required: true },
    { id: "refundHandling", text: "Should AI process refund requests automatically or escalate?", type: "select", options: ["Automatically", "Escalate to human"], required: true },
    { id: "loyaltyProgram", text: "Do you have loyalty programs?", type: "toggle", required: false, optional: true },
    { id: "upsell", text: "Should AI upsell related products?", type: "toggle", required: false, optional: true },
    { id: "damagedGoods", text: "Any special policies for damaged goods?", type: "textarea", required: false, optional: true },
    { id: "googleCalendar", text: "Should AI schedule callbacks via Google Calendar if needed?", type: "toggle", required: false, optional: true }
  ],
  "Physical Shop": [
    { id: "products", text: "What products do you sell?", type: "textarea", required: true },
    { id: "checkAvailability", text: "Can AI check product availability?", type: "toggle", required: true },
    { id: "openingHours", text: "Opening hours confirmation?", type: "textarea", required: true },
    { id: "inStorePickup", text: "Do you offer in-store pickup?", type: "toggle", required: true },
    { id: "returnPolicy", text: "Return policy?", type: "textarea", required: true },
    { id: "paymentMethods", text: "Payment methods?", type: "textarea", required: true },
    { id: "reserveItems", text: "Do you reserve items for customers?", type: "toggle", required: false, optional: true },
    { id: "googleCalendar", text: "Google Calendar integration for reservations?", type: "toggle", required: false, optional: true },
    { id: "promotions", text: "Any current promotions?", type: "textarea", required: false, optional: true },
    { id: "stockQuestions", text: "Any specific instructions for handling stock questions?", type: "textarea", required: false, optional: true }
  ],
  "Customer Support Center": [
    { id: "issueTypes", text: "What type of issues do you handle?", type: "textarea", required: true },
    { id: "resolutionTime", text: "Average resolution time?", type: "text", required: true },
    { id: "escalateComplex", text: "Should AI escalate complex cases to human agents?", type: "toggle", required: true },
    { id: "knowledgeBase", text: "Do you have a knowledge base AI should use?", type: "toggle", required: false, optional: true },
    { id: "createTickets", text: "Should AI create support tickets?", type: "toggle", required: true },
    { id: "ticketPriority", text: "Ticket priority logic?", type: "textarea", required: false, optional: true },
    { id: "googleCalendar", text: "Google Calendar for scheduled callbacks?", type: "toggle", required: false, optional: true },
    { id: "attachments", text: "Should AI collect screenshots or attachments?", type: "toggle", required: false, optional: true },
    { id: "vipHandling", text: "VIP customer handling rules?", type: "textarea", required: false, optional: true },
    { id: "slaRules", text: "Any SLA rules the AI must follow?", type: "textarea", required: false, optional: true }
  ],
  "Real Estate Agency": [
    { id: "propertyTypes", text: "What types of properties do you handle?", type: "textarea", required: true },
    { id: "locations", text: "Which cities or regions?", type: "textarea", required: true },
    { id: "scheduleViewings", text: "Do you schedule property viewings?", type: "toggle", required: true },
    { id: "googleCalendar", text: "Google Calendar integration for viewings?", type: "toggle", required: true },
    { id: "preQualify", text: "Should AI pre-qualify buyers by budget?", type: "toggle", required: false, optional: true },
    { id: "priceRange", text: "Minimum and maximum price range?", type: "text", required: false, optional: true },
    { id: "collectPreferences", text: "Should AI collect preferred location, size, rooms?", type: "toggle", required: true },
    { id: "sendListings", text: "Should AI send property listings via SMS or email after call?", type: "toggle", required: false, optional: true },
    { id: "virtualTours", text: "Do you allow virtual tours?", type: "toggle", required: false, optional: true },
    { id: "escalateHighValue", text: "Should AI escalate high-value buyers immediately?", type: "toggle", required: false, optional: true },
    { id: "rentalInquiries", text: "Can AI handle rental inquiries?", type: "toggle", required: false, optional: true },
    { id: "leaseDuration", text: "Lease duration types?", type: "textarea", required: false, optional: true },
    { id: "legalDisclosures", text: "Any legal disclosures required?", type: "textarea", required: false, optional: true },
    { id: "followUpCalls", text: "Should AI schedule follow-up calls?", type: "toggle", required: false, optional: true },
    { id: "multilingual", text: "Any multilingual requirements?", type: "textarea", required: false, optional: true }
  ],
  "Property Management": [
    { id: "propertyTypes", text: "What types of properties do you handle?", type: "textarea", required: true },
    { id: "locations", text: "Which cities or regions?", type: "textarea", required: true },
    { id: "scheduleViewings", text: "Do you schedule property viewings?", type: "toggle", required: true },
    { id: "googleCalendar", text: "Google Calendar integration for viewings?", type: "toggle", required: true },
    { id: "preQualify", text: "Should AI pre-qualify buyers by budget?", type: "toggle", required: false, optional: true },
    { id: "priceRange", text: "Minimum and maximum price range?", type: "text", required: false, optional: true },
    { id: "collectPreferences", text: "Should AI collect preferred location, size, rooms?", type: "toggle", required: true },
    { id: "sendListings", text: "Should AI send property listings via SMS or email after call?", type: "toggle", required: false, optional: true },
    { id: "virtualTours", text: "Do you allow virtual tours?", type: "toggle", required: false, optional: true },
    { id: "escalateHighValue", text: "Should AI escalate high-value buyers immediately?", type: "toggle", required: false, optional: true },
    { id: "rentalInquiries", text: "Can AI handle rental inquiries?", type: "toggle", required: true },
    { id: "leaseDuration", text: "Lease duration types?", type: "textarea", required: true },
    { id: "legalDisclosures", text: "Any legal disclosures required?", type: "textarea", required: false, optional: true },
    { id: "followUpCalls", text: "Should AI schedule follow-up calls?", type: "toggle", required: false, optional: true },
    { id: "multilingual", text: "Any multilingual requirements?", type: "textarea", required: false, optional: true }
  ]
};

// ===== STATE =====
let state = {
  currentStep: 0,
  answers: {},
  selectedMode: null,
  allQuestions: []
};

// ===== DOM ELEMENTS =====
let questionText, inputArea, progressText, progressFill, backBtn, continueBtn, backToHome, confirmationModal, confirmEmail, finishBtn;

// ===== INIT =====
function init() {
  questionText = document.getElementById("questionText");
  inputArea = document.getElementById("inputArea");
  progressText = document.getElementById("progressText");
  progressFill = document.getElementById("progressFill");
  backBtn = document.getElementById("backBtn");
  continueBtn = document.getElementById("continueBtn");
  backToHome = document.getElementById("backToHome");
  confirmationModal = document.getElementById("confirmationModal");
  confirmEmail = document.getElementById("confirmEmail");
  finishBtn = document.getElementById("finishBtn");

  state.allQuestions = [...globalQuestions];
  renderQuestion();
  updateProgress();

  backBtn.addEventListener("click", goBack);
  continueBtn.addEventListener("click", goNext);
  backToHome.addEventListener("click", () => window.location.href = "index.html");
  finishBtn.addEventListener("click", () => window.location.href = "dashboard.html");
}

// ===== RENDER QUESTION =====
function renderQuestion() {
  const question = state.allQuestions[state.currentStep];
  if (!question) {
    console.error("No question found at step", state.currentStep);
    return;
  }

  questionText.innerHTML = "";
  const mainText = document.createTextNode(question.text);
  questionText.appendChild(mainText);
  
  inputArea.innerHTML = "";

  switch (question.type) {
    case "text":
    case "email":
    case "url":
      const input = document.createElement("input");
      input.type = question.type;
      input.id = question.id;
      input.value = state.answers[question.id] || "";
      if (question.placeholder) input.placeholder = question.placeholder;
      inputArea.appendChild(input);
      break;

    case "textarea":
      const textarea = document.createElement("textarea");
      textarea.id = question.id;
      textarea.value = state.answers[question.id] || "";
      if (question.placeholder) textarea.placeholder = question.placeholder;
      inputArea.appendChild(textarea);
      break;

    case "select":
      const select = document.createElement("select");
      select.id = question.id;
      const defaultOption = document.createElement("option");
      defaultOption.value = "";
      defaultOption.textContent = "Select an option";
      defaultOption.disabled = true;
      defaultOption.selected = !state.answers[question.id];
      select.appendChild(defaultOption);
      question.options.forEach(opt => {
        const option = document.createElement("option");
        option.value = opt;
        option.textContent = opt;
        if (state.answers[question.id] === opt) option.selected = true;
        select.appendChild(option);
      });
      inputArea.appendChild(select);
      break;

    case "toggle":
      const toggleGroup = document.createElement("div");
      toggleGroup.className = "toggle-group";
      ["Yes", "No"].forEach(val => {
        const btn = document.createElement("button");
        btn.type = "button";
        btn.className = `toggle-btn ${state.answers[question.id] === val ? "active" : ""}`;
        btn.textContent = val;
        btn.addEventListener("click", () => {
          toggleGroup.querySelectorAll(".toggle-btn").forEach(b => b.classList.remove("active"));
          btn.classList.add("active");
          state.answers[question.id] = val;
        });
        toggleGroup.appendChild(btn);
      });
      inputArea.appendChild(toggleGroup);
      break;

    case "file":
      const fileContainer = document.createElement("div");
      fileContainer.className = "file-upload";
      const fileInput = document.createElement("input");
      fileInput.type = "file";
      fileInput.id = question.id;
      fileInput.accept = question.accept || "*/*";
      fileInput.addEventListener("change", (e) => {
        if (e.target.files[0]) {
          fileName.textContent = e.target.files[0].name;
          state.answers[question.id] = e.target.files[0];
        }
      });
      const fileLabel = document.createElement("label");
      fileLabel.className = "file-upload-label";
      fileLabel.setAttribute("for", question.id);
      fileLabel.textContent = "Click to upload file";
      const fileName = document.createElement("span");
      fileName.className = "file-name";
      fileName.textContent = state.answers[question.id]?.name || "No file selected";
      fileContainer.appendChild(fileInput);
      fileContainer.appendChild(fileLabel);
      fileContainer.appendChild(fileName);
      inputArea.appendChild(fileContainer);
      break;
  }

  if (question.optional) {
    const optionalSpan = document.createElement("span");
    optionalSpan.className = "optional";
    optionalSpan.textContent = " (optional)";
    questionText.appendChild(optionalSpan);
  }

  backBtn.disabled = state.currentStep === 0;
  continueBtn.textContent = state.currentStep === state.allQuestions.length - 1 ? "Finish" : "Continue";

  if (question.type === "toggle" && state.answers[question.id]) {
    const activeBtn = inputArea.querySelector(`.toggle-btn:nth-child(${state.answers[question.id] === "Yes" ? 1 : 2})`);
    if (activeBtn) {
      inputArea.querySelectorAll(".toggle-btn").forEach(b => b.classList.remove("active"));
      activeBtn.classList.add("active");
    }
  }
}

// ===== UPDATE PROGRESS =====
function updateProgress() {
  const total = state.allQuestions.length;
  const current = state.currentStep + 1;
  progressText.textContent = `Step ${current} of ${total}`;
  progressFill.style.width = `${(current / total) * 100}%`;
}

// ===== NAVIGATION =====
function goNext() {
  const question = state.allQuestions[state.currentStep];
  
  const input = inputArea.querySelector("input, textarea, select");
  if (input && !["toggle", "file"].includes(question.type)) {
    state.answers[question.id] = input.value;
  }
  
  if (question.required) {
    let value = state.answers[question.id];
    
    if (question.type === "file") {
      if (!value || !(value instanceof File)) {
        alert("This field is required. Please upload a file.");
        return;
      }
    } else if (question.type === "toggle") {
      if (!value || (value !== "Yes" && value !== "No")) {
        alert("Please select Yes or No.");
        return;
      }
    } else if (!value || (typeof value === "string" && value.trim() === "")) {
      alert("This field is required.");
      return;
    }
  }

  if (question.id === "businessType" && !state.selectedMode) {
    const userInput = state.answers.businessType.toLowerCase().trim();
    let matchedMode = null;
    
    for (const mode of Object.keys(modeQuestions)) {
      if (userInput.includes(mode.toLowerCase()) || mode.toLowerCase().includes(userInput)) {
        matchedMode = mode;
        break;
      }
    }
    
    if (matchedMode) {
      state.selectedMode = matchedMode;
    } else {
      state.selectedMode = "Restaurant";
    }
    
    const modeQs = modeQuestions[state.selectedMode] || [];
    state.allQuestions = [...globalQuestions, ...modeQs];
    updateProgress();
    renderQuestion();
    return;
  }

  if (state.currentStep < state.allQuestions.length - 1) {
    state.currentStep++;
    renderQuestion();
    updateProgress();
  } else {
    confirmEmail.textContent = state.answers.adminEmail || "your email";
    confirmationModal.classList.remove("hidden");
  }
}

// ===== GO BACK =====
function goBack() {
  if (state.currentStep > 0) {
    const question = state.allQuestions[state.currentStep];
    const input = inputArea.querySelector("input, textarea, select");
    if (input && !["toggle", "file"].includes(question.type)) {
      state.answers[question.id] = input.value;
    }
    
    state.currentStep--;
    
    if (state.currentStep < globalQuestions.length && state.selectedMode) {
      state.allQuestions = [...globalQuestions];
      state.selectedMode = null;
    }
    
    renderQuestion();
    updateProgress();
  }
}

// ===== START =====
document.addEventListener("DOMContentLoaded", init);
