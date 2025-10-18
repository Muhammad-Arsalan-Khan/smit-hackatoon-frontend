// import React, { useRef, useState } from "react";
// import API_URL from "../../config.js"
// import {
//   Box,
//   Container,
//   Paper,
//   Typography,
//   IconButton,
//   InputBase,
//   Avatar,
//   Stack,
//   Chip,
//   Divider,
//   Tooltip,
// } from "@mui/material";
// import AddIcon from "@mui/icons-material/Add";;
// import SendIcon from "@mui/icons-material/Send";
// import CloseIcon from "@mui/icons-material/Close";
// import DescriptionIcon from "@mui/icons-material/Description";

// // HealthMate Advanced Chat Upload UI
// // Single-file React component (requires @mui/material, @emotion/react, @emotion/styled)

// export default function UserContent() {
//   const fileRef = useRef(null);
//   const [file, setFile] = useState(null);
//   const [messages, setMessages] = useState([
//     { id: 1, from: "bot", text: "Assalamualaikum! Apni report upload kijiye ya yahan type karke bat kijiye." },
//   ]);
//   const [text, setText] = useState("");
//   // const [loading, setLoading] = useState(false);
//   // const [error, setError] = useState("");

//   const pickFile = () => fileRef.current?.click();

//   function handleFile(e) {
//     const f = e.target.files?.[0];
//     if (!f) return;
//     setFile({ name: f.name, size: f.size, type: f.type });
//     setMessages((m) => [
//       ...m,
//       { id: Date.now(), from: "user", text: `Uploaded ${f.name}` },
//     ]);
//   }

//   const sendMessage = async () => {
//     if (!text.trim()) return;
//     const userMsg = { id: Date.now(), from: "user", text: text.trim() };
//     setMessages((m) => [...m, userMsg]);
//     setText("");

//     setTimeout(() => {
//       setMessages((m) => [
//         ...m,
//         { id: Date.now() + 1, from: "bot", text: "MediSmart AI analyzing your report... Yeh ek example reply hai — real AI integration backend pe add karein." },
//       ]);
//     }, 600);
//   };

//   return (
//     <Box 
//       sx={{ 
//         minHeight: "100vh", 
//         background: "linear-gradient(135deg, #0a1628 0%, #0f1d2e 50%, #071219 100%)",
//         color: "#e6f4ea", 
//         py: 6 
//       }}
//     >
//       <Container maxWidth="lg">
//         {/* Premium Header */}
//         <Box
//           sx={{
//             opacity: 0,
//             animation: "fadeInDown 0.8s ease forwards",
//             "@keyframes fadeInDown": {
//               from: { opacity: 0, transform: "translateY(-30px)" },
//               to: { opacity: 1, transform: "translateY(0)" }
//             }
//           }}
//         >
//           <Stack direction="row" alignItems="center" spacing={3} sx={{ mb: 5 }}>
//             <Box
//               sx={{
//                 background: "linear-gradient(135deg, #2e7d32 0%, #4caf50 100%)",
//                 borderRadius: "20px",
//                 p: 2,
//                 boxShadow: "0 8px 32px rgba(46, 125, 50, 0.3)"
//               }}
//             >
//               <Avatar sx={{ bgcolor: "transparent", width: 64, height: 64, fontSize: "2rem" }}>
//                 🏥
//               </Avatar>
//             </Box>
//             <Box>
//               <Typography 
//                 variant="h3" 
//                 sx={{ 
//                   fontWeight: 900,
//                   background: "linear-gradient(90deg, #b9f6ca 0%, #69f0ae 100%)",
//                   backgroundClip: "text",
//                   WebkitBackgroundClip: "text",
//                   WebkitTextFillColor: "transparent",
//                   letterSpacing: "-0.5px"
//                 }}
//               >
//                 HealthMate Pro
//               </Typography>
//               <Typography variant="body1" sx={{ opacity: 0.85, mt: 0.5, fontSize: "1.1rem" }}>
//                 🤖 AI-Powered Medical Report Analysis — Bilingual Support (English + Roman Urdu)
//               </Typography>
//             </Box>
//           </Stack>
//         </Box>

