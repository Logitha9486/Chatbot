# CDP Support Chatbot

## **Overview**
The **CDP Support Chatbot** is an interactive web-based chatbot designed to assist users with Customer Data Platforms (CDPs) like Segment, mParticle, Lytics, and Zeotap. Users can ask "how-to" questions and receive relevant documentation links and guidance. The chatbot features an easy-to-use interface and responsive design.

---

## **Features**

### **Frontend**
- **Welcome Page**:
  - Displays a brief introduction and instructions for interacting with the chatbot.
  - Includes a "Start" button to access the chatbot interface.
- **Chatbot Interface**:
  - Floating Action Button (FAB) to launch the chatbot.
  - Displays user queries and bot responses.
  - Input field with "Send" button for entering queries.
- **Responsive Design**:
  - Optimized for mobile, tablet, and desktop devices.

### **Backend Logic**
- **Query Matching**:
  - Identifies keywords in user input to determine relevant documentation.
- **Dynamic Documentation Links**:
  - Provides links to Segment, mParticle, Lytics, and Zeotap guides.
- **Custom Responses**:
  - Handles platform comparisons and how-to queries.
  - Filters irrelevant topics (e.g., sports, weather).
- **Predefined Answers**:
  - Returns platform-specific responses for common tasks.

---

## **Tech Stack**

### **Frontend**
- **HTML**: Provides the structure for the chatbot and welcome page.
- **CSS**:
  - `style.css`: Styles the welcome page.
  - `chatbot.css`: Styles the chatbot interface.
- **JavaScript**: Implements interactivity and query processing.

### **Backend Logic**
- Written in JavaScript (runs client-side).
- Uses regex and predefined mappings for keyword detection and response generation.

---

## **Installation and Usage**

### **Setup**
1. Clone this repository to your local machine:
   ```bash
   git clone https://github.com/your-repo/cdp-support-chatbot.git

Navigate to the project directory:
bash
Copy code
cd cdp-support-chatbot
Open the index.html file in any modern browser.
File Structure
index.html: Contains the main structure and welcome page.
chatbot.css: Styles the chatbot interface.
style.css: Styles the welcome page.
script.js: Contains the chatbot logic and query handling.

How It Works
Open the CDP Support Chatbot in your browser.
Start the chatbot using the Floating Action Button (FAB).
Enter your "how-to" query related to CDPs:
Example: "How do I set up a new source in Segment?"
The chatbot will respond with relevant links or guidance.
If the query is irrelevant, the chatbot will politely inform you of its limitations.
 
Future Improvements
Natural Language Processing (NLP) for improved query understanding.
Voice-based Interaction for accessibility.
Real-Time Support using WebSockets for live responses.
Chat History saving and exporting features
