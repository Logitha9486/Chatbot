const chatMessages = document.getElementById("chat-messages");
const userInput = document.getElementById("user-input");
const sendButton = document.getElementById("send-button");

// Simulated API Endpoints for CDPs
const API_ENDPOINTS = {
  segment: "https://segment.com/docs/",
  mparticle: "https://docs.mparticle.com/",
  lytics: "https://docs.lytics.com/",
  zeotap: "https://docs.zeotap.com/home/en-us/",
};

// Bot responses handler
function getBotResponse(userQuery) {
  let response = "";

  if (/segment/i.test(userQuery)) {
    response = `You can learn more about Segment here: <a href="${API_ENDPOINTS.segment}" target="_blank">Segment Documentation</a>`;
  } else if (/mparticle/i.test(userQuery)) {
    response = `You can learn more about mParticle here: <a href="${API_ENDPOINTS.mparticle}" target="_blank">mParticle Documentation</a>`;
  } else if (/lytics/i.test(userQuery)) {
    response = `You can learn more about Lytics here: <a href="${API_ENDPOINTS.lytics}" target="_blank">Lytics Documentation</a>`;
  } else if (/zeotap/i.test(userQuery)) {
    response = `You can learn more about Zeotap here: <a href="${API_ENDPOINTS.zeotap}" target="_blank">Zeotap Documentation</a>`;
  } else {
    response = "Sorry, I can only help with Segment, mParticle, Lytics, or Zeotap-related questions.";
  }

  return response;
}

// Append message to the chatbox
function appendMessage(content, type) {
  const message = document.createElement("div");
  message.className = `message ${type}-message`;
  message.innerHTML = content;
  chatMessages.appendChild(message);
  chatMessages.scrollTop = chatMessages.scrollHeight;
}

// Event listener for sending messages
sendButton.addEventListener("click", () => {
  const userQuery = userInput.value.trim();

  if (userQuery) {
    appendMessage(userQuery, "user");
    const botResponse = getBotResponse(userQuery);
    appendMessage(botResponse, "bot");
    userInput.value = "";
  }
});

// Send message on Enter key
userInput.addEventListener("keydown", (e) => {
  if (e.key === "Enter") sendButton.click();
});
const documentationIndex = {
    "set up a new source in segment": "https://segment.com/docs/connections/sources/catalog/",
    "create a user profile in mparticle": "https://docs.mparticle.com/guides/user-profiles/",
    "build an audience segment in lytics": "https://docs.lytics.com/audiences/segments/",
    "integrate data with zeotap": "https://docs.zeotap.com/home/en-us/get-started/",
  };
  function getBotResponse(userQuery) {
    const lowerQuery = userQuery.toLowerCase();
    const matchedKey = Object.keys(documentationIndex).find((key) =>
      lowerQuery.includes(key)
    );
  
    if (matchedKey) {
      return `You can find the information here: <a href="${documentationIndex[matchedKey]}" target="_blank">${documentationIndex[matchedKey]}</a>`;
    } else {
      return "Sorry, I couldn't find information related to your question. Please try rephrasing.";
    }
  }
const docData = {
    "Segment": {
      "how_to_setup_source": "To set up a source in Segment, follow these steps:...\n1. Go to Segment workspace, 2. Select 'Sources', 3. Add source...",
      "create_audience": "To create an audience in Segment, go to the 'Audiences' tab and click 'Create'."
    },
    "mParticle": {
      "create_user_profile": "To create a user profile in mParticle, follow these steps:...\n1. Log in to your mParticle account, 2. Navigate to 'Profiles'...",
      "integration": "To integrate mParticle with other platforms, first, you need to configure the API keys..."
    },
    "Lytics": {
      "build_audience_segment": "To build an audience segment in Lytics, go to the 'Segments' tab and select 'Create Segment'..."
    },
    "Zeotap": {
      "integrate_data": "To integrate your data with Zeotap, follow these steps:...\n1. Log in to Zeotap, 2. Go to the 'Integrations' tab..."
    }
  };
  
  // Function to search documentation for "how-to" tasks
  function searchDocumentation(query) {
    const queryLower = query.toLowerCase();
    const response = [];
    
    const howToKeywords = [
      'set up', 'create', 'build', 'integrate', 'profile', 'audience', 'source'
    ];
  
    for (const platform in docData) {
      for (const key in docData[platform]) {
        if (howToKeywords.some(keyword => queryLower.includes(keyword)) && 
            docData[platform][key].toLowerCase().includes(queryLower)) {
          response.push(docData[platform][key]);
        }
      }
    }
  
    if (response.length > 0) {
      return response.join("\n\n");
    } else {
      return "Sorry, I couldn't find an answer to your question. Please try rephrasing it.";
    }
  }
  
  // Function to handle irrelevant questions
  function handleIrrelevantQuestions(query) {
    const irrelevantKeywords = ['movie', 'weather', 'sports', 'celebrity', 'holiday'];
  
    if (irrelevantKeywords.some(keyword => query.toLowerCase().includes(keyword))) {
      return "Sorry, I can only assist with questions related to CDPs like Segment, mParticle, Lytics, and Zeotap.";
    }
    return null;
  }
  
  // Function to compare CDPs on specific functionalities
  function compareCDP(query) {
    const comparisonKeywords = ['compare', 'difference', 'vs'];
  
    if (comparisonKeywords.some(keyword => query.toLowerCase().includes(keyword))) {
      // Identify which platforms are being compared
      const platformsToCompare = [];
      const platformNames = ['Segment', 'mParticle', 'Lytics', 'Zeotap'];
  
      platformNames.forEach(platform => {
        if (query.toLowerCase().includes(platform.toLowerCase())) {
          platformsToCompare.push(platform);
        }
      });
  
      // Compare functionalities if at least two platforms are mentioned
      if (platformsToCompare.length === 2) {
        const comparisonResults = [];
  
        const feature = query.toLowerCase().includes('audience') ? 'audience' : 'source'; // For example, focus on 'audience' or 'source'
        
        platformsToCompare.forEach(platform => {
          if (docData[platform][`create_${feature}`]) {
            comparisonResults.push(`${platform}: ${docData[platform][`create_${feature}`]}`);
          }
        });
  
        if (comparisonResults.length > 0) {
          return comparisonResults.join("\n\n");
        } else {
          return "Sorry, I couldn't find a comparison for that feature.";
        }
      }
      return "Please provide two platforms to compare.";
    }
    return null;
  }
  
  // Main function to handle user queries
  function handleUserQuery(query) {
    // Check for irrelevant questions
    const irrelevantResponse = handleIrrelevantQuestions(query);
    if (irrelevantResponse) {
      return irrelevantResponse;
    }
  
    // Check for cross-CDP comparisons
    const comparisonResponse = compareCDP(query);
    if (comparisonResponse) {
      return comparisonResponse;
    }
  
    // If the question is relevant, search documentation
    return searchDocumentation(query);
  }
  
  // Example user queries
  const userQuery1 = "How do I set up a new source in Segment?";
  const userQuery2 = "How does Segment's audience creation process compare to Lytics'?";
  
  console.log(handleUserQuery(userQuery1));  // Will return Segment's source setup instructions
  console.log(handleUserQuery(userQuery2));  // Will return a comparison between Segment and Lytics audience creation
  