//         {/* Main Premium Card */}
//         <Box
//           sx={{
//             opacity: 0,
//             animation: "fadeInUp 0.8s ease 0.2s forwards",
//             "@keyframes fadeInUp": {
//               from: { opacity: 0, transform: "translateY(30px)" },
//               to: { opacity: 1, transform: "translateY(0)" }
//             }
//           }}
//         >
//           <Paper 
//             elevation={24} 
//             sx={{ 
//               borderRadius: 4, 
//               overflow: "hidden",
//               background: "linear-gradient(180deg, #132337 0%, #0a1525 100%)",
//               border: "1px solid rgba(185, 246, 202, 0.1)",
//               boxShadow: "0 20px 60px rgba(0, 0, 0, 0.5)"
//             }}
//           >
//             <Box sx={{ display: "flex", gap: 3, p: 3 }}>
//               {/* Left: Enhanced Chat Area */}
//               <Box sx={{ flex: 1, minHeight: 500 }}>
//                 <Box 
//                   sx={{ 
//                     p: 3,
//                     background: "linear-gradient(90deg, rgba(46, 125, 50, 0.1) 0%, rgba(105, 240, 174, 0.05) 100%)",
//                     borderRadius: 2,
//                     mb: 2
//                   }}
//                 >
//                   <Typography variant="h5" sx={{ fontWeight: 800, color: "#b9f6ca" }}>
//                     💬 Smart Medical Assistant
//                   </Typography>
//                   <Typography variant="body2" sx={{ opacity: 0.9, mt: 1 }}>
//                     Apni medical reports upload karein ya sawal puchein. Humara MediSmart AI aapko instant analysis provide karega.
//                   </Typography>
//                 </Box>

//                 <Divider sx={{ borderColor: "rgba(185, 246, 202, 0.1)", mb: 2 }} />

//                 {/* Messages Container */}
//                 <Box 
//                   sx={{ 
//                     p: 2, 
//                     height: 340, 
//                     overflowY: "auto", 
//                     display: "flex", 
//                     flexDirection: "column", 
//                     gap: 2,
//                     "&::-webkit-scrollbar": { width: "8px" },
//                     "&::-webkit-scrollbar-track": { background: "rgba(255,255,255,0.02)" },
//                     "&::-webkit-scrollbar-thumb": { 
//                       background: "rgba(185, 246, 202, 0.2)", 
//                       borderRadius: "10px" 
//                     }
//                   }}
//                 >
//                   {messages.map((m, idx) => (
//                     <Box
//                       key={m.id}
//                       sx={{
//                         opacity: 0,
//                         animation: `slideIn 0.4s ease ${idx * 0.1}s forwards`,
//                         "@keyframes slideIn": {
//                           from: { opacity: 0, transform: "translateX(-20px)" },
//                           to: { opacity: 1, transform: "translateX(0)" }
//                         }
//                       }}
//                     >
//                       <Stack
//                         direction="row"
//                         spacing={2}
//                         sx={{ justifyContent: m.from === "user" ? "flex-end" : "flex-start" }}
//                       >
//                         {m.from === "bot" && (
//                           <Avatar 
//                             sx={{ 
//                               width: 40, 
//                               height: 40, 
//                               background: "linear-gradient(135deg, #1b5e20 0%, #2e7d32 100%)",
//                               boxShadow: "0 4px 12px rgba(46, 125, 50, 0.4)"
//                             }}
//                           >
//                             🤖
//                           </Avatar>
//                         )}

//                         <Box
//                           sx={{
//                             maxWidth: "75%",
//                             background: m.from === "user" 
//                               ? "linear-gradient(135deg, #2e7d32 0%, #388e3c 100%)" 
//                               : "rgba(255,255,255,0.06)",
//                             color: "#e6f4ea",
//                             px: 3,
//                             py: 2,
//                             borderRadius: 3,
//                             boxShadow: m.from === "user" 
//                               ? "0 4px 16px rgba(46, 125, 50, 0.3)" 
//                               : "0 2px 8px rgba(0, 0, 0, 0.2)",
//                             border: m.from === "bot" ? "1px solid rgba(185, 246, 202, 0.1)" : "none"
//                           }}
//                         >
//                           <Typography variant="body1" sx={{ lineHeight: 1.6 }}>
//                             {m.text}
//                           </Typography>
//                         </Box>

//                         {m.from === "user" && (
//                           <Avatar 
//                             sx={{ 
//                               width: 40, 
//                               height: 40, 
//                               background: "linear-gradient(135deg, #4caf50 0%, #66bb6a 100%)",
//                               boxShadow: "0 4px 12px rgba(76, 175, 80, 0.4)"
//                             }}
//                           >
//                             👤
//                           </Avatar>
//                         )}
//                       </Stack>
//                     </Box>
//                   ))}
//                 </Box>

//                 {/* Premium Input Area */}
//                 <Box 
//                   sx={{ 
//                     p: 2, 
//                     borderTop: "2px solid rgba(185, 246, 202, 0.1)", 
//                     display: "flex", 
//                     alignItems: "center", 
//                     gap: 2,
//                     background: "rgba(255,255,255,0.02)"
//                   }}
//                 >
//                   <input ref={fileRef} type="file" accept="application/pdf,image/*" hidden onChange={handleFile} />

//                   <Tooltip title="Upload Medical Report" arrow>
//                     <IconButton 
//                       onClick={pickFile} 
//                       sx={{ 
//                         background: "linear-gradient(135deg, #2e7d32 0%, #4caf50 100%)",
//                         color: "white",
//                         transition: "all 0.3s ease",
//                         "&:hover": { 
//                           background: "linear-gradient(135deg, #388e3c 0%, #66bb6a 100%)",
//                           transform: "scale(1.1)"
//                         }
//                       }}
//                     >
//                       <AddIcon />
//                     </IconButton>
//                   </Tooltip>

//                   <Paper 
//                     sx={{ 
//                       flex: 1, 
//                       display: "flex", 
//                       alignItems: "center", 
//                       px: 3, 
//                       py: 1.5,
//                       background: "rgba(255,255,255,0.05)",
//                       border: "1px solid rgba(185, 246, 202, 0.2)",
//                       borderRadius: 3,
//                       transition: "all 0.3s ease",
//                       "&:hover": {
//                         border: "1px solid rgba(185, 246, 202, 0.4)",
//                         background: "rgba(255,255,255,0.08)"
//                       }
//                     }} 
//                     elevation={0}
//                   >
//                     <InputBase
//                       placeholder="Apna sawal yahan likhein aur Enter dabayein..."
//                       fullWidth
//                       value={text}
//                       onChange={(e) => setText(e.target.value)}
//                       onKeyDown={(e) => {
//                         if (e.key === "Enter") sendMessage();
//                       }}
//                       sx={{ color: "#e6f4ea", fontSize: "1rem" }}
//                     />
//                     <IconButton 
//                       onClick={sendMessage}
//                       sx={{
//                         color: "#b9f6ca",
//                         transition: "all 0.2s ease",
//                         "&:hover": { 
//                           color: "#69f0ae",
//                           transform: "scale(1.1)"
//                         }
//                       }}
//                     >
//                       <SendIcon />
//                     </IconButton>
//                   </Paper>
//                 </Box>
//               </Box>

//               {/* Right: Premium File Preview Panel */}
//               <Box 
//                 sx={{ 
//                   width: 380, 
//                   background: "linear-gradient(180deg, rgba(18, 35, 55, 0.8) 0%, rgba(10, 21, 37, 0.9) 100%)",
//                   p: 3, 
//                   display: "flex", 
//                   flexDirection: "column", 
//                   gap: 3,
//                   borderRadius: 2,
//                   border: "1px solid rgba(185, 246, 202, 0.1)"
//                 }}
//               >
//                 <Typography 
//                   variant="h6" 
//                   sx={{ 
//                     fontWeight: 800,
//                     color: "#b9f6ca",
//                     borderBottom: "2px solid rgba(185, 246, 202, 0.2)",
//                     pb: 1
//                   }}
//                 >
//                   📄 Report Dashboard
//                 </Typography>

//                 <Paper 
//                   elevation={8} 
//                   sx={{ 
//                     p: 3, 
//                     borderRadius: 3, 
//                     background: "rgba(255,255,255,0.04)",
//                     border: "1px solid rgba(185, 246, 202, 0.15)",
//                     flex: 1,
//                     transition: "all 0.3s ease",
//                     "&:hover": {
//                       background: "rgba(255,255,255,0.06)",
//                       border: "1px solid rgba(185, 246, 202, 0.25)",
//                       transform: "translateY(-2px)",
//                       boxShadow: "0 8px 24px rgba(46, 125, 50, 0.2)"
//                     }
//                   }}
//                 >
//                   <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
//                     <DescriptionIcon sx={{ fontSize: 52, color: "#4caf50" }} />
//                     <Box sx={{ flex: 1 }}>
//                       <Typography variant="h6" sx={{ fontWeight: 700, color: "#b9f6ca" }}>
//                         {file ? file.name : "uploade the Report"}
//                       </Typography>
//                       <Typography variant="caption" sx={{ opacity: 0.8, fontSize: "0.9rem" }}>
//                         {file ? `📊 Size: ${(file.size / 1024).toFixed(1)} KB` : "📎 PDF, PNG, JPG accepted"}
//                       </Typography>
//                     </Box>

//                     <Stack direction="row" spacing={1}>
//                       <Tooltip title="Upload New Report" arrow>
//                       </Tooltip>

//                       {file && (
//                         <Tooltip title="Remove Report" arrow>
//                           <IconButton 
//                             onClick={() => setFile(null)}
//                             sx={{
//                               transition: "all 0.2s ease",
//                               "&:hover": {
//                                 transform: "scale(1.1)"
//                               }
//                             }}
//                           >
//                             <CloseIcon sx={{ color: "#ff8a80" }} />
//                           </IconButton>
//                         </Tooltip>
//                       )}
//                     </Stack>
//                   </Box>

//                   <Divider sx={{ my: 3, borderColor: "rgba(185, 246, 202, 0.1)" }} />

//                   <Stack spacing={2}>
//                     <Chip 
//                       label="🌐 Bilingual: English + Roman Urdu" 
//                       sx={{ 
//                         background: "rgba(185, 246, 202, 0.1)",
//                         color: "#b9f6ca",
//                         border: "1px solid rgba(185, 246, 202, 0.2)",
//                         fontWeight: 600,
//                         fontSize: "0.9rem"
//                       }} 
//                     />
//                     <Chip 
//                       label="🧠 MediSmart AI Analysis" 
//                       sx={{ 
//                         background: "rgba(105, 240, 174, 0.1)",
//                         color: "#69f0ae",
//                         border: "1px solid rgba(105, 240, 174, 0.2)",
//                         fontWeight: 600,
//                         fontSize: "0.9rem"
//                       }} 
//                     />
//                     <Chip 
//                       label="🔒 Secure (JWT + Encryption)" 
//                       sx={{ 
//                         background: "rgba(185, 246, 202, 0.08)",
//                         color: "#b9f6ca",
//                         border: "1px solid rgba(185, 246, 202, 0.15)",
//                         fontWeight: 600,
//                         fontSize: "0.9rem"
//                       }} 
//                     />
//                   </Stack>
//                 </Paper>
//               </Box>
//             </Box>

//             {/* Premium Footer */}
//             <Box 
//               sx={{ 
//                 p: 2, 
//                 textAlign: "center", 
//                 background: "rgba(0,0,0,0.4)",
//                 borderTop: "1px solid rgba(185, 246, 202, 0.1)"
//               }}
//             >
//               <Typography variant="caption" sx={{ color: "#b9f6ca", fontSize: "0.85rem" }}>
//                 © 2025 HealthMate Pro — AI-powered analysis for understanding only, not medical advice. Always consult a healthcare professional.
//               </Typography>
//             </Box>
//           </Paper>
//         </Box>
//       </Container>
//     </Box>
//   );
// }



// UserContent.jsx

import React, { useRef, useState } from "react";
// API_URL ko apni Express server URL se change karein
const API_URL = "http://localhost:5000/api"; 
import {
  Box,
  Container,
  Paper,
  Typography,
  IconButton,
  InputBase,
  Avatar,
  Stack,
  Chip,
  Divider,
  Tooltip,
  CircularProgress, // Import added
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import SendIcon from "@mui/icons-material/Send";
import CloseIcon from "@mui/icons-material/Close";
import DescriptionIcon from "@mui/icons-material/Description";

export default function UserContent() {
  const fileRef = useRef(null);
  // file mein ab asli File object store hoga
  const [file, setFile] = useState(null); 
  const [messages, setMessages] = useState([
    { id: 1, from: "bot", text: "Assalamualaikum! Apni report upload kijiye ya yahan type karke bat kijiye." },
  ]);
  const [text, setText] = useState("");
  const [loading, setLoading] = useState(false); // Loading state
  const [error, setError] = useState(""); // Error state

  const pickFile = () => fileRef.current?.click();

  function handleFile(e) {
    const f = e.target.files?.[0];
    if (!f) return;
    
    // Asli File object store karein
    setFile(f); 
    setMessages((m) => [
      ...m,
      { id: Date.now(), from: "user", text: `Uploaded: ${f.name} (${(f.size / 1024 / 1024).toFixed(2)} MB)` },
    ]);
    // Input ko reset karein taaki same file dobara select ho sake
    e.target.value = null; 
  }

  const sendMessage = async () => {
    if ((!text.trim() && !file) || loading) return;

    setLoading(true);
    setError("");

    // 1. User ka message UI mein add karna
    const userMsgText = text.trim();
    const fileAttachMsg = file ? ` + (Report: ${file.name})` : '';
    setMessages((m) => [...m, { id: Date.now(), from: "user", text: userMsgText + fileAttachMsg }]);
    
    // 2. FormData tayyar karna
    const formData = new FormData();
    
    if (userMsgText) {
        formData.append('text', userMsgText);
    }

    // 🚩 'medicalReportFile' field name Controller se match hona chahiye
    if (file) {
        formData.append('medicalReportFile', file);
    }

    // Input fields ko clear karna
    setText("");
    // const currentFile = file; // Save current file for local display logic if needed
    setFile(null); // Clear file state for next interaction

    try {
        // 3. API Call karna
        const response = await fetch(`${API_URL}/analyze-combined`, {
            method: 'POST',
            // Auth token bhejne ke liye agar authCheck laga ho:
            // headers: { 'Authorization': `Bearer ${localStorage.getItem('token')}` },
            body: formData,
        });

        const data = await response.json();

        if (response.ok) {
            // Success: AI ka jawab messages array mein add karna
            setMessages((m) => [
                ...m,
                { 
                    id: Date.now() + 1, 
                    from: "bot", 
                    text: data.analysis || "Analysis complete, lekin jawab khali hai.",
                },
            ]);
        } else {
            // Error: Server side error
            setError(data.error || "AI Analysis mein masla ho gaya. Server check karein.");
            setMessages((m) => [
                ...m,
                { 
                    id: Date.now() + 1, 
                    from: "bot", 
                    text: `❌ Error: ${data.error || "Server se ghalati hui."}` 
                },
            ]);
        }
    } catch (err) {
        // Network ya fetch error
        console.error("Fetch Error:", err);
        setError("Network error ya API tak pahunchne mein masla.");
         setMessages((m) => [
            ...m,
            { 
                id: Date.now() + 1, 
                from: "bot", 
                text: "❌ Network Error: Kirpya apna internet connection check karein." 
            },
        ]);
    } finally {
        setLoading(false);
    }
  };

  return (
    <Box 
      sx={{ 
        minHeight: "100vh", 
        background: "linear-gradient(135deg, #0a1628 0%, #0f1d2e 50%, #071219 100%)",
        color: "#e6f4ea", 
        py: 6 
      }}
    >
      <Container maxWidth="lg">
        {/* Premium Header */}
        <Box
          sx={{
            opacity: 0,
            animation: "fadeInDown 0.8s ease forwards",
            "@keyframes fadeInDown": {
              from: { opacity: 0, transform: "translateY(-30px)" },
              to: { opacity: 1, transform: "translateY(0)" }
            }
          }}
        >
          <Stack direction="row" alignItems="center" spacing={3} sx={{ mb: 5 }}>
            <Box
              sx={{
                background: "linear-gradient(135deg, #2e7d32 0%, #4caf50 100%)",
                borderRadius: "20px",
                p: 2,
                boxShadow: "0 8px 32px rgba(46, 125, 50, 0.3)"
              }}
            >
              <Avatar sx={{ bgcolor: "transparent", width: 64, height: 64, fontSize: "2rem" }}>
                🏥
              </Avatar>
            </Box>
            <Box>
              <Typography 
                variant="h3" 
                sx={{ 
                  fontWeight: 900,
                  background: "linear-gradient(90deg, #b9f6ca 0%, #69f0ae 100%)",
                  backgroundClip: "text",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  letterSpacing: "-0.5px"
                }}
              >
                HealthMate Pro
              </Typography>
              <Typography variant="body1" sx={{ opacity: 0.85, mt: 0.5, fontSize: "1.1rem" }}>
                🤖 AI-Powered Medical Report Analysis — Bilingual Support (English + Roman Urdu)
              </Typography>
            </Box>
          </Stack>
        </Box>

        {/* Main Premium Card */}
        <Box
          sx={{
            opacity: 0,
            animation: "fadeInUp 0.8s ease 0.2s forwards",
            "@keyframes fadeInUp": {
              from: { opacity: 0, transform: "translateY(30px)" },
              to: { opacity: 1, transform: "translateY(0)" }
            }
          }}
        >
          <Paper 
            elevation={24} 
            sx={{ 
              borderRadius: 4, 
              overflow: "hidden",
              background: "linear-gradient(180deg, #132337 0%, #0a1525 100%)",
              border: "1px solid rgba(185, 246, 202, 0.1)",
              boxShadow: "0 20px 60px rgba(0, 0, 0, 0.5)"
            }}
          >
            <Box sx={{ display: "flex", gap: 3, p: 3 }}>
              {/* Left: Enhanced Chat Area */}
              <Box sx={{ flex: 1, minHeight: 500 }}>
                <Box 
                  sx={{ 
                    p: 3,
                    background: "linear-gradient(90deg, rgba(46, 125, 50, 0.1) 0%, rgba(105, 240, 174, 0.05) 100%)",
                    borderRadius: 2,
                    mb: 2
                  }}
                >
                  <Typography variant="h5" sx={{ fontWeight: 800, color: "#b9f6ca" }}>
                    💬 Smart Medical Assistant
                  </Typography>
                  <Typography variant="body2" sx={{ opacity: 0.9, mt: 1 }}>
                    Apni medical reports upload karein ya sawal puchein. Humara HealthMate Pro AI aapko instant analysis provide karega.
                  </Typography>
                </Box>

                <Divider sx={{ borderColor: "rgba(185, 246, 202, 0.1)", mb: 2 }} />

                {/* Messages Container */}
                <Box 
                  sx={{ 
                    p: 2, 
                    height: 340, 
                    overflowY: "auto", 
                    display: "flex", 
                    flexDirection: "column", 
                    gap: 2,
                    "&::-webkit-scrollbar": { width: "8px" },
                    "&::-webkit-scrollbar-track": { background: "rgba(255,255,255,0.02)" },
                    "&::-webkit-scrollbar-thumb": { 
                      background: "rgba(185, 246, 202, 0.2)", 
                      borderRadius: "10px" 
                    }
                  }}
                >
                  {messages.map((m, idx) => (
                    <Box
                      key={m.id}
                      sx={{
                        opacity: 0,
                        animation: `slideIn 0.4s ease ${idx * 0.1}s forwards`,
                        "@keyframes slideIn": {
                          from: { opacity: 0, transform: "translateX(-20px)" },
                          to: { opacity: 1, transform: "translateX(0)" }
                        }
                      }}
                    >
                      <Stack
                        direction="row"
                        spacing={2}
                        sx={{ justifyContent: m.from === "user" ? "flex-end" : "flex-start" }}
                      >
                        {m.from === "bot" && (
                          <Avatar 
                            sx={{ 
                              width: 40, 
                              height: 40, 
                              background: "linear-gradient(135deg, #1b5e20 0%, #2e7d32 100%)",
                              boxShadow: "0 4px 12px rgba(46, 125, 50, 0.4)"
                            }}
                          >
                            🤖
                          </Avatar>
                        )}

                        <Box
                          sx={{
                            maxWidth: "75%",
                            background: m.from === "user" 
                              ? "linear-gradient(135deg, #2e7d32 0%, #388e3c 100%)" 
                              : "rgba(255,255,255,0.06)",
                            color: "#e6f4ea",
                            px: 3,
                            py: 2,
                            borderRadius: 3,
                            boxShadow: m.from === "user" 
                              ? "0 4px 16px rgba(46, 125, 50, 0.3)" 
                              : "0 2px 8px rgba(0, 0, 0, 0.2)",
                            border: m.from === "bot" ? "1px solid rgba(185, 246, 202, 0.1)" : "none"
                          }}
                        >
                          <Typography variant="body1" sx={{ lineHeight: 1.6 }}>
                            {m.text}
                          </Typography>
                        </Box>

                        {m.from === "user" && (
                          <Avatar 
                            sx={{ 
                              width: 40, 
                              height: 40, 
                              background: "linear-gradient(135deg, #4caf50 0%, #66bb6a 100%)",
                              boxShadow: "0 4px 12px rgba(76, 175, 80, 0.4)"
                            }}
                          >
                            👤
                          </Avatar>
                        )}
                      </Stack>
                    </Box>
                  ))}
                </Box>

                {/* Premium Input Area */}
                <Box 
                  sx={{ 
                    p: 2, 
                    borderTop: "2px solid rgba(185, 246, 202, 0.1)", 
                    display: "flex", 
                    alignItems: "center", 
                    gap: 2,
                    background: "rgba(255,255,255,0.02)"
                  }}
                >
                  <input ref={fileRef} type="file" accept="application/pdf,image/*" hidden onChange={handleFile} />

                  <Tooltip title="Upload Medical Report" arrow>
                    <IconButton 
                      onClick={pickFile} 
                      disabled={loading} // Loading mein disable
                      sx={{ 
                        background: "linear-gradient(135deg, #2e7d32 0%, #4caf50 100%)",
                        color: "white",
                        transition: "all 0.3s ease",
                        "&:hover": { 
                          background: "linear-gradient(135deg, #388e3c 0%, #66bb6a 100%)",
                          transform: "scale(1.1)"
                        }
                      }}
                    >
                      <AddIcon />
                    </IconButton>
                  </Tooltip>

                  <Paper 
                    sx={{ 
                      flex: 1, 
                      display: "flex", 
                      alignItems: "center", 
                      px: 3, 
                      py: 1.5,
                      background: "rgba(255,255,255,0.05)",
                      border: "1px solid rgba(185, 246, 202, 0.2)",
                      borderRadius: 3,
                      transition: "all 0.3s ease",
                      "&:hover": {
                        border: "1px solid rgba(185, 246, 202, 0.4)",
                        background: "rgba(255,255,255,0.08)"
                      }
                    }} 
                    elevation={0}
                  >
                    <InputBase
                      placeholder="Apna sawal yahan likhein aur Enter dabayein..."
                      fullWidth
                      value={text}
                      onChange={(e) => setText(e.target.value)}
                      onKeyDown={(e) => {
                          if (e.key === "Enter" && (text.trim() || file) && !loading) sendMessage();
                      }}
                      sx={{ color: "#e6f4ea", fontSize: "1rem" }}
                      disabled={loading} // Loading mein disable
                    />
                    <IconButton 
                      onClick={sendMessage}
                      disabled={(!text.trim() && !file) || loading} // Agar text aur file dono na ho ya loading ho toh disable
                      sx={{
                        color: "#b9f6ca",
                        transition: "all 0.2s ease",
                        "&:hover": { 
                          color: "#69f0ae",
                          transform: "scale(1.1)"
                        }
                      }}
                    >
                      {loading ? <CircularProgress size={24} sx={{ color: '#b9f6ca' }} /> : <SendIcon />}
                    </IconButton>
                  </Paper>
                </Box>
                
                {/* Error Message Display */}
                {error && (
                    <Typography color="error" sx={{ mt: 2, textAlign: 'center', fontWeight: 600 }}>
                        🚨 {error}
                    </Typography>
                )}

              </Box>

              {/* Right: Premium File Preview Panel */}
              <Box 
                sx={{ 
                  width: 380, 
                  background: "linear-gradient(180deg, rgba(18, 35, 55, 0.8) 0%, rgba(10, 21, 37, 0.9) 100%)",
                  p: 3, 
                  display: "flex", 
                  flexDirection: "column", 
                  gap: 3,
                  borderRadius: 2,
                  border: "1px solid rgba(185, 246, 202, 0.1)"
                }}
              >
                <Typography 
                  variant="h6" 
                  sx={{ 
                    fontWeight: 800,
                    color: "#b9f6ca",
                    borderBottom: "2px solid rgba(185, 246, 202, 0.2)",
                    pb: 1
                  }}
                >
                  📄 Report Dashboard
                </Typography>

                <Paper 
                  elevation={8} 
                  sx={{ 
                    p: 3, 
                    borderRadius: 3, 
                    background: "rgba(255,255,255,0.04)",
                    border: "1px solid rgba(185, 246, 202, 0.15)",
                    flex: 1,
                    transition: "all 0.3s ease",
                    "&:hover": {
                      background: "rgba(255,255,255,0.06)",
                      border: "1px solid rgba(185, 246, 202, 0.25)",
                      transform: "translateY(-2px)",
                      boxShadow: "0 8px 24px rgba(46, 125, 50, 0.2)"
                    }
                  }}
                >
                  <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
                    <DescriptionIcon sx={{ fontSize: 52, color: "#4caf50" }} />
                    <Box sx={{ flex: 1 }}>
                      <Typography variant="h6" sx={{ fontWeight: 700, color: "#b9f6ca" }}>
                        {file ? file.name : "Upload the Report"}
                      </Typography>
                      <Typography variant="caption" sx={{ opacity: 0.8, fontSize: "0.9rem" }}>
                        {file ? `📊 Size: ${(file.size / 1024).toFixed(1)} KB` : "📎 PDF, PNG, JPG accepted"}
                      </Typography>
                    </Box>

                    <Stack direction="row" spacing={1}>
                      {file && (
                        <Tooltip title="Remove Report" arrow>
                          <IconButton 
                            onClick={() => setFile(null)}
                            sx={{
                              transition: "all 0.2s ease",
                              "&:hover": {
                                transform: "scale(1.1)"
                              }
                            }}
                          >
                            <CloseIcon sx={{ color: "#ff8a80" }} />
                          </IconButton>
                        </Tooltip>
                      )}
                    </Stack>
                  </Box>

                  <Divider sx={{ my: 3, borderColor: "rgba(185, 246, 202, 0.1)" }} />

                  <Stack spacing={2}>
                    <Chip 
                      label="🌐 Bilingual: English + Roman Urdu" 
                      sx={{ 
                        background: "rgba(185, 246, 202, 0.1)",
                        color: "#b9f6ca",
                        border: "1px solid rgba(185, 246, 202, 0.2)",
                        fontWeight: 600,
                        fontSize: "0.9rem"
                      }} 
                    />
                    <Chip 
                      label="🧠 HealthMate Pro AI Analysis" 
                      sx={{ 
                        background: "rgba(105, 240, 174, 0.1)",
                        color: "#69f0ae",
                        border: "1px solid rgba(105, 240, 174, 0.2)",
                        fontWeight: 600,
                        fontSize: "0.9rem"
                      }} 
                    />
                    <Chip 
                      label="🔒 Secure (JWT + Encryption)" 
                      sx={{ 
                        background: "rgba(185, 246, 202, 0.08)",
                        color: "#b9f6ca",
                        border: "1px solid rgba(185, 246, 202, 0.15)",
                        fontWeight: 600,
                        fontSize: "0.9rem"
                      }} 
                    />
                  </Stack>
                </Paper>
              </Box>
            </Box>

            {/* Premium Footer */}
            <Box 
              sx={{ 
                p: 2, 
                textAlign: "center", 
                background: "rgba(0,0,0,0.4)",
                borderTop: "1px solid rgba(185, 246, 202, 0.1)"
              }}
            >
              <Typography variant="caption" sx={{ color: "#b9f6ca", fontSize: "0.85rem" }}>
                © 2025 HealthMate Pro — AI-powered analysis for understanding only, not medical advice. Always consult a healthcare professional.
              </Typography>
            </Box>
          </Paper>
        </Box>
      </Container>
    </Box>
  );
}